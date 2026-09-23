import styles from "./SkillsList.module.css";

export default function SkillsList({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className={styles.skillsContainer}>
      {categories.map((category, index) => (
        <div key={index} className={styles.skillRow}>
          <h3 className={styles.categoryTitle}>{category.title}</h3>
          <div className={styles.techList}>
            {category.items.map((item, i) => (
              <span key={i} className={styles.techItem}>
                {item}
                {i < category.items.length - 1 && (
                  <span className={styles.dot}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}