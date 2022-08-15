import logo from './logo.svg';
import './App.css';
import Products from './pages/products/products';
import {Switch, Link, Route, Router} from 'react-router-dom'
import {items} from '../src/data/list'
import { useReducer, useState } from 'react';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';
import { StoreProvider } from '../src/context/context'
import Common from './context/contextprovider';

function App() {
  /*const [cart, setCart] = useState([])
  console.log(cart)
  */
  return (
    <div className="App">
      <Switch>
        <StoreProvider>
        {items.map((item, index) => 
        <Route exact path = {`/product/${index}`}  component={<Product key = {index} id = {index}/>} />
        )}
        <Route exact path = '/cart' component={<Cart />}/>
        </StoreProvider>
      </Switch>
    </div>
  );
}

export default App;
