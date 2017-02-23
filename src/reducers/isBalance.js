export const isBalance = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_ISBALANCE":
      return !action.isBalance;
    default:
      return state;
  }
};
