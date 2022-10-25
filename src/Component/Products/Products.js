import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {

    let{getCart, index} = props
        
    
    return (
        <div>
            
            <div className="products-div">
                <Product index={index} getCart ={getCart} ></Product>
            </div>
            
        </div>
    );
};

export default Products;