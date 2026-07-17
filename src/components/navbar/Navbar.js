"use client"
import Link from 'next/link';
import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
import MenuDesplegable from '../menuDesplegable/MenuDesplegable';
import React, { useState, useEffect } from 'react';

export default function Navbar({toChangeLang, lang}) {

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Se ejecuta solo en el cliente
  const checkMobile = () => setIsMobile(window.innerWidth < 768);

  checkMobile(); // ejecuta la primera vez
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

const langChangeHandler = (newLang) => {
  toChangeLang(newLang);
}

  return (
    <>{isMobile ? <MenuDesplegable lang={lang === "es" ? "es" : "en"} toChangeLang={langChangeHandler}/> : 
    <nav className={styles.navbar}>
      <div className={styles.separator}>
      <div className={styles.langButtons}>
        {/*<span>{lang === "es" ? "Lenguaje:  " : "Language:  "}</span>*/}  
        <button
          onClick={() => toChangeLang("es")}
          className={lang === "es" ? styles.active : styles.inactive}
        >
          ES
        </button>
        <button
          onClick={() => toChangeLang("en")}
          className={lang === "en" ? styles.active : styles.inactive}
        >
          EN
        </button>
      </div>
      </div>

      <div className={styles.navContain}>
        <a className={styles.navButton} href="#presentation">{lang === "es" ? "Inicio" : "Presentation"}</a>
        <a className={styles.navButton} href="#experience">{lang === "es" ? "Experiencia" : "Experience"}</a>
        <a className={styles.navButton} href="#projects">{lang === "es" ? "Proyectos" : "Projects"}</a>
        <a className={styles.navButton} href="#certifications">{lang === "es" ? "Certificaciones" : "Certifications"}</a>
        <a className={styles.navButton} href="#skills">{lang === "es" ? "Habilidades" : "Skills"}</a>
        
      </div>


      <div className={styles.iconContain}>
      <a href='https://github.com/JoaquinGabriel17' target="_blank" rel="noopener noreferrer" >
        <FaGithub 
        className={styles.icon}
        ></FaGithub>
      </a>
      <a href='https://www.linkedin.com/in/joaquin-ocampo-taboada-a7b213252/?locale=es-ES' target="_blank" rel="noopener noreferrer">
        <FaLinkedin 
        className={styles.icon}
        ></FaLinkedin>
      </a>
      <a href='https://wa.me/543876567092' target="_blank" rel="noopener noreferrer">
        <FaWhatsapp 
        className={styles.icon}
        ></FaWhatsapp>
      </a>
      <a href='mailto:joaquingabriel3@hotmail.com' target="_blank" rel="noopener noreferrer">
        <FaEnvelope 
        className={styles.icon}
        ></FaEnvelope>
      </a>
      </div>
    </nav>
    }</>
  );
}