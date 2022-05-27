import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import './ProductList.css';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: '',
    }
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  changeSelectedCategory(selectedCategory) {
    this.setState({
      selectedCategory,
    })
  }

  render() {
    const { state: { categories } } = this;
    return (
      <>
        <header>
          <h1>Front-end Online Store</h1>
        </header>
        <section className="product-list-section">
          <div>
            <i className="fa fa-search fa-2xl" />
            <input className="input-field" type="text" />
            <Link to="/cart-shopping" className="fa fa-cart-shopping fa-2xl" />
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
          <aside className="product-categories">
          <h3>Categorias:</h3>
          { categories.map((category, index) => (
            <label key={index}>
              <input
                name="selected-category"
                onClick={({ target: { value } }) => this.changeSelectedCategory(value)}
                type="radio"
                value={category.id}
              />
              {category.name}
            </label>
          ))}
        </aside>
        </section>
      </>
    )
  }
}

export default ProductList;
