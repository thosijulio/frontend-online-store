import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';


class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cpf: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      cep: '',
      paymentMethod: 'ticket',
    };

    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(target) {
    const { name, value } = target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      handleForm,
      state: {
        name,
        cpf,
        street,
        number,
        complement,
        district,
        city,
        state,
        cep,
      } } = this;

    return (
      <>
        <header className="checkout-header">
          <Link className="fa fa-circle-arrow-left fa-2x" to="/" />
          <div>
            <h2>Finalizar Compra</h2>
          </div>
          <Link to="/cart-shopping" className="fa fa-cart-shopping fa-2xl" />
        </header>
        <section className="checkout-section">
          <section className="delivery-address-section">
            <h4>Endereço de Entrega</h4>
            <form>
              <label htmlFor="name">
                {`Nome: `}
                <input id="name" name="name" onChange={ ({ target }) => handleForm(target)} value={ name } />
              </label>
              <label htmlFor="cpf">
                {`CPF: `}
                <input id="cpf" name="cpf" onChange={ ({ target }) => handleForm(target)} type="number" value={ cpf }/>
              </label>
              <label htmlFor="street">
                {`Rua: `}
                <input id="street" name="street" onChange={ ({ target }) => handleForm(target)} value={ street } />
              </label>
              <label htmlFor="number">
                {`Número: `}
                <input id="number" name="number" onChange={ ({ target }) => handleForm(target)} type="number" value={ number } />
              </label>
              <label htmlFor="complement">
                {`Complemento: `}
                <input id="complement" name="complement" onChange={ ({ target }) => handleForm(target)} value={ complement } />
              </label>
              <label htmlFor="district">
                {`Bairro: `}
                <input id="district" name="district" onChange={ ({ target }) => handleForm(target)} value={ district } />
              </label>
              <label htmlFor="city">
                {`Cidade: `}
                <input id="city" name="city" onChange={ ({ target }) => handleForm(target)} value={ city } />
              </label>
              <label htmlFor="state">
                {`Estado: `}
                <input id="state" name="state" onChange={ ({ target }) => handleForm(target)} value={ state } />
              </label>
              <label htmlFor="cep">
                {`CEP: `}
                <input id="cep" name="cep" onChange={ ({ target }) => handleForm(target)} type="number" value={ cep } />
              </label>
            </form>
          </section>
          <section className="payment-method-section">
            <h4>Método de Pagamento</h4>
            <form>
              <label htmlFor="credit-cart">
                Cartão de Crédito
                <i className="fa-solid fa-credit-card fa-5x" />
                <input name="paymentMethod" onChange={ ({ target }) => handleForm(target)} type="radio" value="credit-cart" />
              </label>
              <label htmlFor="ticket">
                Boleto Bancário
                <i className="fa-solid fa-file-invoice-dollar fa-5x" />
                <input checked="checked" name="paymentMethod" onChange={ ({ target }) => handleForm(target)} type="radio" value="ticket" />
              </label>
            </form>
          </section>
          <Link to="/">Finalizar Compra</Link>
        </section>
      </>
    )
  }
}

export default Checkout;
