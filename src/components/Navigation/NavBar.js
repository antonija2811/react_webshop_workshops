import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import Logo from './Logo/Logo';
import CartState from './CartState/CartState';


const navBar = (props) => {
    return (
        <nav className="NavBar">
            <Link to='./' style={{height: '90%'}}>
                <Logo/>
            </Link>
            <div className="CartStateStyle">
                <CartState clicked={props.clicked}/>
            </div>
            
        </nav>
    );
}

export default navBar;