import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const DonationCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center">
        {/* Left Side (Button) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 mb-8 lg:mb-0"
        >
          <a 
            href="https://www.helloasso.com/associations/association-amanah"
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-105"
          >
            <Button
              variant="whiteOutline"
              size="lg"
              className="px-10 py-4 text-lg font-bold shadow-lg"
            >
              Je fais un don maintenant
            </Button>
          </a>
        </motion.div>

        {/* Right Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-wide">
            Ensemble, faisons la différence ! 🌍
          </h2>

          <p className="text-lg md:text-xl mb-8 text-primary-100 max-w-2xl mx-auto lg:mx-0">
            Chaque don, aussi petit soit-il, contribue à la réalisation de projets qui changent des vies.
            Votre soutien est essentiel pour aller plus loin et impacter positivement notre communauté.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationCTA;