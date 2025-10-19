 import { useRef, useEffect } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * -30; // Invert for natural feel
      const rotateY = (x / rect.width - 0.5) * 30;

      card.style.setProperty('--rotateX', `${rotateX}deg`);
      card.style.setProperty('--rotateY', `${rotateY}deg`);
    };

    const onMouseLeave = () => {
      card.style.setProperty('--rotateX', '0deg');
      card.style.setProperty('--rotateY', '0deg');
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="project-card">
      <div className="card-content">
        <img src={project.image} alt={project.title} className="project-image" />
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
