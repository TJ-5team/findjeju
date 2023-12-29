import React from "react";
import style from "./styles.module.css";
import { Link } from "react-router-dom";
export default function HeaderForm() {
  return (
    <>
      <div className={style.formWrap}>
        <div className={style.input}>
          {/* 크롬 아이디 자동완성 기능방지용 */}
          <input style={{"display":"none"}} type="text" />
          <input style={{"display":"none"}} type="password" />
          {/* 크롬 아이디 자동완성 기능방지용 */}
          <input type="text" placeholder="어디로, 어떤 여행을 떠날 예정인가요?" title="검색" id="search" autoComplete="off"/>
          <Link to={"/"} className={style.btnSearch}></Link>
        </div>
        <div className={style.profile}>
          <Link to={"/"} className={style.btnProfile}></Link>
        </div>
      </div>
    </>
  );
}