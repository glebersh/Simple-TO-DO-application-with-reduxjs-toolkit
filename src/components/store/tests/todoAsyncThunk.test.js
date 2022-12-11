import {
  fetchTodos, deleteTodo,
  toggleCompleteState,
  addItemAsync,
  editTextAsync
} from '../slices/todoSlice';

global.fetch = jest.fn();

const mockedTodos = [{
  title: 'Learn something',
  completed: false,
  id: 100,
  date: null,
  priority: 'Low'
}]



describe('todoReducer Async Thunk', () => {
  it('fetchTodos with \'resolved\' response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockedTodos)
    })

    const dispatch = jest.fn();
    const thunk = fetchTodos();

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    const [startCall, endCall] = calls;

    expect(calls).toHaveLength(2);
    expect(startCall[0].type).toBe(fetchTodos.pending().type);
    expect(endCall[0].type).toBe(fetchTodos.fulfilled().type);
    expect(endCall[0].payload).toBe(mockedTodos);
  });

  it('fetchTodos with \'rejected\' response', async () => {
    fetch.mockResolvedValue({
      ok: false
    })

    const dispatch = jest.fn();
    const thunk = fetchTodos();

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    const [startCall, endCall] = calls;

    expect(calls).toHaveLength(2);
    expect(startCall[0].type).toBe(fetchTodos.pending().type);
    expect(endCall[0].type).toBe(fetchTodos.rejected().type);
    expect(endCall[0].meta.rejectedWithValue).toBe(true);
    expect(endCall[0].payload).toBe('Server error!');
  });

  it('deleteTodo with \'resolved\' response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve()
    })

    const dispatch = jest.fn();
    const thunk = deleteTodo(100);

    await thunk(dispatch, () => ({}));
    const { calls } = dispatch.mock;
    const [startCall, dispatchCall, endCall] = calls;

    expect(calls).toHaveLength(3);
    expect(startCall[0].type).toBe(deleteTodo.pending().type);
    expect(dispatchCall[0].type).toBe('todos/deleteItem');
    expect(endCall[0].type).toBe(deleteTodo.fulfilled().type);
    expect(dispatchCall[0].payload.id).toBe(100);
  });

  it('deleteTodo with \'rejected\' response', async () => {
    fetch.mockResolvedValue({
      ok: false,
    })

    const dispatch = jest.fn();
    const thunk = deleteTodo(100);

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    const [startCall, endCall] = calls;


    expect(startCall[0].type).toBe(deleteTodo.pending().type);
    expect(endCall[0].type).toBe(deleteTodo.rejected().type);
    expect(calls).toHaveLength(2);
  });

  it('addItemAsync with \'resolved\' response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve()
    })

    const dispatch = jest.fn();
    const thunk = addItemAsync({ id: 101, text: 'Drink beer' });

    await thunk(dispatch, () => ({}));
    const { calls } = dispatch.mock;
    const [startCall, endCall] = calls;

    expect(calls).toHaveLength(2);
    expect(startCall[0].type).toBe(addItemAsync.pending().type);
    expect(endCall[0].type).toBe(addItemAsync.fulfilled().type);
  });

  it('addItemAsync with \'rejected\' response', async () => {
    fetch.mockResolvedValue({
      ok: false,
    })

    const dispatch = jest.fn();
    const thunk = addItemAsync({ id: 101, text: 'Drink beer' });

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    const [startCall, endCall] = calls;

    expect(calls).toHaveLength(2);
    expect(startCall[0].type).toBe(addItemAsync.pending().type);
    expect(endCall[0].type).toBe(addItemAsync.rejected().type);
  });

  it('editTextAsync with \'resolved\' response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve()
    })

    const dispatch = jest.fn();
    const thunk = editTextAsync({ id: 101, editedText: 'Drink beer' });

    await thunk(dispatch, () => ({}));
    const { calls } = dispatch.mock;
    const [startCall, dispatchCall, endCall] = calls;

    expect(calls).toHaveLength(3);
    expect(startCall[0].type).toBe(editTextAsync.pending().type);
    expect(endCall[0].type).toBe(editTextAsync.fulfilled().type);
    expect(dispatchCall[0].type).toBe('todos/editText');
    expect(dispatchCall[0].payload.id).toBe(101);
    expect(dispatchCall[0].payload.editedText).toBe('Drink beer');
  });

  it('editTextAsync with \'rejected\' response', async () => {
    fetch.mockResolvedValue({
      ok: false
    })

    const dispatch = jest.fn();
    const thunk = editTextAsync({ id: 101, editedText: 'Drink beer' });

    await thunk(dispatch, () => ({}));
    const { calls } = dispatch.mock;
    const [startCall, endCall] = calls;

    expect(calls).toHaveLength(2);
    expect(startCall[0].type).toBe(editTextAsync.pending().type);
    expect(endCall[0].type).toBe(editTextAsync.rejected().type);
  });
});