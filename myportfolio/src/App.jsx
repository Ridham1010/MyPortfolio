import './App.css';
import LiquidEther from './components/LiquidEther.jsx';
import GradientText from './components/GradientText.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ragimage from './assets/images.png';
// --- Placeholder Project Data ---
// We add a 'type' to each project to categorize it.
const projects = [
  {
    type: "individual",
    title: "RAG Implementation",
    description: "A Retrieval-Augmented Generation system that integrates pdf and txt files retrieval with large language models for enhanced responses.",
    image: ragimage,
    tech: ["React", "TensorFlow", "Node.js"],
    liveLink: "#",
    githubLink: "https://github.com/Ridham1010/BASICRAG",
  },
  {
    type: "individual",
    title: "Quantum Simulator",
    description: "A web-based visualization of quantum computing principles using Three.js and advanced physics simulations.",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Quantum+Sim",
    tech: ["Three.js", "React", "GSAP"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    type: "group",
    title: "Project Nova",
    description: "A futuristic data dashboard for visualizing real-time machine learning model performance.",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Nova",
    tech: ["Vite", "React", "D3.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    type: "group",
    title: "Collaborative Whiteboard",
    description: "A real-time collaborative tool for teams to brainstorm and share ideas, built with WebSockets.",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Whiteboard",
    tech: ["React", "Socket.io", "Express"],
    liveLink: "#",
    githubLink: "#",
  }
];

// Filter projects into two separate arrays
const individualProjects = projects.filter(p => p.type === 'individual');
const groupProjects = projects.filter(p => p.type === 'group');

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
        <div className="intro-text">
          <GradientText>
            I am Ridham Shah, a passionate developer and AI/ML enthusiast and this is my portfolio. Scroll down to explore more about me and my work.
          </GradientText>
        </div>
      </section>

      {/* --- Individual Projects Section --- */}
      <section className="projects-section">
        <h2 className="section-heading">
          <GradientText>Individual Projects</GradientText>
        </h2>
        <div className="projects-grid">
          {individualProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* --- Group Projects Section --- */}
      <section className="projects-section">
        <h2 className="section-heading">
          <GradientText>Group Projects</GradientText>
        </h2>
        <div className="projects-grid">
          {groupProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;

