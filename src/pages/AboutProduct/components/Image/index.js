import React from 'react';
import MiniImage from '../MiniImage';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
    };
  }

  changeFoto = (index) => {
    this.setState(() => ({
      order: index,
    }));
  };

  render() {
    const { img } = this.props;
    return (
      <div style={{ maxWidth: '400px' }}>
        <img
          src={img.imageUrl[this.state.order]}
          width="400px"
          height="400px"
          alt={img.alt}
        />
        <div style={{ display: 'flex' }}>
          {img.imageUrl.map((item, index) => (
            <MiniImage
              item={item}
              text={img.alt}
              key={index}
              order={index}
              callback={this.changeFoto}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Image;
