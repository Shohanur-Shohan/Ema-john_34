import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, pdct) => total + pdct.price ,0 );

    let shipping = 0;
    if(total > 350){
        shipping = 0;
    }
    else if(total > 150){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 9.90;
    }

    //
    const tax = Math.round(total / 10);

    const btnStyle = {
        backgroundColor: '#f0c14b',
        padding: '12px 50px',
        border: '1px solid transparent',
        borderRadius: '3px',
        wordSpacing: '0.5px'
    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Order Summary</h2>
            <h3 style={{textAlign: 'center'}}>Items Ordered: {cart.length}</h3>
            <p>Product price: {total}</p>
            <p>Shipping & Handling: {shipping}</p>
            <p>Tax + Vat: {tax}</p>
            <h2 style={{color: '#AD0000'}}>Order Total: ${ total + shipping + tax}</h2>
            <button style={btnStyle}>Review your order</button>
        </div>
    );
};

export default Cart;