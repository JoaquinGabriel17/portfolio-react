"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./TerminalHero.module.css";

const COMMANDS = {
  en: [
    { cmd: "whoami", output: "joaquin.ocampo — Full Stack Developer" },
    { cmd: "cat philosophy.txt", output: "Products, not just code." },
    { cmd: "ls projects/", output: "colibri-latam/  aislapro/  ecored/  linko/  rosa-vientos/" },
    { cmd: "npm run deploy -- --prod", output: "Building...\n✓ Colibrí LATAM deployed to Vercel\n✓ Aisla Frio Pro deployed to Vercel\n✓ EcoRed deployed to Vercel\n✓ Linko deployed to Vercel\n✓ Rosa de los Vientos deployed to Vercel\nAll 5 products live." },
  ],
  es: [
    { cmd: "whoami", output: "joaquin.ocampo — Desarrollador Full Stack" },
    { cmd: "cat filosofia.txt", output: "Productos, no solo código." },
    { cmd: "ls proyectos/", output: "colibri-latam/  aislapro/  ecored/  linko/  rosa-vientos/" },
    { cmd: "npm run deploy -- --prod", output: "Construyendo...\n✓ Colibrí LATAM desplegado en Vercel\n✓ Aisla Frio Pro desplegado en Vercel\n✓ EcoRed desplegado en Vercel\n✓ Linko desplegado en Vercel\n✓ Rosa de los Vientos desplegado en Vercel\nLos 5 productos en producción." },
  ],
};

const AVAILABLE_COMMANDS = {
  en: ["whoami", "cat philosophy.txt", "ls projects/", "npm run deploy -- --prod", "help"],
  es: ["whoami", "cat filosofia.txt", "ls proyectos/", "npm run deploy -- --prod", "ayuda"],
};

const HELP_TEXT = {
  en: `Available commands:
  whoami                    — Show identity
  cat philosophy.txt        — Show philosophy
  ls projects/              — List projects
  npm run deploy -- --prod  — Deploy all
  help                      — Show this help`,
  es: `Comandos disponibles:
  whoami                    — Mostrar identidad
  cat filosofia.txt         — Mostrar filosofía
  ls proyectos/             — Listar proyectos
  npm run deploy -- --prod  — Desplegar todo
  ayuda                     — Mostrar esta ayuda`,
};

const PROMPT = "joaquin@portfolio:~$";

