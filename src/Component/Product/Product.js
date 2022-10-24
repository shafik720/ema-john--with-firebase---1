import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    let {name, price,  quantity, seller, ratings, img} = props.index  
    return (
        <div className="product-div">
            <img src={img} alt=""/>
            <div className="product-body">
                <h3>Name : {name} </h3>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller} </p>
                <p>Ratings : {ratings} star </p>
            </div>
            <div onClick={()=>props.getCart()} className="product-bottom">
                <p>Add to Cart <span><FontAwesomeIcon icon={faShoppingCart} /></span></p>
            </div>
        </div>
    );
};

export default Product;