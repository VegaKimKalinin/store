import React from 'react';
import BascetContext from './BasketContext';
import { fetchProducts } from '../api/FetchData';

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.addToProductList = this.addToProductList.bind(this);

    this.state = {
      data: null,
      productList: [],
      addToProductList: this.addToProductList,
      regUser: null,
      logIn: this.logIn,
    };
  }

  componentDidMount() {
    fetchProducts()
      .then((data) => this.setState({ data }))
      .catch((er) => console.log(er));
  }

  setData = (data) => {
    this.setState({ data });
  };

  logIn = (userName, password) => {
    this.setState(() => ({
      regUser: { userName, password },
    }));
  };

  addToProductList(count, product) {
    const list = [...this.state.productList];
    for (let i = 1; i <= count; i++) {
      list.push(product);
    }
    this.setState(() => ({
      productList: [...list],
    }));
  }

  render() {
    return (
      <BascetContext.Provider value={this.state}>
        {this.props.children}
      </BascetContext.Provider>
    );
  }
}

export default AppProvider;
