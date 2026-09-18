import { SiNextdotjs, SiMongodb, SiRedux, SiFirebase, SiJavascript, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaServer, FaNodeJs } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';

import rosa from '@/../public/rosadelviento.png'
import linko from '@/../public/linko2.png'
import movie from '@/../public/moviefinder.png'
import agora from '@/../public/agora.png'
import colibri from '@/../public/colibri.png'
import colibri2 from '@/../public/colibri.svg'

export const texts = {
  en: {
    certifications: [
      {
        name: "Programming",
        certifications: [
          {
            image: null,
            name: "Full Stack Developer",
            date: "2024",
            company: "Soy Henry",
            url: null,
            pdf: "/henry.pdf",
            detail: "/certifications/henry"
          },
        ]
      },
      {
        name: "Cibersecurity",
        certifications: [
          {
            image: "/I2CS.png",
            name: "Introduction to Cybersecurity",
            date: "2026",
            company: "Cisco",
            url: "https://www.credly.com/badges/dc2d53eb-c21a-46fd-9e38-f2bcab8b5c4b/public_url",
            pdf: "/cisco-cybersecurity-intro.pdf",
            detail: "/certifications/henry"
          },
        ]
      }
    ],

    presentation: {
      role: "Full Stack Developer",
      roleDescription: "Full Stack Developer with over 2 years of experience in creating dynamic and innovative web applications. Passionate about turning ideas into functional products.",
      mostWork: "What I worked with the most"
    },
    experience: [
      {
        company: "Colibrí LATAM",
        role: "Full Stack Developer - Co-Founder",
        tags: ["Product", "Entrepreneurship Management", "Blockchain"],
        stack: ["React", "Nest.js", "TypeScript", "PostgreSQL"],
        startDate: "JAN 2026",
        endDate: "PRESENT",
        isCurrent: true,
      },
      {
        company: "LUUÍ", role: "Full Stack Developer",
        tags: ["Internship", "Services", "Elderly Care"],
        stack: ["Next.js", "Nest.js", "TypeScript", "Supabase"], startDate: "AUG 2026", endDate: "PRESENT", isCurrent: true,
      },
      {
        company: "Aisla Frio Pro", role: "Full Stack Developer",
        tags: ["Internship", "Business Management", "Services"],
        stack: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL"], startDate: "JUN 2026", endDate: "SEP 2026", isCurrent: false,
      },
      {
        company: "EcoRed", role: "Full Stack Developer",
        tags: ["Internship", "Recycling"],
        stack: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL"], startDate: "MAY 2026", endDate: "SEP 2026", isCurrent: false,
      },
      {
        company: "Alephee", role: "Customer Service Analyst",
        tags: ["Customer Service", "Problem Solving", "Technical Support"],
        stack: ["SQL Server", "Excel", "MSSMS", "Zendesk"], startDate: "JUN 2025", endDate: "JUN 2026", isCurrent: false,
      },],

    ProjectInfo: [
      {
        name: 'Colibrí LATAM',
        description:
          'Developed a company application from scratch, including user CRUD operations and management of other entities, a statistics dashboard, and a modern UI/UX design.',
        image: colibri.src,
        features: [
          'User and other entities CRUD.',
          'Multiple real-time statistic views',
          'Web3 integration, wallet connection, and Story Protocol integration',
          'Modern UI/UX design, responsive and accessible'
        ],
        techIcons: [],
        technologies: ['Next.js', 'Nest.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
        links: {
          github: null,
          demo: 'https://colibrilatam.com/index.html'
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
          <FaNodeJs key="node" />,
          <SiTailwindcss key="tailwind" />,
          <SiMongodb key="mongodb" />
        ],
        technologies: ['React', 'Typescript', 'Mongo DB', 'Node.js', 'Tailwind CSS', 'Express'],
        links: {
          github: 'https://github.com/JoaquinGabriel17/rosario-mercado',
          demo: 'https://agora-six-rho.vercel.app/'
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

    certifications: [
      {
        name: "Programación",
        certifications: [
          {
            image: null,
            name: "Desarrollador Full Stack",
            date: "2024",
            company: "Soy Henry",
            url: null,
            pdf: "/henry.pdf",
            detail: "/certifications/henry"
          },
        ]
      },
      {
        name: "Ciberseguridad",
        certifications: [
          {
            image: "/I2CS.png",
            name: "Introducción a la Ciberseguridad",
            date: "2026",
            company: "Cisco",
            url: "https://www.credly.com/badges/dc2d53eb-c21a-46fd-9e38-f2bcab8b5c4b/public_url",
            pdf: "/cisco-cybersecurity-intro.pdf",
            detail: "/cv"
          },
        ]
      }
    ],

    presentation: {
      role: "Desarrollador Full Stack",
      roleDescription: "Desarrollador Full Stack con más de 2 años de experiencia creando aplicaciones web dinámicas e innovadoras. Apasionado por transformar ideas en productos funcionales.",
      mostWork: "Con lo que mas trabajé"
    },
    experience: [
      {
        company: "Colibrí LATAM",
        role: "Full Stack Developer - Co-Founder",
        tags: ["Producto", "Gestión de emprendimientos", "Blockchain"],
        stack: ["React", "Nest.js", "TypeScript", "PostgreSQL"],
        startDate: "ENE 2026",
        endDate: "ACTUALIDAD",
        isCurrent: true,
      },
      {
        company: "LUUÍ",
        role: "Full Stack Developer",
        tags: ["Pasantía", "Servicios", "Adultos mayores"],
        stack: ["Next.js", "Nest.js", "TypeScript", "Supabase"],
        startDate: "AGO 2026",
        endDate: "ACTUALIDAD",
        isCurrent: true,
      },
      {
        company: "Aisla Frio Pro",
        role: "Full Stack Developer",
        tags: ["Pasantía", "Gestión empresarial", "Servicios"],
        stack: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL"],
        startDate: "JUN 2026",
        endDate: "SEPT 2026",
        isCurrent: false,
      },

      {
        company: "EcoRed",
        role: "Full Stack Developer",
        tags: ["Pasantía", "Reciclaje"],
        stack: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL"],
        startDate: "MAY 2026",
        endDate: "SEPT 2026",
        isCurrent: false,
      },
      {
        company: "Alephee",
        role: "Analista de servicio al cliente",
        tags: ["Atención al cliente", "Resolución de problemas", "Soporte técnico"],
        stack: ["SQL Server", "Excel", "MSSMS", "Zendesk"],
        startDate: "JUN 2025",
        endDate: "JUN 2026",
        isCurrent: false,
      },
    ],

    ProjectInfo: [
      {
        name: 'Colibrí LATAM',
        description:
          'Desarrollo de una aplicación punta a punta para la gestión de emprendimientos con CRUD de usuarios y otras entidades, dashboard de estadísticas en tiempo real y integración de Web3.',
        image: colibri.src,
        features: [
          'CRUD de usuarios y otras entidades',
          'Vistas de estadísticas en tiempo real',
          'Integración de Web3, conexión de wallet e integración con blockchain de Story Protocol',
          'Diseño UI/UX moderno, responsive y accesible'
        ],
        techIcons: [],
        technologies: ['Next.js', 'Nest.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
        links: {
          github: null,
          demo: 'https://colibrilatam.com/index.html'
        }
      },
      {
        name: 'Linko',
        description: 'Linko es un acortador de URLs con una interfaz simple e intuitiva, creado para demostrar habilidades en desarrollo full stack con tecnologías modernas.',
        image: linko.src,
        features: ['Registro de usuarios', 'Acortar URLs', 'Guardar URLs'],
        techIcons: [<DiReact key="react" />, <SiNextdotjs key="next" />, <SiJavascript key="js" />, <SiMongodb key="mongodb" />, <FaNodeJs key="node" />],
        technologies: ['React', 'Next.js', 'JavaScript', 'MongoDB', 'Node.js'],
        links: {
          github: 'https://github.com/JoaquinGabriel17/url-shortener',
          demo: 'https://linko-nine.vercel.app/'
        }
      },
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
          <FaNodeJs key="node" />,
          <SiTailwindcss key="tailwind" />,
          <SiMongodb key="mongodb" />
        ],
        technologies: ['React', 'Typescript', 'Mongo DB', 'Node.js', 'Tailwind CSS', 'Express'],
        links: {
          github: 'https://github.com/JoaquinGabriel17/rosario-mercado',
          demo: 'https://agora-six-rho.vercel.app/'
        }
      },

      {
        name: 'Movie Finder',
        description: 'Aplicación web que permite explorar más de 5.000 películas mediante una búsqueda indexada rápida, eficiente e intuitiva. Incluye múltiples filtros para refinar resultados',
        image: movie.src,
        features: ['Búsqueda indexada', 'Agregar películas a favoritas', 'Información detallada de películas'],
        techIcons: [<DiReact key="react" />, <SiJavascript key="js" />, <FaNodeJs key="node" />],
        technologies: ['React', 'Redux', 'JavaScript'],
        links: {
          github: 'https://github.com/JoaquinGabriel17/Movie-Finder',
          demo: 'https://movie-finder-beige-zeta.vercel.app/'
        }
      },
      {
        name: 'Rosa de los vientos',
        description: 'Rosa de los vientos es un restaurante digital donde los usuarios pueden comprar y vender alimentos.',
        image: rosa.src,
        features: ['Registro de usuarios', 'Compra', 'Venta', 'Gestión de envíos'],
        techIcons: [<DiReact key="react" />, <SiRedux key="redux" />, <SiFirebase key="firebase" />, <SiJavascript key="js" />, <FaNodeJs key="node" />],
        technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Redux'],
        links: {
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
