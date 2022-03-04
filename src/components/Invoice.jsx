import React from 'react';
import PropTypes, { shape } from 'prop-types';

class Invoice extends React.Component() {
  render() {
    const { name, email, address, city, invoiceItems } = this.props;
    return (
      <>
        <section className="invoice-container">
          <header>
            <h2>Invoice #0</h2>
            <img
              src="https://blog.betrybe.com/wp-content/uploads/2021/11/51808343.png"
              alt="Company Logo"
            />
          </header>
          <article>
            <p>{name}</p>
            <p>TrybeShop</p>
          </article>
          <article>
            <p>{email}</p>
            <p>www.trybeshop.com</p>
          </article>
          <article>
            <p>{address}</p>
            <p>Rua dos devs, nº 0</p>
          </article>
          <article>
            <p>{city}</p>
            <p>Trybe City</p>
          </article>
        </section>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {invoiceItems.map(({item, description, quantity, price}) => (
              <tr key={item}>
                <td>{item}</td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Invoice;

Invoice.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  invoiceItems: PropTypes.arrayOf(shape({
    item: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
};
