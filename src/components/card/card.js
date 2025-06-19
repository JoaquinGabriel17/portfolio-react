import styles from './card.module.css'

export default function Card({id, image, link, description, title}) {

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.projectInfo}>
                <a href={`http://localhost:3000/projects/${id}`}><h3 className={styles.projectTittle}>{title}</h3></a>
                <p>{description}</p>
                <a href={link}>{`${link}`}</a>
            </div>
        </div>
    )
}