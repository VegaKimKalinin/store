import React from 'react';
import BascetContext from './BasketContext';

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
    const space_id = 'h5o3sde0kdje';
    const environment_id = 'master';
    const access_token = 'OE3yBQhdbVMP-aMTORuJw63yv-fxDRBdAyUx8lrxOrw';

    fetch(
      `https://cdn.contentful.com/spaces/${space_id}/` +
        `environments/${environment_id}/` +
        `entries?access_token=${access_token}`,
    )
      .then((res) => res.json())
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
