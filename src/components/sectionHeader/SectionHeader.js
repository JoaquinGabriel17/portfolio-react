import styles from "./SectionHeader.module.css";

export default function SectionHeader({ subtitle, title, description, button = "", link = "", external = false }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topRow}>
        <span className={styles.line}></span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      
      <div className={styles.mainRow}>
        <h2 className={styles.bigTitle}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      {button.length > 0 && link.length > 0 && <a rel="noopener noreferrer" target={external ? "_blank" : "_self"} href={link} className={`btn-primary ${styles.button}`}>{button} </a>}
    </div>
  );
}