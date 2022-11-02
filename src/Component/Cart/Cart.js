import React from 'react';
import './Cart.css'

const Cart = (props) => {

    let totalPrice = 0;
    let shipping = 0;
    let grandTotal = 0;
    let quantity = 0;
    let tax = 0 ;
    for(let element of props.shops){
        quantity += element.quantity;
        totalPrice += (element.price * element.quantity);
        shipping += (element.shipping * element.quantity);       
    }
    tax += (totalPrice * 0.1);
    grandTotal = tax + totalPrice;
    
    return (
        <div className='cart-div'>
            <div className="cart-div2">
                <h2>Order Summary :  </h2>
                <h3>Product Added : {quantity} </h3>
                <h3>Total Price : {totalPrice} </h3>
                <h3>Shipping Fee : {shipping} </h3>
                <h3>Tax : {tax.toFixed(2)} </h3>
                <h3>Grand Total : {grandTotal} </h3>
                {
                    props.children
                }
                {
                    quantity < 4 ? <p>Keep Adding</p> : <button>Remove All</button>
                }
            </div>
            
        </div>
    );
};

export default Cart;