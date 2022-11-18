import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useAuthentification() {
  const { email, token, id } = useSelector(state => state.users);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

