import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function HeaderForm() {
  function handleFocus(){

  }
  return (
    <>
      <div className={styles.formWrap}>
        <div className={styles.input}>
          {/* 크롬 아이디 자동완성 기능방지용 */}
          <input style={{"display":"none"}} type="text" />
          <input style={{"display":"none"}} type="password" />
          {/* 크롬 아이디 자동완성 기능방지용 */}
          <input type="text" placeholder="어디로, 어떤 여행을 떠날 예정인가요?" title="검색" id="search" autoComplete="off" onFocus={handleFocus}/>
          <Link to={"/"} className={styles.btnSearch}></Link>
        </div>
        <div className={styles.profile}>
          <Link to={"/"} className={styles.btnProfile}></Link>
        </div>
      </div>
    </>
  );
}