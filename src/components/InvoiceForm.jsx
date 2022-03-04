import React from 'react';
import PropTypes from 'prop-types';

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      description: '',
      quantity: 0,
      price: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { saveInvoice } = this.props;
    saveInvoice();
  }

  render() {
    const { name, email, address, city, handleCustomerChange, addItem } = this.props;
    const { item, description, quantity, price } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Customer</legend>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="nome"
              value={name}
              onChange={handleCustomerChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleCustomerChange}
            />
          </label>
          <label htmlFor="address">
            Address:
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleCustomerChange}
            />
          </label>
          <label htmlFor="city">
            City:
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={handleCustomerChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Items</legend>
          <label htmlFor="item">
            Item:
            <input
              type="text"
              id="item"
              name="item"
              value={item}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="quantity">
            Quantity:
            <input
              name="quantity"
              type="number"
              value={quantity}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="price">
            Price:
            <input
              name="price"
              type="number"
              min="0.00"
              max="100000.00"
              step="0.01"
              value={price}
              onChange={this.handleChange}
            />
          </label>
          <button
            type="submit"
            onClick={addItem(this.state)}
          >
            Add Product
          </button>
        </fieldset>
        <button
          type="submit"
          onClick={this.handleClick}
        >
          Save Invoice
        </button>
      </form>
    );
  }
}

InvoiceForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  handleCustomerChange: PropTypes.func.isRequired,
  saveInvoice: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default InvoiceForm;
