import {combineReducers} from 'redux';
import {configAppReducer} from './configAppReducer';
import {NewsReducer} from './newReducer';
import {TokenReducer} from './tokenReducer';

const rootReducer = combineReducers({
  ...configAppReducer,
  ...NewsReducer,
  ...TokenReducer,
});
export default rootReducer;
