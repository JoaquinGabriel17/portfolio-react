import { SiNextdotjs, SiMongodb, SiRedux, SiFirebase, SiJavascript,SiExpress, SiTypescript, SiTailwindcss  } from 'react-icons/si';
import { FaServer,FaNodeJs } from 'react-icons/fa'; 
import { DiReact } from 'react-icons/di';
import rosa from '@/../public/rosadelviento.png'
import criptoMetrics from '@/../public/cryptometrics.png'
import linko from '@/../public/linko2.png'
import movie from '@/../public/moviefinder.png'
import agora  from '@/../public/agora.png'

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
  'Querying and validating data in relational and non-relational databases',
  'Managing tickets in platforms such as Zendesk and tracking tasks in Visual Studio boards'
],    
        },
        {titleList : 'Technologies and Tools',
          itemsList : ['SQL, API REST, Zendesk, Mongo DB Compass, FileZilla, Microsoft Azure']
        }]
    },
    ProjectInfo: [
  /*{
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
  },*/
  {
    name: 'Agora Mercado',
    description:
  'Agora is an e-commerce platform created to connect buyers and sellers in a digital, simple, and accessible way, allowing users to find and offer products in one place, from any device, without the need for downloads.',
image: agora.src,
features: [
  'User registration and authentication system with access control',
  'Real-time notifications using WebSockets',
  'Order management with state control, automatic expiration, and historical records',
  'Support system with tickets and real-time chat between users and administrators',
  'Responsive design'
],

    techIcons: [
      <DiReact key="react" />,
      <SiExpress key="express" />,
      <SiTypescript key="ts" />,
      <FaNodeJs key="node"/>,
      <SiTailwindcss key="tailwind" />,
      <SiMongodb />
    ],
    technologies: ['React', 'Typescript', 'Mongo DB', 'Node.js', 'Tailwind CSS', 'Express'],
    links: {
      github: 'https://github.com/JoaquinGabriel17/rosario-mercado',
      demo: 'https://agora-six-rho.vercel.app/'
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
    technologies: ['React', 'Redux', 'JavaScript'],
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
            'Consultas y validaciones en bases de datos relacionales y no relacionales',
            'Gestión de tickets en plataformas como Zendesk y seguimiento de tareas en tableros de Visual Studio'
          ],    
        },
        {titleList : 'Tecnologías y herramientas',
          itemsList : ['SQL, API REST, Zendesk, Mongo DB Compass, FileZilla, Microsoft Azure']
        }]
    },
   
    ProjectInfo: [
  /*{
    name: 'Crypto Metrics',
    description: 'Esta aplicación permite consultar en tiempo real las principales criptomonedas del mercado. El proyecto está desarrollado con React para la interfaz, integrando la API de CoinGecko para obtener los datos del mercado en vivo.',
    image: criptoMetrics.src,
    features: ['Registro de usuarios', 'Múltiples vistas de estadísticas', 'Estadísticas en tiempo real'],
    techIcons: [<DiReact key="react" />, <SiRedux key="redux" />, <SiJavascript key="js" />],
    links:{
      github: 'https://github.com/JoaquinGabriel17/crypto-metrics',
      demo: 'https://crypto-metrics-sigma.vercel.app/'
    }
  },*/
  {
    name: 'Agora Mercado',
    description:
    'Agora es un e-commerce creado para conectar compradores y vendedores de forma digital, simple y accesible, permitiendo encontrar y ofrecer productos en un solo lugar, desde cualquier dispositivo y sin necesidad de descargas.',
    image: agora.src,
    features: [
  'Sistema de registro y autenticación de usuarios con control de acceso',
  'Notificaciones en tiempo real mediante WebSockets',
  'Gestión de órdenes con control de estados, expiración automática y registro histórico',
  'Sistema de soporte con tickets y chat en tiempo real entre usuarios y administradores',
  'Diseño responsive'
],

    techIcons: [
      <DiReact key="react" />,
      <SiExpress key="express" />,
      <SiTypescript key="ts" />,
      <FaNodeJs key="node"/>,
      <SiTailwindcss key="tailwind" />,
      <SiMongodb />
    ],
    technologies: ['React', 'Typescript', 'Mongo DB', 'Node.js', 'Tailwind CSS', 'Express'],
    links: {
      github: 'https://github.com/JoaquinGabriel17/rosario-mercado',
      demo: 'https://agora-six-rho.vercel.app/'
    }
  },
   {
    name: 'Linko',
    description: 'Linko es un acortador de URLs con una interfaz simple e intuitiva, creado para demostrar habilidades en desarrollo full stack con tecnologías modernas.',
    image: linko.src,
    features: ['Registro de usuarios', 'Acortar URLs', 'Guardar URLs'],
    techIcons: [<DiReact key="react" />, <SiNextdotjs key="next" />, <SiJavascript key="js" />, <SiMongodb key="mongodb" />, <FaNodeJs key="node"/>],
    technologies: ['React', 'Next.js', 'JavaScript', 'MongoDB', 'Node.js'],
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
    technologies: ['React', 'Redux', 'JavaScript'],
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
     technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Redux'],
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
