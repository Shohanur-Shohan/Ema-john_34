import React from 'react';
import logo from '../../images/Logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
        
    return (
            <header>
                <div className='container'>
                    <div className="row">
                        <div className='logo'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div style={{display: 'flex', width: '50%', margin: 'auto 0', backgroundColor: 'antiquewhite', justifyContent: 'end'}}>
                            <div className='search'>
                                <input type="text" placeholder='Search products here'/>
                                                    
                            </div>
                            <div className='cartIcon' style={{ margin: 'auto 0'}}>
                                <a href="/cart"><FontAwesomeIcon icon={faCartShopping} />
                                <span style={{ color: 'orange', fontWeight: 'bold', marginLeft: '5px' }} >0</span></a>                      
                            </div>
                        </div>
                        
                    </div>
                    <div className='menu'>
                            <ul>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/order">Order Review</a></li>
                                <li><a href="/manage">Manage inventory</a></li>
                                
                            </ul>
                        </div>
                </div>
            </header>
    );
};

export default Header;
