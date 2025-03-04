export const isProductInBasket = (basket: Basket[], productId: number) => {
  let isExist = false;

  basket.forEach((element) => {
    if (element.product.id === productId) isExist = true;
  });

  return isExist;
};

export const calculateProductCount = (basket: Basket[], productId: number) => {
  let count = 0;

  basket.forEach((element) => {
    if (element.product.id === productId) count = element.count;
  });

  return count;
};
