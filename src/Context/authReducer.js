import {LOAD_USER} from "./actions";

//dispatch actions here like in redux
export default (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
