import React from 'react';
// import Cart from './pages/cart/cart';
// import Product from './pages/product/product';
import { StoreProvider } from '../context/context'
import { items } from '../data/list';
import Cart from '../pages/cart/cart';
import Product from '../pages/product/product';

const Common = () => {
    return (
    <div>
        <StoreProvider>
        {items.map((item, index) => 
        <Product key = {index} id = {index}/>
        )}
        <Cart />
        </StoreProvider>
        
    </div>
    
    )
    
}

export default Common