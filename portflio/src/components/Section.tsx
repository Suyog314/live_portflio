
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
  imageSrc?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content, imageSrc }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{ marginBottom: '3rem' }}
  >
    <h2>{title}</h2>

    {imageSrc && (
      <motion.img
        src={imageSrc}
        alt="Profile"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          width: '160px',
          borderRadius: '12px',
          marginBottom: '1.5rem',
        }}
      />
    )}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  </motion.section>
);

export default Section;
