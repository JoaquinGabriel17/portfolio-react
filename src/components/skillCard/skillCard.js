import styles from './skillCard.module.css'

export default function SkillCard({skill}){
    return(
        <div className={styles.skillWrapper}>
            <figure key={skill.name} className={styles.skill}>
                <img src={skill.src} alt={skill.name} />
                <figcaption>{skill.name}</figcaption>
            </figure>
        </div>
    )
}