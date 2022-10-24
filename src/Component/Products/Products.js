import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])

    // cart update section
    let [cart, setCart] = useState([]);
    function getCart(element){
        let newCart = [...cart, element];
        setCart(newCart);           
    }      
    
    return (
        <div>
            <h2 style = {{'textAlign':'center'}}>Total Products Found : {products.length} </h2>
            <div className="products-div">
            {
                products.map(index=><Product
                    key = {index.id}
                    index = {index}
                    getCart = {getCart}
                ></Product>)
            }
            </div>
            
        </div>
    );
};

export default Products;