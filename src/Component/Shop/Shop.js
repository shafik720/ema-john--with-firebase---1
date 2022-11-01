import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useProducts();
    
    
    // cart update section
    let [cart, setCart] = useState([]);
    function getCart(element){
        let newCart = [...cart, element];
        setCart(newCart);           
        addToDb(element.id);
    }    

    // get value from local storage
    let [shops, setShops] = useState([]);
    useEffect(()=>{
        const storedCart = getStoredCart();
        let freshCart =[];
        for(let id in storedCart){
            let addedProduct =(products.find(product=>product.id === id));
            if(addedProduct){
                addedProduct.quantity = storedCart[id];
                freshCart.push(addedProduct);
            }
        }
        setShops(freshCart);
    },[products, cart])
    return (
        <div className="shop-div">
            <div className="products-div">
            {
                products.map(index=><Products
                    index = {index}
                    getCart = {getCart}
                    key = {index.id}
                ></Products>)
            }
            </div>
            <div className="cart-div">
                <div className="cart-div2">
                    <Cart shops = {shops} ></Cart>
                </div>
            
            </div>            
        </div>
    );
};

export default Shop;