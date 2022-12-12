import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import * as actions from '../store/slices/filterSlice';
import Form from './Form';

jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

jest.mock('../store/slices/filterSlice');
const mockChangeFilter = jest.spyOn(actions, 'changeFilter');

describe('Form', () => {
  it('Form snapshot', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const form = render(<Form />);
    expect(form).toMatchSnapshot();
  });

  // it('Form dispatch actions', () => {
  //   const dispatch = jest.fn();
  //   mockUseDispatch.mockReturnValue(dispatch);

  //   const form = render(<Form />);

  //   userEvent.type(form.getByRole('email-input'), 'newemail@gmail.com');
  //   userEvent.type(form.getByRole('password-input'), 'newpassword');
  //   userEvent.click(form.getByRole('button'));

  //   expect(dispatch).toHaveBeenCalledTimes(1);
  // });
});