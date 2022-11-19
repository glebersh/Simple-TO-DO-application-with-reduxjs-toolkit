import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchFilter: (_, action) => action.payload
  },
});

export const { changeSearchFilter } = searchSlice.actions;

export default searchSlice.reducer;