import React from 'react';
import { motion } from 'framer-motion';
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
    <main className="w-full overflow-x-hidden">
      <Hero
        title="Association Amanah"
        subtitle="Agir pour un monde plus solidaire"
        backgroundColor="#2e8b57"
      />

      {/* À propos */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-center text-[#2e8b57] mb-10 sm:mb-12"
          >
            Qui sommes-nous ?
          </motion.h2>
          <AboutSection />
        </div>
      </section>

      {/* Projets */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-center text-[#2e8b57] mb-10 sm:mb-12"
          >
            Nos projets
          </motion.h2>
          <FeaturedProjects />
        </div>
      </section>

      {/* Appel au don */}
      <section className="py-12 bg-green-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-center text-[#2e8b57] mb-10 sm:mb-12"
          >
            Soutenez nos actions
          </motion.h2>
          <DonationCTA />
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-[600px] mx-auto px-6 sm:px-8">
          <motion.h2
            variants={sectionTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-center text-[#2e8b57] mb-10 sm:mb-12"
          >
            Contactez-nous
          </motion.h2>
          <div className="max-w-full mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;