import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
    // product data destructure
    const { name, image } = item;

    return (
        <div className="cart-item">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default CartItem;
