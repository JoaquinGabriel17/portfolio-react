import styles from './ProjectRow.module.css';
import { ExternalLink } from 'lucide-react';

export default function ProjectRow({ project, lang }) {
  const { year, name, tags, description, url, technologies } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.row}
    >
      <div className={styles.year}>{year}</div>

      <div className={styles.center}>
        <h3 className={styles.title}>{name}</h3>

        {tags && tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.right}>
        <div className={styles.stackContainer}>
        <div className={styles.stackLabel}>Stack</div>
        <div className={styles.stack}>
          {technologies.join(' / ')}
        </div>
        </div>
        <div className={styles.iconButton} aria-hidden="true">
          <ExternalLink size={18} />
        </div>
      </div>
    </a>
  );
}