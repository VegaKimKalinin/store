export function basketAddProduct(product) {
  return {
    type: 'BASKET_ADD_PRODUCT',
    product,
  };
}
