import React from 'react';
import { motion } from 'framer-motion'; // Assure-toi que ceci est bien installé
import Hero from '../components/common/Hero';
import AboutSection from '../components/home/AboutSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import DonationCTA from '../components/home/DonationCTA';
import ContactForm from '../components/common/ContactForm';

const sectionTitleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Association Amanah"
        subtitle="Agir pour un monde plus solidaire"
        backgroundImage="/images/photoaccueil.png"
      />

      {/* À propos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl font-extrabold text-center text-[#2e8b57] mb-12"
          >
            Qui sommes-nous ?
          </motion.h2>
          <AboutSection />
        </div>
      </section>

      {/* Projets */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl font-extrabold text-center text-[#2e8b57] mb-12"
          >
            Nos projets
          </motion.h2>
          <FeaturedProjects />
        </div>
      </section>

      {/* Appel au don */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl font-extrabold text-center text-[#2e8b57] mb-12"
          >
            Soutenez nos actions
          </motion.h2>
          <DonationCTA />
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl font-extrabold text-center text-[#2e8b57] mb-12"
          >
            Contactez-nous
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;