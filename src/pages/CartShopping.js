import React from 'react';
import { Link } from 'react-router-dom';
import CartItens from '../components/CartItens';
import EmptyCart from '../components/EmptyCart';
import './CartShopping.css';

class CartShopping extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }
  componentDidMount() {
    try {
      const cart = JSON.parse(localStorage.getItem('cart'));
      this.setState({
        cart,
      })
    } catch (error) {
      
    }
  }

  render() {
    const { state: { cart } } = this;
    return(
      <>
        <header className="cart-shopping-header">
          <Link className="fa fa-circle-arrow-left fa-2x" to="/" />
          <div>
            <h2><i className="fa fa-cart-shopping fa-lg" /> Carrinho de Compras</h2>
          </div>
        </header>
        <section>
          { cart.length ? <CartItens /> : <EmptyCart /> }
        </section>
      </>
    )
  }
}

export default CartShopping;
