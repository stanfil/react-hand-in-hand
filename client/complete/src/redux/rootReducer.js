import { combineReducers } from 'redux';
import auth from './reducers/auth';
import items from './reducers/items';

export default combineReducers({
    auth,
    items
});