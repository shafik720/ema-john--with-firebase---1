import React from 'react';
import './Product.css'

const Product = (props) => {
    let {name, price,  quantity, seller, ratings, img} = props.index
    console.log(props);
    return (
        <div className="product-div">
            <img src={img} alt=""/>
        </div>
    );
};

export default Product;