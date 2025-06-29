import styles from './Project.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects({ProjectsInfo}){
    return (
        <div className={styles.projectContainer}>
        <h2>Proyectos</h2>
        <div className={styles.projectCardContainer}>
            
            {ProjectsInfo && ProjectsInfo.map((item, index)=>{
                return(
                    <ProjectCard 
                        ProjectInfo={item}
                        key={index}
                    ></ProjectCard>
                )
            })}
        </div>
        </div>
    )
}