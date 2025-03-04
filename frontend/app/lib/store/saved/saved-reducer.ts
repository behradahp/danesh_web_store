import { isProductSaved } from "../../utils/saved-products-functions";

export enum SavedActionTypes {
  Change = "saved-change",
  Clear = "saved-clear",
}

export const savedReducer = (saved: Saved[], action: SavedReducerAction) => {
  const { type, payload } = action;

  let newSaved: Saved[] = [];

  switch (type) {
    case SavedActionTypes.Change: {
      const isExist = isProductSaved(saved, payload.id);

      if (!isExist) {
        newSaved = [
          ...saved,
          {
            product: payload,
          },
        ];
      } else {
        saved.forEach((element) => {
          if (element.product.id !== payload.id) newSaved.push(element);
        });
      }

      break;
    }

    case SavedActionTypes.Clear:
      newSaved = [];
      break;

    default:
      newSaved = saved;
  }

  return newSaved;
};