export default function TerminalHero({ lang = "en", onCtaClick }) {
  const [lines, setLines] = useState([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);
  const [initialSequenceDone, setInitialSequenceDone] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commands = COMMANDS[lang];
  const availableCmds = AVAILABLE_COMMANDS[lang];
  const helpText = HELP_TEXT[lang];

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  // Type a single line character by character
  const typeLine = (text, delay = 18) => {
    return new Promise((resolve) => {
      let i = 0;
      const timer = setInterval(() => {
        setLines((prev) => {
          const newLines = [...prev];
          const lastLine = newLines[newLines.length - 1] || { type: "output", content: "" };
          if (lastLine.type === "output") {
            lastLine.content = text.slice(0, i + 1);
            newLines[newLines.length - 1] = lastLine;
          } else {
            newLines.push({ type: "output", content: text.slice(0, i + 1) });
          }
          return newLines;
        });
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          resolve();
        }
      }, delay);
    });
  };

  // Run initial sequence on mount
  useEffect(() => {
    let mounted = true;

    const runInitialSequence = async () => {
      setIsTyping(true);
      await new Promise((r) => setTimeout(r, 600));

      for (let i = 0; i < commands.length; i++) {
        if (!mounted) return;

        const { cmd, output } = commands[i];

        // Show prompt + command
        setLines((prev) => [...prev, { type: "prompt", cmd }]);
        await typeLine(cmd, 40);
        await new Promise((r) => setTimeout(r, 200));

        // Show output
        if (output.includes("\n")) {
          const outputLines = output.split("\n");
          for (const outLine of outputLines) {
            if (!mounted) return;
            setLines((prev) => [...prev, { type: "output", content: "" }]);
            await typeLine(outLine, 12);
            await new Promise((r) => setTimeout(r, 80));
          }
        } else {
          setLines((prev) => [...prev, { type: "output", content: "" }]);
          await typeLine(output, 18);
        }

        await new Promise((r) => setTimeout(r, 350));
      }

      if (mounted) {
        setInitialSequenceDone(true);
        setIsTyping(false);
        inputRef.current?.focus();
      }
    };

    runInitialSequence();

    return () => {
      mounted = false;
    };
  }, [lang, commands]);

  // Execute user command
  const executeCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      // Add to history
      setHistory((prev) => [...prev.slice(-49), trimmed]);
      setHistoryIndex(-1);

      // Show prompt with command
      setLines((prev) => [...prev, { type: "prompt", cmd: trimmed }]);

      // Process command
      const lowerCmd = trimmed.toLowerCase();

      if (lowerCmd === "help" || lowerCmd === "ayuda") {
        setLines((prev) => [...prev, { type: "output", content: helpText }]);
      } else if (availableCmds.some((c) => c.toLowerCase() === lowerCmd)) {
        const match = commands.find((c) => c.cmd.toLowerCase() === lowerCmd);
        if (match) {
          const output = match.output;
          if (output.includes("\n")) {
            output.split("\n").forEach((outLine) => {
              setLines((prev) => [...prev, { type: "output", content: outLine }]);
            });
          } else {
            setLines((prev) => [...prev, { type: "output", content: output }]);
          }
        }
      } else if (trimmed === "clear" || trimmed === "cls") {
        setLines([]);
      } else {
        setLines((prev) => [
          ...prev,
          {
            type: "error",
            content: lang === "en"
              ? `Command not found: ${trimmed}. Type "help" for available commands.`
              : `Comando no encontrado: ${trimmed}. Escribe "ayuda" para ver comandos.`,
          },
        ]);
      }

      setUserInput("");
    },
    [lang, availableCmds, commands, helpText]
  );

  // Handle input keydown
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(userInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setUserInput(history[history.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setUserInput(history[history.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setUserInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab completion
      const matches = availableCmds.filter((c) =>
        c.toLowerCase().startsWith(userInput.toLowerCase())
      );
      if (matches.length === 1) {
        setUserInput(matches[0]);
      } else if (matches.length > 1) {
        setLines((prev) => [...prev, { type: "output", content: matches.join("  ") }]);
      }
    }
  };

  // Focus input on terminal click
  const handleTerminalClick = () => {
    if (initialSequenceDone && !isTyping) {
      inputRef.current?.focus();
    }
  };

  return (
    <section className={styles.hero} aria-label="Terminal demo">
      <div className={styles.terminalWrapper}>
        <div className={styles.terminal} ref={terminalRef} onClick={handleTerminalClick}>
          <div className={styles.terminalHeader}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.close}`} />
              <span className={`${styles.dot} ${styles.minimize}`} />
              <span className={`${styles.dot} ${styles.maximize}`} />
            </div>
            <span className={styles.terminalTitle}>portfolio — bash</span>
          </div>

          <div className={styles.terminalBody}>
            <div className={styles.linesContainer}>
              {lines.map((line, index) => (
                <div key={index} className={`${styles.line} ${styles[line.type]}`}>
                  {line.type === "prompt" && (
                    <>
                      <span className={styles.prompt}>{PROMPT}</span>
                      <span className={styles.cmd}>{line.cmd}</span>
                    </>
                  )}
                  {line.type === "output" && <span className={styles.output}>{line.content}</span>}
                  {line.type === "error" && <span className={styles.error}>{line.content}</span>}
                </div>
              ))}

              {initialSequenceDone && !isTyping && (
                <div className={styles.inputLine}>
                  <span className={styles.prompt}>{PROMPT}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    className={styles.input}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={lang === "en" ? "Type a command..." : "Escribe un comando..."}
                    autoComplete="off"
                    spellCheck="false"
                    disabled={isTyping}
                  />
                  {showCursor && <span className={styles.cursor} aria-hidden="true" />}
                </div>
              )}

              {isTyping && <span className={styles.cursor} aria-hidden="true" />}
            </div>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <button
            className={`${styles.ctaBtn} btn btn-primary btn-lg`}
            onClick={onCtaClick}
            disabled={isTyping}
          >
            {lang === "en" ? "View projects" : "Ver proyectos"}
          </button>
          <p className={styles.hint}>
            {lang === "en"
              ? "Try typing \"help\" or click the terminal"
              : 'Prueba escribiendo "ayuda" o haz clic en la terminal'}
          </p>
        </div>
      </div>
    </section>
  );
}