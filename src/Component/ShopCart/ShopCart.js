import React from 'react';
import { useNavigate } from 'react-router';
import { removeFromDb , getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import useShops from '../hooks/useShops';
import MiniCart from '../MiniCart/MiniCart';
import './ShopCart.css'

const ShopCart = () => {
    let [products, setProducts] = useProducts();
    let [shops, setShops] = useShops(products);

    function deleteSingle(element){
        removeFromDb(element.id);

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
    }
    let navigate = useNavigate();
    function navigation(){
        let url = '/'
        navigate(url);
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
                    <Cart shops = {shops}>
                        <button onClick={navigation}>Back to Shopping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;