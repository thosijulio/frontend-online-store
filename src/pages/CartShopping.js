import React from 'react';
import { Link } from 'react-router-dom';
import './CartShopping.css';

class CartShopping extends React.Component {
  render() {
    return(
      <>
        <header className="cart-shopping-header">
          <Link className="fa fa-circle-arrow-left fa-2x" to="/" />
          <div>
            <h2><i className="fa fa-cart-shopping fa-lg" /> Carrinho de Compras</h2>
          </div>
        </header>
        <section>
          <i className="fa-solid fa-box-open fa-8x"/>
          <p>Seu carrinho está vazio.</p>
        </section>
      </>
    )
  }
}

export default CartShopping;
