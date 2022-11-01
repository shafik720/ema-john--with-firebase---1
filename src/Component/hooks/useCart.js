import { useState } from "react";



function useCart(){
    let [cart, setCart] = useState([]);
    function getCart(element){
        let newCart = [...cart, element];
        setCart(newCart);           
        addToDb(element.id);
    }
}