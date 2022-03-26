import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [prodcuts, setProducts]=useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    } ,[])
    return (
        <div className='main'>
            <div className="product-container">
            {
                 prodcuts.map(product=> <Product key={product.id} data={product}/> )
            }
            </div>
            <div className="cart-container">
                <h2>this cart</h2>
            </div>
            
        </div>
    );
};

export default Main;