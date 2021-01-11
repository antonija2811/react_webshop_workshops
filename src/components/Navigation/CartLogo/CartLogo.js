import React from 'react';
import Logo from './Group.png';
import './CartLogo.css';
import inCart from './incart.png';

const cartLogo = (props) => {
    
    if(props.inCart) {
        return (
            <div className="CartLogo">
                <div>
                    <img src={Logo} alt="cartlogo" onClick={props.clicked} style={{height: '80%', width: '80%', position: 'relative'}}/>
                </div>
                <div className="InCart">
                    <img src={inCart} alt="incart" style={{position: 'absolute'}}/>
                </div>  
            </div>
        );
    }
    else {
        return(
            <div className="CartLogo">
                <img src={Logo} alt="cartlogo" onClick={props.clicked} style={{height: '80%', width: '80%', position: 'relative'}}/>
            </div>
        );
    }

}

export default cartLogo;