"use client"
import { useState } from 'react';
import styles from './MenuDesplegable.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp,FaEnvelope } from 'react-icons/fa';


export default function MenuDesplegable({lang, toChangeLang}){

    const [visibilidadMenu, SetVisibilidadMenu] = useState(false)
    function HandlerButton(){
        if(visibilidadMenu){
            SetVisibilidadMenu(!visibilidadMenu)
           
        }
        else{
            SetVisibilidadMenu(!visibilidadMenu)

        }
        console.log(visibilidadMenu)
    };
    return(
        <div className={styles.container}>
            <button onClick={()=>HandlerButton()} className={styles.botonLista}>{visibilidadMenu ? "Cerrar" : "Abrir"}</button>
            <div className={`${styles.expandWrapper} ${visibilidadMenu ? styles.expanded : ''}`}>
            <ul className={styles.expandInner}>
                <li className={styles.itemLista}>
                    <div className={styles.langButtons}>
        <button
          onClick={() => toChangeLang("es")}
          className={lang === "es" ? styles.active : styles.inactive}
        >
          🇪🇸
        </button>
        <button
          onClick={() => toChangeLang("en")}
          className={lang === "en" ? styles.active : styles.inactive}
        >
          🇬🇧
        </button>
      </div>
                </li>
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
  
        </div>

    )
}