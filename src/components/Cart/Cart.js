import React from 'react';
import './Cart.css';
const Cart = ({data}) => {
    const {name,img,price}=data;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className="cart-info">
                <h5>{name}</h5>
                <small>${price}</small>
            </div>
        </div>
    );
};

export default Cart;