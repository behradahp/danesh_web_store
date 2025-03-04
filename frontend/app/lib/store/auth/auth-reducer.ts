export enum AuthActionTypes {
  Login = "login",
}

export const authReducer = (auth: Auth, action: AuthReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionTypes.Login:
      auth = {
        isAuthenticated: true,
        userInfo: payload,
      };
      return auth;

    default:
      return auth;
  }
};
