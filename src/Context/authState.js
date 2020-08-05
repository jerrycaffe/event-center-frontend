import React, { useReducer, useEffect } from "react";
import AuthContext from "./authContext";
import { LOAD_USER, LOGIN_USER, LOGOUT_USER, LOAD_ADMIN } from "./actions";
import authReducer from "./authReducer";
import Axios from "axios";

const AuthState = (props) => {
  //initialState represents our state feel free to add whatever you need e.g event centers etc and add to AuthContext.Provider value
  const initialState = {
    isAuthenticated: localStorage.isAuthenticated,
    user: {},
    admin: {},
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

  const loadAdmin = async () => {
    try {
      const res = Axios.get(
        "https://magnitude-event-manager.herokuapp.com/api/auth/admin/profile"
      );
      dispatch({
        type: LOAD_ADMIN,
        payload: (await res).data.profile,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //persist user details on reload
  useEffect(() => {
    if (localStorage.account === "user") {
      loadUser();
    }
    if (localStorage.account === "admin") {
      loadAdmin();
    }
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
        admin: state.admin,
        loadUser,
        loginUser,
        logoutUser,
        loadAdmin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
