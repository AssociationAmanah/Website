import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  bio, 
  image,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-gray-900 mb-1">
          {name}
        </h3>
        <p className="text-secondary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;