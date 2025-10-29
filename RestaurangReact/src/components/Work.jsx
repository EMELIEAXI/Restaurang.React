import IconCard from "./IconCard";
import PageCaption from "./PageCaption";
import PageTitle from "./PageTitle";

export default function Work() {
  return (
    <section className="work">
      <PageTitle title="Hur fungerar våra tjänster?" />
      <PageCaption caption="Vi strävar efter att erbjuda en unik och minnesvärd matupplevelse genom vår passion för kvalitet och kreativitet." />
    <div className="icon-cards-container">
        <IconCard icon="src/assets/sushi-roll-295089_1280.webp" title="Välj från menyn" description="Vi skapar menyer som är anpassade efter dina önskemål och behov, oavsett om det är för en intim middag eller en stor fest." />
        <IconCard icon="src/assets/sushi-296739_1280.webp" title="Välj hur ofta" description="Våra erfarna kockar använder endast de färskaste ingredienserna för att skapa läckra och visuellt tilltalande rätter som imponerar på dina gäster." />
        <IconCard icon="src/assets/sushi-296521_1280.webp" title="Njut av upplevelsen" description="Vårt professionella serveringsteam ser till att allt flyter smidigt, så att du och dina gäster kan koppla av och njuta av maten och sällskapet." />
    </div>
    
    </section>
  );
}