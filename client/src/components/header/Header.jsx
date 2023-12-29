import React from "react";
import style from "./styles.module.css";
import HeaderLogo from "./logo/HeaderLogo.jsx";
import HeaderMenu from "./menu/HeaderMenu.jsx";
import HeaderForm from "./search/HeaderForm.jsx";
export default function Header() {

  return (
    <>
      <header className={style.wrap} >
        <div className={style.container}>
          <HeaderLogo />
          <HeaderMenu />
          <HeaderForm />
        </div>
      </header>
    </>
  );
}

