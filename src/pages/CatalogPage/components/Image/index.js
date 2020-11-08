import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ url, id, img }) => (
  <Link to={`/product/${id}`}>
    <img src={url} alt={img.alt} style={{ maxWidth: '100%' }} />
  </Link>
);

export default Image;
