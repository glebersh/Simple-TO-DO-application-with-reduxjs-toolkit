import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todo: [
      { id: 1, text: 'eat', done: false },
      { id: 2, text: 'sleep', done: false },
      { id: 3, text: 'drink', done: false },
      { id: 4, text: 'maybe drink again', done: false },
      { id: 5, text: 'learn redux', done: false },
      { id: 6, text: 'have fun', done: false },
    ]
  },
  reducers: {
    deleteItem(state, action) {
      state.todo = state.todo.filter(item => item.id !== action.payload.id);
    },

    addItem(state, action) {
      state.todo.push({
        id: new Date().toISOString(),
        text: action.payload,
        done: false
      });
    },

    toggleDone(state, action) {
      const neededItem = state.todo.find(item => item.id === action.payload.id);
      neededItem.done = !neededItem.done;
    },

  }
});


export const { addItem,
  deleteItem,
  toggleDone } = todoSlice.actions;

export default todoSlice.reducer;