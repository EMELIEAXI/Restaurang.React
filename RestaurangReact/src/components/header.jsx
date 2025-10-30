import React from "react";
import styles from "../styling/header.module.css"

const Header = () => {
  return (
    <header>
      <div className={styles["header-background"]}>
        <div className={styles["header-content"]}>
          <div className={styles["heading"]}>
            <h1>Sakura Sushi</h1>
            <p>En bit av Japan, mitt i stan.
            Från havet till tallriken - ren smak, enkelhet och balans.
            Luta dig tillbaka och låt varje tugga tala för sig själv.</p>
            <h2 className={styles["phone-slogan"]}>
              <a href="tel:+46812345678" className={styles["phone-link"]}>08-123 456 78</a>
            </h2>
          </div>
          <div className={styles["cta-btns"]}>
            <button>Läs mer</button>
            <button> ▶ Se videon här</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;