import React from 'react';
import './Product.css'

const Product = (props) => {
    let {name, price,  quantity, seller, ratings, img} = props.index
    console.log(props);
    return (
        <div className="product-div">
            <img src={img} alt=""/>
            <div className="product-body">
                <h3>Name : {name} </h3>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller} </p>
                <p>Ratings : {ratings} star </p>
            </div>
        </div>
    );
};

export default Product;