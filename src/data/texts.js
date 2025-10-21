import { SiNextdotjs, SiMongodb, SiRedux, SiFirebase, SiJavascript,SiExpress  } from 'react-icons/si';
import { FaServer,FaNodeJs } from 'react-icons/fa'; 
import { DiReact } from 'react-icons/di';
import rosa from '@/../public/rosadelviento.png'
import criptoMetrics from '@/../public/cryptometrics.png'
import linko from '@/../public/linko2.png'
import movie from '@/../public/moviefinder.png'

export const texts = {
  en: {
    presentation: {
      role: "Full Stack Developer",
      roleDescription: "Full Stack Developer with over 2 years of experience in creating dynamic and innovative web applications. Passionate about turning ideas into functional products.",
    },
    experience: {
        paragraph: "Alephee is a company that connects sellers with Mercado Libre through automated integrations. I was part of the support team, where I handled customer inquiries, analyzed technical issues, and managed solutions for both external users and internal teams.",
        title: "Experience",
        subtitle: "Customer Service Analyst",
        icon: 'https://storage.wisboo.com/academy_data/mg5EopG0V4/public/GwTnNt7X-logo-alephee_color.png',
        date: 'July 7, 2023  -  June 17, 2025',
        list: [{
          titleList : 'Functions and Responsibilities',
          itemsList : [
  'Resolving incidents and performing technical analysis of requirements',
  'Integrating and consuming services through REST APIs',
  'Querying and validating data in relational (SQL Server) and non-relational (MongoDB) databases',
  'Managing tickets in platforms such as Zendesk and tracking tasks in Visual Studio boards'
],    
        },
        {titleList : 'Technologies and Tools',
          itemsList : ['SQL, API REST, Zendesk, Mongo DB Compass, FileZilla, Microsoft Azure']
        }]
    },
    ProjectInfo: [
  {
    name: 'Crypto Metrics',
    description:
      'This application allows users to track the main cryptocurrencies on the market in real time. The project is built with React for the interface, integrating the CoinGecko API to display up-to-date market data.',
    image: criptoMetrics.src,
    features: [
      'User registration',
      'Multiple statistic views',
      'Real-time market data'
    ],
    techIcons: [
      <DiReact key="react" />,
      <SiRedux key="redux" />,
      <SiJavascript key="js" />
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'Node.js'],
    links: {
      github: 'https://github.com/JoaquinGabriel17/crypto-metrics',
      demo: 'https://crypto-metrics-sigma.vercel.app/'
    }
  },
  {
    name: 'Linko',
    description:
      'Linko is a URL shortener with a clean and intuitive interface, built to showcase full stack development skills using modern technologies.',
    image: linko.src,
    features: ['User registration', 'URL shortening', 'Save shortened links'],
    techIcons: [
      <DiReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiJavascript key="js" />,
      <SiMongodb key="mongodb" />,
      <FaNodeJs key="node" />
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'MongoDB', 'Node.js'],
    links: {
      github: 'https://github.com/JoaquinGabriel17/url-shortener',
      demo: 'https://linko-nine.vercel.app/'
    }
  },
  {
    name: 'Movie Finder',
    description:
      'A web application that lets users explore over 5,000 movies through a fast, efficient, and intuitive indexed search. Includes multiple filters to refine search results.',
    image: movie.src,
    features: [
      'Indexed search',
      'Add movies to favorites',
      'Detailed movie information'
    ],
    techIcons: [
      <DiReact key="react" />,
      <SiJavascript key="js" />,
      <FaNodeJs key="node" />
    ],
    technologies: ['React', 'Node.js', 'JavaScript'],
    links: {
      github: 'https://github.com/JoaquinGabriel17/Movie-Finder',
      demo: 'https://movie-finder-beige-zeta.vercel.app/'
    }
  },
  {
    name: 'Rosa de los vientos',
    description:
      'Rosa de los vientos is a digital restaurant platform where users can buy and sell food products online.',
    image: rosa.src,
    features: [
      'User registration',
      'Purchasing',
      'Selling',
      'Shipping management'
    ],
    techIcons: [
      <DiReact key="react" />,
      <SiRedux key="redux" />,
      <SiFirebase key="firebase" />,
      <SiJavascript key="js" />,
      <FaNodeJs key="node" />
    ],
    technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Redux'],
    links: {
      github: 'https://github.com/OscarMayaC/PFhenryFront',
      demo: 'https://p-fhenry-front.vercel.app/'
    }
  }
],



    contact: {
      title: "Contact",
      email: "Email me at: joaquin@example.com",
    },
  },
  es: {
    presentation: {
      role: "Desarrollador Full Stack",
      roleDescription: "Desarrollador Full Stack con más de 2 años de experiencia creando aplicaciones web dinámicas e innovadoras. Apasionado por transformar ideas en productos funcionales.",
    },
   experience: {
        paragraph: "Alephee es una empresa que conecta a vendedores con Mercado Libre a través de integraciones automatizadas. Formé parte del equipo de soporte, donde atendía consultas de clientes, analizaba problemas técnicos y gestionaba soluciones tanto para usuarios externos como para equipos internos.",
        title: "Experiencia",
        subtitle: "Analista de servicio al cliente",
        icon: 'https://storage.wisboo.com/academy_data/mg5EopG0V4/public/GwTnNt7X-logo-alephee_color.png',
        date: '07/07/2023  -  17/06/2025',
        list: [{
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
    },
   
    ProjectInfo: [
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
  
 
],
    contact: {
      title: "Contacto",
      email: "Escríbeme a: joaquin@example.com",
    },
  },
};
