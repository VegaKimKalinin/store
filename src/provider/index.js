import React from 'react';
import BascetContext from './BasketContext';

class AppProvider extends React.Component {
  render() {
    return (
      <BascetContext.Provider>{this.props.children}</BascetContext.Provider>
    );
  }
}
