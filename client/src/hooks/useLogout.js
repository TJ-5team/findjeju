import { useDispatch } from 'react-redux';
import { removeCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { loginData } from '../api/loginApi';

export default function useLogout(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function handleLogout(){


    const userInfo = { id: '', iat: 0 }
    alert("로그아웃 되었습니다.")
    dispatch(loginData(userInfo));
    removeCookie('x-auth-jwt');
    navigate("/");

  }

  return handleLogout

}

