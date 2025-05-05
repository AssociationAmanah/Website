import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Project } from '../../types';
import Button from '../common/Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-yellow-500 text-white px-3 py-1 flex items-center">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {project.summary}
        </p>
        <div className="mt-auto">
          <Link to={`/projets/${project.id}`}>
            <Button variant="goldOutline" fullWidth>
              Voir plus
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;