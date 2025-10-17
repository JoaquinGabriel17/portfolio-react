import React from "react";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null; // Si no hay proyecto seleccionado, no muestra nada

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.title}>{project.name}</h2>
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
        />
        <h3>Descripción</h3>
        <p className={styles.description}>{project.description}</p>
        <h3>Características</h3>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ver Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ver Repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
