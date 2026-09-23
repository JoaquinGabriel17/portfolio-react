"use client"
import Navbar from "@/components/navbar/Navbar"
import styles from "./about.module.css"
import SectionHeader from "@/components/sectionHeader/SectionHeader"
import { useState } from "react";
import { texts } from "@/data/texts"; // Asegúrate de que la ruta sea correcta
import SkillsList from "@/components/skillsList/SkillsList";
import Footer from "@/components/Footer/Footer";

export default function About() {

    const [lang, setLang] = useState("es");

    const t = texts[lang];

    const td = {
        es: {
            aboutDescription: "Desarrollador full stack. Tengo experiencia desarrollando con PERN y MERN, también en mobile con React Native. Ahora estoy estudiando IA y redes."
        },
        en: {
            aboutDescription: "Full Stack Developer. I have experience developing with PERN and MERN, as well as mobile development with React Native. I am currently studying AI and networking."
        }

    }

    return(
        <div className={styles.main}>
            <Navbar lang={lang} toChangeLang={(lang) => setLang(lang)} about={true} ></Navbar>

            <section className={styles.about}>
                <SectionHeader subtitle="Joaquín Ocampo Taboada"
            title={lang === "es" ? "Sobre mí." : "About me."}
            description={lang === "es"
              ? "Estudiante de programación, con experiencia en el desarrollo de aplicaciones web y móviles. Interés y conocimiento en IA, redes y ciberseguridad. Me interesa aprender y crecer profesionalmente día a día."
              : "Student of programming with experience in web and mobile application development. Interested in and knowledgeable about AI, networking, and cybersecurity. I am committed to learning and growing professionally every day."}></SectionHeader>
              <p className={styles.aboutDescription}>{td[lang].aboutDescription}</p>

                <div className={styles.buttonContainer}>
                    <a href="/Joaquin Ocampo CV - L.pdf" download className={`btn-primary ${styles.button}`}>Descargar CV</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/joaquin-ocampo-taboada-a7b213252/?locale=es" className={`btn-primary ${styles.button}`}>LinkedIn</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/JoaquinGabriel17" className={`btn-primary ${styles.button}`}>Github</a>
                </div>
            </section>

            <section className={styles.skills}>
                <SectionHeader subtitle="Skills"
            title={lang === "es" ? "Tecnologías con las que trabajo." : "Technologies I work with."}
            description={lang === "es"
              ? "Mi pasión por la programación me lleva a seguir aprendiendo y profundizando en tecnologías."
              : "My passion for programming drives me to keep learning and deepening my knowledge of different technologies."}></SectionHeader>
              <SkillsList categories={t.skills.categories} />
            </section>
<section id="contact">
          <SectionHeader
            subtitle={lang === "es" ? "Contacto" : "Contact"}
            title={lang === "es" ? "Hablemos de lo que podemos construir." : "Let's talk about what we can build."}
            description={lang === "es"
              ? "Si tenés una idea, necesitás ayuda con un producto o querés trabajar conmigo, podemos hablar y colaborar."
              : "If you have an idea, need help with a product, or want to work with me, let's talk and find the best way to bring it to life."}
            button={lang === "es" ? "Enviame un correo" : "Send me an email"}
            link="mailto:joaquingabriel3@hotmail.com"
            external={true}
          />

        </section>
        <Footer></Footer>

        </div>
    )
}