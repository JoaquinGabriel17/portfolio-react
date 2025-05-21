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
                <li className={styles.itemListaContenidos}>
                    <h1>Contenido</h1>
                    <ul className={styles.listaConetidos}>
                        <li className={styles.itemContenidos}><a className='hover:text-decoration-color: blue'>Sobre mi</a></li>
                        <li className={styles.itemContenidos}><a>Proyectos</a></li>
                        <li className={styles.itemContenidos}><a>Proyectos</a></li>
                        <li className={styles.itemContenidos}><a>Proyectos</a></li>
                    </ul>
                </li>
                <li className={styles.itemLista}>Contacto</li>
                <li className={styles.itemLista}></li>
                <li className={styles.itemLista}></li>
            </ul>
            )
            }
        </div>

    )
}