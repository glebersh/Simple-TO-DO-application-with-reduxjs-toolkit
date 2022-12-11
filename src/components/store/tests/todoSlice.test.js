import todoReducer,
{
  deleteItem,
  addItem,
  toggleDone,
  editText,
  togglePriority
} from '../slices/todoSlice';

const initialState = {
  todo: [],
  loadingStatus: null,
  errorStatus: null,
}

const mockedTodos = {
  todo: [{
    title: 'Learn something',
    completed: false,
    id: 100,
    date: null,
    priority: 'Low'
  }],
  loadingStatus: null,
  errorStatus: null,
}

describe('Todo Slice tests', () => {
  it('Should return initial state on empty action', () => {
    const result = todoReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('Should add item on \'addItem\' action', () => {
    const action = {
      type: addItem.type,
      payload: mockedTodos.todo[0]
    };

    const result = todoReducer(initialState, action);

    expect(result.todo[0].title).toEqual('Learn something');
    expect(result.todo[0].completed).toEqual(false);
    expect(result.todo[0].priority).toEqual('Low');
  });

  it('Should delete item on \'deleteItem\' action', () => {
    const action = {
      type: deleteItem.type,
      payload: { id: 100 }
    };

    const result = todoReducer(mockedTodos, action);
    expect(result.todo).toEqual([]);
  });

  it('Should edit item text on \'editText\' action', () => {
    const action = {
      type: editText.type,
      payload: { id: 100, editedText: 'New text' }
    };

    const result = todoReducer(mockedTodos, action);
    expect(result.todo[0]).toEqual({
      title: 'New text',
      completed: false,
      id: 100,
      date: null,
      priority: 'Low'
    });
  });

  it('Should toggle item complete status on \'toggleDone\' action', () => {
    const action = {
      type: toggleDone.type,
      payload: { id: 100 }
    };

    const result = todoReducer(mockedTodos, action);
    expect(result.todo[0]).toEqual({
      title: 'Learn something',
      completed: true,
      id: 100,
      date: null,
      priority: 'Low'
    });
  });

  it('Should change item priority status on \'togglePriority\' action', () => {
    const action = {
      type: togglePriority.type,
      payload: { id: 100, priority: 'High' }
    };

    const result = todoReducer(mockedTodos, action);
    expect(result.todo[0]).toEqual({
      title: 'Learn something',
      completed: false,
      id: 100,
      date: null,
      priority: 'High'
    });
  });
});