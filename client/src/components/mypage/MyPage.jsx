import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
export default function MyPage() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.titleWrap}>
          <h2 className={`${styles.title} inner`}>
            마이페이지
          </h2>
        </div>
        <div className={styles.contentWrap}>
          <div className={`${styles.contentInner} inner`}>
            <div className={styles.userBox}>
              <div className={styles.userImage}>

              </div>
            </div>
            <div className={styles.contentBox}>
              <h3 className={styles.contentTitle}>
                대한민국 구석구석 혜택
              </h3>
              <ul className={styles.contentList}>
                <li>
                  <Link to="">01월 가볼래-터</Link>
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
                  <span>관광정보 수정/신규 요청</span>
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

