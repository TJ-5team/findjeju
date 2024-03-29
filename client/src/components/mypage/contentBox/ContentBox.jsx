import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { gsap } from "gsap";
import axios from 'axios';
import { getUser } from '../../../utils/localStorage';
export default function ContentBox() {

  const [toggle, setToggle] = useState(false);
  const imgRef = useRef(null);
  const banRef = useRef(null);
  const userInfo = getUser();
  const [reviewCount, setReviewCount] = useState([]);

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

    if (userInfo.id !== '') {
      axios({

        method: 'get',
        url: `http://127.0.0.1:8000/review/${userInfo.id}`

      }).then((result) => {
        if (result.data) {
          setReviewCount(result.data.length);
        }
      })
    }


  }, []);

  return (
    <>
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
              <em>{reviewCount}</em>
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
    </>
  );
}

