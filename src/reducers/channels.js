export const channels = (state = [], action) => {
  switch (action.type) {
    case "SET_CHANNELS":
      return action.channels;
    default:
      return state;
  }
};
