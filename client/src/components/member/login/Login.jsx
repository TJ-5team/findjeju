import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from '../../../utils/cookie';
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { loginData } from '../../../api/loginApi';
import { getUserData } from '../../../reselector/memberReselector';
import useLogout from '../../../hooks/useLogout';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { persistor } from '../../../store';
import { getUser } from '../../../utils/localStorage';
import { useGetMember } from '../../../hooks/useGetMember';

export default function Login() {

  // 회원데이터
  // const [userData, setUserData] = useState([]);
  const [form, setForm] = useState({ id: '', pass: '' });
  const [validation, setValidation] = useState({ id: '', pass: '' });
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passRef = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector(getUserData);
  // const handleLogout = useLogout();

  /*데이터 가져와서 회원비교*/
  const [userData] = useGetMember();

  const fnChange = (e) => {

    const { name, value } = e.target

    setForm({ ...form, [name]: value });

  };

  const fnSubmit = (e) => {

    e.preventDefault();

    if (form.id === '') {
      setValidation({ ...validation, id: '필수 입력 사항입니다.' });
      return idRef.current.focus();
    }

    if (form.pass === '') {
      setValidation({ ...validation, pass: '필수 입력 사항입니다.' });
      return passRef.current.focus();
    }

    axios({

      method: 'post',
      url: 'http://127.0.0.1:8000/member/login',
      data: form

    }).then((result) => {

      setUser(result.data);

      if (result.data.login_result) {
        alert("로그인에 성공하였습니다.");
        navigate("/");
        let userInfo = jwtDecode(result.data.token);
        setCookie("x-auth-jwt", userInfo);
        //JWT의 decode 메서드는 이 토큰을 해독하여 그 내용을 볼 수 있게 합니다
        dispatch(loginData(userInfo));
      } else {
        if (result.data.cnt === 1) {
          alert("패스워드가 다릅니다.");
          passRef.current.focus();
        } else {
          alert("아이디가 다릅니다.");
          idRef.current.focus();
        }
      }
    });
  };



  return (
    <>

      <div className={styles.wrap}>
        <div className={`${styles.innerWrap} inner`}>
          <h2 className={styles.title}>
            로그인
          </h2>
          <div className={styles.formWrap}>
            <form className={styles.logForm} onSubmit={fnSubmit}>
              <p>
                <label id="login">아이디</label>
                <input type="text" name="id" placeholder='아이디를 입력하세요' onChange={fnChange} ref={idRef} />
              </p>
              <p>
                <label id="pass">비밀번호</label>
                <input type="password" name="pass" placeholder='비밀번호를 입력하세요' onChange={fnChange} ref={passRef} />
              </p>
              <button>로그인</button>
            </form>
          </div>
        </div>
      </div >
    </>
  );
}

