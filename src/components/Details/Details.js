import React, {Component} from 'react';
import back from './back.png';
import './Details.css';
import {Link} from 'react-router-dom';
import {WorkshopConsumer} from '../../context';
import CategoryImage from '../Home/CategoryFilter/Category/CategoryImage/CategoryImage';
import Date from '../Home/ItemList/Item/Date/Date';
import SimilarWorkshops from './SimilarWorkshops/SimilarWorkshops';
import Speaker from './Speaker/Speaker';


class Details extends Component {
    render() {
        return (
            <WorkshopConsumer>
                {value => {
                    const {id, title, desc, price, date, category, imageUrl, userId} = value.detailWorkshop;
                    const {addToCart, openCart, handleDetailSubtotal, detailSubtotal, users} = value;
                    console.log("details");
                    let total = null;
                    console.log(users);
                    return (
                        <React.Fragment>
                            <div className="Details">
                                <div className="Back">
                                    <Link to="/">
                                        <div className="BackLink">
                                            <div style={{paddingRight: '0.5rem'}}>
                                                <img src={back} alt="back"/>
                                            </div>
                                            <p>Back</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="ProductDetails">
                                    <div className="ProductImage">
                                        <img src={imageUrl} alt="product"/>
                                    </div>
                                    <div className="ProductInfo">
                                        <div className="InfoDetails">
                                            <div className="CategoryAndDate">
                                                <div className="InfoCategory">
                                                    <CategoryImage category={category}/>
                                                </div>
                                                <div className="Date">
                                                    <Date date={date}/>
                                                </div>
                                            </div>
                                            <p style={{fontSize: '2.5rem',color: '#0097CC', fontWeight: 'bold'}}>{title}</p>
                                            <Speaker userId={userId} users={users}/> 
                                            <p>{desc}</p>
                                        </div>
                                        <div className="Buying">
                                            <div className="BuyBox">
                                                <div className="BuyTicket">
                                                    <strong><p className="BuyTitle">Buy your ticket</p></strong>
                                                    <p style={{fontWeight: 'bold',fontSize: '2rem'}}>
                                                        {price},00
                                                        <span style={{fontSize: '1rem'}}> EUR</span>
                                                    </p>
                                                    <div className="AddingToCart">
                                                        <div className="FormDetails">
                                                            <select id = "dropdown" onChange={()=> {
                                                                    total = parseInt(document.getElementById("dropdown").value);
                                                                    handleDetailSubtotal(total,price)}}
                                                            >
                                                                <option value = "1">1</option>
                                                                <option value = "2">2</option>
                                                                <option value = "3">3</option>
                                                                <option value = "4">4</option>
                                                            </select>
                                                        </div>
                                                        <div className="AddToCartButton">
                                                            <button
                                                                onClick={()=> {
                                                                    total = parseInt(document.getElementById("dropdown").value);
                                                                    addToCart(id,total);
                                                                    openCart();
                                                                }}
                                                            >
                                                                Add to Cart
                                                            </button>
                                                            <p>
                                                                Subtotal: {detailSubtotal === 0 ? price : detailSubtotal},00
                                                                <span> HRK</span>
                                                            </p>
                                                        </div>
    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Similar">
                                <SimilarWorkshops id={id} category={category} />
                            </div>
                        </React.Fragment>
                        
                    );
                }}
                
            </WorkshopConsumer>
            
        );
    }
        
    
}

export default Details;