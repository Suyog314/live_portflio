

// components/SkillTimeline.tsx
import React from 'react';
import './SkillTimeline.css';

interface Skill {
  name: string;
  level: number;
  funNote?: string;
}

const skills: Skill[] = [
  // Programming & Scripting
  { name: 'C++', level: 95, funNote: 'Almost a native speaker' },
  { name: 'C', level: 90, funNote: 'Where it all began' },
  { name: 'Python', level: 85, funNote: 'Readable enough to trust my future with' },
  { name: 'JavaScript', level: 60, funNote: 'Still arguing with "this"' },
  { name: 'HTML/CSS', level: 75, funNote: 'Ctrl+C + Ctrl+V with style' },
  { name: 'LaTeX', level: 70, funNote: 'Because reports need drama too' },

  // Engineering Tools
  { name: 'MATLAB', level: 80, funNote: 'Matrix whisperer' },
  { name: 'Cantera', level: 65, funNote: 'Combustion and chaos' },
  { name: 'Autodesk', level: 70, funNote: 'CAD-ding like a champ' },
  { name: 'ANSYS', level: 60, funNote: 'Simulating failure successfully' },
  { name: 'Git & GitHub', level: 85, funNote: 'Because we all need version control in life' },

  // ML & Data Libraries
  { name: 'Flask', level: 70, funNote: 'Serving models hotter than tea' },
  { name: 'PyTorch', level: 75, funNote: 'Debuggable deep learning' },
  { name: 'TensorFlow/Keras', level: 60, funNote: 'Powerful but moody' },
  { name: 'NumPy', level: 80, funNote: 'Shape matters' },
  { name: 'Pandas', level: 85, funNote: 'Loves data more than bamboo' },
  { name: 'Matplotlib', level: 75, funNote: 'Plot twist every time' },
  { name: 'MediaPipe', level: 65, funNote: 'Gesture magic' },
  { name: 'SQLAlchemy', level: 70, funNote: 'ORM, not OMG' },
  { name: 'OpenCV', level: 60, funNote: 'Sees more than me' },

  // Bonus fun skill
  { name: 'Drinking Tea', level: 100, funNote: 'Therapeutic & Certified' }
];

const SkillTimeline: React.FC = () => {
  return (
    <div className="skill-timeline">
        <div className="skills-container">
        {[
            { name: 'HTML', level: 90 },
            { name: 'CSS', level: 85 },
            { name: 'JavaScript', level: 80 },
            { name: 'React', level: 75 },
            { name: 'TypeScript', level: 70 },
            { name: 'Tailwind CSS', level: 65 },
            { name: 'Node.js', level: 60 },
            { name: 'MongoDB', level: 55 },
        ].map((skill, i) => (
            <div className="skill-card" key={i}>
                <div className="skill-title">{skill.name}</div>
                <div className="progress-bar">
            <div className="progress" style={{ width: `${skill.level}%` }}></div>
        </div>
        <div className="percentage">{skill.level}%</div>
    </div>
    ))}
  </div>
</div>
  );
};

export default SkillTimeline;
