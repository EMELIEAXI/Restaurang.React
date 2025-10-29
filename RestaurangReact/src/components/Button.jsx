export default function Button({ text, onClick, type = "primary" }) {
  return <button className={`btn ${type}`} onClick={onClick}>{text}</button>;
}