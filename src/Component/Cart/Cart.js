import React from 'react';
import './Cart.css'

const Cart = (props) => {

    let totalPrice = 0;
    let shipping = 0;
    let grandTotal = 0;
    let tax = 0 ;
    for(let element of props.cart){
        totalPrice += element.price;
        shipping += element.shipping;       
    }
    tax += (totalPrice * 0.1);
    grandTotal = tax + totalPrice;
    return (
        <div className='cart-div'>
            <div className="cart-div2">
                <h2>Order Summary :  </h2>
                <h3>Product Added : {props.cart.length} </h3>
                <h3>Total Price : {totalPrice} </h3>
                <h3>Shipping Fee : {shipping} </h3>
                <h3>Tax : {tax.toFixed(2)} </h3>
                <h3>Grand Total : {grandTotal} </h3>
            </div>
            
        </div>
    );
};

export default Cart;