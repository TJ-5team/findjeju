import React from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.css";
export default function HeaderLogo() {
  return (
      <div className={style.logoWrap}>
        <h1 className={style.logo}>
          <Link className={style.logoItem} to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </h1>
      </div>
  );
}

