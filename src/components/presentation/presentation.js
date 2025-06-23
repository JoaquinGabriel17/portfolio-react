import styles from './presentation.module.css'

export default function Presentation() {
    return (
        <section className={styles.presentation}>
            <h1>Joaquín Ocampo Taboada</h1>
            <h2 className={styles.presentationName}>Full Stack Developer</h2>
            <p className={styles.parrafo}>Me apasiona aprender y desafiarme con nuevos conocimientos y tecnologías. Siempre estoy en busca de nuevos desafíos que impulsen mi crecimiento y el desarrollo de mis habilidades.</p>
  
        </section>
    )
}

/* 
            <img alt="foto-joaquin" className={styles.imgAboutMe} src="https://cdn.pixabay.com/photo/2023/07/12/08/03/ai-generated-8121986_1280.jpg"></img>
                      <p>¡Hola! Mi nombre es Joaquín Ocampo y soy desarrollador full stack</p>
            <p className="text-xl sm:text-2xl mb-6">Desarrollador Full Stack enfocado en crear experiencias web modernas, funcionales y atractivas.</p>
            <p>En este portfolio vas a poder ver mis mi formación, carrera profesional y proyectos.</p>
*/