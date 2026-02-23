"use client"
import styles from './Project.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { useState, useRef, useEffect } from 'react'
import ProjectDetail from '../ProjectDetail/ProjectDetail'

export default function Projects({ ProjectsInfo, lang }) {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  containerRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}, [currentPage]);

  const projectsPerPage = 3;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;

  const currentProjects = ProjectsInfo?.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(ProjectsInfo?.length / projectsPerPage);

  // Botones prev y next
  const goToPrev = () => {
  setCurrentPage((prev) => Math.max(prev - 1, 1));
};

const goToNext = () => {
  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
};

  return (
    <div ref={containerRef} className={styles.projectContainer}>

      <h1 className={styles.projectTitle}>
        {lang === "es" ? "Proyectos" : "Projects"}
      </h1>

      { lang === "es" ? <p>Mostrando {indexOfFirst + 1} - {Math.min(indexOfLast, ProjectsInfo?.length || 0)} de {ProjectsInfo?.length || 0} proyectos</p> : 

      <p>Showing {indexOfFirst + 1} - {Math.min(indexOfLast, ProjectsInfo?.length || 0)} of {ProjectsInfo?.length || 0} projects</p>
      }

      <div className={styles.projectCardContainer}>
        {currentProjects?.map((item, index) => (
          <ProjectCard
            key={index}
            ProjectInfo={item}
            lang={lang === "es" ? "es" : "en"}
            onClick={() => setSelectedProject(item)}
          />
        ))}
      </div>

      {/* PAGINADO */}
     <div className={styles.pagination}>

  {/* PREV */}
  <button
    className={styles.navButton}
    onClick={goToPrev}
    disabled={currentPage === 1}
  >
    ← Prev
  </button>

  {/* NUMEROS */}
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      className={`${styles.pageButton} ${
        currentPage === i + 1 ? styles.activePage : ""
      }`}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  {/* NEXT */}
  <button
    className={styles.navButton}
    onClick={goToNext}
    disabled={currentPage === totalPages}
  >
    Next →
  </button>

</div>

    </div>
  );
}