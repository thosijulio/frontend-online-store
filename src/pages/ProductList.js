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
    });
  }

  render() {
    const { state: { categories, loading, message, products, search } } = this;
    return (
      <>
        <header className="product-list-header">
          <h1>Front-end Online Store</h1>
        </header>
        <section className="product-search-section">
          <p>{ message }</p>
          <section className="product-input-search">
            <i className="fa fa-search fa-2xl" onClick={ this.handleSearch }/>
            <input
              className="input-field"
              onChange={ (event) => this.handleSearchInput(event) }
              onKeyUp={ (event) => this.handleSearchInput(event) }
              placeholder="Nome do produto"
              type="text"
              value={ search }
            />
            <Link to="/cart-shopping" className="fa fa-cart-shopping fa-2xl" />
          </section>
          <section className="product-categories-section">
            <label htmlFor="product-categories">
              {`Categoria: `}
            </label>
            <select
              name="product-categories"
              id="product-categories"
              onClick={ ({ target: { value } } ) => this.changeSelectedCategory(value)}
            >
              <option value=""></option>
              { categories.map((category, index) => (
                <option
                  key={index}
                  name="selected-category-option"
                  value={category.id}>
                    {category.name}
                </option>
              ))}
            </select>
          </section>
        </section>
        <section className="product-list-section">
          { loading ?
            <i className="fas fa-spinner fa-spin fa-6x" /> :
            products.map((product, index) => (
              <ProductCard key={ index } product={ product } />
            ))
          }
        </section>
      </>
    )
  }
}

export default ProductList;
