import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const localPortNum = 3001;

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const response = await
        fetch(`http://localhost:${localPortNum}/todos/`);

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
      const response = await fetch(`http://localhost:${localPortNum}/todos/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Item wasn\'t  deleted due to an occurred error');
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
      const response = await fetch(`http://localhost:${localPortNum}/todos/${id}`,
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
        throw new Error('Item complete status wasn\'t toggled due to an occurred error');
      }
      dispatch(toggleDone({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItemAsync = createAsyncThunk(
  'todo/addItemAsync',
  async function ({ text, reminderDate }, { rejectWithValue }) {
    try {
      const newTask = {
        title: text,
        completed: false,
        userId: 1,
        date: reminderDate,
        priority: 'Low',
      };
      const response = await fetch(`http://localhost:${localPortNum}/todos/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        }
      );
      if (!response.ok) {
        throw new Error('Item wasn\'t added due to an occurred error');
      }
      const data = await response.json();
      return data;
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
      const response = await fetch(`http://localhost:${localPortNum}/todos/${id}`,
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
        throw new Error('Item wasn\'t edited due to an occurred error');
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.todo.push(action.payload);
      })
      .addMatcher((action) => action.type.endsWith('fetchTodos/rejected'), (state, action) => {
        state.loadingStatus = 'rejected';
        state.errorStatus = action.payload || "Error";
      })
      .addMatcher((action) => action.type.endsWith('fetchTodos/pending'), (state) => {
        state.loadingStatus = 'loading';
      })
      .addMatcher((action) => action.type.endsWith('/fulfilled'), (state) => {
        state.loadingStatus = 'resolved';
      })
  }
});


export const { addItem,
  deleteItem,
  toggleDone,
  editText, togglePriority } = todoSlice.actions;

export default todoSlice.reducer;