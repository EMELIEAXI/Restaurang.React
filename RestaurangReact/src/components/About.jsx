import Button from "./Button";
import PageCaption from "./PageCaption";
import PageTitle from "./PageTitle";

export default function About() {
  return (
    <section className="about">
        <img src="src/assets/food-3581341_1280.jpg" alt="Sushi" id="sushi-img" />
        <div className="Text">
        <PageTitle title="En plats för sushiälskare – och nyfikna" />
        <PageCaption caption="Hos oss handlar sushi om mer än bara mat – det handlar om upplevelsen. Vi rullar varje bit med omsorg, serverar den med ett leende och bjuder in dig att upptäcka nya smaker, dofter och kombinationer. Oavsett om du är sushi-proffs eller bara nyfiken på något nytt, finns alltid något att älska här." />
        <div className="button-container">
            <Button text="Lär dig mer" />
            <Button text="Titta på Video" type="secondary" onClick={() => window.open("https://www.youtube.com/watch?v=q8dUekkQuHo", "_blank")}/>
        </div>
    
        </div>
    </section>
  );
}
