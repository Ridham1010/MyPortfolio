import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, User, Users } from 'lucide-react';
import './Projects.css';

// Components
import LiquidEther from './components/LiquidEther.jsx';
import FloatingDock from './components/FloatingDock.jsx';
import GlitchText from './components/GlitchText.jsx';

// --- Data ---
const projectsData = [
  {
    type: "individual",
    title: "RAG Implementation",
    description: "Retrieval-Augmented Generation system integrating PDF/TXT retrieval with LLMs for context-aware responses.",
    tech: ["React", "TensorFlow", "Node.js"],
    liveLink: "#",
    githubLink: "https://github.com/Ridham1010/BASICRAG",
  },
  {
    type: "individual",
    title: "Quantum Simulator",
    description: "Web-based visualization of quantum computing principles using Three.js physics simulations.",
    tech: ["Three.js", "React", "GSAP"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    type: "group",
    title: "Project Nova",
    description: "Futuristic data dashboard for visualizing real-time machine learning model performance metrics.",
    tech: ["Vite", "React", "D3.js", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    type: "group",
    title: "Collab Whiteboard",
    description: "Real-time collaborative brainstorming tool for distributed teams, powered by WebSockets.",
    tech: ["React", "Socket.io", "Express"],
    liveLink: "#",
    githubLink: "#",
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('individual');
  const filteredProjects = projectsData.filter(p => p.type === activeTab);

  return (
    <div className="app-container">
      {/* Background */}
      <div className="background-layer">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

      <div className="projects-container">
        
        {/* Header Section */}
        <div className="projects-header">
          <GlitchText text="Project Archives" />
          <p className="projects-subtitle">
            ACCESSING SECURE DATA FILES...
          </p>
        </div>

        {/* Control Panel (Tabs) */}
        <div className="control-panel">
          <div className="toggle-switch">
            <button 
              className={`toggle-btn ${activeTab === 'individual' ? 'active' : ''}`}
              onClick={() => setActiveTab('individual')}
            >
              <User size={18} /> Individual
            </button>
            <button 
              className={`toggle-btn ${activeTab === 'group' ? 'active' : ''}`}
              onClick={() => setActiveTab('group')}
            >
              <Users size={18} /> Group
            </button>
            <div className={`switch-highlight ${activeTab}`} />
          </div>
        </div>

        {/* Projects Grid */}
        {/* Removed 'layout' prop from parent div to prevent grid jitter */}
        <div className="projects-grid">
          {/* Changed mode to 'wait' so old items leave before new ones enter */}
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

      </div>

      <FloatingDock />
    </div>
  );
}

// --- Sub-Component: Holographic Card ---
function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout // Keep layout here for smooth resizing if content changes
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="holo-card"
    >
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
          <Layers size={20} className="card-icon" />
        </div>
        
        <p className="card-desc">{project.description}</p>
        
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-chip">
              <Code size={12} style={{ marginRight: 4 }} /> {t}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="action-btn">
            <Github size={18} /> <span>Code</span>
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="action-btn">
            <ExternalLink size={18} /> <span>Live</span>
          </a>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="corner top-left"></div>
      <div className="corner bottom-right"></div>
    </motion.div>
  );
}