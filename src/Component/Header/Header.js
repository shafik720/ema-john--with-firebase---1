import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const[user] = useAuthState(auth)
    return (
        <div className="header-div">
            <div className="header-left">
                <img src={logo} alt=""/>
            </div>
            <div className="header-right">
                <Link to="/">Home</Link>
                <Link to="/shopcart">Cart</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact Us</Link>
                {
                    user ? 
                    <button>Log Out</button>
                    :
                    <Link to="/login">Log in</Link>
                }
                
            </div>
        </div>
    );
};

export default Header;