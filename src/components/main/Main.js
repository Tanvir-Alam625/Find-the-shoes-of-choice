import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    } ,[])
    let productId =[];
    const getButtonHandelar = (data)=>{
        const find = products.find(product=> product.id === data.id);
        if(cart.length <4){
            productId=[...cart, find];
            setCart(productId);
        }
    }
    // cart[0]
    console.log(cart)
    //  if(cart.length <5){
        //  console.log(cart);
        // }
    
    return (
        <div className='main'>
            <div className="product-container">
            {
                 products.map(product=> <Product key={product.id} data={product} btn={getButtonHandelar}/>)
            }
            </div>
            <div className="cart-container">
            <h3>Selected Clothes</h3>
                    {
                        cart.map(product=> <Cart data={product} key={product.id}/>)
                    }
            <div className="carts-btn">
            <button className='choose-btn'>Choose 1 For Me</button>
            <button className='choose-again'>Choose Again</button>
            </div>
            </div>
            
        </div>
    );
};

export default Main;