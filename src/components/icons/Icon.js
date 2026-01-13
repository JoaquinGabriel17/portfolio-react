"use client"
import styles from './Icon.module.css'
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import sql from '@/../public/SQL.svg'
import js from '@/../public/JavaScript.svg'
import node from '@/../public/Node.js.svg'
import react from '@/../public/React.svg'
import typescript from '@/../public/typescript.svg'



export default function Icon({lang}){

  const lenguajes = [
        { name: 'SQL', src: sql.src },
        { name: 'React', src: react.src },
        { name: 'JavaScript', src: js.src },
        { name: 'Node.js', src: node.src },
        { name: 'Typescript', src: typescript.src },
    ]

    const copiar = (texto) => {
      navigator.clipboard.writeText(texto)
    };

    return(
      <div className={styles.container}>
        <div className={styles.iconContainer}>
            <a href='https://github.com/JoaquinGabriel17' target="_blank" rel="noopener noreferrer">Github
        <FaGithub 
        className={styles.icon}
        ></FaGithub>
      </a>
      <a href='https://www.linkedin.com/in/joaquin-ocampo-a7b213252/' target="_blank" rel="noopener noreferrer">Linkedin
        <FaLinkedin 
        className={styles.icon}
        ></FaLinkedin>
      </a>
      <a onClick={() => {copiar('joaquingabriel3@hotmail.com')}}>joaquingabriel3@hotmail.com
        <FaEnvelope 
        className={styles.icon}
        
        ></FaEnvelope>
      </a>
        </div>
        <a
      href="/cvg.pdf" download >
        <button className={styles.CVButton}>
          <FaDownload /> {lang === "es" ? "Descargar CV" : "Download CV"}
        </button>

    </a>
    <p>{ lang === "es" ?  "Con lo que más trabajé" : "What I worked with the most"}</p>
    {lenguajes.length && <div className={styles.techsList}>
      {lenguajes.map((item) => (
        <figure key={item.name} className={styles.skill}>
          <img src={item.src} alt={item.name} />
          <figcaption>{item.name}</figcaption>
        </figure>
      ))}
      
    </div>}
        </div>
    )
}