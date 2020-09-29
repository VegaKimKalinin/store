import React from 'react';

const Image = ({ img }) => (
  <img src={img.imageUrl} width="400px" height="400px" alt={img.alt} />
);

export default Image;
