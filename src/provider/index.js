import React from 'react';
import BascetContext from './BasketContext';

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.addToProductList = this.addToProductList.bind(this);

    this.state = {
      productList: [],
      addToProductList: this.addToProductList,
      regUser: null,
      logIn: this.logIn,
    };
  }

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
