import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  words = ["Developer", "Creator", "Problem Solver"], 
  typingSpeed = 150, 
  deletingSpeed = 100,
  pauseTime = 2000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));
      }
    };

    let timerSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && text === currentWord) {
      // Finished typing, pause before deleting
      timerSpeed = pauseTime;
      setTimeout(() => setIsDeleting(true), timerSpeed);
    } else if (isDeleting && text === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      timerSpeed = 500; // Brief pause before starting new word
    }

    const timer = setTimeout(handleTyping, timerSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="typewriter-container">
      <span className="dynamic-text">{text}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypewriterText;