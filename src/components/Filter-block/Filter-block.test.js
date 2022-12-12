import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import * as actions from '../store/slices/filterSlice';
import FilterBlock from './Filter-block';


jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

jest.mock('../store/slices/filterSlice');
const mockChangeFilter = jest.spyOn(actions, 'changeFilter');

describe('Filter block', () => {
  it('Filter buttons snapshot', () => {

    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const filterBlock = render(<FilterBlock />);
    expect(filterBlock).toMatchSnapshot();
  });

  it('Filter buttons dispatch actions', () => {

    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const filterBlock = render(<FilterBlock />);

    userEvent.click(filterBlock.getAllByRole('button')[0]);
    userEvent.click(filterBlock.getAllByRole('button')[1]);
    userEvent.click(filterBlock.getAllByRole('button')[2]);

    expect(filterBlock.getAllByRole('button')[0]).toBeInTheDocument();
    expect(filterBlock.getAllByRole('button')[1]).toBeInTheDocument();
    expect(filterBlock.getAllByRole('button')[2]).toBeInTheDocument();

    expect(filterBlock.getAllByRole('button')[0].classList.contains('active-btn'));
    expect(filterBlock.getAllByRole('button')[1].classList.contains('active-btn'));
    expect(filterBlock.getAllByRole('button')[2].classList.contains('active-btn'));

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(mockChangeFilter).toHaveBeenCalledWith('all');
    expect(mockChangeFilter).toHaveBeenCalledWith('active');
    expect(mockChangeFilter).toHaveBeenCalledWith('completed');
  });
});