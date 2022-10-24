import React from 'react';

const Product = (props) => {
    let {} = props.index
    console.log(props);
    return (
        <div>
            <h2>Product Name : {props.index.name} </h2>
        </div>
    );
};

export default Product;