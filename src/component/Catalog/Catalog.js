/*
    компонент Catalog для вывода списка продуктов в магазине.
    Передать ему с помощью свойств массив объектов c описанием продукта (ссылка на картинку и текст).
    Компонент должен представить продукты в виде списка из элементов Product.
    Вывести результат на html-странице
*/

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingBasketButton from '../ShoppingBasketButton/ShoppingBasketButton';
import './catalog.css';

const Catalog = ({ products }) => {
  return (
    <React.Fragment>
      <ShoppingBasketButton/>
      <div className="catalog">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Catalog;
