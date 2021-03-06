import React from 'react';
import './LuckyItem.css';

const LuckyItem = ({ product }) => {
    // product data destructure
    const { name, image } = product;

    return (
        <div className="lucky-item">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default LuckyItem;
