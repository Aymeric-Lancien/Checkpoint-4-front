import React from "react";
import style from "./WelcomeText.module.css";

const WelcomeText = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.text}>
        Bienvenue sur le site Guitarpédia! Ici tu pourras trouver des infos sur
        tes guitaristes préférés! Et comme je pense à tes yeux, tu n’as pas
        besoin d’activer ton darkmode ici
      </h2>
      <div className={style.bar}/>
    </div>
  );
};

export default WelcomeText;
