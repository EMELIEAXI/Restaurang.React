import PageTitle from "./PageTitle";

export default function Contact() {
  return (
    <div>
      <PageTitle title="Kontakta oss gärna" />

        <form method="POST" action="https://formshow.systementor.se/">
        <label for="email">E-post:</label>
          <input type="email" name="email" required />
          <label for="message">Meddelande:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Skicka</button>
        </form>
    </div>
  );
}