import CatalogPage from '../pages/CatalogPage';
import MainLayout from '../layouts/MainLayout';

const RootRoute = {
  name: 'Каталог Товаров',
  exact: true,
  path: '/',
  component: CatalogPage,
  layout: MainLayout,
};

export default RootRoute;
