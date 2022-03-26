import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (products) => {
        const cartLimit = 3;

        const idExist = cart.find((watch) => watch.id === products.id);

        if (idExist) {
            alert(`Item is already selected!`);
        } else {
            const newCart = [...cart, products];
            if (cart.length <= cartLimit) {
                setCart(newCart);
            } else {
                alert(`You can't choose more then 4 items!`);
            }
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

                <div className='question'>
                    <h2>How react works?</h2>
                    <p>
                        React.js is a javascript library that creates user interfaces. You can use it for building single page applications or complex applications. We can say react is a cullection of javascript code that help us to 
                    </p>
                </div>
                <div className='question'>
                    <h2>Props vs State</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className='question'>
                    <h2>How useState works?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>

            <Cart cart={cart} cartHandle={setCart}></Cart>
        </div>
    );
};

export default Shop;
