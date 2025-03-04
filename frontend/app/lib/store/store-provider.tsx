import { useReducer } from "react";
import { initialStore, StoreContext } from "./store";
import { basketReducer } from "./basket/basket-reducer";
import { savedReducer } from "./saved/saved-reducer";
import { authReducer } from "./auth/auth-reducer";

const storeReducer = (store: Store, action: unknown) => ({
  basket: basketReducer(store.basket, action as BasketReducerAction),
  saved: savedReducer(store.saved, action as SavedReducerAction),
  auth: authReducer(store.auth, action as AuthReducerAction),
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
