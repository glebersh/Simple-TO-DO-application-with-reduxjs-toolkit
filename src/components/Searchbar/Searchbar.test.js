import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reduxHooks from 'react-redux';
import Searchbar from "./Searchbar";
import * as actions from '../store/slices/searchSlice';

jest.mock('../store/slices/searchSlice');
const changeSearchFilter = jest.spyOn(actions, 'changeSearchFilter');

jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Searchbar tests', () => {
  it('Should render and match snapshot', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const searchbar = render(
      <Searchbar />);
    expect(searchbar).toMatchSnapshot();
  });

  it('Should dispatch actions', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const searchbar = render(
      <Searchbar />);

    userEvent.type(searchbar.getByRole('searchbar'), 'Text to search');

    expect(dispatch).toHaveBeenCalledTimes(15);
    expect(changeSearchFilter).toHaveBeenCalledWith("Text to search");
  });
});
