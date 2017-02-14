import {combineReducers} from 'redux';
import {orderInfo} from './orderInfo';
import {channels} from './channels';

const rootReducer = combineReducers({
    orderInfo,
    channels
});

export default rootReducer;
