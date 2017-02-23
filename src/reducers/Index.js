import {combineReducers} from 'redux';
import {orderInfo} from './orderInfo';
import {channels} from './channels';
import {isBalance} from './isBalance';
import {channeling} from './channeling';

const rootReducer = combineReducers({
    orderInfo,
    channels,
    isBalance,
    channeling
});

export default rootReducer;
