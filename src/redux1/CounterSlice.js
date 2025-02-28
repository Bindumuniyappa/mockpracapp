import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "addItem",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = CounterSlice.actions;
export default CounterSlice.reducer;
