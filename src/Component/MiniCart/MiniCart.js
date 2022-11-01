import React from 'react';
import './MiniCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const MiniCart = (props) => {
    let {name, price,  quantity, seller, ratings, img} = props.index;
    return (
        <div>
            <div className="mini-card-left">
                <img src={img} alt=""/>
                <div className="mini-card-details">
                    <p>Name : {name} </p>
                    <p>Price Per Unit : {price} </p>
                    <p>Quantity : {quantity}</p>                    
                </div>
            </div>
            <div className="mini-card-right">
            <span><FontAwesomeIcon icon={faTrashCan} /></span>
            </div>
        </div>
    );
};

export default MiniCart;