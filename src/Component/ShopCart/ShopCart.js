import React from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import useShops from '../hooks/useShops';
import MiniCart from '../MiniCart/MiniCart';
import './ShopCart.css'

const ShopCart = () => {
    let [products, setProducts] = useProducts();
    let [shops, setShops] = useShops(products);

    function deleteSingle(element){
        
    }
    return (
        <div>
            <h2>Total Products in our shop : {products.length} </h2>
            <h2>Product Added : {shops.length} </h2>
            <div className="shopping-div">
                <div className="shopping-div-left">
                    {
                        shops.map(index=><MiniCart
                            index = {index}
                            key={index.id}
                            deleteSingle = {deleteSingle}
                        ></MiniCart>)
                    }
                </div>
                <div className="shopping-div-right">
                    <Cart 
                    shops = {shops}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;