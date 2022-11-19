import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

export function useAuthentification() {
  const { email, token, id } = useSelector(state => state.users);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

