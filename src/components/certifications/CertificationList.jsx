import styles from './certifications.module.css';
import CertificationCard from './CertificationCard';

export default function CertificationList({ category, lang }) {
    return (
        <div className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <div className={styles.certificationsList}>
                {category.certifications.map((certification, certIndex) => (
                    <CertificationCard
                        key={certIndex}
                        certification={certification}
                        lang={lang}
                    />
                ))}
            </div>
        </div>
    );
}