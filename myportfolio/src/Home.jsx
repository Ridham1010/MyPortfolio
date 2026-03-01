import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './Home.css';

// Components
import LiquidEther from './components/LiquidEther.jsx';
import TypewriterText from './components/typewriter.jsx';
import FloatingDock from './components/FloatingDock.jsx';
import GlitchText from './components/GlitchText.jsx';

// --- Experience Data ---
const experienceData = [
  {
    year: "2024 - present",
    title: "CS Undergraduate",
    place: "Indian Institute of Technology, Jodhpur",
  },
  {
    year: "2025 - present",
    title: "DevlUP Labs Core Team Member",
    place: "Indian Institute of Technology, Jodhpur",
    description: "Contributing to open-source projects and organizing tech events for the campus community."
  },
  {
    year: "Nov 2025-Jan 2026",
    title: "Assistant Head Web Dev, Prometeo'25",
    place: "Indian Institute of Technology, Jodhpur",
    description: "Leading the web development team for the annual technical fest, contributing to website development and functionality."
  },
];

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="app-container">
      {/* Background Layer */}
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

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="content-container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span style={{ 
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1.5rem', 
              display: 'block', 
              marginBottom: '10px', 
              textAlign: 'center',
              letterSpacing: '4px',
              color: '#B19EEF',
              textTransform: 'uppercase'
            }}>
              Hello, I'm
            </span>
            <GlitchText text="Ridham Shah" />
          </motion.div>
        </div>
      </section>

      {/* SCROLL SECTION */}
      <section className="scroll-section">
        
        {/* 1. Intro & Buttons Container */}
        <motion.div 
          className="intro-text-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Main Bio Text */}
          <p className="bio-text">
            A passionate developer and AI/ML enthusiast crafting digital experiences where creativity meets algorithm.
          </p>

          {/* Projects CTA */}
          <motion.div
            style={{ marginTop: '5rem', marginBottom: '3rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <TypewriterText
              words={["View my projects here", "Explore my work"]}
              typingSpeed={100}
              pauseTime={2000}
            />
          </motion.div>

          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             viewport={{ once: true }}
          >
            <Link to="/projects" className="futuristic-btn">
              <span>View Projects</span>
            </Link>
          </motion.div>

          {/* About Me CTA */}
          <motion.div
            style={{ marginTop: '8rem', marginBottom: '3rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <TypewriterText
              words={["Know more about me", "Visit profile"]}
              typingSpeed={100}
              pauseTime={2000}
            />
          </motion.div>

          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             viewport={{ once: true }}
             style={{ marginBottom: '15rem' }}
          >
            <Link to="/about" className="futuristic-btn">
              <span>About Me</span>
            </Link>
          </motion.div>

        </motion.div>
        
        {/* 2. Experience Timeline */}
        <ExperienceTimelineSection />

      </section>

      <FloatingDock />
    </div>
  );
}

// --- EXPERIENCE SUB-COMPONENT ---
function ExperienceTimelineSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="timeline-section">
       <motion.div 
          style={{ marginBottom: '3rem', paddingLeft: '20px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
            <TypewriterText 
              words={["Experience Log", "My Journey So Far"]} 
              typingSpeed={100}
              pauseTime={2000}
            />
        </motion.div>

        <div className="timeline-container">
          {/* --- THE VERTICAL LINE (Fixed in the background of the left column) --- */}
          <div className="timeline-line-bg"></div>
          <motion.div className="timeline-line-progress" style={{ scaleY }} />

          {/* --- THE ITEMS --- */}
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* COLUMN 1: The Marker Area (Strict width) */}
              <div className="timeline-marker-col">
                <div className="timeline-dot"></div>
                <div className="timeline-connector"></div>
              </div>

              {/* COLUMN 2: The Content Area (Takes remaining space) */}
              <div className="timeline-content-col">
                <div className="timeline-card">
                  <div className="timeline-year">
                    <Calendar size={14} style={{ color: '#FF9FFC', marginRight: '5px' }} /> 
                    {item.year}
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-place">@ {item.place}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  );
}