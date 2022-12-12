import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reduxHooks from 'react-redux';
import * as actions from '../store/slices/todoSlice';
import TodoForm from "./Todo-form";
import React from "react";

jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

jest.mock('../store/slices/todoSlice');
const mockAddItem = jest.spyOn(actions, 'addItemAsync');

describe('ToDo Form tests', () => {
  it('Should match snapshot', () => {
    const item = render(<TodoForm />);
    userEvent.click(item.getByRole('form-icon'));
    expect(item).toMatchSnapshot();
  });

  it('Should dispatch actions', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const item = render(
      <TodoForm />);

    userEvent.click(item.getByRole('form-icon'));
    userEvent.click(item.getByRole('button'));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalled();
  });
});
