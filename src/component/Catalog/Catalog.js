/* 
    компонент Catalog для вывода списка продуктов в магазине.
    Передать ему с помощью свойств массив объектов c описанием продукта (ссылка на картинку и текст). 
    Компонент должен представить продукты в виде списка из элементов Product. 
    Вывести результат на html-странице
*/

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './catalog.css';


const Catalog = (props) =>
{
    const products = [...props.products];
    return (
        <div className='catalog'>
            {products.map((product) => <ProductCard product={product} key={product.id}/>)}
        </div>
);
}
export default Catalog;