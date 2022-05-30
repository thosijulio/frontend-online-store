import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './ProductList.css';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: false,
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      products: [],
      search: '',
      selectedCategory: '',
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  async handleSearch() {
    this.setState({
      loading: true,
    });

    const { products, search, selectedCategory } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(selectedCategory, search);
    
    this.setState({
      loading: false,
      message: results.length ? '' : 'Nenhum produto foi encontrado.',
      products: results,
    });
  }

  handleSearchInput(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }

    const { target: { value } } = event;
    
    this.setState({
      search: value,
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
    const { state: { categories, loading, message, products, search } } = this;
    return (
      <>
        <header className="product-list-header">
          <h1>Front-end Online Store</h1>
        </header>
        <section className="product-search-section">
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
        <div className="products-search-and-list">
            <i className="fa fa-search fa-2xl" onClick={ this.handleSearch }/>
            <input
              className="input-field"
              onChange={ (event) => this.handleSearchInput(event) }
              onKeyUp={ (event) => this.handleSearchInput(event) }
              type="text"
              value={ search }
            />
            <Link to="/cart-shopping" className="fa fa-cart-shopping fa-2xl" />
            <p>{ message }</p>
            <section className="product-list-section">
              { loading ?
                <i className="fas fa-spinner fa-spin fa-6x" /> :
                products.map((product, index) => (
                 <ProductCard key={ index } product={ product } />
                ))
              }
            </section>
          </div>
        </section>
      </>
    )
  }
}

export default ProductList;
