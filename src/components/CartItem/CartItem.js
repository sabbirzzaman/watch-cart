import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = ({ item }) => {
    const { name, image } = item;

    return (
        <div className="cart-item">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default CartItem;
