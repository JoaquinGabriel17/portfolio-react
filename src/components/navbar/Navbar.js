"use client"
import Link from 'next/link';
import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';

export default function Navbar({toChangeLang, lang}) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.separator}>
      <h1>Jo</h1>
      <div className={styles.langButtons}>
        <span>{lang === "es" ? "Lengüaje:  " : "Language:  "}</span>
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
  );
}