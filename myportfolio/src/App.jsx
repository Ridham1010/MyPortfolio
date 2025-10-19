import './App.css';
import LiquidEther from './components/LiquidEther.jsx';
import GradientText from './components/GradientText.jsx';
import ProjectCard from './components/ProjectCard.jsx';

// --- Placeholder Project Data ---
const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "A conversational AI built with TensorFlow and React, designed to assist users with complex queries.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=AI+Chatbot",
    tech: ["React", "TensorFlow", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Quantum Simulator",
    description: "A web-based visualization of quantum computing principles using Three.js and advanced physics simulations.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Quantum+Sim",
    tech: ["Three.js", "React", "GSAP"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Nova",
    description: "A futuristic data dashboard for visualizing real-time machine learning model performance.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Project+Nova",
    tech: ["Vite", "React", "D3.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  }
];

function App() {
  return (
    <div className="app-container">
      
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

      <section className="hero-section">
        <div className="content-container">
          <h1 className="main-heading">
            <GradientText>
              Hello there!
            </GradientText>
          </h1>
        </div>
      </section>

      <section className="scroll-section">
        {/* FIX: Changed the <p> tag to a <div> to prevent hydration errors. */}
        <div className="intro-text">
          <GradientText>
            I am Ridham Shah, a passionate developer and AI/ML enthusiast and this is my portfolio. Scroll down to explore more about me and my work.
          </GradientText>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section className="projects-section">
        <h2 className="section-heading">
          <GradientText>My Work</GradientText>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;

