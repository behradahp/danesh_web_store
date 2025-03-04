import { ActionDispatch, createContext, useContext } from "react";

type IStoreContext = {
  store: Store;
  dispatch: ActionDispatch<[action: any]>;
};

export const initialStore: Store = {
  basket: [],
  saved: [],
  auth: {
    isAuthenticated: false,
    userInfo: {},
  },
};

export const initialContext: IStoreContext = {
  store: initialStore,
  dispatch: () => {},
};

export const StoreContext = createContext(initialContext);

export const useStore = () => useContext(StoreContext);
