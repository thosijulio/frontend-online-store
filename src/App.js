import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ ProductList }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
