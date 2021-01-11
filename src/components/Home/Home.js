import React ,{Component}  from "react";
import "./Home.css";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import { WorkshopConsumer } from "../../context";

class Home extends Component {
  render() {
    return(
        <WorkshopConsumer>
          {(value) => {
            const {setCategory, categories, workshops, displayCategory} = value;
            /*if(workshops.length === 0) {
              value.getAllData();
            }*/
            return (
              <div className="Home">
                <CategoryFilter
                  setCategory={setCategory}
                  categories={categories}
                  workshops={workshops}
                  displayCategory={displayCategory}
                />
              </div>
            );
          }}
        </WorkshopConsumer>
      );
  }

}

export default Home;
