import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartShopping from './pages/CartShopping';
import ProductList from './pages/ProductList';
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart-shopping" component={ CartShopping }/>
        <Route path="/" component={ ProductList }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App
