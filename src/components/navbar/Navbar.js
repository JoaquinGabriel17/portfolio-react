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
      <h1>Jo</h1>
      <div className={styles.langButtons}>
        <span>{lang === "es" ? "Lenguaje:  " : "Language:  "}</span>
        <button
          onClick={() => toChangeLang("es")}
          className={lang === "es" ? styles.active : ""}
        >
          🇪🇸
        </button>
        <button
          onClick={() => toChangeLang("en")}
          className={lang === "en" ? styles.active : ""}
        >
          🇬🇧
        </button>
      </div>
      </div>


      <div className={styles.iconContain}>
      <a href='https://github.com/JoaquinGabriel17' target="_blank" rel="noopener noreferrer" >
        <FaGithub 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('https://github.com/JoaquinGabriel17')}}
        ></FaGithub>
      </a>
      <a href='https://www.linkedin.com/in/joaquin-ocampo-a7b213252/' target="_blank" rel="noopener noreferrer">
        <FaLinkedin 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('https://www.linkedin.com/in/joaquin-ocampo-a7b213252/')}}
        ></FaLinkedin>
      </a>
      <a>
        <FaWhatsapp 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('+54 9 3876 56-7092')}}
        ></FaWhatsapp>
      </a>
      <a>
        <FaEnvelope 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('joaquingabriel3@hotmail.com')}}
        ></FaEnvelope>
      </a>
      </div>
    </nav>
    }</>
  );
}