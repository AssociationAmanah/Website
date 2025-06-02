import React from 'react';
import Hero from '../components/common/Hero';
import ProjectGrid from '../components/projects/ProjectGrid';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Nos Projets"
        subtitle="Découvrez nos initiatives humanitaires"
        backgroundImage={`${import.meta.env.BASE_URL}images/pageprojet.png`}
      />
      <ProjectGrid />
    </div>
  );
};

export default ProjectsPage;