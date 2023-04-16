import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('added', product);  //important
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div style={{textAlign: 'left'}}>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                     products.map(fProduct => <Product handleAddProduct = {handleAddProduct} product={fProduct}></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Shop;