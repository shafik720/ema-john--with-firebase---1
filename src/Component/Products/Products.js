import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div  style = {{'textAlign':'center'}}>
            <h2>Total Products Found : {products.length} </h2>
            {
                products.map(index=><Product
                    key = {index.id}
                    index = {index}
                ></Product>)
            }
        </div>
    );
};

export default Products;