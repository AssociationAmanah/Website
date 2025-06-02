import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import { MapPin, Calendar, ChevronLeft, ExternalLink } from 'lucide-react';
import ImageGallery from '../components/projects/ImageGallery';
import { Project } from '../types';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/projets');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-xl text-gray-600">Chargement du projet...</p>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Image principale */}
      <div
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 py-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 py-12">
        {/* Retour aux projets */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/projets')}
          aria-label="Retour aux projets"
          className="flex items-center font-medium mb-8 transition-colors"
          style={{ color: '#2e8b57' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#246645')}
          onMouseLeave={e => (e.currentTarget.style.color = '#2e8b57')}
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Retour aux projets</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Description du projet</h2>
              <div className="prose max-w-none text-gray-700 mb-8">
                {project.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </div>

              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Impact</h2>
              <p className="text-gray-700 mb-8">{project.impact}</p>

              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Galerie</h2>
              <ImageGallery images={project.gallery} />
            </motion.div>
          </div>

          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg shadow-soft"
          >
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Informations</h3>

            <div className="flex items-start mb-4">
              <MapPin className="w-5 h-5 text-secondary-500 mt-0.5 mr-2" />
              <div>
                <p className="font-semibold text-gray-800">Lieu</p>
                <p className="text-gray-600">{project.location}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-secondary-500 mt-0.5 mr-2" />
              <div>
                <p className="font-semibold text-gray-800">Date</p>
                <p className="text-gray-600">{project.date}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Don & contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 mt-12 rounded-lg border border-gray-200 shadow"
        >
          <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
            Vous souhaitez nous aider ?
          </h3>
          <p className="text-gray-700 mb-4">
            Si vous souhaitez contribuer à nos actions, vous pouvez faire un don en ligne ou nous contacter directement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Faire un don */}
            <a
              href="https://www.helloasso.com/associations/association-amanah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Faire un don en ligne"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 font-semibold rounded-md text-white transition"
              style={{ backgroundColor: '#2e8b57' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#246645')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2e8b57')}
            >
              Faire un don <ExternalLink className="ml-2 w-4 h-4" />
            </a>

            {/* Nous contacter */}
            <button
              onClick={() => navigate('/contact')}
              aria-label="Nous contacter"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 font-semibold rounded-md border transition"
              style={{ borderColor: '#2e8b57', color: '#2e8b57' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e3f1e8')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Nous contacter
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;