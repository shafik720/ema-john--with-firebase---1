import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-div">
            <div className="header-left">
                <img src={logo} alt=""/>
            </div>
            <div className="header-right">
                <Link to="/">Home</Link>
                <Link to="/shopcart">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    );
};

export default Header;