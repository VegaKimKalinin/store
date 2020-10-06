import React, { useState } from 'react';
import MiniImage from '../MiniImage';

const Image = ({ img }) => {
  const [order, setOrder] = useState(0);

  return (
    <div style={{ maxWidth: '400px' }}>
      <img
        src={img.imageUrl[order]}
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
            callback={() => setOrder(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Image;
