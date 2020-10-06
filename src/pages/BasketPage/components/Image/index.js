import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ img, id, url }) => (
  <Link to={`/product/${id}`}>
    <img
      src={url}
      width="400px"
      height="400px"
      alt={img.alt}
      style={{ maxWidth: '100%' }}
    />
  </Link>
);

export default Image;
