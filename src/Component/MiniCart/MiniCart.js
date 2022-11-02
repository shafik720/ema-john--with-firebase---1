import React from 'react';
import './MiniCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const MiniCart = (props) => {
    let {name, price,  quantity, seller, ratings, img} = props.index;
    return (
        <div className="mini-card">
            <div className="mini-card-left">
                <img src={img} alt=""/>
                <div className="mini-card-details">
                    <p>{name} </p>
                    <p>Price Per Unit : {price} </p>
                    <p>Quantity : {quantity}</p>                    
                </div>
            </div>
            <div className="mini-card-right">
            <span onClick={()=>props.deleteSingle(props.index)}><FontAwesomeIcon icon={faTrashCan} /></span>
            </div>
        </div>
    );
};

export default MiniCart;