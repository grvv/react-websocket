import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import wsReducer from "./wsReducer";

export default combineReducers({
  form: formReducer,
  authStatus: authReducer,
  wsState: wsReducer
});
