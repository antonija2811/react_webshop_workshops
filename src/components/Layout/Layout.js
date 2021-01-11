import React, {Component} from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Navigation/NavBar';
import Footer from '../Footer/Footer';
import {WorkshopConsumer} from '../../context';

class Layout extends Component{

    render () {
        console.log("layout ");
        return(
            <WorkshopConsumer>
            {(value) => {
                const {cartOpen, openCart, closeCart} = value;
                return(
                    <React.Fragment>
                        <Navbar clicked={openCart}/>
                        <Cart
                            open={cartOpen}
                            close={closeCart}
                        />
                        <main>
                            {this.props.children}
                        </main>
                        <Footer/>
                    </React.Fragment>
                );
    
            }}
            </WorkshopConsumer>
        );
    }
}

export default Layout;