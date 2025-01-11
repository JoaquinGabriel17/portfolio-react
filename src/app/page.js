import Image from "next/image";
import styles from "./page.module.css";
import ProjectCarousel from "@/components/ProjectCarousel";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Proyectos</h1>
        <ProjectCarousel></ProjectCarousel>
      </div>
    </div>
  );
}
