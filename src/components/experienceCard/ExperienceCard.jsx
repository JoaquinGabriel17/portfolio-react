import styles from './experienceCard.module.css'
import { useState } from 'react';

export default function ExperienceCard({ data, lang }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const { paragraph, title, subtitle, icon, date, list, enterpriseName, enterpriseNameVisible } = data

    return (
        <div className={styles.cardContain}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.card}>
                <div className={styles.separador}>
                    <div className={styles.dateAndSubTitle}>
                        <h2 className={styles.subtitle}>{subtitle}</h2>
                        <p className={styles.date}>{date}</p>
                    </div>
                    {icon && (
                        <img src={icon} alt='icono de experiencia' className={styles.icon} />
                    )}
                    {enterpriseNameVisible && enterpriseName && (
                        <h2 style={{ color: "white" }}>{enterpriseName}</h2>
                    )}
                </div>

                {/* Contenido siempre montado, se anima con CSS */}
                <div className={`${styles.expandWrapper} ${isExpanded ? styles.expanded : ''}`}>
                    <div className={styles.expandInner}>
                        {paragraph && <h3>{lang === "es" ? "Descripción" : "Description"}</h3>}
                        <p
                            className={styles.paragraph}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                        {list && list.map((item, index) => (
                            <div key={index}>
                                <h3>{item.titleList}</h3>
                                <ul>
                                    {item.itemsList.map((subItem, subIndex) => (
                                        <li key={subIndex}>{subItem}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={styles.expandButton}
                    onClick={() => setIsExpanded(prev => !prev)}
                >
                    {isExpanded
                        ? (lang === "es" ? "Cerrar detalles" : "Close details")
                        : (lang === "es" ? "Haz click para ver detalles" : "Click to see details")}
                </button>
            </div>
        </div>
    )
}