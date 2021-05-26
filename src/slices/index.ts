import { combineReducers } from 'redux'
import alert from './alert.slice';

const rootReducer = combineReducers({
  alert
});

export default rootReducer;