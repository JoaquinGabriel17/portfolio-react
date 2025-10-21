"use client"
import styles from './Project.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { useState, useRef, useEffect } from 'react'
import ProjectDetail from '../ProjectDetail/ProjectDetail'

export default function Projects({ProjectsInfo, lang}){
  const [selectedProject, setSelectedProject] = useState(null);

    return (
    <div className={styles.projectContainer}>
      <h1 className={styles.projectTitle}>{lang === "es" ? "Proyectos" : "Projects"}</h1>
      <div className={styles.projectCardContainer}>
        {ProjectsInfo &&
          ProjectsInfo.map((item, index) => (
            <div onClick={() => setSelectedProject(item)} key={index}>
            <ProjectCard
              key={index}
              ProjectInfo={item}
              lang={lang === "es" ? "es" : "en"}
              
            />
            </div>
          ))}
      </div>
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang === "es" ? "es" : "en"}
      />
      
    </div>
  );
}