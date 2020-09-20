import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ img, id }) => (
  <Link to={`/product/${id}`}>
    <img src={img.imageUrl} width="400px" height="400px" alt={img.alt} />
  </Link>
);

export default Image;
