import styles from './experiencia.module.css'

export default function Experiencia(){
    return(
        <section id="sobre-mi" className={styles.aboutSection}>
        <h1 className={styles.title}>Experiencia</h1>
        <div className={styles.aboutContent}>
          <p>
            Soy <strong>Joaquín Ocampo</strong>, un desarrollador full stack apasionado por la tecnología y la resolución de problemas.
            Me formé en Henry y actualmente me desempeño como analista de servicio al cliente en Alephee.
          </p>
          <p>
            Cuento con 2 años de experiencia en el rol de analista, utilizando principalmente <strong>SQL</strong>. También he trabajado en el desarrollo de aplicaciones con tecnologías como <strong>JavaScript, React, Node.js</strong> y <strong>SQL</strong>. Manejo herramientas como <strong>Postman</strong> para el testeo de endpoints y APIs REST, y <strong>MongoDB Compass</strong> para la gestión visual de bases de datos MongoDB.
          </p>
          <p>
            Me gusta trabajar en equipo, escribir código limpio y aprender nuevas herramientas. Actualmente estoy en búsqueda de oportunidades que me permitan seguir creciendo tanto a nivel profesional como personal.
          </p>
        </div>
      </section>
    )
}