import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    //=====================
    // get the product data 
    //====================
    useEffect(()=>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    } ,[])
    // =========================
    // cart button handler 
    // ===========================
    let productId =[];
    const getButtonHandler = (data)=>{
        const find = products.find(product=> product.id === data.id);
        const addedProduct = cart.filter(pro=> pro.id === find.id);
        if(addedProduct.length>=1){
            console.log('some error');
        }
        else if(cart.length < 4){
            productId=[...cart, find];
            setCart(productId);
        }
    }
    //=====================
    // empty the cart item 
    //=====================
    const emptyCart = ()=>{
        const arr = [];
        setCart(arr);
    }
    //===========================
    // generate the random number 
    //===========================
    const number=()=>{
        const rr = Math.floor(Math.random()*4);
        return rr;
    }
    const RandomNumber=()=>{
        if(cart.length>3){
            const randomItem = cart.findIndex(number);
            const findCart = cart[randomItem];
            const newCart = [findCart];
            setCart(newCart)
        }
    }
    return (
        <div className='main'>
            <div className="product-container">
            {
                 products.map(product=> <Product key={product.id} data={product} btn={getButtonHandler}/>)
            }
            </div>
            <div className="cart-container">
                <h3>Selected Clothes</h3>
                    {
                        cart.map(product=> <Cart data={product} key={product.id}/>)
                    }
                <div className="carts-btn">
                    <button onClick={RandomNumber} className='choose-btn'>Choose 1 For Me</button>
                    <button onClick={emptyCart} className='choose-again'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Main;