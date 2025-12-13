import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Globe, Database, Zap, MapPin, Calendar, Briefcase } from 'lucide-react';
import './About.css';
import profile from './assets/profile.jpeg';
// Components
import LiquidEther from './components/LiquidEther.jsx';
import FloatingDock from './components/FloatingDock.jsx';
import resume from './Resume.pdf';
export default function About() {
  // Stagger animation for the grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const skills = [
    { name: "React / Next.js", level: "90%", icon: <Code size={18} /> },
    { name: "Python / AI", level: "85%", icon: <Cpu size={18} /> },
    { name: "Three.js / WebGL", level: "70%", icon: <Globe size={18} /> },
    { name: "Node.js / SQL", level: "80%", icon: <Database size={18} /> },
  ];

  return (
    <div className="app-container">
      {/* Background (Same as Home) */}
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

      <div className="about-section">
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* --- LEFT COLUMN: IDENTITY CARD --- */}
          <motion.div className="glass-panel profile-panel" variants={itemVariants}>
            <div className="profile-header">
              <div className="profile-image-container">
                {/* Replace src with your actual photo */}
                <img 
                  src={profile}
                  alt="Profile" 
                  className="profile-img" 
                />
                <div className="online-indicator"></div>
              </div>
              <h2 className="profile-name">Ridham Shah</h2>
              <p className="profile-role">Full Stack Developer</p>
            </div>

            <div className="profile-stats">
              <div className="stat-row">
                <MapPin size={16} className="stat-icon" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="stat-row">
                <Briefcase size={16} className="stat-icon" />
                <span>Available for Hire</span>
              </div>
              <div className="stat-row">
                <Calendar size={16} className="stat-icon" />
                <span>Joined Earth: 2007</span>
              </div>
            </div>

            <button className="download-btn"
              onClick={() => window.open(resume, '_blank')}
            >
              View CV
            </button>
          </motion.div>

          {/* --- RIGHT COLUMN: BIO & SKILLS --- */}
          <div className="info-column">
            
            {/* Bio Section */}
            <motion.div className="glass-panel bio-panel" variants={itemVariants}>
              <h3 className="panel-title">System Bio</h3>
              <p className="about-text">
                I am a Second Year Computer Science Undergraduate at IIT Jodhpur. My core competencies include Full Stack Development, Generative AI, and Machine Learning. I love to make visually appealing websites and applications that provide seamless user experiences. I also have a keen interest in AI/ML and its applications in real-world problems.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div className="glass-panel skills-panel" variants={itemVariants}>
              <h3 className="panel-title">Tech Modules</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-chip">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-container">
                      <motion.div 
                        className="skill-bar-fill" 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>

      <FloatingDock />
    </div>
  );
}