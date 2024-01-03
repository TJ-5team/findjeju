import React from 'react';
import style from "./styles.module.css";
import { Link, useLocation } from 'react-router-dom';
export default function HeaderMenu() {
  console.log(useLocation().pathname);
  const path = useLocation().pathname;
  return (
    <>
      <div className={style.menuWrap}>
        <nav className={style.menuContainer}>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === '/' ? style.active : null}`} to="/">홈</Link>
          </div>
          <div className={style.menuBox}>
            <Link className={`${style.menuItem} ${path === '/festival' ? style.active : null}`} to="/festival">축제</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

