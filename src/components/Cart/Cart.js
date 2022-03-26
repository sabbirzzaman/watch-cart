import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import LuckyItem from '../LuckyItem/LuckyItem';
import './Cart.css';

const Cart = ({ cart, cartHandle }) => {

    const [luckyItem, setLuckyItem] = useState([]);

    const chooseItem = () => {
        const itemIndex = Math.floor(Math.random() * cart.length);
        const chosenItem = cart[itemIndex];

        setLuckyItem(chosenItem);
    };

    return (
        <div className="cart">
            <div>
                <button onClick={chooseItem} className="choose-btn">
                    Choose For Me
                </button>
                <button onClick={() => cartHandle([])} className="choose-again">
                    Remove Cart
                </button>

                <h2>Your Cart</h2>

                {cart.map((item) => (
                    <CartItem item={item} key={item.id}></CartItem>
                ))}
            </div>

            <div className="cart-btn">
                <div>
                    <h2>For you</h2>
                    <LuckyItem product={luckyItem}></LuckyItem>
                </div>
            </div>
        </div>
    );
};

export default Cart;
