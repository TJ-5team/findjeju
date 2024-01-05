import React from "react";
import style from "./styles.module.css";
import HeaderLogo from "./logo/HeaderLogo.jsx";
import HeaderMenu from "./menu/HeaderMenu.jsx";
import HeaderForm from "./search/HeaderForm.jsx";
import { useLocation } from "react-router-dom";
export default function Header() {
  const path = useLocation().pathname;
  return (
    <>
      <header className={`${style.wrap} ${path !== '/' ? style.notHome : ""}`} >
        <div className={style.container}>
          <HeaderLogo />
          <HeaderMenu />
          <HeaderForm />
        </div>
      </header>
    </>
  );
}

