import styles from './ProjectCard.module.css';
import { useState } from 'react';

export default function ProjectCard({ ProjectInfo, lang }) {
  const { image, name, description, features, techIcons, links, technologies } = ProjectInfo;



  return (
    <div
    className={styles.ProjectCard}
    >
      <div className={styles.CardContent}>
        <div className={styles.imagesContainer}>
            <img src={image} alt={`${name} screenshot`} className={styles.projectImage} />   
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.proyectName}>{name}</h1>
          <p>{description}</p>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          { techIcons && 
          <ul className={styles.techIconsList}>
            {techIcons.map((techIcon, index) => (
              <li key={index} className={styles.techIcon}>{techIcon}</li>
            ))}
          </ul>
          }
          <div className={styles.technologiesContainer}>
            <h3>Stack: </h3>
            <p>{technologies.join(', ')}</p>
          </div>
          <div className={styles.links}>
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ver Demo
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
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
    </div>
  );
}
