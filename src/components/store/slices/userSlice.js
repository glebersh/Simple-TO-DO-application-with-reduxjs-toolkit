import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: null,
  userId: null,
  userAccessToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
      state.userAccessToken = action.payload.userAccessToken;
    },
    userLogout: (state) => {
      state.userEmail = null;
      state.userId = null;
      state.userAccessToken = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;