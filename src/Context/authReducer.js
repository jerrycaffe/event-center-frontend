import {LOAD_USER,LOGIN_USER,LOGOUT_USER} from "./actions";

//dispatch actions here like in redux
export default (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };
      case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
      };
      case LOGOUT_USER:
        return {
          ...state,
          isAuthenticated: false,
        };
    default:
      return state;
  }
};
