import { createSlice } from "@reduxjs/toolkit";

const initialState = 'All';

const prioritySlice = createSlice({
  name: 'priority',
  initialState,
  reducers: {
    changePriorityFilter: (_, action) => action.payload,
  },
});

export const { changePriorityFilter } = prioritySlice.actions;

export default prioritySlice.reducer;