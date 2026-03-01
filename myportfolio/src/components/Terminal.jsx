import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Terminal.css';

const COMMANDS = {
  help: {
    output: [
      { text: '  Available commands:', color: '#B19EEF' },
      { text: '' },
      { text: '  projects    → View project archives', color: '#ccc' },
      { text: '  about       → View my profile', color: '#ccc' },
      { text: '  home        → Return to home', color: '#ccc' },
      { text: '  ls          → List all pages', color: '#ccc' },
      { text: '  whoami      → About the developer', color: '#ccc' },
      { text: '  skills      → View tech stack', color: '#ccc' },
      { text: '  clear       → Clear terminal', color: '#ccc' },
      { text: '  help        → Show this menu', color: '#ccc' },
    ],
  },
  ls: {
    output: [
      { text: '  drwxr-xr-x  ridham  /home', color: '#00ff88' },
      { text: '  drwxr-xr-x  ridham  /projects', color: '#00ff88' },
      { text: '  drwxr-xr-x  ridham  /about', color: '#00ff88' },
    ],
  },
  whoami: {
    output: [
      { text: '  Ridham Shah', color: '#FF9FFC' },
      { text: '  CS Undergraduate @ IIT Jodhpur', color: '#ccc' },
      { text: '  Developer | AI/ML Enthusiast', color: '#ccc' },
    ],
  },
  skills: {
    output: [
      { text: '  ┌─ Frontend ──────────────────────┐', color: 'rgba(255,255,255,0.3)' },
      { text: '  │  React  ·  Vite  ·  Three.js    │', color: '#88c0d0' },
      { text: '  └─────────────────────────────────┘', color: 'rgba(255,255,255,0.3)' },
      { text: '  ┌─ Backend ───────────────────────┐', color: 'rgba(255,255,255,0.3)' },
      { text: '  │  Node.js  ·  Express  ·  MongoDB│', color: '#88c0d0' },
      { text: '  └─────────────────────────────────┘', color: 'rgba(255,255,255,0.3)' },
      { text: '  ┌─ AI / ML ───────────────────────┐', color: 'rgba(255,255,255,0.3)' },
      { text: '  │  TensorFlow  ·  LangChain  ·  RAG│', color: '#88c0d0' },
      { text: '  └─────────────────────────────────┘', color: 'rgba(255,255,255,0.3)' },
    ],
  },
};

const NAVIGATION = {
  projects: '/projects',
  about: '/about',
  home: '/',
};

const BOOT_LINES = [
  { text: '  ridham@portfolio:~$ Type "help" for commands', color: '#B19EEF' },
];

export default function Terminal({ onClose }) {
  const [history, setHistory] = useState(BOOT_LINES);
  const [input, setInput] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Auto-focus input when terminal opens
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = (e) => {
    // Don't focus if clicking titlebar buttons
    if (e.target.closest('.terminal-titlebar')) return;
    if (inputRef.current) inputRef.current.focus();
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const commandLine = { text: `  visitor@portfolio:~$ ${cmd}`, color: '#00ff88', isCommand: true };

    if (!trimmed) {
      setHistory((prev) => [...prev, commandLine]);
      return;
    }

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'exit' || trimmed === 'quit') {
      if (onClose) onClose();
      return;
    }

    if (NAVIGATION[trimmed]) {
      setHistory((prev) => [
        ...prev,
        commandLine,
        { text: `  Navigating to /${trimmed}...`, color: '#FF9FFC' },
      ]);
      setIsNavigating(true);
      setTimeout(() => {
        navigate(NAVIGATION[trimmed]);
        setIsNavigating(false);
        if (onClose) onClose();
      }, 600);
      return;
    }

    if (COMMANDS[trimmed]) {
      setHistory((prev) => [
        ...prev,
        commandLine,
        ...COMMANDS[trimmed].output,
        { text: '' },
      ]);
      return;
    }

    // Unknown command
    setHistory((prev) => [
      ...prev,
      commandLine,
      { text: `  command not found: ${trimmed}`, color: '#ff6b6b' },
      { text: '  Type "help" to see available commands', color: 'rgba(255,255,255,0.4)' },
      { text: '' },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
    // Escape to minimize
    if (e.key === 'Escape' && onClose) {
      onClose();
    }
  };

  return (
    <div className="terminal-wrapper" onClick={focusInput}>
      {/* Title bar */}
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red" title="Close" onClick={onClose} />
          <span className="dot dot-yellow" title="Minimize" onClick={onClose} />
          <span className="dot dot-green" />
        </div>
        <span className="terminal-title">visitor@ridham-portfolio ~ zsh</span>
        <div className="terminal-dots" style={{ visibility: 'hidden' }}>
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      {/* Terminal body */}
      <div className="terminal-body" ref={scrollRef}>
        {history.map((line, i) => (
          <div key={i} className="terminal-line" style={{ color: line.color || '#ccc' }}>
            <pre>{line.text}</pre>
          </div>
        ))}

        {/* Input line */}
        {!isNavigating && (
          <div className="terminal-input-line">
            <span className="terminal-prompt">visitor@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}
      </div>
    </div>
  );
}
