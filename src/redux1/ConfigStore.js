import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "../redux1/CounterSlice";

const appStore = configureStore({
  reducer: {
    addItem: reducerSlice,
  },
});

export default appStore;
