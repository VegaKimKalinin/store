import React from 'react';

const MiniImage = ({ item, text, callback }) => (
  <div onClick={callback}>
    <img src={item} alt={text} style={{ maxWidth: '100%' }} />
  </div>
);

export default MiniImage;
