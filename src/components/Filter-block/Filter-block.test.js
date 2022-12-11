import { screen, render } from '@testing-library/react';
import { toBeInTheDocument, toHaveBeenCalledWith } from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import store from '../store/index';
import * as reduxHooks from 'react-redux';
import FilterBlock from './Filter-block';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');


describe('Filter block', () => {
  it('Filter buttons rendered', () => {
    const filterBlock = render(<FilterBlock />);

    expect(filterBlock.getAllByRole('button')[0]).toBeInTheDocument();
    expect(filterBlock.getAllByRole('button')[1]).toBeInTheDocument();
    expect(filterBlock.getAllByRole('button')[2]).toBeInTheDocument();
  });
});