import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    localStorage.setItem('product', JSON.stringify(this.props.product))
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
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
}

export default ProductCard;
