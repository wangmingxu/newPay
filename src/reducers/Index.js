import {combineReducers} from 'redux';
import todos from './todos';
import {OrderInfo} from './orderInfo';

const rootReducer = combineReducers({
    todos,
    OrderInfo
});

export default rootReducer;
