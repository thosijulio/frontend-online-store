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

  showCategories(button) {
    const categories = document.getElementsByClassName('product-categories')[0];

    if (categories.style.display === 'block') {
      button.textContent = 'Mostrar Categorias';
      categories.style.display = 'none';
    } else {
      button.textContent = 'Ocultar Categorias';
      categories.style.display = 'block';
    }
  }

  render() {
    const { state: { categories } } = this;
    return (
      <>
        <header>
          <h1>Front-end Online Store</h1>
        </header>
        <section className="product-list-section">
          <button onClick={ ({ target }) => this.showCategories(target) }>Mostrar Categorias</button>
          <aside className="product-categories">
          <h3>Categorias:</h3>
          { categories.map((category, index) => (
            <label key={index}>
              <input
                name="selected-category"
                onClick={ ({ target: { value } } ) => this.changeSelectedCategory(value)}
                type="radio"
                value={category.id}
              />
              {category.name}
            </label>
          ))}
        </aside>
        <div>
            <i className="fa fa-search fa-2xl" />
            <input className="input-field" type="text" />
            <Link to="/cart-shopping" className="fa fa-cart-shopping fa-2xl" />
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
        </section>
      </>
    )
  }
}

export default ProductList;
