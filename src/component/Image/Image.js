/**
    Реализовать компонент Image для вывода картинки.
    В качестве свойств передавать компоненту src (ссылка на картинку),
    width, height (высота и ширина) и alt (альтернативный текст к картинке).
    Вывести тестовый элемент компонента на html-странице
 */
import React from 'react';

const Image = ({ img }) => (
  <img src={img.imageUrl} width="400px" height="400px" alt={img.alt} />
);

export default Image;
