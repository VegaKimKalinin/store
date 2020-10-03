import React from 'react';
import {
  space_id,
  environment_id,
  access_token,
} from '../../const/ServerConst';
import { withRouter } from 'react-router-dom';
import Image from './components/Image';
import TextBox from './components/TextBox';
import Price from './components/Price';

import './AboutProduct.css';

class AboutProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://cdn.contentful.com/spaces/${space_id}/` +
        `environments/${environment_id}/` +
        `/entries/${this.props.match.params.id}?access_token=${access_token}`,
    )
      .then((res) => res.json())
      .then((product) => this.setState({ product }))
      .catch((er) => console.log(er));
  }

  render() {
    const { product } = this.state;
    if (product) {
      return (
        <div className="about-product">
          <Image img={product.fields.product.img} id={product.sys.id} />
          <TextBox text={product.fields.product.title} />
          <Price price={product.fields.product.price} />
        </div>
      );
    } else {
      return <span>Загрузка данных</span>;
    }
  }
}

export default withRouter(AboutProduct);
