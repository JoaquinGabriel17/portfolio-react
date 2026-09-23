import styles from './certifications.module.css';
import CertificationList from './CertificationList';

export default function Certifications({ data, lang }) {
    return (
        <section>
            <div className={styles.certificationsContainer}>
                {data.map((category, index) => (
                    <CertificationList
                        key={index}
                        category={category}
                        lang={lang}
                    />
                ))}
            </div>
        </section>
    );
}