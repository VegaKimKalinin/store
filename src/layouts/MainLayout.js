import React from 'react';
import { Layout, Menu } from 'antd';
import BasketButton from './BasketButton';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const MainLayout = (props) => (
  <Layout>
    <Header
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}
    >
      <Menu theme="light" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Каталог Товаров</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/contact">Контакты </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/basket">Корзина</Link>
        </Menu.Item>
      </Menu>
      <div>
        <BasketButton />
      </div>
    </Header>
    <Content>{props.children}</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default MainLayout;
