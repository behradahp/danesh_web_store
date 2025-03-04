export const isProductSaved = (savedList: Saved[], productId: number) => {
  let isExist = false;

  savedList.forEach((element) => {
    if (element.product.id === productId) isExist = true;
  });

  return isExist;
};
