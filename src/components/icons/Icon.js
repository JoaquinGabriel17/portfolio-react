"use client"
import styles from './Icon.module.css'
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';


export default function Icon(){

    const [copiado, setCopiado] = useState('Haz click para copiar la información');

    const copiar = (texto) => {
      navigator.clipboard.writeText(texto).then(() => {
        setCopiado(`Copiado: ${texto}`);
        setTimeout(() => setCopiado('Click para copiar la información'), 2000);
      });
    };

    return(
      <div className={styles.container}>
        <div className={styles.iconContainer}>
            <a>
        <FaGithub 
        className={styles.icon}
        onClick={() => {copiar('https://github.com/JoaquinGabriel17')}}
        ></FaGithub>
      </a>
      <a>
        <FaLinkedin 
        className={styles.icon}
        onClick={() => {copiar('https://www.linkedin.com/in/joaquin-ocampo-a7b213252/')}}
        ></FaLinkedin>
      </a>
      <a>
        <FaWhatsapp 
        className={styles.icon}
        onClick={() => {copiar('+54 9 3876 56-7092')}}
        ></FaWhatsapp>
      </a>
      <a>
        <FaEnvelope 
        className={styles.icon}
        onClick={() => {copiar('joaquingabriel3@hotmail.com')}}
        ></FaEnvelope>
      </a>
      <p className={styles.tooltip}>{copiado}</p>
        </div>
        <a
      href="/curriculum.docx" download >
        <button className={styles.CVButton}>
          <FaDownload /> Descargar CV
        </button>

    </a>
        </div>
    )
}