import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

class ProductList extends React.Component {
  render() {
    return (
      <header className="product-list-header">
        <h1>Front-end Online Store</h1>
        <i className="fa fa-search fa-2xl"/>
        <input className="input-field" type="text" />
        <Link to="/cart-shopping" className="fa fa-cart-shopping fa-2xl" />
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </header>
    )
  }
}

export default ProductList;
