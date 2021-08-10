import { combineReducers } from 'redux';
import exChangeAPIReducer from './exchangeAPI.reducer';
import exChangeReducer from './exchangeLocal.reducer';

const reducers = combineReducers({
  exChangeAPI: exChangeAPIReducer,
  exChange: exChangeReducer,
});

export default reducers;
