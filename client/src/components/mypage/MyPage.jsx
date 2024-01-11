import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);

export default function MyPage() {

  const [toggle, setToggle] = useState(false);
  const [moreToggle, setMoreToggle] = useState(false);
  const [show, setShow] = useState('')
  const banRef = useRef(null);
  const imgRef = useRef(null);
  const userRef = useRef(null);
  const wrapRef = useRef(null);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   //시작위치 정해주기
  //   window.addEventListener("scroll", fnScroll)
  // }, [])

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

  let scry;

  // const fnScroll = (e) => {

  //   scry = window.scrollY

  //   console.log(scry);
  //   // gsap.set(userRef.current, { opacity: 0 });
  //   gsap.to(userRef.current, {
  //     y: 100, duration: 1, ease: 'power1.out', scrollTrigger: {

  //       trigger: wrapRef,
  //       markers: true,
  //       start: '0px 0%',
  //       end: '0px 100%',
  //       scrub: 1,

  //     }
  //   })
  // }
  /* axios({
    method : 'get',
    url : 'sdasd',
    headers : {'Authorization' : `Bearer ${}`}
  })

  // 서버
  const accessToken = req.headers.Authorization.split(' ')[1]
  const refreshToken = req.cookie

  // accessToken

  서버 측
  // 1. 액세스 확인
  - 토큰 만료되면 다음 단계로 넘어감
  - 정상적이면 200 보내주고 끝  

   // 2. 리프레쉬 
  - 토큰 만료되면 401
  - 정상적이면 다음 단계로 넘어감

   // 3. 리프레쉬 토큰 - 데이터베이스에 있는 토큰과 비교
  - 일치 안하면 401, db에서도 지워줘야 함
  - 일치 하면 다음 단계로 넘어감

   // 4. 액세스토큰 재발급
  - 재발급 후 액세스 토큰 with 유저정보 보내줌


  클라이언트 측
  jwt-decode 
  exp - now 비교를 -> 만료되거나 5분 남았으면 -> 재발급 api 호출
  axiosInstance -> post, delete - 요청을 보내기 전에 재발급 api를 한번 호출함 (intercept)
  
  axiosInstance({
    meth
  })
  .then
  .catch()
  


  try {
    jwt.verify(token, sec) 
  } catch (err) {
    console.log('token expired');
    res.status(401).send({message : 'token expired'})
  } */


  return (
    <>
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
                  <ul className={styles.moreBox}>
                    <li>
                      <Link to=''>
                        개인정보 변경
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        로그아웃
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        회원탈퇴
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.profileImg}>
                  <img src="./images/mypage/user.png" alt="유저이미지" />
                </div>
                <p>반가워요!</p>
                <strong>q*f님</strong>
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
                    <img src="./images/mypage/subscribe.jpg" alt="배너" ref={imgRef} />
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
    </>
  );
}

