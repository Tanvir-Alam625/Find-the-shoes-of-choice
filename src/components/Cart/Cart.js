import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
           <button className="delete-btn">
           <FontAwesomeIcon icon={faTrash} />
           </button>
        </div>
    );
};

export default Cart;