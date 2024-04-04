import {createSlice} from '@reduxjs/toolkit';
/**
 * redux store slice example
 */
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
