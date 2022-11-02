import React, { useContext } from 'react';
import './MiniCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { DummyContext } from '../../App';

const MiniCart = (props) => {
    let {name, price,  quantity, seller, ratings, img} = props.index;
    let dummyNumber = useContext(DummyContext);
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
            <h3>Api Context : {dummyNumber} </h3>
            </div>
        </div>
    );
};

export default MiniCart;