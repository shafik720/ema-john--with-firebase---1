import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart-div'>
            <div className="cart-div2">
                <h2>Order Summary :  </h2>
                <h3>Product Added : {props.cart.length} </h3>
            </div>
            
        </div>
    );
};

export default Cart;