import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trends: [],
};

export const trendsSlice = createSlice({
  name: 'trends',
  initialState: initialState,
  reducers: {
    addTrending: (state, action) => {
      state.trends = action.payload;
      console.log(action.payload);
    },
  },
});

export const {addTrending} = trendsSlice.actions;
export default trendsSlice.reducer;
