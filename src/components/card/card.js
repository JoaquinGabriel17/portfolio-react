import styles from './card.module.css'

export default function Card({ data, lang }) {

  let {paragraph, title, subtitle, icon, date, list} = data
    return (
        <div className={styles.cardContain}>
            {title && <h1 className={styles.title}>{title}</h1>}
            <div className={styles.card}>
                {subtitle && <div className={styles.separador}>
                    
                    {icon && <img 
                        src={icon} 
                        alt='icono de experiencia'
                        className={styles.icon}
                    ></img>}
                    <div className={styles.dateAndSubTitle}>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    <p className={styles.date}>{date}</p>
                    </div>

                </div>}
                {date && <h3>{lang === "es" ? "Descripción" : "Description"}</h3>}
                <p  
                    className={styles.paragraph}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
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
    );
  }
  