import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { projects } from '../../data/projectsData';
import ProjectCard from '../projects/ProjectCard';
import Button from '../common/Button';

const FeaturedProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // par défaut 2 sur desktop
  const totalProjects = projects.length;

  // Ajuster itemsPerPage selon la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // mobile : 1 projet
      } else {
        setItemsPerPage(2); // desktop : 2 projets
      }
      setCurrentIndex(0); // reset l'index quand on change la taille
    };

    handleResize(); // exécution au chargement

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Passage au suivant (avance de itemsPerPage, boucle à 0)
  const handleNext = () => {
    if (currentIndex + itemsPerPage < totalProjects) {
      setCurrentIndex(currentIndex + itemsPerPage);
    } else {
      setCurrentIndex(0);
    }
  };

  // Passage au précédent (recule de itemsPerPage, boucle à la fin)
  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    } else {
      setCurrentIndex(totalProjects - itemsPerPage);
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 md:mt-0"
          >
            <Link to="/projets">
              <Button variant="greenOutline">
                <span>Voir tous les projets</span>
                <ChevronRight size={18} className="ml-1 transform transition-all hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-between max-w-6xl"
          >
            {projects.slice(currentIndex, currentIndex + itemsPerPage).map((project) => (
              <motion.div
                key={project.id}
                className={itemsPerPage === 1 ? "w-full px-2" : "w-1/2 px-4"}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Flèches */}
          <button
            onClick={handlePrev}
            aria-label="Projet précédent"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#D4AF37] p-3 rounded-full shadow-lg hover:bg-[#FAE1A2] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Projet suivant"
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