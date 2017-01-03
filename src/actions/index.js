import * as types from '../constants/actionTypes';

export function addTodo(text) {
    return {type: types.ADD_TODO, text};
}

export function completeTodo(id) {
    return {type: types.COMPLETE_TODO, id};
}

export function initPage() {
    return dispatch => {
        return fetch('http://localhost:3000/orderInfo').then(response => response.json()).then(json => dispatch(setOrderInfo(json)));
    };
}

function setOrderInfo(orderDTO) {
    return {type: types.SET_ORDER_INFO, orderDTO};
}
