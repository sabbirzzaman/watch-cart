import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({ watch, addToCart }) => {
    const {image, name, price} = watch;
    
    return (
        <div className="product">
            <div className='product-info'>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => addToCart(watch)}>Add to Cart<FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;
