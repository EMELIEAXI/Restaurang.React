import PageTitle from "./PageTitle";
import styles from "../styling/Contact.module.css";
import styles2 from "../styling/header.module.css";

export default function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["Contact"]}>
        <PageTitle title="Kontakta oss gärna" />

          <form method="POST" action="https://formshow.systementor.se/">
            <label for="email">E-post:</label>
            <input type="email" name="email" required />
            <label for="message">Meddelande:</label>
            <textarea name="message" required></textarea>
            <div className={styles2["cta-btns"]}>
            <button type="submit">Skicka</button>
            </div>
          </form>
      </div>
    </div>
  );
}