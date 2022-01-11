import { AuthActions } from "../actions/authActions";
const token = localStorage.getItem("token");
console.log(token);
export const initialState = {
  isLoggedIn: token ? true : false,
  token: "" || token,
  errorMessage: null,
  isLoading: false,
};
export const authReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case AuthActions.AUTH_SIGNIN:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.AUTH_SIGNIN_SUCCESS: {
      console.log("payload", actions);
      return {
        ...state,
        isLoading: false,
        token: payload,
        errorMessage: null,
        isLoggedIn: true,
      };
    }

    case AuthActions.AUTH_SIGNIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    // case AuthActions.AUTH_LOGOUT:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errorMessage: null,
    //     user: null,
    //     token: null,
    //     isLoggedIn: false,
    //   };
    default:
      return {
        ...state,
      };
  }
};
