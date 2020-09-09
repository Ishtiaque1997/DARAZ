import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props );
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className="product">
            <div>
                   <img src={img} alt=""/>  
            </div>
    <div className="product-name"><Link to={"/product/"+key}>{name}</Link>
                <h4>{name}</h4>
                <br/>
    <p><small>By: {seller}</small></p>
    <p>Price:${price}</p>
    <p><small>Only {stock} available. Order soon.</small></p>
    {props.showAddToCart && <button className="button"
    onClick={()=>props.handleAddProduct(props.product)}
    ><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>

        
    
    
        </div>
    );
};

export default Product;