export const OrderInfo = (state = {}, action) => {
  switch (action.type) {
    case "SET_ORDER_INFO":
      return action.orderDTO;
    default:
      return state;
  }
};
