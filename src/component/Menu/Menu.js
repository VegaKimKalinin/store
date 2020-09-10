import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <Link to="/">
          На главную
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/contact">Контакты</Link>
      </li>
      <li className="menu__item">
        <Link to="/basket">Корзина</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
