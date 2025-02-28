export function reducer(state, action) {
  switch (action) {
    case "ADD_ITEM":
      return { count: state.count + 1 };
    case "REMOVE_ITEM":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
