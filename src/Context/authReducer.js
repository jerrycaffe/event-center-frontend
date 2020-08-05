import { LOAD_USER, LOGIN_USER, LOGOUT_USER, LOAD_ADMIN} from "./actions";

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
      case LOAD_ADMIN:
        return {
          ...state,
          admin: action.payload,
        };
    default:
      return state;
  }
};
