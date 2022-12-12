import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reduxHooks from 'react-redux';
import SidebarMenu from "./Sidebar";
import * as userActions from '../store/slices/userSlice';
import * as dateActions from '../store/slices/dateSlice';
import { ProSidebarProvider } from 'react-pro-sidebar';
import dayjs from "dayjs";


const today = dayjs().format("YYYY-MM-DD");
const tomorrow = dayjs().add(1, 'day').format("YYYY-MM-DD");

global.matchMedia = global.matchMedia || function () {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
};

jest.mock('../store/slices/userSlice');
const mockUserLogout = jest.spyOn(userActions, 'userLogout');

jest.mock('../store/slices/dateSlice');
const mockChangeDateFilter = jest.spyOn(dateActions, 'changeDateFilter');

jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Searchbar tests', () => {
  it('Should render and match snapshot', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const sidebar = render(
      <ProSidebarProvider>
        <SidebarMenu />
      </ProSidebarProvider>);
    expect(sidebar).toMatchSnapshot();
  });

  it('Should dispatch actions', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const sidebar = render(
      <ProSidebarProvider>
        <SidebarMenu />
      </ProSidebarProvider>);
    userEvent.click(sidebar.getByRole('logout-button'));
    userEvent.click(sidebar.getAllByRole('date-filter-button')[0]);
    userEvent.click(sidebar.getAllByRole('date-filter-button')[1]);
    userEvent.click(sidebar.getAllByRole('date-filter-button')[2]);

    expect(dispatch).toHaveBeenCalledTimes(4);
    expect(mockUserLogout).toHaveBeenCalled();
    expect(mockChangeDateFilter).toHaveBeenCalledWith(today);
    expect(mockChangeDateFilter).toHaveBeenCalledWith(tomorrow);
    expect(mockChangeDateFilter).toHaveBeenCalledWith("");
  });
});
