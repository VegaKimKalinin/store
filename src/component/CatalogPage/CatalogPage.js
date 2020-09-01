/*
Создать контейнерный компонент CatalogPage, 
который будет передавать массив записей о продуктах компоненту Catalog.
*/

import React from 'react';
import Catalog from '../Catalog/Catalog';
import Products from '../../constants/Products';

const CatalogPage = () =>
<Catalog products={Products}/>;

export default CatalogPage;