import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles.module.css";
import axios from 'axios';

export default function Login() {
  // 회원데이터
  const [userData, setUserData] = useState([]);
  const [form, setForm] = useState({ id: '', pass: '' });
  const [validation, setValidation] = useState({ id: '', pass: '' });


  const idRef = useRef(null);
  const passRef = useRef(null);

  /*데이터 가져와서 회원비교*/
  useEffect(() => {

    axios({

      method: 'get',
      url: 'http://127.0.0.1:8000/join'

    }).then((result) => {

      setUserData(result.data);
    })

  }, []);

  const fnChange = (e) => {

    const { name, value } = e.target

    setForm({ ...form, [name]: value });

  };

  const fnSubmit = (e) => {

    e.preventDefault();

    const search = userData.some((val, idx) => val.id === form.id)
    if (search) {
      setValidation({ ...validation, id: '등록된 아이디입니다.' });
      return idRef.current.focus();
    } else if (form.id === '') {
      setValidation({ ...validation, id: '필수 입력 사항입니다.' });
      return passRef.current.focus();
    }

    axios({

      method: 'post',
      url: 'http://127.0.0.1:8000/member/login',
      data: form

    }).then((result) => {



    })

  }

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
                <input type="text" name="pass" placeholder='비밀번호를 입력하세요' onChange={fnChange} ref={passRef} />
              </p>
              <button>로그인</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

