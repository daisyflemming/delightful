import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import rootReducer from "./rootReducer";

export default combineReducers({
  rootReducer, 'form': formReducer});
