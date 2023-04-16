import React from 'react';
import './Product.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, price, stock, ratings} = props.product;
    // console.log(props);
    const btnStyle = {
        backgroundColor: '#f0c14b',
        padding: '12px 50px',
        border: '1px solid transparent',
        borderRadius: '3px',
        wordSpacing: '0.5px'
    }
    const Sup = {
        fontWeight: '400',
        fontSize: '14px',
    }

    return (
        <div className='product'>
            <div className='productImg'>
                <img src={img} alt="electronics" />
            </div>
            <div className='productInfo'>
                <h2>{name}</h2>
                <p>Brand: {seller}</p>
                <div className='row'>
                    <div className='product-price'>
                        <div style={{display: 'flex'}}>
                            <h2><sup style={Sup}>$</sup>{price}</h2>
                            <p style={{padding: '0px 10px', fontSize: '16px'}}><del style={{position: 'relative', bottom: '-15px'}}>${price*2}</del></p>
                        </div>
                        <p>Only {stock} left in stock - order soon</p>
                        <button style={btnStyle} onClick={() => props.handleAddProduct(props.product)}>
                            <FontAwesomeIcon style={{margin: '0px 4px'}} icon={faCartShopping}/>Add to cart
                        </button>
                    </div>
                    <div className='product-feature'>
                        <h5>Rating: {ratings}</h5>
                        <h4>Features</h4>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;