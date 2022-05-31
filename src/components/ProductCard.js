import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  
  handleClick() {
    localStorage.setItem('product', JSON.stringify(this.props.product))
  }

  addToCart() {
    const { props: { product } } = this;

    try {
      const cart = JSON.parse(localStorage.getItem('cart'));
      if (!cart.some((iten) => iten.id === product.id)) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));      
      } else {
        alert('Item já adicionado.');
      }
    } catch (error) {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <h5>{ product.title }</h5>
        <img src={ product.thumbnail }/>
        <p>
          {
            (product.price)
              .toLocaleString(
                'pt-br', { style: 'currency', currency: 'BRL'}
              )
          }
        </p>
        <Link
          onClick={ this.handleClick }
          to={`/product/${product.id}`}
          >
            Ver Detalhes
        </Link>
        <button onClick={ this.addToCart }>Adicionar ao Carrinho</button>
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
}

export default ProductCard;
