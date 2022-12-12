import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reduxHooks from 'react-redux';
import TodoList from "./Todo-list";
import * as actions from '../store/slices/prioritySlice';

jest.mock('../store/slices/prioritySlice');
const changePriorityFilter = jest.spyOn(actions, 'changePriorityFilter');

const todos = [
  {
    id: 1,
    title: 'Eat',
    completed: false,
    priority: 'Low',
    date: null
  },
  {
    id: 2,
    title: 'Sleep',
    completed: false,
    priority: 'Low',
    date: null
  },
  {
    id: 5,
    title: 'Learn Redux Toolkit',
    completed: true,
    priority: 'Low',
    date: null
  },
  {
    title: 'Learn JEST and React Test Library',
    completed: false,
    userId: 1,
    date: '2022-12-07',
    priority: 'Low',
    id: 7
  }
]

jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');


describe('ToDo List tests', () => {
  it('Should render and match snapshot', () => {
    mockUseSelector.mockReturnValue(todos);
    const list = render(
      <TodoList />);
    expect(list).toMatchSnapshot();
  });

  it('Should dispatch actions', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);
    mockUseSelector.mockReturnValue(todos);

    const list = render(
      <TodoList />);
    userEvent.selectOptions(list.getByRole('priority-select'), ['Medium']);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(changePriorityFilter).toHaveBeenCalledWith("Medium");
  });
});
