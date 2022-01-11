import { createContext, useReducer, useContext } from "react";
import { initialState, authReducer } from "../reducers/authReducer";
import { AuthActions } from "../actions/authActions";
import { login } from "../../api/usersApi";
export const AuthContext = createContext(initialState);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth context must be an AuthProvider");
  return context;
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const signinn = async ({ email, password }) => {
    try {
      dispatch({ type: AuthActions.AUTH_SIGNIN });
      const resp = await login({ email, password });
      console.log(resp);
      const { token } = resp.data;
      if (token) {
        console.log(token);
        localStorage.setItem("token", token);
        dispatch({
          type: AuthActions.AUTH_SIGNIN_SUCCESS,
          payload: token,
        });
        return true;
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) {
        dispatch({
          type: AuthActions.AUTH_SIGNIN_ERROR,
          payload: error.response.data.message,
        });
      }
    }
  };
  return (
    <AuthContext.Provider value={{ ...state, signinn }}>
      {children}
    </AuthContext.Provider>
  );
};
