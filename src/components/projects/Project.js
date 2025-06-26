import styles from './Project.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects({ProjectsInfo}){
    return (
        <div>
        <h2>Proyectos</h2>
        <div className={styles.proejctsContainer}>
            
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