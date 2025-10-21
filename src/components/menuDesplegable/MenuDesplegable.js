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
            <button onClick={()=>HandlerButton()} className={styles.botonLista}>ABRIR MENU</button>
            { visibilidadMenu && (
            <ul className={styles.lista}>
                <li className={styles.itemLista}>
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
                </li>
                <li className={styles.itemLista}>
                    <a href='https://github.com/JoaquinGabriel17' target="_blank" rel="noopener noreferrer" className={styles.iconContainer} >
        <FaGithub 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('https://github.com/JoaquinGabriel17')}}
        ></FaGithub>
      </a>
                </li>
                <li className={styles.itemLista}>
                    <a className={styles.iconContainer}
                    href='https://www.linkedin.com/in/joaquin-ocampo-a7b213252/' target="_blank" rel="noopener noreferrer">
        <FaLinkedin 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('https://www.linkedin.com/in/joaquin-ocampo-a7b213252/')}}
        ></FaLinkedin>
      </a>
                </li>
                <li className={styles.itemLista}>
                    <a className={styles.iconContainer}>
        <FaWhatsapp 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('+54 9 3876 56-7092')}}
        ></FaWhatsapp>
      </a>
                </li>
                <li className={styles.itemLista}>
                    <a className={styles.iconContainer}>
        <FaEnvelope 
        className={styles.icon}
        onClick={() => {navigator.clipboard.writeText('joaquingabriel3@hotmail.com')}}
        ></FaEnvelope>
      </a>
                </li>
            </ul>
            )
            }
        </div>

    )
}