import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <div>
                <h2>Your Cart</h2>

                {cart.map((item) => (
                    <CartItem item={item} key={item.id}></CartItem>
                ))}
            </div>
            <div className="cart-btn">
                <button className='choose-btn'>Choose 1 For me</button>
                <button className='choose-again'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;
