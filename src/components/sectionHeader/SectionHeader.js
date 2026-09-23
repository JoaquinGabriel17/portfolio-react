import styles from "./SectionHeader.module.css";

export default function SectionHeader({ subtitle, title, description }) {
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
    </div>
  );
}