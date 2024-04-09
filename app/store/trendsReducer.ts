import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trends: [],
};

export const listSlice = createSlice({
  name: 'trends',
  initialState: initialState,
  reducers: {
    addTrending: (state, action) => {
      state.trends = action.payload;
      console.log(action.payload);
    },
  },
});

export const {addTrending} = listSlice.actions;
export default listSlice.reducer;
