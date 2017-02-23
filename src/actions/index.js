import * as types from '../constants/actionTypes';

export function initPage() {
    return dispatch => {
        return fetch('http://localhost:3000/payInfo')
        .then(response => response.json())
        .then(json => {
          dispatch(setOrderInfo(json.model.orderInfo));
          dispatch(setChannels(json.model.channels));
        });
    };
}

function setOrderInfo(orderInfo) {
    return {type: types.SET_ORDER_INFO, orderInfo};
}

function setChannels(channels) {
    return {type: types.SET_CHANNELS, channels};
}

export function toggleIsBalance(isBalance) {
    return {type: types.TOGGLE_ISBALANCE, isBalance};
}

export function checkChannel(channel) {
    return {type: types.CHECK_CHANNEL, channel};
}
