import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav>
            <h3>
                <a href="#">Watch Cart</a>
            </h3>

            <div className="header">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
                <a href="/brand">Brand</a>
            </div>
            <div className="cart-icon">
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </nav>
    );
};

export default Header;
