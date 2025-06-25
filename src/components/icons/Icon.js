"use client"
import styles from './Icon.module.css'
import { useState } from 'react';

export default function Icon({iconList}){

    const [copiado, setCopiado] = useState('');

    const copiar = (texto) => {
      navigator.clipboard.writeText(texto).then(() => {
        setCopiado(`Copiado: ${texto}`);
        setTimeout(() => setCopiado(''), 2000);
      });
    };

    return(
        <div className={styles.iconContain}>
            {iconList && iconList.map((icon,index) =>{
                return <div key={index}>
                        <a 
                        key={index}
                        onClick={() => copiar(icon.href)}
                        className={styles.iconLabel}>
                            <img                         
                            src={icon.src} 
                            key={index} 
                            alt={icon.href}
                            className={styles.icon}
                            ></img>
                        </a>
                        {/*<span className={styles.tooltip}>Copiar</span>  Inteno de etiqueta "copiar" al pasar cursor sobre icono*/}
                        
                    </div>
            })}
            {copiado && <p className={styles.copyMsg}>{copiado}</p>}
        </div>
    )
}

