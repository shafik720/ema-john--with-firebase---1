import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-div">
            <div className="header-left">
                <img src={logo} alt=""/>
            </div>
            <div className="header-right">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;