import styles from './Project.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects({ProjectsInfo}){
    return (
        <div className={styles.proejctsContainer}>
            {ProjectsInfo && ProjectsInfo.map((item, index)=>{
                return(
                    <ProjectCard 
                        ProjectInfo={item}
                    ></ProjectCard>
                )
            })}
        </div>
    )
}