import React from 'react';
import CartLogo from '../CartLogo/CartLogo';
import './CartState.css';
import State from '../State/State';
import {WorkshopConsumer} from '../../../context';


const cartState = (props) => {
    let inCart = false;
    let counter = null;

    return(    
        <WorkshopConsumer>
            {(value) => {
                const {cart} = value;
                if(cart.length === 1) {
                    counter = (
                        <strong><p>{cart.length} workshop in cart</p></strong>
                    );
                    inCart = true;
                }
                else if(cart.length > 1) {
                    counter = (
                        <strong><p>{cart.length} workshops in cart</p></strong>
                    );
                    inCart = true;
                }
                else {
                    counter = (
                        <strong><p>Cart is empty</p></strong>
                    );
                    inCart = false;
                }
                return(
                    <div className="CartState">
                        <CartLogo clicked={props.clicked} inCart={inCart} className="CartLogo"/>
                        <div className="State">
                            <State counter={counter}/>
                        </div>
                    </div>
                );
            }}
        </WorkshopConsumer>  

    );
}

export default cartState;