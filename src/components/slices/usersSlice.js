import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addUser(state, action) {
      state.users.push({
        id: 1,
        login: action.payload.login,
        password: action.payload.password,
      });
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;