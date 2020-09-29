import AboutProduct from '../pages/AboutProduct';
import MainLayout from '../layouts/MainLayout';

const RootRoute = {
  path: '/product/:id',
  component: AboutProduct,
  layout: MainLayout,
};

export default RootRoute;
