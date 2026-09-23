import styles from './presentation.module.css'
import { useTypewriter } from "@/components/typeWriter/useTypewriter";
import {useMemo} from "react";

export default function Presentation({ data, lang }) {
    const { 
        role, 
        title, 
        roleDescription, 
        imageUrl, 
        availableForWork, 
        buttonText 
    } = data;

    const phrases = useMemo(
    () =>
      lang === "es"
        ? [
            "Desarrollador Full Stack.",
            "Soluciones escalables.",
            "Pasión por la tecnología.",
          ]
        : [
            "Full Stack Developer.",
            "Scalable solutions.",
            "Passionate about technology.",
          ],
    [lang]
  );

  const typed = useTypewriter(phrases);

    return (
        <section className={styles.presentation}>
            
            {/* Columna izquierda: Texto y botón */}
            <div className={styles.presentationContent}>
                <span className={styles.role}>{role}</span>
                <h1 className={styles.dynamicTitle}>
      {typed}
      <span className="animate-pulse">|</span>
    </h1>
                <p className={styles.parrafo}>{roleDescription}</p>
                
                <a href="#projects" className={`btn-primary ${styles.button}`}>
                    <span>{buttonText}</span>
                    
                </a>
            </div>

            {/* Columna derecha: Imagen y badge */}
            <div className={styles.imageContainer}>
                {/*<img 
                    src={imageUrl} 
                    alt={role} 
                    className={styles.image} 
                />
                
                <div className={styles.availabilityBadge}>
                    <div className={styles.badgeContent}>
                        <span className={styles.dot}></span>
                        <span className={styles.badgeText}>{availableForWork}</span>
                    </div>
                    <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </div>*/}
            </div>

        </section>
    )
}