import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);

export default function MyPage() {

  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState('')
  const banRef = useRef(null);
  const imgRef = useRef(null);
  const userRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    //시작위치 정해주기
    window.addEventListener("scroll", fnScroll)
  }, [])

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

  const fnScroll = (e) => {

    scry = window.scrollY

    console.log(scry);
    // gsap.set(userRef.current, { opacity: 0 });
    gsap.to(userRef.current, {
      y: 100, duration: 1, ease: 'power1.out', scrollTrigger: {

        trigger: wrapRef,
        markers: true,
        start: '0px 0%',
        end: '0px 100%',
        scrub: 1,

      }
    })

    // gsap.fromTo()



  }

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
                <button type='button' className={styles.moreBtn}>더보기</button>
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

