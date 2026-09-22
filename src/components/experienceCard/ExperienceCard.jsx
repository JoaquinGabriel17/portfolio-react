import styles from './experienceCard.module.css';

export default function ExperienceCard({ data, lang }) {
    const { company, role, tags, stack, startDate, endDate, isCurrent } = data;

    return (
        <div className={styles.item}>
            {/* Columna 1: Fechas */}
            <div className={styles.dateColumn}>
                <span className={styles.dateText}>{startDate}</span>
                <span className={styles.dateText}>{endDate}</span>
            </div>

            {/* Columna 2: Empresa y Tags */}
            <div className={styles.mainColumn}>
                <div className={styles.timelineDotWrapper}>
                    <div className={`${styles.timelineDot} ${isCurrent ? styles.currentDot : ''}`}></div>
                </div>
                <h3 className={styles.companyName}>{company}</h3>
                <div className={styles.tagsContainer}>
                    {/* El primer tag (rol) va en color índigo */}
                    <span className={`${styles.tag} ${styles.primaryTag}`}>{role}</span>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            {/* Columna 3: Stack */}
            <div className={styles.stackColumn}>
                <span className={styles.stackLabel}>Stack</span>
                <div className={styles.stackList}>
                    {stack.join(' / ')}
                </div>
            </div>
        </div>
    );
}