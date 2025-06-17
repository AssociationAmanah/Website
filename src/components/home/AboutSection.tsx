import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { Heart, Users, Globe, Target, Award, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-[#2e8b57]" />,
      title: 'Compassion',
      description: 'Chaque geste, chaque sourire, est animé par une volonté sincère de soulager les souffrances humaines.',
      link: '/a-propos'
    },
    {
      icon: <Users className="w-8 h-8 text-[#2e8b57]" />,
      title: 'Solidarité',
      description: 'Nous croyons en la force du collectif et en l\'importance de l\'union entre ceux qui peuvent donner et ceux qui ont besoin.',
      link: '/a-propos'
    },
    {
      icon: <Globe className="w-8 h-8 text-[#2e8b57]" />,
      title: 'Responsabilité',
      description: 'Nous agissons avec conscience et respect, garantissant que chaque projet est mené avec rigueur et transparence.',
      link: '/a-propos'
    },
    {
      icon: <Target className="w-8 h-8 text-[#2e8b57]" />,
      title: 'Impact',
      description: 'Nos actions sont conçues pour être durables et transformantes, apportant des changements significatifs à des vies et des communautés.',
      link: '/a-propos'
    },
    {
      icon: <Award className="w-8 h-8 text-[#2e8b57]" />,
      title: 'Espoir',
      description: 'Nous semons chaque jour les graines d\'un avenir meilleur, là où le besoin est le plus grand.',
      link: '/a-propos'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#2e8b57]" />,
      title: 'Persévérance',
      description: 'Nous restons engagés avec constance et détermination, surmontant les défis pour atteindre nos objectifs.',
      link: '/a-propos'
    }
  ];

  return (
    <section className="py-12 bg-white min-h-[80vh]">
  <div className="max-w-[1200px] mx-auto px-8">
    <div className="grid md:grid-cols-2 gap-12 items-start"> {/* <-- items-start pour alignement haut */}
      
      {/* Colonne gauche (texte) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-5" // <-- Ajuste finement la hauteur pour alignement horizontal
      >
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          À propos de l'Association
        </h2>
        <p className="text-gray-700 mb-4 text-base leading-relaxed">
          Créée en 2020 par un groupe d’étudiants nancéens, l'Association Amanah œuvre pour un monde plus solidaire et juste. 
          Depuis sa fondation, l'association s'est consacrée à des projets humanitaires essentiels, 
          notamment en Guinée et Maroc, avec la construction de forages pour fournir un accès à l'eau potable aux communautés locales.
        </p>
        <p className="text-gray-700 mb-6 text-base leading-relaxed">
          Portée par des valeurs de solidarité, de responsabilité et de compassion, Amanah s'engage à agir de manière transparente et 
          respectueuse des populations aidées. Grâce à l’implication de ses bénévoles et donateurs, l'association poursuit son développement,
          apportant des solutions durables et semant des graines d’espoir pour un futur meilleur.
        </p>
        <Link to="/a-propos">
          <Button variant="greenOutline">En savoir plus</Button>
        </Link>
      </motion.div>

      {/* Colonne droite (valeurs) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {values.map((value, index) => (
          <Link key={index} to={value.link} className="group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#F8F9F5] rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#2e8b57]"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-[#2e8b57]">{value.title}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-snug">{value.description}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default AboutSection;