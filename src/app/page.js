import Image from "next/image";
import styles from "./page.module.css";
import ProjectCarousel from "@/components/ProjectCarousel";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <div>
          <h1>About me</h1>
          <p>Mi nombre es maximo decimo meridio, general de las legiones felix del norte, general del unico emperador marco aurelio, esposo de una esposa asesinada, padre de un hijo asesinado y juro que me vengaré, en esta vida o en la otra.</p>
          <p>Mi nombre es maximo decimo meridio, general de las legiones felix del norte, general del unico emperador marco aurelio, esposo de una esposa asesinada, padre de un hijo asesinado y juro que me vengaré, en esta vida o en la otra.</p>

        </div>

        

        <img className={styles.imgAboutMe} src="https://cdn.pixabay.com/photo/2023/07/12/08/03/ai-generated-8121986_1280.jpg"></img>
      </div>
      <div className={styles.section}>
        <h1>Proyectos</h1>
        <ProjectCarousel></ProjectCarousel>
      </div>
      
    </div>
  );
}
