import Image from "next/image";
import styles from "./page.module.css";
import ProjectCarousel from "@/components/projectCarousel/ProjectCarousel";
import Presentation from "@/components/presentation/presentation";
import Skills from "@/components/skills/skills";
import Card from "@/components/card/card";

export default function Home() {

  let about = 'Hola! Soy <strong>Joaquín Ocampo</strong>, un desarrollador full stack apasionado por la tecnología y la resolución de problemas. Me formé en Henry y actualmente me desempeño como analista de servicio al cliente en Alephee.<br></br>Cuento con 2 años de experiencia en el rol de analista, utilizando principalmente <strong>SQL</strong>. También he trabajado en el desarrollo de aplicaciones con tecnologías como <strong>JavaScript, React, Node.js</strong> y <strong>SQL</strong>. Manejo herramientas como <strong>Postman</strong> para el testeo de endpoints y APIs REST, y <strong>MongoDB Compass</strong> para la gestión visual de bases de datos MongoDB.<br></br>Me gusta trabajar en equipo, escribir código limpio y aprender nuevas herramientas. Actualmente estoy en búsqueda de oportunidades que me permitan seguir creciendo tanto a nivel profesional como personal.'
  let experience = 'Alephee es una empresa que conecta a vendedores con Mercado Libre a través de integraciones automatizadas. Formé parte del equipo de soporte, donde atendía consultas de clientes, analizaba problemas técnicos y gestionaba soluciones tanto para usuarios externos como para equipos internos.'
  let title = 'Experiencia'
  let subtitle = '- Analista de servicio al cliente'
  let icon = 'https://storage.wisboo.com/academy_data/mg5EopG0V4/public/GwTnNt7X-logo-alephee_color.png'
  let date = '07/07/2023  -  17/06/2025'
  let list = {
    title: 'Funciones y responsabilidades',
    items: [
      'Resolución de incidencias y análisis técnico de requerimientos',
      'Integración y consumo de servicios mediante API REST',
      'Consultas y validaciones en bases de datos relacionales (SQL Server) y no relacionales (MongoDB)',
      'Gestión de tickets en plataformas como Zendesk y seguimiento de tareas en tableros de Visual Studio'
    ]
  }

  return (
    <div className={styles.container}>
      <div className={styles.firstBody}>
        <Presentation></Presentation>
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
          key='experience'
        ></Card>
        <Skills></Skills>
      </div>
        {/*<ProjectCarousel></ProjectCarousel>*/}
    </div>
  );
}
