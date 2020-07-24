import React, { useReducer } from "react";
import AuthContext from "./authContext";
import { LOAD_USER } from "./actions";
import authReducer from "./authReducer";

const AuthState = (props) => {
  //initialState represents our state feel free to add whatever you need e.g event centers etc and add to AuthContext.Provider value
  const initialState = {
    isAuthenthicated: false,
    loading: true,
    user: {},
  };

  //declare state and reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //declare all action functions you are dispatching in authReducer here and include it in the AuthContext.Provider value
  const loadUser = (user) => {
    dispatch({ type: LOAD_USER, payload: user });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenthicated,
        loading: state.loading,
        user: state.user,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
