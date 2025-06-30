import styles from './ProjectCard.module.css'

export default function ProjectCard({ProjectInfo}){

    let {image,name, description, features,techIcons } = ProjectInfo

    return(
        <div className={styles.ProjectCard}>
            <div className={styles.CardContent}>
            <img src={image} alt={name}></img>
            <article>
                <h1>{name}</h1>
                <h2>Descripción</h2>
                <p>{description}</p>
                <h2>Funcionalidades</h2>
                <ul>
                    {features.map((feature, index) => {
                        return(
                            <li key={index}>{feature}</li>
                        )
                    })}
                </ul>
            </article>

      </div>
      <div className={styles.TechOverlay}>
        {techIcons?.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
        {/*<h5>Click para mas información</h5>*/}
      </div>
        </div>
        
    )
}