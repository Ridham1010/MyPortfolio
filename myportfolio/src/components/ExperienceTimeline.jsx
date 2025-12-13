import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Corp",
    date: "2024 - Present",
    description: "Developing React applications and optimizing backend APIs."
  },
  {
    id: 2,
    title: "Hackathon Winner",
    company: "Global Hack",
    date: "2023",
    description: "Built a blockchain-based voting system in 48 hours."
  },
  {
    id: 3,
    title: "Open Source Contributor",
    company: "GitHub",
    date: "2022",
    description: "Contributed to major UI libraries and fixed critical bugs."
  },
  // Add more as needed...
];

const ExperienceTimeline = () => {
  const ref = useRef(null);

  // This tracks the scroll progress of the SPECIFIC container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"] 
  });

  // This makes the growing animation smooth
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto py-20">
      
      {/* --- THE VERTICAL LINE --- */}
      {/* 1. The Gray Background Line (Always visible path) */}
      <div className="absolute left-[20px] md:left-1/2 top-0 w-[4px] h-full bg-gray-200 origin-top -translate-x-1/2 rounded-full" />
      
      {/* 2. The Colored Progress Line (Grows on Scroll) */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-[20px] md:left-1/2 top-0 w-[4px] h-full bg-blue-600 origin-top -translate-x-1/2 rounded-full z-10"
      />

      {/* --- THE EXPERIENCE ITEMS --- */}
      <div className="flex flex-col gap-24 relative z-20">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} data={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex items-center justify-between md:justify-center w-full ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* The Dot on the Line */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full -translate-x-1/2 z-30" />

      {/* Spacer for desktop layout alignment */}
      <div className="hidden md:block w-5/12" />

      {/* The Content Card */}
      <div className="w-[calc(100%-60px)] md:w-5/12 pl-12 md:pl-0">
        <div className={`p-6 bg-white shadow-lg rounded-xl border border-gray-100 ${
            !isEven ? "md:text-right" : "md:text-left"
        }`}>
          <h3 className="font-bold text-xl text-gray-800">{data.title}</h3>
          <span className="text-blue-500 font-semibold text-sm">{data.company}</span>
          <p className="text-gray-400 text-xs mb-2">{data.date}</p>
          <p className="text-gray-600 text-sm">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;