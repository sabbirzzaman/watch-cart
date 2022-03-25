import React from 'react';
import './Product.css';

const Product = ({ watch }) => {
    console.log(watch);

    return (
        <div className="product">
            <img src={watch.image} alt="" />
            <h3>{watch.name}</h3>
            <p>Price: ${watch.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;
