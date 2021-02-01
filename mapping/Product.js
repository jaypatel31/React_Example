import React from "react"

const Product = (props) => {
    return(
        <div>
            <p>Product Name: {props.name}</p>
            <p>&#8377;: {props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    );
}

export default Product;