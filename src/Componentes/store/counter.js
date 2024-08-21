import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 7 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    sub: (state, action) => {
      state.counterVal -= action.payload.num;
    },
  },
});

export const counterActions = CounterSlice.actions;
export default CounterSlice;
