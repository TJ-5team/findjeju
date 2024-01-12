import React from "react";
import style from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";
export default function HeaderMenu() {
  const path = useLocation().pathname;
  return (
    <>
      <div className={style.menuWrap}>
        <nav className={style.menuContainer}>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/" ? style.active : null}`} to="/">홈</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/festival" ? style.active : null}`} to="/festival">축제</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/lodging" ? style.active : null}`} to="/lodging">숙소</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/restaurant" ? style.active : null}`} to="/restaurant">음식점</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/tourist" ? style.active : null}`} to="/tourist">여행지</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/cultural" ? style.active : null}`} to="/cultural">문화시설</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/sports" ? style.active : null}`} to="/sports">레포츠</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === "/shopping" ? style.active : null}`} to="/shopping">쇼핑</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

