import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="shop-container">
            <div className='products'>
                {products.map((product) => (
                    <Product watch={product}></Product>
                ))}
            </div>
            <Cart></Cart>
        </div>
    );
};

export default Shop;
