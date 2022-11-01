import React from 'react';
import useProducts from '../hooks/useProducts';
import './ShopCart.css'

const ShopCart = () => {
    let [products, setProducts] = useProducts();
    return (
        <div>
            <h2>Total Products in our shop : {products.length} </h2>
        </div>
    );
};

export default ShopCart;