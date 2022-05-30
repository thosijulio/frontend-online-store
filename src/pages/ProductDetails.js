import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  render() {
    const product = JSON.parse(localStorage.getItem('product'));
    console.log(product);

    return (
      <>
        <header className="product-details-header">
          <Link className="fa fa-circle-arrow-left fa-2x" to="/" />
          <div>
            <h2>Detalhes do Produto</h2>
          </div>
          <Link to="/cart-shopping" className="fa fa-cart-shopping fa-2xl" />
        </header>
        <section className="product-details-section">
          <h4>{
            `${product.title} - ${(product.price).toLocaleString(
              'pt-br', { style: 'currency', currency: 'BRL'}
              )}` }
          </h4>
          <div className="product-image-and-specifications">
            <img
              alt="product-image"
              src={ `https://http2.mlstatic.com/D_NQ_NP_932305-${product.thumbnail_id}-O.webp` }
            />
            <div>
              <h5>
                Especificações:
              </h5>
              <ul>
                { product.attributes.map((attribute, index) => (
                  <li key={ index }>{`${attribute.name}: ${attribute.value_name}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default ProductDetails;
