import React from 'react';
import { motion } from 'framer-motion';
import { impactStats } from '../../data/projectsData';

const ImpactSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Notre Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depuis notre création, nous nous efforçons de faire une différence significative 
            dans la vie des personnes les plus vulnérables.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-700 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;