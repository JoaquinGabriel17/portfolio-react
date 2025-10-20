"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Presentation from "@/components/presentation/presentation";
import Skills from "@/components/skills/skills";
import Card from "@/components/card/card";
import Icon from "@/components/icons/Icon";
import github from '@/../public/github.svg'
import linkedin from '@/../public/linkedin.svg'
import wasap from '@/../public/whatsapp-brands.svg'
import email from '@/../public/email.svg'
import Projects from "@/components/projects/Project";
import rosa from '@/../public/rosadelviento.png'
import hills from '@/../public/hillsappi.png'
import criptoMetrics from '@/../public/cryptometrics.png'
import { DiReact } from 'react-icons/di';
import { SiNextdotjs, SiMongodb, SiRedux, SiFirebase, SiJavascript,SiExpress  } from 'react-icons/si';
import linko from '@/../public/linko2.png'
import { FaServer,FaNodeJs } from 'react-icons/fa'; // alternativa representativa para Express
import movie from '@/../public/moviefinder.png'
import { useState, useEffect } from "react";
import { texts } from "@/data/texts";
import Navbar from "@/components/navbar/Navbar";




export default function Home() {

  // Estado para el idioma seleccionado
  const [lang, setLang] = useState("en");
  const [content, setContent] = useState(texts["en"]); 

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
    setContent(texts[savedLang]);
  }, []);

  const changeLang = (newLang) => {
    console.log("Changing language to:", newLang);
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    setContent(texts[newLang]);
  };

  let icons = [
    {src: github.src, href: 'https://github.com/JoaquinGabriel17'},
    {src: linkedin.src, href: 'https://www.linkedin.com/in/joaquin-ocampo-a7b213252/'},
    {src: wasap.src, href: '+54 9 3876 56-7092'},
    {src: email.src, href: 'joaquingabriel3@hotmail.com'}
  ]

let ProjectInfo = [
  {
    name: 'Crypto Metrics',
    description: 'Esta aplicación permite consultar en tiempo real las principales criptomonedas del mercado. El proyecto está desarrollado con React para la interfaz, integrando la API de CoinGecko para obtener los datos del mercado en vivo.',
    image: criptoMetrics.src,
    features: ['Registro de usuarios', 'Múltiples vistas de estadísticas', 'Estadísticas en tiempo real'],
    techIcons: [<DiReact key="react" />, <SiRedux key="redux" />, <SiJavascript key="js" />],
    links:{
      github: 'https://github.com/JoaquinGabriel17/crypto-metrics',
      demo: 'https://crypto-metrics-sigma.vercel.app/'
    }
  },
   {
    name: 'Linko',
    description: 'Linko es un acortador de URLs con una interfaz simple e intuitiva, creado para demostrar habilidades en desarrollo full stack con tecnologías modernas.',
    image: linko.src,
    features: ['Registro de usuarios', 'Acortar URLs', 'Guardar URLs'],
    techIcons: [<DiReact key="react" />, <SiNextdotjs key="next" />, <SiJavascript key="js" />, <SiMongodb key="mongodb" />, <FaNodeJs key="node"/>],
    links:{
      github: 'https://github.com/JoaquinGabriel17/url-shortener',
      demo: 'https://linko-nine.vercel.app/'
    }
  },
  {
    name: 'Movie Finder',
    description: 'Aplicación web que permite explorar más de 5.000 películas mediante una búsqueda indexada rápida, eficiente e intuitiva. Incluye múltiples filtros para refinar resultados',
    image: movie.src,
    features: ['Búsqueda indexada', 'Agregar películas a favoritas', 'Información detallada de películas'],
    techIcons: [<DiReact key="react" /> , <SiJavascript key="js" />, <FaNodeJs key="node"/>],
    links:{
      github: 'https://github.com/JoaquinGabriel17/Movie-Finder',
      demo: 'https://movie-finder-beige-zeta.vercel.app/'
    }
  },
  {
    name: 'Rosa de los vientos',
    description: 'Rosa de los vientos es un restaurante digital donde los usuarios pueden comprar y vender alimentos.',
    image: rosa.src,
    features: ['Registro de usuarios', 'Compra', 'Venta', 'Gestión de envíos'],
    techIcons: [<DiReact key="react" />, <SiRedux key="redux" />, <SiFirebase key="firebase" />, <SiJavascript key="js" />, <FaNodeJs key="node"/> ],
    links:{
      github: 'https://github.com/OscarMayaC/PFhenryFront',
      demo: 'https://p-fhenry-front.vercel.app/'
    }
  }
  
 
];
  

  return (
    <div className={styles.ext}>
      <Navbar toChangeLang={changeLang} lang={lang}></Navbar>
    <div className={styles.container}>
      <div className={styles.firstBody}>
        <Presentation data={content.presentation} ></Presentation>
        <Icon iconList={icons} lang={lang}></Icon>
      </div>
      <div className={styles.secondBody}>
        <Card 
          data={content.experience}
          key='experience'
          lang={lang}
        ></Card>
        <Skills></Skills>
       <Projects ProjectsInfo={ProjectInfo}></Projects>
      </div>
        {/*<ProjectCarousel></ProjectCarousel>*/}
    </div>
    </div>
  );
}
