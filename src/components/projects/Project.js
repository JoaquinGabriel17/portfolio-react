import styles from './Project.module.css';
import ProjectRow from './ProjectRow';

export default function Projects({ ProjectsInfo, lang }) {
  return (
    
    <div className={styles.container}>
      <h2 className={styles.title}>{lang === "es" ? "Proyectos" : "Projects"}</h2>  
      <div className={styles.list}>
      {ProjectsInfo && ProjectsInfo.map((project, index) => (
        <ProjectRow
          key={`${project.name}-${index}`}
          project={project}
          lang={lang}
        />
      ))}
      </div>
    </div>
  );
}