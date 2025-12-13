// src/components/FloatingDock.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderGit2, User, Mail, Github, X, Phone, Copy, Check } from 'lucide-react';
import './FloatingDock.css';

const FloatingDock = () => {
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(null);

  const dockItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <FolderGit2 size={24} />, label: 'Projects', path: '/projects' },
    { icon: <User size={24} />, label: 'About', path: '/about' }, // <--- Restored this
    { icon: <Github size={24} />, label: 'GitHub', path: 'https://github.com/Ridham1010', external: true },
    { icon: <Mail size={24} />, label: 'Contact', isAction: true },
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* --- THE DOCK --- */}
      <div className="dock-container">
        <div className="dock-glass">
          {dockItems.map((item, index) => {
            // Case 1: The Contact Button (Popup Trigger)
            if (item.isAction) {
              return (
                <motion.div
                  key={index}
                  className="dock-item"
                  onClick={() => setShowContact(true)}
                  whileHover={{ scale: 1.2, y: -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                  <span className="dock-tooltip">{item.label}</span>
                </motion.div>
              );
            }

            // Case 2: External Link
            if (item.external) {
              return (
                <motion.a 
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="dock-item"
                  whileHover={{ scale: 1.2, y: -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                  <span className="dock-tooltip">{item.label}</span>
                </motion.a>
              );
            }

            // Case 3: Internal Router Link (Home, Projects, About)
            return (
              <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -10 }}
                  whileTap={{ scale: 0.9 }}
              >
                  <Link to={item.path} className="dock-item">
                    {item.icon}
                    <span className="dock-tooltip">{item.label}</span>
                  </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- THE CONTACT POPUP --- */}
      <AnimatePresence>
        {showContact && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContact(false)}
          >
            <motion.div 
              className="modal-content glass-card"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setShowContact(false)}>
                <X size={20} />
              </button>
              
              <h2 className="modal-title">Get in Touch</h2>
              <p className="modal-subtitle">Open for collaborations and new opportunities.</p>

              <div className="contact-row">
                <div className="icon-box"><Mail size={20} /></div>
                <div className="info-box">
                  <span className="label">Email</span>
                  <span className="value">b24cs1064@gmail.com</span>
                </div>
                <button 
                  className="copy-btn" 
                  onClick={() => handleCopy('b24cs1064@gmail.com', 'email')}
                >
                  {copied === 'email' ? <Check size={18} color="#00ff88" /> : <Copy size={18} />}
                </button>
              </div>

              <div className="contact-row">
                <div className="icon-box"><Phone size={20} /></div>
                <div className="info-box">
                  <span className="label">Phone</span>
                  <span className="value">+91 9429646285</span>
                </div>
                <button 
                  className="copy-btn" 
                  onClick={() => handleCopy('+919429646285', 'phone')}
                >
                  {copied === 'phone' ? <Check size={18} color="#00ff88" /> : <Copy size={18} />}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingDock;