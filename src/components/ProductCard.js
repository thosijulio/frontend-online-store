import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { product } = this.props;
    console.log(product);
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
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
}

export default ProductCard;
