import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projectsData';
import ProjectCard from './ProjectCard';

const greenDark = '#2e8b57'; // vert foncé utilisé partout

const ProjectGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Titre et description */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold mb-4"
            style={{ color: greenDark }}
          >
            Découvrez Nos Projets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: greenDark, opacity: 0.85 }}
          >
            Voici nos initiatives grâce à votre soutien !
          </motion.p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;