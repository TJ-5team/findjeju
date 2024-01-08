import React from 'react';
import styles from '../styles.module.css'
import { Link } from 'react-router-dom';
export default function SearchCourse() {
  return (
      <ul className={styles.courseList}>
        <li>
          <Link className={styles.searchImg}>
            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=918bc12a-8e86-4cb9-bee3-477b37bf8a41" alt="" />
            <span className={styles.distance}>
              <span>
                <strong>코스 총거리</strong>
                17 Km
              </span>
            </span>
          </Link>
          <div className={styles.commonContents}>
            <div className={styles.contentsTitle}>
              <Link>
                남파랑길(부산)
              </Link>
            </div>
            <span className={styles.contentsArea}>부산 남구</span>
            <div className={styles.courseTag}>
              <span>
                #영월화석박물관
              </span>
            </div>
          </div>
          <button></button>
        </li>
      </ul>
  );
}

