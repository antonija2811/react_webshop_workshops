import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { WorkshopConsumer } from "../../../../context";
import CategoryImage from '../../CategoryFilter/Category/CategoryImage/CategoryImage';
import Date from './Date/Date';
import cart from './Group.png';

const item = (props) => {
  const { id, imageUrl, date, title, price, category } = props.item;

  return (
    <WorkshopConsumer>
      {(value) => (
        <div className="Item" id={id}>
          <div className="img-container" onClick={() => value.handleDetail(id)}>
            <Link to="/details">
              <img src={imageUrl} alt="workshop" />
            </Link>
          </div>
          
          <div className="Category">
              <CategoryImage category={category}/>
          </div>
          
          <div className="info-container">
            <div className="Info">
              <Date date={date}/>
                <Link to="/details" style={{textDecoration: 'none'}}>
                  <div className="title">
                    <h4>{title}</h4>
                  </div>
                </Link>
                <p>
                  {price},00
                  <span style={{fontSize: '1rem'}}> EUR</span>
                </p>
                <div className="ButtonHolder">
                  <button className="ButtonAdd"
                      onClick={() => {
                        value.addToCart(id,1); // 1 is workshop count
                        value.openCart();
                      }}
                    >
                      Add to cart
                  </button>
                  <button className="ButtonIcon"
                      onClick={() => {
                        value.addToCart(id,1); // 1 is workshop count
                        value.openCart();
                      }}
                  >
                    <img src={cart} alt="icon"/>
                  </button>
                </div>
            </div>
            
            
          </div>
        </div>
      )}
    </WorkshopConsumer>
  );
};

export default item;
