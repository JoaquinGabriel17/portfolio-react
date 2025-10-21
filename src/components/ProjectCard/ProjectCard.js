import styles from './ProjectCard.module.css';
import { useState } from 'react';

export default function ProjectCard({ ProjectInfo, lang }) {
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
            <h2>{lang === "es" ? "Click para más información" : "Click for more information"}</h2>
          </div>
        </div>
    </div>
  );
}
