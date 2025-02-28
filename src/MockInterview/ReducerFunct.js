export function reducer(state, action) {
  switch (action) {
    case "Incre":
      return { count: state.count + 1 };
    case "Decre":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
