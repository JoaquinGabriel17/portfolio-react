"use client"
import { useState } from 'react';
import styles from './ProjectCarousel.module.css';
import projects from '@/data/projectData';
import Card from '../card/card.js';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
 let currentProject = projects[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    currentProject =  projects[currentIndex]
    console.log(currentIndex, 123123123123)
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    currentProject =  projects[currentIndex]
  };
  

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>❮</button>
      <Card
        id={currentProject.id}
        image={currentProject.image}
        link={currentProject.link}
        description={currentProject.description}
        title={currentProject.title}
      />
      <button onClick={nextSlide} className={styles.arrow}>❯</button>
    </div>
  );
}
