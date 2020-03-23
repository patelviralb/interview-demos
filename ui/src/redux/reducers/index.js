import {combineReducers} from "redux";
import fieldBuilderReducer from './fieldBuilderReducer';

export default combineReducers({
  field: fieldBuilderReducer
});