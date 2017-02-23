export const channeling = (state = {}, action) => {
  switch (action.type) {
    case "CHECK_CHANNEL":
      return action.channel;
    default:
      return state;
  }
};
