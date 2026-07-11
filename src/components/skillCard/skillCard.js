import styles from './skillCard.module.css'

export default function SkillCard({skill}){
    return(
     
            <figure key={skill.name} className={styles.skill} style={{ color: "#00ED64" }}>
                <img src={skill.src} alt={skill.name} />
                <figcaption>{skill.name}</figcaption>
            </figure>
       
    )
}