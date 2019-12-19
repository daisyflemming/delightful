import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import selectAnalysis from "./selectAnalysis";
import rootReducer from "./rootReducer";

export default combineReducers({
  rootReducer, selectAnalysis,  'form': formReducer});
