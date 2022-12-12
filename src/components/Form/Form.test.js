import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import * as reduxHooks from 'react-redux';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import * as userActions from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';

jest.mock('react-redux');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

jest.mock('../store/slices/userSlice');
const mockUserLogin = jest.spyOn(userActions, 'userLogin');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


const loginHandler = (email, password) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(userActions.userLogin({
    userEmail: email,
    userPassword: password
  })
  );
  navigate('/TO-DO-application/')
};

describe('Form', () => {
  it('Form snapshot', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const form = render(<Form />);
    expect(form).toMatchSnapshot();
  });

  it('Form dispatch actions if login', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    const form = render(<Form title='Sign In' loginHandler={loginHandler} />);

    userEvent.type(form.getByRole('email-input'), 'newemail@gmail.com');
    userEvent.type(form.getByRole('password-input'), 'newpassword');
    userEvent.click(form.getByRole('button'));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockUserLogin).toHaveBeenCalledWith({
      "userEmail": "newemail@gmail.com",
      "userPassword": "newpassword",
    });
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/TO-DO-application/');
  });
});