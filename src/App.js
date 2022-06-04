import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartShopping from './pages/CartShopping';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import Checkout from './pages/Checkout';
import './App.css';

function App () {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Switch>
        <Route path="/cart-shopping" component={ CartShopping } />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/" component={ ProductList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App
