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
import { useState, useEffect } from "react";
import { texts } from "@/data/texts";
import Navbar from "@/components/navbar/Navbar";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import Certifications from "@/components/certifications/Certifications";




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


  

  return (
    <div className={styles.ext}>
      <Navbar toChangeLang={changeLang} lang={lang}></Navbar>
    <div className={styles.container}>
      <section id="presentation">
        <Presentation data={content.presentation} ></Presentation>
        <Icon iconList={icons} lang={lang}></Icon>
      </section>

        <section id="experience" >
        <h2 className={styles.title}>{lang === "es" ? "Experiencia" : "Experience"}</h2>
        {content.experience.length > 0 && content.experience.map((exp, index) => (
          <ExperienceCard 
          data={exp}
          key={`experience ${index}`}
          lang={lang}
        ></ExperienceCard>
        ))}
        </section>

        <section id="projects" >
        <Projects ProjectsInfo={content.ProjectInfo} lang={lang}></Projects>
        </section>

        <Certifications data={content.certifications} lang={lang}></Certifications>

        <section id="skills" ></section>
        <Skills></Skills>

        
        

    </div>
    </div>
  );
}
