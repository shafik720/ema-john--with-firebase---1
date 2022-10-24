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
    return (
        <div>
            <h2 style = {{'textAlign':'center'}}>Total Products Found : {products.length} </h2>
            <div className="products-div">
            {
                products.map(index=><Product
                    key = {index.id}
                    index = {index}
                ></Product>)
            }
            </div>
            
        </div>
    );
};

export default Products;