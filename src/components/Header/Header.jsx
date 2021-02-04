import React from "react";
import style from "./Header.module.css";
import Logo from "../../Logo/logo-checkpoint4.svg";

const Header = () => {
  return (
    <header className={style.Header}>
      <div>
        <img className={style.logo} src={Logo} alt='logo' />
      </div>
      <div className={style.title}>
        <h1 className={style.titletext}>Guitarpédia</h1>
      </div>
    </header>
  );
};

export default Header;
