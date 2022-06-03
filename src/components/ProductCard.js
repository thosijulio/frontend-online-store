import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonCartText: 'Adicionar ao carrinho',
    };
    this.seeDetails = this.seeDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    try {
      const products = JSON.parse(localStorage.getItem('cart'));
      const { props: { product } } = this;
      if (products.some((productInArray) => productInArray.id === product.id)) {
        this.setState({ buttonCartText: 'Item adicionado' });
      }
    } catch (error) {}
  }
  
  seeDetails() {
    localStorage.setItem('product', JSON.stringify(this.props.product));
  }

  addToCart() {
    const { props: { product } } = this;

    try {
      const cart = JSON.parse(localStorage.getItem('cart'));
      if (!cart.some((iten) => iten.id === product.id)) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({ buttonCartText: 'Item adicionado' });
      } else {
        alert('Item já adicionado');
      }
    } catch (error) {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
  }

  checkProductTitle(title) {
    if (title.length > 40) {
      return `${title.substring(0, 40)}...`;
    } else {
      return title;
    }
  }

  render() {
    const {
      props: { product: { title, thumbnail_id, price, id} },
      state: { buttonCartText } } = this;

    return (
      <div className="product-card">
        <h5 title={ title }>{ this.checkProductTitle(title) }</h5>
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_932305-${thumbnail_id}-O.webp` }/>
        <p>
          {
            (price)
              .toLocaleString(
                'pt-br', { style: 'currency', currency: 'BRL'}
              )
          }
        </p>
        <Link
          onClick={ this.seeDetails }
          to={`/product/${id}`}
          >
            Ver Detalhes
        </Link>
        <button onClick={ this.addToCart }>{ buttonCartText }</button>
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail_id: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
}

export default ProductCard;
