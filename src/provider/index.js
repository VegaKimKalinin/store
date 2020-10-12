import React from 'react';
import BascetContext from './BasketContext';

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regUser: null,
      logIn: this.logIn,
    };
  }

  logIn = (userName, password) => {
    this.setState(() => ({
      regUser: { userName, password },
    }));
  };

  render() {
    return (
      <BascetContext.Provider value={this.state}>
        {this.props.children}
      </BascetContext.Provider>
    );
  }
}

export default AppProvider;
