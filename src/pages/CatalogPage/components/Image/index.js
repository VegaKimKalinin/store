import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ img, id }) => (
  <Link to={`/product/${id}`} style={{ flexGrow: 1, backgroundColor: '#fff' }}>
    <img src={img.imageUrl[0]} alt={img.alt} style={{ maxWidth: '100%' }} />
  </Link>
);

export default Image;
