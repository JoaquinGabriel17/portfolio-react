"use client"
import styles from './Icon.module.css'
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';


export default function Icon({lang}){


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
      href="/cv.docx" download >
        <button className={styles.CVButton}>
          <FaDownload /> {lang === "es" ? "Descargar CV" : "Download CV"}
        </button>

    </a>
        </div>
    )
}