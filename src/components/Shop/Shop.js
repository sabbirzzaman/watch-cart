import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // Store product and cart data
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Handle add to cart
    const addToCart = (products) => {
        // Set cart limit
        const cartLimit = 3;

        // Check if the product already added
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

    // Load data
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

                <div className="question">
                    <h2>How react works?</h2>
                    <p>
                        React.js is a javascript library that creates user
                        interfaces. It's an open-source project. We can use it
                        for building single-page applications or complex
                        applications. We can say react is a collection of
                        javascript code that helps us to build web pages, mobile
                        applications and web applications, etc. React code works
                        in a declarative way. It makes the code easy to use and
                        easy to debug. React is a component-based library. We
                        can build a component and reuse it again and again.
                    </p>
                </div>
                <div className="question">
                    <h2>Props vs State</h2>
                    <p>
                        Props are read-only components. We can use Props to pass
                        data from on component to another component. And the
                        state is work like a storage. It returns a variable
                        where we can store the data and also return a function.
                        We can update the data using the function. And we can't
                        update or modify the props data inside a component.
                    </p>
                </div>
                <div className="question">
                    <h2>How useState works?</h2>
                    <p>
                        useState is a react hook. Basically we can use useState
                        for storing data. It returns a variable and a function.
                        We can store, edit and modify data on the variable using
                        the function. useState is mutable. And it behave
                        asynchronous. It hold information about component. And
                        we can't access the state from the child components.
                    </p>
                </div>
            </div>

            <Cart cart={cart} cartHandle={setCart}></Cart>
        </div>
    );
};

export default Shop;
