type Store = {
  basket: Basket[];
  saved: Saved[];
  auth: Auth;
};

type Basket = {
  product: Product;
  count: number;
};

type BasketReducerAction = {
  type: string;
  payload: Product;
};

type Saved = {
  product: Product;
};

type SavedReducerAction = {
  type: string;
  payload: Product;
};

type UserInfo = {
  id: number;
  last_login: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  address: null;
  phone: null;
  groups: any[];
  user_permissions: any[];
};

type Auth = {
  isAuthenticated: boolean;
  userInfo: Partial<UserInfo>;
};

type AuthReducerAction = {
  type: string;
  payload: UserInfo;
};
