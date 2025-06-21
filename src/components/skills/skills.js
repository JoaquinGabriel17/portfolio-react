import styles from './skills.module.css'
import html from '@/../public/HTML5.svg'
import sql from '@/../public/SQL.svg'
import css from '@/../public/CSS3.svg'
import js from '@/../public/JavaScript.svg'
import next from '@/../public/Next.js.svg'
import node from '@/../public/Node.js.svg'
import postgre from '@/../public/PostgresSQL.svg'
import react from '@/../public/React.svg'
import filezila from '@/../public/FileZilla.svg'
import mongo from '@/../public/MongoDB.svg'
import postman from '@/../public/Postman.svg'
import swagger from '@/../public/Swagger.svg'
import microsql from '@/../public/micro sql.svg'
import c from '@/../public/C++.svg'



export default function Skills() {

    let lenguajes = [
        { name: 'HTML', src: html.src },
        { name: 'SQL', src: sql.src },
        { name: 'React', src: react.src },
        { name: 'JavaScript', src: js.src },
        { name: 'CSS', src: css.src },
        { name: 'Node.js', src: node.src },
        { name: 'Next.js', src: next.src },
        { name: 'C++', src: c.src },
        { name: 'PostgreSQL', src: postgre.src },
    ]
    let herramientas = [
        { name: 'FileZilla', src: filezila.src },
        { name: 'MongoDB Compass', src: mongo.src },
        { name: 'Postman', src: postman.src },
        { name: 'Swagger', src: swagger.src },
        { name: 'Microsoft SQL Server', src: microsql.src }
    ]

    return (

        <div id="habilidades" className={styles.skillsSection}>
            <div>
                <h2 className={styles.title}>Lenguajes y tecnologías</h2>
                <div className={styles.skillsGrid}>
                    {lenguajes.map((skill) => (
                        <figure key={skill.name} className={styles.skill}>
                            <img src={skill.src} alt={skill.name} />
                            <figcaption>{skill.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            <div>
                <h2 className={styles.title}>Herramientas</h2>
                <div className={styles.skillsGrid}>
                    {herramientas.map((tool) => (
                        <figure key={tool.name} className={styles.skill}>
                            <img src={tool.src} alt={tool.name} />
                            <figcaption>{tool.name}</figcaption>
                        </figure>

                    ))}
                </div>
            </div>
        </div>


    )
}