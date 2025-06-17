import React from 'react';
import Hero from '../components/common/Hero';
import ContactForm from '../components/common/ContactForm';
import InfoTabs from '../components/common/InfoTabs';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Bannière Hero avec image et titre */}
      <Hero 
        title="À Propos de Nous"
        subtitle="Découvrez notre histoire, notre mission et nos valeurs"
        backgroundColor="#2e8b57"
      />

      {/* Carrousel interactif Histoire / Mission / Valeurs */}
      <InfoTabs />

      {/* Section Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Une idée ? Une question ?
              </h2>
              <p className="text-gray-600">
                Vous avez des suggestions ou des questions ? Écrivez-nous directement via ce message, nous serons ravis de vous répondre !
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;