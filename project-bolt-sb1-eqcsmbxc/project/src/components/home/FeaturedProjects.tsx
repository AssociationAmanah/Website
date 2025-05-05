import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { projects } from '../../data/projectsData';
import ProjectCard from '../projects/ProjectCard';
import Button from '../common/Button';

const FeaturedProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  const handleNext = () => {
    if (currentIndex < totalProjects - 2) {
      setCurrentIndex(currentIndex + 2);
    } else {
      setCurrentIndex(0); // Loop back to the first project
    }
  };

  const handlePrev = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 2);
    } else {
      setCurrentIndex(totalProjects - 2); // Loop back to the last project
    }
  };

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-800 max-w-2xl">
              Découvrez les projets que nous avons pu réaliser :
            </p>
          </motion.div>

          {/* Button to go to the "All Projects" page */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 md:mt-0"
          >
            <Link to="/projets">
              <Button variant="goldOutline">
                <span>Voir tous les projets</span>
                <ChevronRight size={18} className="ml-1 transform transition-all hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel with 2 cards visible at once */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-between max-w-6xl"
          >
            {/* Displaying 2 cards side by side */}
            {projects.slice(currentIndex, currentIndex + 2).map((project) => (
              <motion.div
                key={project.id}
                className="w-1/2 px-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#D4AF37] p-3 rounded-full shadow-lg hover:bg-[#FAE1A2] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#D4AF37] p-3 rounded-full shadow-lg hover:bg-[#FAE1A2] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;