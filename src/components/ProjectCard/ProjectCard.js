import styles from './ProjectCard.module.css';
import { useState } from 'react';

export default function ProjectCard({ ProjectInfo }) {
  const { image, name, description, features, techIcons, links } = ProjectInfo;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div
    className={`${styles.ProjectCard} ${isExpanded ? styles.expandida : ''}`}
      onClick={toggleCard}
    >
      <div className={styles.CardContent}>
        <div className={styles.infoContainer}>
        <img src={image} alt={name} />
        <article>
          <h1>{name}</h1>
          <h2>Descripción</h2>
              <p>{description}</p>
          {isExpanded && (
            <>
              <h2>Funcionalidades</h2>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
        </article>
        </div>
        <div className={styles.buttonContainer}>
            <a href={links.github} target='_blank' > <button>Repositorio</button></a>
            {links.demo == 'en desarrollo'? 
            <a  > <button className={styles.dissableButton} disabled>En desarrollo</button></a>
            : <a href={links.demo} target='_blank' > <button>Demostración</button></a>
            }
        </div>
      </div>

      {!isExpanded && (
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
      )}
    </div>
  );
}
