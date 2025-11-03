import Button from "./Button";
import PageCaption from "./PageCaption";
import PageTitle from "./PageTitle";
import Work from "./Work";
import styles from "../styling/About.module.css"
import styles2 from "../styling/header.module.css"; 


export default function About() {
  return (
    <section id ="about" className={styles["about"]}>
        <img src="src/assets/food-3581341_1280.jpg" alt="Sushi" id="sushi-img" />
        <div className={styles["text"]}>
        <PageTitle title="En plats för sushiälskare – och nyfikna" />
        <PageCaption caption="Hos oss handlar sushi om mer än bara mat – det handlar om upplevelsen. Vi rullar varje bit med omsorg, serverar den med ett leende och bjuder in dig att upptäcka nya smaker, dofter och kombinationer. Oavsett om du är sushi-proffs eller bara nyfiken på något nytt, finns alltid något att älska här." />
        {/* <div className={styles["buttonContainer"]}> */}
          <div className={styles2["cta-btns"]}>
            <Button text="Lär dig mer" />
            <Button text="Titta på Video" type="secondary" onClick={() => window.open("https://www.youtube.com/watch?v=q8dUekkQuHo", "_blank")}/>
        </div>
    
        </div>
    </section>
  );
}
