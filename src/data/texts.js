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
  title: "Clean code.",
  roleDescription: "Full Stack Developer with over 2 years of experience in creating dynamic and innovative web applications. Passionate about turning ideas into functional products.",
  mostWork: "What I worked with the most",
  imageUrl: "/alephee.png", // ← Reemplaza con tu imagen real
  availableForWork: "Available for new projects",
  buttonText: "View projects"
},
    experience: [
      {
        company: "Colibrí LATAM",
        role: "Full Stack Developer - Co-Founder",
        tags: ["Product", "Entrepreneurship Management", "Blockchain"],
        stack: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
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
        year: '2024',
        tags: ['Web3', 'Blockchain', 'Dashboard'],
        description:
          'Developed a company application from scratch, including user CRUD operations and management of other entities, a statistics dashboard, and a modern UI/UX design.',
        url: 'https://colibrilatam.com/index.html',
        technologies: ['Next.js', 'Nest.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      },
      {
        name: 'Linko',
        year: '2023',
        tags: ['Full Stack', 'URL Shortener', 'Auth'],
        description:
          'Linko is a URL shortener with a clean and intuitive interface, built to showcase full stack development skills using modern technologies.',
        url: 'https://linko-nine.vercel.app/',
        technologies: ['React', 'Next.js', 'JavaScript', 'MongoDB', 'Node.js'],
      },
      {
        name: 'Agora Mercado',
        year: '2023',
        tags: ['E-commerce', 'WebSockets', 'Real-time'],
        description:
          'Agora is an e-commerce platform created to connect buyers and sellers in a digital, simple, and accessible way, allowing users to find and offer products in one place, from any device, without the need for downloads.',
        url: 'https://agora-six-rho.vercel.app/',
        technologies: ['React', 'Typescript', 'Mongo DB', 'Node.js', 'Tailwind CSS', 'Express'],
      },
      {
        name: 'Movie Finder',
        year: '2023',
        tags: ['React', 'Redux', 'Search'],
        description:
          'A web application that lets users explore over 5,000 movies through a fast, efficient, and intuitive indexed search. Includes multiple filters to refine search results.',
        url: 'https://movie-finder-beige-zeta.vercel.app/',
        technologies: ['React', 'Redux', 'JavaScript'],
      },
      {
        name: 'Rosa de los vientos',
        year: '2023',
        tags: ['E-commerce', 'Firebase', 'Full Stack'],
        description:
          'Rosa de los vientos is a digital restaurant platform where users can buy and sell food products online.',
        url: 'https://p-fhenry-front.vercel.app/',
        technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Redux'],
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
  title: "Código limpio.",
  roleDescription: "Desarrollador Full Stack con más de 2 años de experiencia creando aplicaciones web dinámicas e innovadoras. Apasionado por transformar ideas en productos funcionales.",
  mostWork: "Con lo que mas trabajé",
  imageUrl: "/alephee.png", // ← Reemplaza con tu imagen real
  availableForWork: "Disponible para nuevos proyectos",
  buttonText: "Ver proyectos"
},
    experience: [
      {
        company: "Colibrí LATAM",
        role: "Full Stack Developer - Co-Founder",
        tags: ["Producto", "Gestión de emprendimientos", "Blockchain"],
        stack: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
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
        year: '2024',
        tags: ['Web3', 'Blockchain', 'Dashboard'],
        description:
          'Desarrollo de una aplicación punta a punta para la gestión de emprendimientos con CRUD de usuarios y otras entidades, dashboard de estadísticas en tiempo real e integración de Web3.',
        url: 'https://colibrilatam.com/index.html',
        technologies: ['Next.js', 'Nest.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      },
      {
        name: 'Linko',
        year: '2023',
        tags: ['Full Stack', 'Acortador', 'Auth'],
        description:
          'Linko es un acortador de URLs con una interfaz simple e intuitiva, creado para demostrar habilidades en desarrollo full stack con tecnologías modernas.',
        url: 'https://linko-nine.vercel.app/',
        technologies: ['React', 'Next.js', 'JavaScript', 'MongoDB', 'Node.js'],
      },
      {
        name: 'Agora Mercado',
        year: '2023',
        tags: ['E-commerce', 'WebSockets', 'Tiempo real'],
        description:
          'Agora es un e-commerce creado para conectar compradores y vendedores de forma digital, simple y accesible, permitiendo encontrar y ofrecer productos en un solo lugar, desde cualquier dispositivo y sin necesidad de descargas.',
        url: 'https://agora-six-rho.vercel.app/',
        technologies: ['React', 'Typescript', 'Mongo DB', 'Node.js', 'Tailwind CSS', 'Express'],
      },
      {
        name: 'Movie Finder',
        year: '2023',
        tags: ['React', 'Redux', 'Búsqueda'],
        description:
          'Aplicación web que permite explorar más de 5.000 películas mediante una búsqueda indexada rápida, eficiente e intuitiva. Incluye múltiples filtros para refinar resultados.',
        url: 'https://movie-finder-beige-zeta.vercel.app/',
        technologies: ['React', 'Redux', 'JavaScript'],
      },
      {
        name: 'Rosa de los vientos',
        year: '2023',
        tags: ['E-commerce', 'Firebase', 'Full Stack'],
        description:
          'Rosa de los vientos es un restaurante digital donde los usuarios pueden comprar y vender alimentos.',
        url: 'https://p-fhenry-front.vercel.app/',
        technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Redux'],
      }
    ],

    contact: {
      title: "Contacto",
      email: "Escríbeme a: joaquin@example.com",
    },
  },
};
