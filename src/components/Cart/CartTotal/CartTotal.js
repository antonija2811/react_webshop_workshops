import React from 'react';
import './CartTotal.css';

const CartTotal = (props) => {
    return(
        <div className="CartTotal">
            <p style={{fontWeight: 'bold'}}>subtotal</p>
            <div className="Total">
                {props.value},00
                <span  style={{fontSize: '1rem'}}> EUR</span>
            </div>
            <div className="CheckoutButton">
                <button>Checkout</button>
            </div>
            
        </div>
    );
}

export default CartTotal;