import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/CounterSlice";

const AppStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default AppStore;
