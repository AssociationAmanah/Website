import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Globe, Target, Award, Clock, BookOpenText, HelpingHand, Star } from 'lucide-react';

const TABS = [
  {
    key: 'history',
    title: 'Notre Histoire',
    icon: BookOpenText,
    content: (
      <p className="text-lg text-gray-700 text-center leading-relaxed">
        Fondée en mars 2020 par un groupe d’étudiants nancéens, l’Association Amanah est née d’un élan de solidarité face aux inégalités sociales.
        <br /><br />
        Portée par la volonté d’agir concrètement pour un monde plus juste, l'association s’est donnée pour mission d’apporter une aide durable aux personnes dans le besoin, en France comme à l’étranger.
        <br /><br />
        Dès ses débuts, Amanah a lancé des actions humanitaires concrètes, notamment en Guinée, avec la réalisation de forages pour permettre l’accès à l’eau potable dans des zones reculées.
        <br /><br />
        Aujourd’hui, grâce à tous, nous continuons à développer nos actions dans un esprit de responsabilité, de compassion et de transparence.
      </p>
    ),
  },
  {
    key: 'mission',
    title: 'Notre Mission',
    icon: HelpingHand,
    content: (
      <p className="text-lg text-gray-700 leading-relaxed">
        Chez Amanah, notre engagement se traduit par des actions concrètes pensées pour répondre aux besoins essentiels des populations.
        <br /><br />
        💧 <strong>Accès à l’eau potable</strong> : mise en place de forages durables dans des zones où l’eau est difficilement accessible, comme en Guinée.
        <br /><br />
        🎒 <strong>Soutien à l’éducation</strong> : distribution de fournitures scolaires, accompagnement éducatif à Nancy, aide aux orphelinats.
        <br /><br />
        🍽️ <strong>Aide alimentaire</strong> : organisation de distributions de repas aux personnes en difficulté, notamment aux étudiants.
        <br /><br />
        🧸 <strong>Collectes solidaires</strong> : envoi de vêtements, jouets et produits d’hygiène.
        <br /><br />
        🤝 <strong>Lien social</strong> : projets de proximité et activités solidaires pour favoriser le vivre-ensemble.
        <br /><br />
        🏥 <strong>Soutien aux plus vulnérables</strong> : maraudes, aide ponctuelle aux hôpitaux et sans-abris.
      </p>
    ),
  },
  {
    key: 'values',
    title: 'Nos Valeurs',
    icon: Star,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {[
          { icon: Heart, title: 'Compassion', text: 'Derrière chaque action, il y a l’envie sincère de soulager les souffrances humaines.', color: '#2e8b57' },
          { icon: Users, title: 'Solidarité', text: 'Chaque action est un lien entre ceux qui peuvent donner et ceux qui en ont besoin.', color: '#2e8b57' },
          { icon: Globe, title: 'Responsabilité', text: 'Nous agissons avec conscience et transparence à chaque étape.', color: '#2e8b57' },
          { icon: Target, title: 'Impact', text: 'Nous visons des actions durables, utiles et concrètes.', color: '#2e8b57' },
          { icon: Award, title: 'Espoir', text: 'Un geste aujourd’hui peut bâtir un avenir meilleur demain.', color: '#2e8b57' },
          { icon: Clock, title: 'Persévérance', text: 'Notre volonté de ne jamais abandonner nous pousse à aller plus loin.', color: '#2e8b57' },
        ].map(({ icon: ValueIcon, title, text }, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md border border-[#e5e5e5]">
            <ValueIcon className="w-8 h-8 text-[#2e8b57]" />
            <h4 className="text-xl font-semibold text-[#2e8b57] mt-2">{title}</h4>
            <p className="mt-2 text-gray-700 text-sm">{text}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const InfoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-[#f8f9f5] p-8 rounded-2xl shadow-lg">
          
          {/* Onglets */}
          <div
            role="tablist"
            aria-label="Informations sur l'association"
            className="flex flex-col md:flex-row justify-between gap-4 mb-10"
          >
            {TABS.map(({ key, title, icon: Icon }) => {
              const isActive = activeTab === key;
              return (
                <motion.button
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${key}`}
                  id={`tab-${key}`}
                  key={key}
                  onClick={() => setActiveTab(key)}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center justify-center gap-2 flex-1 px-4 py-2 rounded-full text-lg transition-all duration-300 ${
                   isActive
                    ? 'bg-[#2e8b57] text-white font-bold shadow-md border-2 border-[#2e8b57]'
                    : 'bg-white text-[#2e8b57] border border-[#2e8b57]'
                  }`}
                >
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isActive ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={20} className={isActive ? 'text-white' : 'text-[#2e8b57]'} />
                  </motion.span>
                  {title}
                </motion.button>
              );
            })}
          </div>

          {/* Contenu animé */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`tabpanel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-inner border border-[#e0e0e0]"
            >
              {TABS.find((tab) => tab.key === activeTab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InfoTabs;