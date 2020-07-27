import React, { useReducer, useEffect } from "react";
import AuthContext from "./authContext";
import { LOAD_USER, LOGIN_USER, LOGOUT_USER } from "./actions";
import authReducer from "./authReducer";
import Axios from "axios";

const AuthState = (props) => {
  //initialState represents our state feel free to add whatever you need e.g event centers etc and add to AuthContext.Provider value
  const initialState = {
    isAuthenticated: localStorage.isAuthenticated,
    user: {},
  };

  //declare state and reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    try {
      const res = Axios.get(
        "https://magnitude-event-manager.herokuapp.com/api/auth/customer/profile"
      );
      dispatch({
        type: LOAD_USER,
        payload: (await res).data.profile,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //persist user details on reload
  useEffect(() => {
    loadUser();
  }, []);

  //declare all action functions you are dispatching in authReducer here and include it in the AuthContext.Provider value

  const loginUser = () => {
    dispatch({ type: LOGIN_USER });
  };
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        loadUser,
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
