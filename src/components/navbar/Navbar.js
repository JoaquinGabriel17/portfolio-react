"use client"
import Link from 'next/link';
import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Jo</h1>
      <div className={styles.iconContain}>
      <a>
        <FaGithub 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('https://github.com/JoaquinGabriel17')}}
        ></FaGithub>
      </a>
      <a>
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