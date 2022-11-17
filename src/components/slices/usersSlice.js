import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { localPortNum } from "./todoSlice";


export const addUserAsync = createAsyncThunk(
  'users/addUserAsync',
  async function ({ login, password }, { rejectWithValue, dispatch }) {
    try {
      const newUser = {
        login,
        password,
      }
      const response = await
        fetch(`http://localhost:${localPortNum}/users/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });

      if (!response.ok) {
        throw new Error('Server error!');
      }

      const data = await response.json();
      dispatch(addUser(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addUser(state, action) {
      state.users.push({
        id: new Date().toISOString(),
        login: action.payload.login,
        password: action.payload.password,
      });
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;