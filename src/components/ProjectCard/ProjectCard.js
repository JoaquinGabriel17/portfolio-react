import styles from './ProjectCard.module.css';
import { useState } from 'react';

export default function ProjectCard({ ProjectInfo }) {
  const { image, name, description, features, techIcons, links } = ProjectInfo;



  return (
    <div
    className={styles.ProjectCard}
    >
      <div className={styles.CardContent}>
        <div className={styles.infoContainer}>
          <h1 className={styles.proyectName}>{name}</h1> 
          <img src={image} alt={name} />      
              
        </div>
      </div>  
        <div className={styles.TechOverlay}>
          <div className={styles.OverlayContent}>
            <div className={styles.TechIcons}>
              {techIcons?.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
            <h2>Click para más información</h2>
          </div>
        </div>
    </div>
  );
}
