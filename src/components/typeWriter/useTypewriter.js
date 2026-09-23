import { useState, useEffect } from "react";

export function useTypewriter(
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    // Terminó de escribir: pausar y luego empezar a borrar
    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    // Terminó de borrar: pasar a la siguiente palabra
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Escribir o borrar un carácter
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.slice(0, Math.max(prev.length - 1, 0))
          : currentWord.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}