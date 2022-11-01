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
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Menu</Link>
                <Link href="#">Contact Us</Link>
            </div>
        </div>
    );
};

export default Header;