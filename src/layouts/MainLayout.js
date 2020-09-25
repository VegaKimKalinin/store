import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './MainLayout.css';
const { Header, Content, Footer } = Layout;

const MainLayout = (props) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Каталог Товаров</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/contact">Контакты </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/basket">Корзина</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/comment">Коментарии</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
);

export default MainLayout;
