import { useSelector } from 'react-redux';

export function useProducts(data = 'list') {
  return useSelector((state) => state.products[data]);
}

export function useBasket() {
  return useSelector((state) => state.basket);
}
