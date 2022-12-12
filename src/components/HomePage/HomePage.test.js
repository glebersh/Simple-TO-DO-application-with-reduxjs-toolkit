import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import HomePage from './HomePage';
import TodoList from '../Todo-list';
import { ProSidebarProvider } from 'react-pro-sidebar';
import * as routerNavigation from 'react-router-dom';
import * as todoActions from '../store/slices/todoSlice';

global.matchMedia = global.matchMedia || function () {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
};

jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');

jest.mock('../Todo-list', () => {
  const ComponentToMock = () => <div />;
  return ComponentToMock;
});

jest.mock('react-router-dom');
const mockNavigate = jest.spyOn(routerNavigation, 'Navigate');

jest.mock('../store/slices/todoSlice');
const mockFetchTodos = jest.spyOn(todoActions, 'fetchTodos');

const ComponentToTest = require('./HomePage').default;


describe('Home page', () => {
  it('Home page snapshot', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    mockUseSelector
      .mockReturnValueOnce('resolved')
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('newemail@gmail.com');

    mockNavigate.mockReturnValue(<div>Navigate</div>);

    const component = render(
      <ProSidebarProvider>
        <ComponentToTest />
      </ProSidebarProvider>);
    expect(component).toMatchSnapshot();
  });

  // it('Home page should render spinner on loading data', () => {
  //   const dispatch = jest.fn();
  //   mockUseDispatch.mockReturnValue(dispatch);

  //   mockUseSelector
  //     .mockReturnValueOnce('resolved')
  //     .mockReturnValueOnce('error')
  //     .mockReturnValueOnce('newemail@gmail.com');

  //   const component = render(
  //     <ProSidebarProvider>
  //       <ComponentToTest />
  //     </ProSidebarProvider>);

  //   expect(component.getByRole('alert-message')).toBeInTheDocument();
  // });

  it('Home page dispatch fetch todo', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    mockUseSelector
      .mockReturnValueOnce('resolved')
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('newemail@gmail.com');

    mockNavigate.mockReturnValue(<div>Navigate</div>);

    const component = render(
      <ProSidebarProvider>
        <ComponentToTest />
      </ProSidebarProvider>);

    userEvent.click(component.getByRole('fetch-data-button'));


    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockFetchTodos).toHaveBeenCalledTimes(1);
  });
});