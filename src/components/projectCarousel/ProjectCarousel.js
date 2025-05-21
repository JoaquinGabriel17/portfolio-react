"use client"
import { useState } from 'react';
import styles from './ProjectCarousel.module.css';


const projects = [
  { title: 'Project 1', description: 'Descripción breve del proyecto 1', image: 'https://cdn.pixabay.com/photo/2023/07/12/08/03/ai-generated-8121986_1280.jpg' },
  { title: 'Project 2', description: 'Descripción breve del proyecto 2', image: 'https://i.dailymail.co.uk/1s/2022/03/24/20/55765073-10649391-image-a-71_1648152785820.jpg' },
  { title: 'Project 3', description: 'Descripción breve del proyecto 3', image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/6a0a86190867629.Y3JvcCwxMzgwLDEwODAsNTEyLDA.png' },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>❮</button>
      <div className={styles.card}>
        <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className={styles.image} />
        <div className={styles.projectInfo}>
          <a href={`http://localhost:3000/projects/${currentIndex+1}`}><h3 className={styles.projectTittle}>{projects[currentIndex].title}</h3></a>
          <p>{projects[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={nextSlide} className={styles.arrow}>❯</button>
    </div>
  );
}

