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
        <img src={image} alt={name} />
      
          <h1 className={styles.proyectName}>{name}</h1>
          
          
       
        </div>
       {/*  <div className={styles.buttonContainer}>
            <a href={links.github} target='_blank' > <button>Repositorio</button></a>
            {links.demo == 'en desarrollo'? 
            <a  > <button className={styles.dissableButton} disabled>En desarrollo</button></a>
            : <a href={links.demo} target='_blank' > <button>Demostración</button></a>
            }
        </div>
        */}
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
