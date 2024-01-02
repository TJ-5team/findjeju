import React from 'react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer className={styles.Wrap}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogoWrap}>
            <span className={styles.footLogo}>
              <img src="https://cdn.visitkorea.or.kr/resources/images/common/logo_foot.png" alt="한국관광공사" />
            </span>
            <ul className={styles.logoListWrap}>
              <li>
                <Link to="https://api.visitkorea.or.kr/#/" target="_blank">
                  <img src="https://korean.visitkorea.or.kr/resources/images/common/logo_foot_api.png?v=20230601001" alt="" />
                </Link>
              </li>
              <li>
                <Link to="http://www.wa.or.kr/board/list.asp?search=total&SearchString=%B4%EB%C7%D1%B9%CE%B1%B9%20%B1%B8%BC%AE%B1%B8%BC%AE&BoardID=0006" target="_blank">
                  <img src="https://cdn.visitkorea.or.kr/resources/images/common/logo_foot_wa.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="https://kto.visitkorea.or.kr/kor.kto" target="_blank">
                  <img src="https://cdn.visitkorea.or.kr/resources/images/common/logo_foot_gg.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="https://www.mcst.go.kr/kor/main.jsp" target="_blank">
                  <img src="https://cdn.visitkorea.or.kr/resources/images/common/logo_foot_mg.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

