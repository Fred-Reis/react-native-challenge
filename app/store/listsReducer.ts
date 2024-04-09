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
    // getTrending: (state) => {
    //   return state.tr
    // },
  },

  // extraReducers: builder => {
  //   builder
  //     .addCase(getAlltrends.fulfilled, (state, action) => {
  //       state.trends = action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(getAlltrends.pending, state => {
  //       state.loading = true;
  //     })
  //     .addCase(getAlltrends.rejected, state => {
  //       state.trends;
  //       state.loading = false;
  //     });
  // },
});

export const {addTrending} = listSlice.actions;
export default listSlice.reducer;
