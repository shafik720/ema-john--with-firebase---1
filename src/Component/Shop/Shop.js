import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

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
        <div className="shop-div">
            <div className="products-div">
            {
                products.map(index=><Products
                    index = {index}
                    getCart = {getCart}
                ></Products>)
            }
            </div>
            <div className="">
            <Cart cart = {cart} ></Cart>
            </div>            
        </div>
    );
};

export default Shop;