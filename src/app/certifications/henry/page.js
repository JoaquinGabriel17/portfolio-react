import styles from "./certifications.module.css";

export default function HenryCertification() {
  return (
    <div className={styles.main}>
        <a href="/" className={styles.backButton}>Volver</a>
        <div className={styles.pdfContainer}>
        <main >
            <iframe
                src="/henry.pdf"
                width="100%"
                height="1000px"
                title="Certificación Full Stack Web Developer - Soy Henry"
            />
        </main>
        </div>
    </div>
  );
}