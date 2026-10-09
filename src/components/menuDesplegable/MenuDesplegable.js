"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './MenuDesplegable.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaBars } from 'react-icons/fa';


export default function MenuDesplegable({lang, toChangeLang}){

    const [visibilidadMenu, SetVisibilidadMenu] = useState(false)
    const pathname = usePathname();

    function HandlerButton(){
        SetVisibilidadMenu(!visibilidadMenu)
    };

    return(
        <div className={styles.container}>
            
            <div className={styles.langButtons}>
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

            {pathname !== "/" ? (
                <a href="/">
                    <button className={styles.botonInicio}>Inicio</button>
                </a>
            ) : (
              <a href="/about">
                    <button className={styles.botonInicio}>Sobre mí</button>
                </a>  
            )}
            {/* <ul className={styles.expandInner}>
                <button onClick={()=>HandlerButton()} className={styles.botonLista}>
                {visibilidadMenu ? <FaBars /> : <FaBars />}
            </button>
            <div className={`${styles.expandWrapper} ${visibilidadMenu ? styles.expanded : ''}`}>
                    
                
                <li className={styles.itemLista}>
                    <a href='https://github.com/JoaquinGabriel17' target="_blank" rel="noopener noreferrer" className={styles.iconContainer} >
        <FaGithub 
        className={styles.icon}
        ></FaGithub>
      </a>
                </li>
                <li className={styles.itemLista}>
                    <a className={styles.iconContainer}
                    href='https://www.linkedin.com/in/joaquin-ocampo-taboada-a7b213252/?locale=es-ES' target="_blank" rel="noopener noreferrer">
        <FaLinkedin 
        className={styles.icon}
        ></FaLinkedin>
      </a>
                </li>
                <li className={styles.itemLista}>
                    <a href='https://wa.me/543876567092' target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
        <FaWhatsapp 
        className={styles.icon}
        ></FaWhatsapp>
      </a>
                </li>
                <li className={styles.itemLista}>
                    <a href='mailto:joaquingabriel3@hotmail.com' target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
        <FaEnvelope 
        className={styles.icon}
        ></FaEnvelope>
      </a>
                </li>
            </ul>

             </div>
      */}
           
  
        </div>

    )
}