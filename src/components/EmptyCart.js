import React from 'react';
import './EmptyCart.css';

class EmptyCart extends React.Component {
  render() {
    return (
      <>
        <i className="fa-solid fa-box-open fa-8x"/>
        <p>Seu carrinho está vazio.</p>
      </>
    );
  }
}

export default EmptyCart;
