import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginData } from '../../../api/loginApi';
import axios from 'axios';
import { getUser } from '../../../utils/localStorage';
export default function UserBox({ member }) {

  const [moreToggle, setMoreToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRef = useRef(null);
  const userInfo = getUser();

  // 로그아웃에 사용
  const fnLogout = () => {

    const confirm = window.confirm('로그아웃을 하시겠습니까?');

    if (!confirm) {
      alert("취소되었습니다.")
      return
    }
    dispatch(loginData({ id: '', iat: '' }));
    // await persistor.purge(); // persistStore의 데이터 전부 날림
    navigate("/");
    window.location.reload();

  };

  const fnDelete = (e) => {

    const confirm = window.confirm('회원을 탈퇴하시겠습니까?');

    if (!confirm) {
      alert("취소되었습니다.")
      return
    }

    axios({

      method: "delete",
      url: `http://192.168.50.31:8000/member/${userInfo.id}`

    }).then((result) => {

      alert("탈퇴 되었습니다.");
      navigate("/");
      window.location.reload();

    });

  };

  return (
    <>
      <div className={styles.userBox} ref={userRef}>
        <div className={styles.userImage}>
          <div className={styles.moreWrap}>
            <button type='button' className={styles.moreBtn} onClick={() => {
              setMoreToggle((more) => !more)
            }}>더보기</button>
            {moreToggle ?
              <ul className={styles.moreBox}>
                <li>
                  <Link to='' onClick={fnLogout}>
                    로그아웃
                  </Link>
                </li>
                <li>
                  <Link to='' onClick={fnDelete}>
                    회원탈퇴
                  </Link>
                </li>
              </ul>
              :
              null
            }
          </div>
          <div className={styles.profileImg}>
            {member && <img src={"http://192.168.50.31:8000/" + member.image} alt="유저이미지" />}
          </div>
          <p>반가워요!</p>
          {member && <strong>{`${member.id.substring(0, 1)}*${member.id.substring(3, 2)}님`}</strong>}
        </div>
      </div>
    </>
  );
}

