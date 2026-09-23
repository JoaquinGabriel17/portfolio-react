import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Project.module.css';
import ProjectRow from './ProjectRow';

const ITEMS_PER_PAGE = 3;

export default function Projects({ ProjectsInfo, lang }) {
  const projects = ProjectsInfo ?? [];
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  const [page, setPage] = useState(0);

  // Si cambia la cantidad de proyectos, clampeamos la página actual
  // (mantiene la página al cambiar de idioma, sólo corrige si queda fuera de rango)
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const start = page * ITEMS_PER_PAGE;
  const visible = projects.slice(start, start + ITEMS_PER_PAGE);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  // ─── Swipe (mobile) ──────────────────────────────────────
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const prevLabel = lang === 'es' ? 'Página anterior' : 'Previous page';
  const nextLabel = lang === 'es' ? 'Página siguiente' : 'Next page';
  const goToLabel = lang === 'es' ? 'Ir a la página' : 'Go to page';

  return (
    <div className={styles.container}>

      <div className={styles.paginationWrapper}>
        <button
          type="button"
          className={styles.arrow}
          onClick={goPrev}
          disabled={page === 0}
          aria-label={prevLabel}
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>

        {/* key={page} remonta el contenedor para re-disparar la animación */}
        <div
          className={styles.list}
          key={page}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visible.map((project, index) => (
            <ProjectRow
              key={`${project.name}-${start + index}`}
              project={project}
              lang={lang}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={goNext}
          disabled={page >= totalPages - 1}
          aria-label={nextLabel}
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {totalPages > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
              onClick={() => setPage(i)}
              aria-label={`${goToLabel} ${i + 1}`}
              aria-current={i === page ? 'page' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}