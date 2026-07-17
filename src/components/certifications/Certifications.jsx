import styles from './certifications.module.css';

export default function Certifications({ data , lang}) {
    return(
        <section id="certifications">
            <h1 className={styles.title}>{lang === "es" ? "Certificaciones" : "Certifications"}</h1>
            <div className={styles.certificationsContainer}>
                {data.map((category, index) => {
                    return(
                        <div key={index} className={styles.categoryContainer}>
                            <h3 className={styles.categoryTitle}>{category.name}</h3>
                            <div className={styles.certificationsList}>
                                {category.certifications.map((certification, certIndex) => {
                                    return(
                                        <div key={certIndex} className={styles.certification}>
                                            {certification.image && <img src={certification.image} alt={certification.name} />}
                                            <div>
                                                <div className={styles.certificationHeader}>
                                                    <p className={styles.certificationCompany}>{certification.company}</p>
                                                    <p className={styles.certificationDate}>{certification.date}</p>
                                                </div>
                                                <p className={styles.certificationName}>{certification.name}</p>
                                                <div className={styles.certificationLinks}>
                                                    <a className={styles.certificationLink} href={certification.url} target="_blank" rel="noopener noreferrer">
                                                        {lang === "es" ? "Ver Certificación" : "View Certification"}
                                                    </a>
                                                    <a className={styles.certificationLink} href={certification.pdf} download target="_blank" rel="noopener noreferrer">
                                                        {lang === "es" ? "Descargar PDF" : "Download PDF"}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}