import styles from '../styling/Work.module.css';
export default function IconCard({ icon, title, description }) {
  return (
    <div className={styles["icon-card"]}>
      <img src={icon} alt={title} className={styles["icon"]} />
      <h3 className={styles["icon-title"]}>{title}</h3>
      <p className={styles["icon-description"]}>{description}</p>
    </div>
  );
}
