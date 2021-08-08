import {combineReducers} from 'redux';
import exChangeAPIReducer from './../components/exChangeAPIReducer';

const reducers = combineReducers({
    exChangeAPI: exChangeAPIReducer
});

export default reducers;

