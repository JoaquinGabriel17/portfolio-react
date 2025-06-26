import styles from './ProjectCard.module.css'

export default function ProjectCard({ProjectInfo}){

    let {image,name, description} = ProjectInfo

    return(
        <div className={styles.ProjectCardContainer}>
            <img src={image} alt={name}></img>
            <article>
                <h1>{name}</h1>
                <h2>Descripción</h2>
                <p>{description}</p>
            </article>
        </div>
        
    )
}