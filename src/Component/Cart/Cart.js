import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart-div'>
            <div className="cart-div2">
                <h2>Hello From Cart : {props.cart.length} </h2>
            </div>
            
        </div>
    );
};

export default Cart;