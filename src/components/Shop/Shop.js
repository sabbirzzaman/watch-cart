import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (products) => {
        const cartLimit = 3;

        const newCart = [...cart, products];

        if (cart.length <= cartLimit) {
            setCart(newCart);
        } else {
            alert(`You can't choose then 4 items.`);
        }
    };

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="shop-container">
            <div className="products">
                {products.map((product) => (
                    <Product
                        watch={product}
                        addToCart={addToCart}
                        key={product.id}
                    ></Product>
                ))}
            </div>

            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;
