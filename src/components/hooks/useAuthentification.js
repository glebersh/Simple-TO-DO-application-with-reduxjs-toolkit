import { useSelector } from 'react-redux';

export function useAuthentification() {
  const { email, token, id } = useSelector(state => state.users);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}