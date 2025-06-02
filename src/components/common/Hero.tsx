import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = '#2e8b57',
  overlay = true,
}) => {
  const style: React.CSSProperties = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        backgroundImage: `linear-gradient(to bottom,rgb(38, 44, 41),rgb(96, 223, 164))`, 
      };

  return (
    <section
      aria-label="Section Héro"
      className="relative min-h-[60vh] flex items-center justify-center mb-[-4rem]"
      style={style}
    >
      {/* Overlay si image */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
      )}

      {/* Contenu */}
      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Hero;