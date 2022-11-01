import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";


function useCart(products, cart){
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

    return [shops, setShops]
}

export default useCart;