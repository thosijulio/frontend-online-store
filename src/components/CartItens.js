import React from 'react';

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

    return cart.map((iten, index) => (
        <div key={ index }>
          <img alt="product" src={iten.thumbnail} />
          <p>{iten.title}</p>
          <p>
            {
              (iten.price)
                .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            }
          </p>
          <p>Qtde.</p>
          <i
            className="fa-solid fa-minus"
            onClick={ () => this.handleQuantity(cart, iten, 'minus') }
          />
          <p>{ iten.quantity }</p>
          <i
            className="fa-solid fa-plus"
            onClick={ () => this.handleQuantity(cart, iten, 'plus') }
          />
          <p>
            {
              `Valor total: ${(iten.totalPrice)
                .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            }
          </p>
          <i className="fa-solid fa-trash" onClick={ () => this.handleRemove(iten) }/>
        </div>
      )
    )
  }
}

export default CartItens;
