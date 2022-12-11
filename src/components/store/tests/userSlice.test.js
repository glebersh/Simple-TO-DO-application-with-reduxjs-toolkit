import userReducer, {
  userLogin, userLogout
} from '../slices/userSlice';


const notEmptyState = {
  userEmail: 'newemail@gmail.com',
  userId: 100,
  userAccessToken: '14J4k55Ipd039MvsF'
}

describe('User Slice tests', () => {
  it('Should log in user on \'userLogin\' action', () => {
    const action = {
      type: userLogin.type,
      payload: notEmptyState
    };
    const result = userReducer({}, action);

    expect(result.userEmail).toEqual(notEmptyState.userEmail);
    expect(result.userId).toEqual(notEmptyState.userId);
    expect(result.userAccessToken).toEqual(notEmptyState.userAccessToken);
  });

  it('Should log out user on \'userLogout\' action', () => {
    const action = {
      type: userLogout.type
    };
    const result = userReducer({}, action);

    expect(result.userEmail).toEqual(null);
    expect(result.userId).toEqual(null);
    expect(result.userAccessToken).toEqual(null);
  });
});