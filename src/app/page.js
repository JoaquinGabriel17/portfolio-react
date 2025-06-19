import Image from "next/image";
import styles from "./page.module.css";
import ProjectCarousel from "@/components/projectCarousel/ProjectCarousel";
import Presentation from "@/components/presentation/presentation";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Experiencia from "@/components/experiencia/experiencia";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Presentation></Presentation>
        <About></About>
        <Experiencia></Experiencia>
       <Skills></Skills>
        <ProjectCarousel></ProjectCarousel>
    </div>
  );
}
