import React from 'react';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    return (
        <div className='main'>
            <div className="product-container">
            <Product/>
            </div>
            <div className="cart-container">
                <h2>this cart</h2>
            </div>
            
        </div>
    );
};

export default Main;