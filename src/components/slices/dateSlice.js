import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = '';

const dateSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeDateFilter: (_, action) => action.payload
  },
});

export const { changeDateFilter } = dateSlice.actions;

export default dateSlice.reducer;