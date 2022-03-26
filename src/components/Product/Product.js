import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = ({data,btn}) => {
    const {name, price, img}=data

    return (
        <div className='product'>
        <div className="card">
            <img src={img} alt="product" className="product-image"/>
            <div className="card-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <button onClick={ () => btn(data)}>
                    <p>ADD TO CART</p>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
        </div>
        </div>
    );
};

export default Product;