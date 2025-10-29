export default function IconCard({ icon, title, description }) {
  return (
    <div className="icon-card">
      <img src={icon} alt={title} className="icon" />
      <h3 className="icon-title">{title}</h3>
      <p className="icon-description">{description}</p>
    </div>
  );
}
