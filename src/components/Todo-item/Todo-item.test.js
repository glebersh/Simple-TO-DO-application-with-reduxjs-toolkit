import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reduxHooks from 'react-redux';
import * as actions from '../store/slices/todoSlice';
import TodoItem from "./Todo-item";

jest.mock('../store/slices/todoSlice');
const mockDeleteTodo = jest.spyOn(actions, 'deleteTodo');
const mockEditText = jest.spyOn(actions, 'editTextAsync');
const mockTogglePriority = jest.spyOn(actions, 'togglePriority');
const mockToggleComplete = jest.spyOn(actions, 'toggleCompleteState');


jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('ToDo Item tests', () => {
  it('Should render with data and match snapshot', () => {
    const item = render(
      <TodoItem id={100}
        title='Learn something'
        completed={false} />);
    expect(item).toMatchSnapshot();
  });

  it('Should dispatch actions', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const item = render(
      <TodoItem id={100}
        title='Learn something'
        completed={false} />);

    userEvent.click(item.getByRole('check'));
    userEvent.click(item.getByRole('delete-icon'));
    userEvent.selectOptions(item.getByRole('select'), ['Medium']);

    userEvent.click(item.getByRole('edit-icon'));
    userEvent.clear(item.getByRole('editing-text-input'));
    userEvent.type(item.getByRole('editing-text-input'), 'New text');
    userEvent.click(item.getByRole('edit-button'));


    expect(dispatch).toHaveBeenCalledTimes(4);
    expect(mockToggleComplete).toHaveBeenCalled();
    expect(mockDeleteTodo).toHaveBeenCalled();
    expect(mockTogglePriority).toHaveBeenCalledWith({ id: 100, priority: 'Medium' });
    expect(mockEditText).toHaveBeenCalledWith({ id: 100, editedText: 'New text' });
  });
});
