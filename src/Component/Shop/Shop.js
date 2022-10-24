import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    // cart update section
    let [cart, setCart] = useState([]);
    function getCart(element){
        let newCart = [...cart, element];
        setCart(newCart);           
    }    

    return (
        <div className="shop-div">
            <Products getCart = {getCart}></Products>
            <Cart cart = {cart} ></Cart>
        </div>
    );
};

export default Shop;