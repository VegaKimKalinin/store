import React from 'react';

function MiniImage({ item, text, callback, order }) {
  function setImage() {
    callback(order);
  }

  return (
    <div onClick={setImage}>
      <img src={item} alt={text} style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default MiniImage;
