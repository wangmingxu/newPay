export const orderInfo = (state = {}, action) => {
  switch (action.type) {
    case "SET_ORDER_INFO":
      return action.orderInfo;
    default:
      return state;
  }
};
