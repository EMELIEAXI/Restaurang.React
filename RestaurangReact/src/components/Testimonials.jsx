import React, { useRef } from "react";
import testimonialsData from "./TestimonialsData";
import PageTitle from "./PageTitle";
import PageCaption from "./PageCaption";
import "../styling/Testimonials.css";

export default function Testimonials() {
  const ref = useRef(null);

  const scrollByCard = (direction = "right") => {
    const container = ref.current;
    if (!container) return;
    const card = container.querySelector(".testimonial-card");
    if (!card) return;
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight || 20);
    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
      <section className="testimonials-section">
        <PageTitle title="Vad våra gäster säger"/>
        <PageCaption caption="Små stories från kunder som redan upptäckt våra rätter." />

      <div className="testimonials-wrapper">
        <button className="scroll-btn left" onClick={() => scrollByCard("left")}>‹</button>

        <div className="testimonials-container" ref={ref}>
          {testimonialsData.map((t) => (
            <article className="testimonial-card" key={t.id}>
              <div className="testimonial-image">
                <img src={t.img} alt={`${t.name} porträtt`} />
              </div>
              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="star">{i < t.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <div className="testimonial-name">{t.name}</div>
            </article>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scrollByCard("right")}>›</button>
      </div>
    </section>
  );
}