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
import linko from '@/../public/linko.png'
import { FaServer,FaNodeJs } from 'react-icons/fa'; // alternativa representativa para Express
import movie from '@/../public/movie.png'




export default function Home() {

  let about = 'Hola! Soy <strong>Joaquín Ocampo</strong>, un desarrollador full stack apasionado por la tecnología y la resolución de problemas. Me formé en Henry y actualmente me desempeño como analista de servicio al cliente en Alephee.<br></br>Cuento con 2 años de experiencia en el rol de analista, utilizando principalmente <strong>SQL</strong>. También he trabajado en el desarrollo de aplicaciones con tecnologías como <strong>JavaScript, React, Node.js</strong> y <strong>SQL</strong>. Manejo herramientas como <strong>Postman</strong> para el testeo de endpoints y APIs REST, y <strong>MongoDB Compass</strong> para la gestión visual de bases de datos MongoDB.<br></br>Me gusta trabajar en equipo, escribir código limpio y aprender nuevas herramientas. Actualmente estoy en búsqueda de oportunidades que me permitan seguir creciendo tanto a nivel profesional como personal.'
  let experience = 'Alephee es una empresa que conecta a vendedores con Mercado Libre a través de integraciones automatizadas. Formé parte del equipo de soporte, donde atendía consultas de clientes, analizaba problemas técnicos y gestionaba soluciones tanto para usuarios externos como para equipos internos.'
  let title = 'Experiencia'
  let subtitle = 'Analista de servicio al cliente'
  let icon = 'https://storage.wisboo.com/academy_data/mg5EopG0V4/public/GwTnNt7X-logo-alephee_color.png'
  let date = '07/07/2023  -  17/06/2025'
  let titleList = 'Funciones y responsabilidades'
  let itemsList = [
      'Resolución de incidencias y análisis técnico de requerimientos',
      'Integración y consumo de servicios mediante API REST',
      'Consultas y validaciones en bases de datos relacionales (SQL Server) y no relacionales (MongoDB)',
      'Gestión de tickets en plataformas como Zendesk y seguimiento de tareas en tableros de Visual Studio'
    ]

  let list = [{
    titleList : 'Funciones y responsabilidades',
    itemsList : [
      'Resolución de incidencias y análisis técnico de requerimientos',
      'Integración y consumo de servicios mediante API REST',
      'Consultas y validaciones en bases de datos relacionales (SQL Server) y no relacionales (MongoDB)',
      'Gestión de tickets en plataformas como Zendesk y seguimiento de tareas en tableros de Visual Studio'
    ],
    
},
{titleList : 'Tecnologías y herramientas',
    itemsList : ['SQL, API REST, Zendesk, Mongo DB Compass, FileZilla, Microsoft Azure']
  }]
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
    <div className={styles.container}>
      <div className={styles.firstBody}>
        <Presentation></Presentation>
        <Icon iconList={icons}></Icon>
        <Card 
          paragraph={about} 
          key='about'
        ></Card>
      </div>
      <div className={styles.secondBody}>
        <Card 
          paragraph={experience} 
          title={title}
          subtitle={subtitle}
          icon={icon}
          date={date}
          list={list}
          titleList={titleList}
          itemsList={itemsList}
          key='experience'
        ></Card>
        <Skills></Skills>
       <Projects ProjectsInfo={ProjectInfo}></Projects>
      </div>
        {/*<ProjectCarousel></ProjectCarousel>*/}
    </div>
  );
}
