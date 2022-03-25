import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item }) => {
    const { id, name, image } = item;

    return (
        <div className='cart-item'>
            <div className="item-info">
                <img src={image} alt={name} />
                <p>{name}</p>
            </div>
            <button className='remove-btn'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default CartItem;
