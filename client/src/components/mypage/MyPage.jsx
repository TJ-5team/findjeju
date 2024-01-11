import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { gsap } from "gsap";
import axios from 'axios';
import { getUser } from '../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { loginData } from '../../api/loginApi';

export default function MyPage() {

  const [toggle, setToggle] = useState(false);
  const [moreToggle, setMoreToggle] = useState(false);
  const [member, setMember] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const banRef = useRef(null);
  const imgRef = useRef(null);
  const userRef = useRef(null);
  const wrapRef = useRef(null);
  const userInfo = getUser();
  const dispatch = useDispatch();
  useEffect(() => {

    if (toggle) {
      gsap.set(banRef.current, { height: 0, display: 'block' })
      gsap.to(banRef.current, { height: 270, duration: 0.6, ease: "power1.out" })
      gsap.set(imgRef.current, { height: 0 })
      gsap.to(imgRef.current, { height: 270, duration: 0.6, ease: "power1.out" })
    }
    if (!toggle) {
      gsap.to(banRef.current, {
        height: 0, duration: 0.4, ease: "power1.out", onComplete: () => {
          gsap.set(banRef.current, { height: 0, display: 'none' })
        }
      })

      gsap.to(imgRef.current, {
        height: 0, duration: 0.4, ease: "power1.out", onComplete: () => {
          gsap.set(imgRef.current, { height: 0 })
        }
      })
    }

  }, [toggle]);

  useEffect(() => {

    axios({

      method: "get",
      url: `http://127.0.0.1:8000/member/${params.mid}`

    }).then((result) => {
      setMember(result.data);
    });

  }, []);

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

  };

  const fnDelete = (e) => {

    const confirm = window.confirm('회원을 탈퇴하시겠습니까?');

    if (!confirm) {
      alert("취소되었습니다.")
      return
    }

    axios({

      method: "delete",
      url: `http://127.0.0.1:8000/member/${params.mid}`

    }).then((result) => {

      alert("탈퇴 되었습니다.");
      navigate("/");

    });

  }



  return (
    <>
      {userInfo.id ?
        <div className={styles.wrap} ref={wrapRef}>
          <div className={styles.titleWrap}>
            <h2 className={`${styles.title} inner`}>
              마이페이지
            </h2>
          </div>
          <div className={styles.contentWrap}>
            <div className={`${styles.contentInner} inner`}>
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
                    {member[0] && <img src={"http://127.0.0.1:8000/" + member[0].image} alt="유저이미지" />}
                  </div>
                  <p>반가워요!</p>
                  {member[0] && <strong>{`${member[0].id.substring(0, 1)}*${member[0].id.substring(3, 2)}님`}</strong>}
                </div>
              </div>
              <div className={styles.contentBox}>
                <h3 className={styles.contentTitle}>
                  대한민국 구석구석 혜택
                </h3>
                <ul className={styles.contentList}>
                  <li>
                    <Link to="" onClick={() => {
                      setToggle((toggle) => !toggle)
                    }}>01월 가볼래-터</Link>
                    <div className={styles.banner} ref={banRef}>
                      <img src="/images/mypage/subscribe.jpg" alt="배너" ref={imgRef} />
                    </div>
                  </li>
                  <li>
                    <Link to="">디지털 관광주민증</Link>
                  </li>
                </ul>
                <h3 className={styles.contentTitle}>
                  나의활동
                </h3>
                <ul className={styles.activeList}>
                  <li>
                    <Link to="#">
                      <em>0</em>
                    </Link>
                    <span>즐겨찾기</span>
                  </li>
                  <li>
                    <Link to="#">
                      <em>0</em>
                    </Link>
                    <span>여행톡</span>
                  </li>
                  <li>
                    <Link to="#">
                      <em>0</em>
                    </Link>
                    <span>발도장</span>
                  </li>
                  <li>
                    <Link to="#">
                      <em>0</em>
                    </Link>
                    <span>코스</span>
                  </li>
                  <li>
                    <Link to="#">
                      <em>0</em>
                    </Link>
                    <span>관광정보 수정/<br />신규 요청</span>
                  </li>
                  <li>
                    <Link to="#">
                      <em>0</em>
                    </Link>
                    <span>Q&A</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div >
        : <div>
          없습니다.
        </div>
      }
    </>
  );
}

