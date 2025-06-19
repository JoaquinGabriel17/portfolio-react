"use client"
import { useState } from 'react';
import styles from './MenuDesplegable.module.css'

export default function MenuDesplegable(){

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
                <li className={styles.itemLista}>Contacto</li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
            </ul>
            )
            }
        </div>

    )
}