import styles from './card.module.css'

export default function Card({ paragraph, title, subtitle, icon }) {
    return (
        <div className={styles.cardContain}>
            {title && <h1 className={styles.title}>{title }</h1>}
            <div className={styles.card}>
                {subtitle && <div className={styles.separador}>
                    {icon && <img 
                        src={icon} 
                        alt='icono de experiencia'
                        className={styles.icon}
                    ></img>}
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                </div>}
                <p  
                    className={styles.paragraph}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
            </div>
      </div>
    );
  }
  