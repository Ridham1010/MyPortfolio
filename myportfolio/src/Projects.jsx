import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, User, Users, Terminal } from 'lucide-react';
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
    title: "HackSprint",
    description: "HackSprint is a centralized ecosystem created to nurture innovation, collaborative work, and hands-on development across IIT Jodhpur. It enables hackathons, daily developer & aptitude challenges, Git-based submissions, and a transparent leaderboard system — all designed to build real-world developer habits.",
    tech: ["Vite", "React", "Node.js", "MongoDB","Redis"],
    liveLink: "#",
    githubLink: "https://github.com/devlup-labs/HackSprint",
  },
  {
    type: "group",
    title: "Pheme IITJ",
    description: "A website built for the Newsletter club of IIT Jodhpur, Pheme. It features a dynamic news feed, events, articles, user authentication, and an admin panel for content management.\n\nBuilt with React, Node.js, and MongoDB.\n\nThe website serves as a hub for students to stay updated on campus news, access resources, and engage with the Pheme community.",
    tech: ["React", "Vite", "MongoDB", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  },
  exit: {
    transition: { staggerChildren: 0.08, staggerDirection: -1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: {
    opacity: 0, y: -30, scale: 0.95, filter: 'blur(6px)',
    transition: { duration: 0.3 }
  }
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('individual');
  const filteredProjects = projectsData.filter(p => p.type === activeTab);
  const projectCount = filteredProjects.length;

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
            <Terminal size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
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
              <User size={18} /> Solo
            </button>
            <button
              className={`toggle-btn ${activeTab === 'group' ? 'active' : ''}`}
              onClick={() => setActiveTab('group')}
            >
              <Users size={18} /> Collab
            </button>
            <div className={`switch-highlight ${activeTab}`} />
          </div>
          <span className="project-count">{projectCount} files found</span>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      <FloatingDock />
    </div>
  );
}

// --- Sub-Component: Holographic Card with 3D Tilt ---
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const projectNum = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className={`holo-card ${isHovered ? 'hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Animated gradient border */}
      <div className="card-border-glow" />

      {/* Holographic shimmer overlay */}
      <div className="card-shimmer" />

      <div className="card-content">
        {/* Project number & status */}
        <div className="card-meta-row">
          <span className="project-number">{projectNum}</span>
          <span className="card-status">
            <span className="status-dot" />
            ACTIVE
          </span>
        </div>

        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
          <Layers size={20} className="card-icon" />
        </div>

        <p className="card-desc">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-chip">
              <Code size={12} /> {t}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="action-btn github-btn">
            <Github size={18} /> <span>Source</span>
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="action-btn live-btn">
            <ExternalLink size={18} /> <span>Demo</span>
          </a>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
    </motion.div>
  );
}
