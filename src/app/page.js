"use client"
import styles from "./page.module.css";
import Presentation from "@/components/presentation/presentation";
import Skills from "@/components/skills/skills";
import Icon from "@/components/icons/Icon";
import github from '@/../public/github.svg'
import linkedin from '@/../public/linkedin.svg'
import wasap from '@/../public/whatsapp-brands.svg'
import email from '@/../public/email.svg'
import Projects from "@/components/projects/Project";
import { useState, useEffect } from "react";
import { texts } from "@/data/texts";
import Navbar from "@/components/navbar/Navbar";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import Certifications from "@/components/certifications/Certifications";
import Footer from "@/components/Footer/Footer";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [content, setContent] = useState(texts["en"]);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
    setContent(texts[savedLang]);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    setContent(texts[newLang]);
  };

  let icons = [
    { src: github.src, href: 'https://github.com/JoaquinGabriel17' },
    { src: linkedin.src, href: 'https://www.linkedin.com/in/joaquin-ocampo-taboada-a7b213252/?locale=es-ES' },
    { src: wasap.src, href: '+54 9 3876 56-7092' },
    { src: email.src, href: 'joaquingabriel3@hotmail.com' }
  ]

  return (
    <div className={styles.ext}>
      <Navbar toChangeLang={changeLang} lang={lang}></Navbar>
      <div className={styles.container}>
        <section id="presentation">
          <Presentation data={content.presentation} ></Presentation>

        </section>

        <section id="experience" >
          <SectionHeader
            subtitle={lang === "es" ? "Experiencia" : "Experience"}
            title={lang === "es" ? "Trayectoria construyendo soluciones." : "A journey building solutions."}
            description={lang === "es"
              ? "Un recorrido por los roles y proyectos que marcaron mi desarrollo profesional y técnico."
              : "A journey through the roles and projects that marked my professional and technical development."}
          />
          <div className={styles.experienceList}>
            {content.experience.length > 0 && content.experience.map((exp, index) => (
              <ExperienceCard
                data={exp}
                key={`experience ${index}`}
                lang={lang}
              />
            ))}
          </div>
        </section>

        <section id="projects" >
          <SectionHeader
            subtitle={lang === "es" ? "Proyectos" : "Projects"}
            title={lang === "es" ? "Proyectos construidos para resolver problemas reales." : "Projects built to solve real-world problems."}
            description={lang === "es"
              ? "Una selección de proyectos donde combino desarrollo frontend y backend, arquitectura y tecnologías modernas para construir aplicaciones funcionales y escalables."
              : "A selection of projects where I combine frontend and backend development, architecture, and modern technologies to build functional and scalable applications."}
          />
          <Projects ProjectsInfo={content.ProjectInfo} lang={lang}></Projects>
        </section>




        <section id="about">
          <SectionHeader
            subtitle={lang === "es" ? "Sobre mí" : "About me"}
            title={lang === "es" ? "Construyo soluciones tecnológicas." : "I build technology solutions."}
            description={lang === "es"
              ? "Desarrollo productos y aplicaciones de extremo a extremo, combinando frontend, backend y arquitectura de software. Busco mejorar continuamente mis conocimientos y aplicar tecnologías y buenas prácticas que aporten valor a cada proyecto."
              : "I develop end-to-end products and applications, combining frontend, backend, and software architecture. I continuously work to expand my knowledge and apply technologies and best practices that add value to every project."}
          />
          <a href="/about"  className={`btn-primary ${styles.button}`}> <span>{lang === "es" ? "Más sobre mí" : "More about me"}</span></a>
        </section>
        <section id="contact"></section>
        <Footer></Footer>

      </div>
    </div>
  );
}
