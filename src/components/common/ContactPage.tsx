import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Heart } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Titre + intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Nous contacter</h1>
        <p className="text-lg text-gray-600">
          Une question, une suggestion, une envie de collaborer ou simplement nous dire bonjour ? On vous écoute !
        </p>
      </motion.div>

      {/* Formulaire de contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <ContactForm />
      </motion.div>

      {/* Liens vers réseaux */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
      >
        <a
          href="https://www.instagram.com/associationamanah/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center p-6 rounded-2xl shadow-md bg-[#FDF7E7] hover:bg-[#faedcc] transition-all duration-300"
        >
          <Instagram className="text-pink-600 w-8 h-8 mb-3 sm:mb-0 sm:mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-800">Instagram</p>
            <p className="text-sm text-gray-600">@amanah_asso</p>
          </div>
        </a>

        <a
          href="https://www.facebook.com/asso.amanah/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center p-6 rounded-2xl shadow-md bg-[#EEF4FF] hover:bg-[#dbe9ff] transition-all duration-300"
        >
          <Facebook className="text-blue-600 w-8 h-8 mb-3 sm:mb-0 sm:mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-800">Facebook</p>
            <p className="text-sm text-gray-600">amanah.asso</p>
          </div>
        </a>
      </motion.div>

      {/* Bouton de don ou message final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <a
          href="https://www.helloasso.com/associations/association-amanah"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-full bg-[#2e8b57] text-white hover:bg-[#256e47] transition-colors"
        >
          <Heart className="w-5 h-5 mr-2" />
          Faire un don
        </a>

        <p className="mt-4 text-sm text-gray-500 italic">
          « Un petit geste peut avoir un grand impact. Merci pour votre soutien. »
        </p>
      </motion.div>
    </div>
  );
};

export default ContactPage;