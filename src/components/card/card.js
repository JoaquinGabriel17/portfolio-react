import styles from './card.module.css'

export default function Card({ paragraph, title, subtitle, icon, date, list }) {

    /*console.log(list.items)*/
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
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    <p className={styles.date}>{date}</p>

                </div>}
                <p  
                    className={styles.paragraph}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
                {list && <>
                    <h3>{list.title}</h3>
                    <ul>
                        {list.items.map((item)=>{
                            <li>{item}</li>
                        })}
                    </ul>    
                </>}
            </div>
      </div>
    );
  }
  