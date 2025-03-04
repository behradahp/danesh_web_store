export enum BasketActionTypes {
  Add = "basket-add",
  Remove = "basket-remove",
  Clear = "basket-clear",
  Increase = "basket-increase",
  Decrease = "basket-decrease",
}

export const basketReducer = (
  basket: Basket[],
  action: BasketReducerAction
) => {
  const { type, payload } = action;

  let newBasket: Basket[] = [];

  switch (type) {
    case BasketActionTypes.Add:
      newBasket = [
        ...basket,
        {
          product: payload,
          count: 1,
        },
      ];

      break;

    case BasketActionTypes.Remove:
      basket.forEach((element) => {
        if (element.product.id !== payload.id) newBasket.push(element);
      });

      break;

    case BasketActionTypes.Clear:
      newBasket = [];
      break;

    case BasketActionTypes.Increase:
      basket.forEach((element) => {
        let count = element.count;
        if (element.product.id === payload.id) count += 1;
        newBasket.push({ ...element, count: count });
      });

      break;

    case BasketActionTypes.Decrease:
      basket.forEach((element) => {
        let count = element.count;
        if (element.product.id === payload.id) count -= 1;

        if (count != 0) newBasket.push({ ...element, count: count });
      });

      break;

    default:
      newBasket = basket;
  }

  return newBasket;
};
