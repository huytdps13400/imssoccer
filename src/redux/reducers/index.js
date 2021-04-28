import {combineReducers} from 'redux';
import {configAppReducer} from './configAppReducer';

const rootReducer = combineReducers({
  ...configAppReducer,
});
export default rootReducer;
