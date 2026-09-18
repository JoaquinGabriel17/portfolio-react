
import styles from './certifications.module.css';
import { ExternalLink, Award } from 'lucide-react';

export default function CertificationCard({ certification, lang }) {
    // Traducciones centralizadas en un objeto para facilitar su mantenimiento
    const t = {
        downloadPdf: lang === "es" ? "Descargar PDF" : "Download PDF",
        viewDetail: lang === "es" ? "Ver detalle" : "View detail",
        viewCert: lang === "es" ? "Ver Certificación" : "View Certification",
    };

    return (
        <div className={styles.certification}>
            <div className={styles.dataContainer}>
                <div className={styles.certificationHeader}>
                    <p className={styles.certificationCompany}>{certification.company}</p>
                    <p className={styles.certificationDate}>{certification.date}</p>
                </div>

                <div className={styles.certificationBody}>
                    <p className={styles.certificationName}>{certification.name}</p>

                    {/* Si no hay imagen, se muestra un placeholder con el mismo tamaño */}
                    {certification.image ? (
                        <img src={certification.image} alt={certification.name} />
                    ) : (
                        <div
                            className={styles.certificationImagePlaceholder}
                            aria-hidden="true"
                        >
                            <Award size={40} />
                        </div>
                    )}
                </div>

                <div className={styles.certificationLinks}>
                    {/* Botón 1: Descargar PDF (disabled si no hay pdf) */}
                    {certification.pdf ? (
                        <a
                            className={styles.certificationLink}
                            href={certification.pdf}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.downloadPdf}
                        </a>
                    ) : (
                        <button className={styles.certificationLink} disabled>
                            {t.downloadPdf}
                        </button>
                    )}

                    {/* Botón 2: Ver detalle (siempre disabled por ahora) */}
                    <button className={styles.certificationLink} disabled>
                        {t.viewDetail}
                    </button>

                    {/* Botón 3: Icono external link a url (disabled si es null) */}
                    {certification.url ? (
                        <a
                            className={styles.certificationLink}
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.viewCert}
                            title={t.viewCert}
                        >
                            <ExternalLink size={16} />
                        </a>
                    ) : (
                        <button
                            className={styles.certificationLink}
                            disabled
                            aria-label={t.viewCert}
                            title={t.viewCert}
                        >
                            <ExternalLink size={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}