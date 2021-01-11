import React from 'react';
import close from './close.png';
import './CartTitle.css';
import CartState from '../../Navigation/CartState/CartState';

const CartTitle = (props) => {
    return(
        <React.Fragment>
                <div className="CartTitle"> 
                    <div className="CartWorkshops">
                        <CartState/>
                    </div>
                    <div className="CloseCart">
                        <div className="CloseCartImage">
                            <img src={close} alt="close" onClick={props.close}/>
                        </div>
                        
                    </div>
                </div>
        </React.Fragment>
    );
}

export default CartTitle;