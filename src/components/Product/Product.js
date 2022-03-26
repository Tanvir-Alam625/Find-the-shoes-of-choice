import React from 'react';
import './Product.css';
const Product = ({data}) => {
    const {name, price, img}=data

    return (
        <div className='product'>
        <div className="card">
            <img src={img} alt="product" className="product-image"/>
            <div className="card-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <button>
                    ADD TO CART
                </button>
            </div>
        </div>
        </div>
    );
};

export default Product;