import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const response = await
        fetch('http://localhost:3004/todos/');

      if (!response.ok) {
        throw new Error('Server error!');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`http://localhost:3004/todos/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Item was not deleted due to an occurred error');
      }
      dispatch(deleteItem({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleCompleteState = createAsyncThunk(
  'todo/toggleCompleteState',
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todoItem = getState().todoReducer.todo.find(todo => todo.id === id);
    try {
      const response = await fetch(`http://localhost:3004/todos/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            completed: !todoItem.completed
          })
        }
      );
      if (!response.ok) {
        throw new Error('Item was not deleted due to an occurred error');
      }
      dispatch(toggleDone({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItemAsync = createAsyncThunk(
  'todo/addItemAsync',
  async function ({ text, reminderDate }, { rejectWithValue, dispatch }) {
    try {
      const newTask = {
        title: text,
        completed: false,
        userId: 1,
        date: reminderDate,
        priority: 'Low',
      };
      const response = await fetch(`http://localhost:3004/todos/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        }
      );
      if (!response.ok) {
        throw new Error('Item was not deleted due to an occurred error');
      }
      const data = await response.json();
      dispatch(addItem(data));
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTextAsync = createAsyncThunk(
  'todo/editTextAsync',
  async function ({ id, editedText }, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`http://localhost:3004/todos/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: editedText
          })
        }
      );
      if (!response.ok) {
        throw new Error('Item was not deleted due to an occurred error');
      }
      dispatch(editText({ id, editedText }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todo: [],
    loadingStatus: null,
    errorStatus: null,
  },
  reducers: {
    deleteItem(state, action) {
      state.todo = state.todo.filter(item => item.id !== action.payload.id);
    },

    addItem(state, action) {
      state.todo.push(action.payload);
    },

    toggleDone(state, action) {
      const neededItem = state.todo.find(item => item.id === action.payload.id);
      neededItem.completed = !neededItem.completed;
    },

    editText(state, action) {
      const neededItem = state.todo.find(item => item.id === action.payload.id);
      neededItem.title = action.payload.editedText;
    },

    togglePriority(state, action) {
      const neededItem = state.todo.find(item => item.id === action.payload.id);
      neededItem.priority = action.payload.priority;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.loadingStatus = 'loading'
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.loadingStatus = 'resolved'
      state.todo = action.payload
    },
    [fetchTodos.rejected]: (state, action) => {
      state.loadingStatus = 'rejected'
      state.errorStatus = action.payload;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.loadingStatus = 'rejected'
      state.errorStatus = action.payload;
    },
    [toggleCompleteState.rejected]: (state, action) => {
      state.loadingStatus = 'rejected'
      state.errorStatus = action.payload;
    },
    [addItemAsync.rejected]: (state, action) => {
      state.loadingStatus = 'rejected'
      state.errorStatus = action.payload;
    },
  },
});


export const { addItem,
  deleteItem,
  toggleDone,
  editText, togglePriority } = todoSlice.actions;

export default todoSlice.reducer;