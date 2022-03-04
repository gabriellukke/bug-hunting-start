import React from 'react';
import InvoiceForm from './components/InvoiceForm';
import Invoice from './components/Invoice';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      address: '',
      city: '',
      invoiceItems: [],
      invoiceList: [],
    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.saveInvoice = this.saveInvoice.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleCustomerChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  addItem(item) {
    this.setState((prevState) => ({ invoiceItems: [...prevState.invoiceItems, item] }));
  }

  saveInvoice() {
    this.setState((prevState) => {
      const { name, email, address, city, invoiceItems } = prevState;
      const newInvoice = {
        name,
        email,
        address,
        city,
        invoiceItems,
      };

      return {
        invoiceList: [...prevState.invoiceList, newInvoice]
      };
    });
  }

  render() {
    const { invoiceItems, name, email, address, city } = this.state;
    return (
      <main>
        <InvoiceForm
          name={name}
          email={email}
          address={address}
          city={city}
          handleCustomerChange={this.handleCustomerChange}
          saveInvoice={this.saveInvoice}
          addItem={this.addItem}
        />
        <Invoice
          name={name}
          email={email}
          address={address}
          city={city}
          invoiceItems={invoiceItems}
        />
      </main>
    );
  }
}

export default App;
