import React from 'react';

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
        </div>
    );
};

export default MiniCart;