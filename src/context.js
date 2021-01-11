import React, { Component } from "react";
import { detailWorkshop} from "./data";
import { filter, find, findIndex } from "lodash";
import axios from "axios";

const WorkshopContext = React.createContext();

class WorkshopProvider extends Component {
  state = {
    workshopsAll: [],
    workshops: [],
    categories: [],
    displayCategory: "all",
    detailWorkshop: detailWorkshop,
    users: [],
    orders: [],
    cartTotal: 0,
    cart: [],
    cartOpen: false,
    detailSubtotal: 0,
  };
  

  getAllData = () => {
    console.log("get all data");
    axios
      .get("http://localhost:3001/workshops?_sort=date&_order=asc")
      .then((response) => {
        this.setState({ workshops: response.data });
        this.setState({ workshopsAll: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/categories")
      .then((response) => {
        this.setState({ categories: response.data });
        console.log(response.data);
        this.setCategories(response.data);
      
      })
      .catch((error) => {
        console.log(error);
      });


    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setCategories = (categories) => {
    const newCat = ["all"];
    this.setState({ categories: newCat.concat(categories) });

  };
 
  setCategory = (category) => {
    const tempWorkshops = this.state.workshopsAll;

    if (category === "all") {
      this.setState({ workshops: tempWorkshops });
    } else {
      const filteredWorkshops = filter(tempWorkshops, {
        category: category,
      });
      
      this.setState({ workshops: filteredWorkshops });
      this.setState({ displayCategory: category });
    }
  };

  getItem = (id) => {
    const workshop = this.state.workshops.find((item) => item.id === id);
    return workshop;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({ detailWorkshop: product });
  };

  addToCart = (id, count) => {
    const workshop = find(this.state.workshops, { id: id });
    const workshopExists = find(this.state.cart, { id: id });
    let tempCart = this.state.cart;

    if (workshopExists) {
      const index = findIndex(this.state.cart, { id: id });
      tempCart[index].count = tempCart[index].count + count;
      const price = workshop.price;
      workshop.total = price * tempCart[index].count;
      this.setState(
        () => {
          return {
            workshops: this.state.workshops,
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    } else {
      workshop.count = count;
      const price = workshop.price;
      workshop.total = price * count;
      console.log(workshop);
      this.setState(
        () => {
          return {
            workshops: this.state.workshops,
            cart: [...this.state.cart, workshop],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  handleDetailSubtotal = (count, price) => {
    let subtotal = null;
    subtotal = price * count;

    this.setState({detailSubtotal: subtotal});
  }
 
  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.total));
    const total = subtotal;

    this.setState({ cartTotal: total });
  };

  openCart = () => {
    this.setState({ cartOpen: true });
  };

  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  handleCountChange = ({ e, id }) => {
    let tempCart = [...this.state.cart];
    const selectedWorkshop = find(tempCart, {id: id});

    const index = tempCart.indexOf(selectedWorkshop);
    const workshop = tempCart[index];

    workshop.count = e.target.value;
    workshop.total = workshop.count * workshop.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };


  removeItem = (id) => {
    let tempWorkshops = [...this.state.workshops];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempWorkshops.indexOf(this.getItem(id));
    let removedWorkshop = tempWorkshops[index];
    removedWorkshop.count = 0;
    removedWorkshop.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          workshops: [...tempWorkshops],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <WorkshopContext.Provider
        value={{
          ...this.state,
          getAllData: this.getAllData,
          handleDetail: this.handleDetail,
          setCategories: this.setCategories,
          setCategory: this.setCategory,
          addToCart: this.addToCart,
          handleCountChange: this.handleCountChange,
          removeItem: this.removeItem,
          openCart: this.openCart,
          closeCart: this.closeCart,
          handleDetailSubtotal: this.handleDetailSubtotal,
        }}
      >
        {this.props.children}
      </WorkshopContext.Provider>
    );
  }
}

const WorkshopConsumer = WorkshopContext.Consumer;

export { WorkshopProvider, WorkshopConsumer };
