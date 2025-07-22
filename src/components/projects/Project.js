"use client"
import styles from './Project.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { useState, useRef, useEffect } from 'react'

export default function Projects({ProjectsInfo}){

    //Lógica para expandir carta
    const [expandedIndex, setExpandedIndex] = useState(null)
    const handleExpand = (index) => {
        // Si ya está expandido, colapsarlo
        console.log(index)
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
      };


    //Al hacer click fuera de las ProjectCard debe cerrar la carta expandida
    const containerRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            containerRef.current &&
            !containerRef.current.contains(event.target)
          ) {
            setExpandedIndex(null);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return (
    <div className={styles.projectContainer}>
      <h2>Proyectos</h2>
      <div className={styles.projectCardContainer} ref={containerRef}>
        {ProjectsInfo &&
          ProjectsInfo.map((item, index) => (
            <ProjectCard
              key={index}
              ProjectInfo={item}
              isExpanded={expandedIndex === index}
              onExpand={() => handleExpand(index)}
            />
          ))}
      </div>
    </div>
  );
}