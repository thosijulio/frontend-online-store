import React from 'react';
import EmptyCart from './EmptyCart';
import './CartItens.css';
import { Link } from 'react-router-dom';

class CartItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map((iten) => ({
      ...iten,
      quantity: 1,
      totalPrice: iten.price,
    }));
    this.setState({
      cart: newCart,
    })
  }

  handleQuantity(cart, itenToChange, signal) {
    if (signal === 'minus' && itenToChange.quantity > 1) {
      this.setState({
        cart: (
          cart.map((iten) => {
            if (iten.id !== itenToChange.id) {
              return iten;
            } else {
              return ({
                ...itenToChange,
                quantity: itenToChange.quantity - 1,
                totalPrice: itenToChange.totalPrice - itenToChange.price,
              });
            }
          })
        ),
      }, () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
      });
    } else if (signal === 'plus') {
      this.setState({
        cart: (
          cart.map((iten) => {
            if (iten.id !== itenToChange.id) {
              return iten;
            } else {
              return ({
                ...itenToChange,
                quantity: itenToChange.quantity + 1,
                totalPrice: itenToChange.totalPrice + itenToChange.price,
              });
            }
          })
        ),
      }, () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
      });
    }
  }

  handleRemove(itentoRemove) {
    this.setState((oldState) => ({
      cart: oldState.cart.filter((iten) => iten.id !== itentoRemove.id),
    }),
      () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
      },
    );
  }

  render() {
    const { state: { cart } } = this;

    return cart.length ?
      <section className="cart-itens-section">
        { cart.map((iten, index) => (
            <div className="cart-iten-card" key={ index }>
              <div className="product-image">
                <img alt="product" src={`https://http2.mlstatic.com/D_NQ_NP_932305-${iten.thumbnail_id}-O.webp`} />
              </div>
              <div className="product-details">
                <p id="product-title">{iten.title}</p>
                <p id="product-price">
                  {`Valor: `}
                  <span>
                    {
                      (iten.price)
                        .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                    }
                  </span>
                </p>
                <div className="product-quantity">
                  <p id="quantity-text">Quantidade:</p>
                  <i
                    className="fa-solid fa-minus"
                    onClick={ () => this.handleQuantity(cart, iten, 'minus') }
                    title="Diminuir quantidade"
                  />
                  <p>{ iten.quantity }</p>
                  <i
                    className="fa-solid fa-plus"
                    onClick={ () => this.handleQuantity(cart, iten, 'plus') }
                    title="Aumentar quantidade"
                  />
                </div>
                <p id="product-total-price">
                  {`Valor total: `}
                  <span>
                    {
                      (iten.totalPrice)
                        .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                    }
                  </span>
                </p>
                <i className="fa-solid fa-trash" onClick={ () => this.handleRemove(iten) } title="Excluir pedido" />
              </div>
            </div>
          )
        )}
        <Link to="/checkout">Finalizar Compra</Link>
      </section> :
      <EmptyCart />
  }
}

export default CartItens;
