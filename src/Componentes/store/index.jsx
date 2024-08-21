import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter";
import privacySlice from "./prrivay";

const counterStore = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});
export default counterStore;
