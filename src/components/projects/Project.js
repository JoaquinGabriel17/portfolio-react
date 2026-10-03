import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Project.module.css";
import ProjectRow from "./ProjectRow";

const ITEMS_PER_PAGE = 3;

export default function Projects({ ProjectsInfo, lang }) {
  const projects = ProjectsInfo ?? [];
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const start = page * ITEMS_PER_PAGE;
  const visible = projects.slice(start, start + ITEMS_PER_PAGE);

  const goPrev = useCallback(() => {
    if (page > 0 && !isAnimating) {
      setIsAnimating(true);
      setPage((p) => p - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [page, isAnimating]);

  const goNext = useCallback(() => {
    if (page < totalPages - 1 && !isAnimating) {
      setIsAnimating(true);
      setPage((p) => p + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [page, totalPages, isAnimating]);

  const goToPage = useCallback((targetPage) => {
    if (targetPage !== page && !isAnimating) {
      setIsAnimating(true);
      setPage(targetPage);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [page, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key >= "1" && e.key <= "9") {
        const num = parseInt(e.key, 10) - 1;
        if (num < totalPages) {
          e.preventDefault();
          goToPage(num);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext, goToPage, totalPages]);

  // Swipe support
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

  const prevLabel = lang === "es" ? "Proyecto anterior" : "Previous project";
  const nextLabel = lang === "es" ? "Próximo proyecto" : "Next project";
  const goToLabel = lang === "es" ? "Ir a la página" : "Go to page";
  const pageLabel = lang === "es" ? "Página" : "Page";

  return (
    <div className={styles.container} role="region" aria-label={lang === "es" ? "Proyectos" : "Projects"}>
      <div className={styles.paginationWrapper}>
        <button
          type="button"
          className={`${styles.arrow} ${isAnimating ? styles.disabled : ""}`}
          onClick={goPrev}
          disabled={page === 0 || isAnimating}
          aria-label={prevLabel}
          aria-disabled={page === 0 || isAnimating}
        >
          <ChevronLeft size={24} strokeWidth={2} aria-hidden="true" />
        </button>

        <div
          ref={listRef}
          className={`${styles.list} ${isAnimating ? styles.animating : ""}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="list"
          aria-label={`${pageLabel} ${page + 1} ${lang === "es" ? "de" : "of"} ${totalPages}`}
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
          className={`${styles.arrow} ${styles.next} ${isAnimating ? styles.disabled : ""}`}
          onClick={goNext}
          disabled={page >= totalPages - 1 || isAnimating}
          aria-label={nextLabel}
          aria-disabled={page >= totalPages - 1 || isAnimating}
        >
          <ChevronRight size={24} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>

      {totalPages > 1 && (
        <div className={styles.dots} role="tablist" aria-label={lang === "es" ? "Paginación de proyectos" : "Project pagination"}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === page ? styles.dotActive : ""}`}
              onClick={() => goToPage(i)}
              aria-label={`${goToLabel} ${i + 1}`}
              aria-selected={i === page}
              role="tab"
              aria-controls={`project-page-${i}`}
              id={`project-tab-${i}`}
            />
          ))}
        </div>
      )}

      <div className={styles.pageInfo} aria-live="polite" aria-atomic="true">
        <span className={styles.pageCounter}>
          {page + 1} / {totalPages}
        </span>
      </div>
    </div>
  );
}