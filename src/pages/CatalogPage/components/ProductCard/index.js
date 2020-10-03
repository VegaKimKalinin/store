import React from 'react';

import Image from '../Image';
import TextBox from '../TextBox';
import Price from '../Price';
import InputCountGoods from '../InputCountGoods';

import './ProductCard.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.state = {
      product: this.props.product,
    };
  }

  onDragStart(event) {
    event.dataTransfer.setData('product', JSON.stringify(this.props.product));
  }

  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    const { product } = this.props;
    return (
      <div
        className="product-card"
        draggable
        onDragStart={this.onDragStart}
        onDragOver={this.onDragOver}
      >
        <Image img={product.fields.product.img} id={product.sys.id} />
        <TextBox text={product.fields.product.title} />
        <Price price={product.fields.product.price} />
        <InputCountGoods product={product} />
      </div>
    );
  }
}

export default ProductCard;
