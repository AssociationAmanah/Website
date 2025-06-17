{/*import React from 'react';
import Hero from '../components/common/Hero';
import { motion } from 'framer-motion';
import { Target, Gift, Heart, Award } from 'lucide-react';
import Button from '../components/common/Button';

const DonationPage: React.FC = () => {
  const donationOptions = [
    {
      amount: 20,
      title: 'Donateur',
      description: 'Votre don peut fournir des fournitures scolaires à un enfant pendant un an!',
      icon: <Gift className="w-6 h-6 text-white" />
    },
    {
      amount: 50,
      title: 'Soutien',
      description: 'Votre don peut financer l\'accès à l\'eau potable pour une famille.',
      icon: <Heart className="w-6 h-6 text-white" />,
      highlighted: true
    },
    {
      amount: 100,
      title: 'Bienfaiteur',
      description: 'Votre don peut financer la formation d\'un agriculteur aux techniques durables.',
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      amount: 200,
      title: 'Partenaire',
      description: 'Votre don peut contribuer à l\'équipement d\'une clinique mobile.',
      icon: <Award className="w-6 h-6 text-white" />
    }
  ];

  const impactItems = [
    {
      title: '20€',
      description: 'Peuvent fournir des fournitures scolaires à un enfant pendant un an'
    },
    {
      title: '50€',
      description: 'Peuvent financer l\'accès à l\'eau potable pour une famille'
    },
    {
      title: '100€',
      description: 'Peuvent financer la formation d\'un agriculteur aux techniques durables'
    },
    {
      title: '200€',
      description: 'Peuvent contribuer à l\'équipement d\'une clinique mobile'
    }
  ];

  const handleDonateClick = (amount: number) => {
    // In a real application, this would redirect to a payment processor
    console.log(`Donation of ${amount}€ initiated`);
    alert(`Merci pour votre générosité ! Votre don de ${amount}€ fera une différence.`);
  };

  return (
    <div>
      <Hero 
        title="Faire un Don"
        subtitle="Votre générosité change des vies"
        backgroundImage="https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg"
      />
      
      {/* Donation Options 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Soutenez Nos Actions
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Votre don, quel que soit son montant, contribue directement à nos projets 
              humanitaires et fait une différence réelle dans la vie des personnes que nous aidons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all ${
                  option.highlighted ? 'transform-gpu scale-105 border-2 border-primary-500' : ''
                }`}
              >
                <div className={`p-4 ${option.highlighted ? 'bg-primary-600' : 'bg-secondary-500'} text-white`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{option.title}</span>
                    <div className="rounded-full bg-opacity-20 bg-white p-2">
                      {option.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="text-3xl font-bold text-gray-800 mb-4">
                    {option.amount}€
                  </div>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <Button 
                    variant={option.highlighted ? 'primary' : 'outline'} 
                    fullWidth
                    onClick={() => handleDonateClick(option.amount)}
                  >
                    Faire un don
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 bg-gray-50 rounded-lg shadow-soft text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Don personnalisé</h3>
            <p className="text-gray-600 mb-6">
              Vous souhaitez faire un don d'un autre montant ?
            </p>
            <form className="max-w-sm mx-auto">
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Montant en €"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <Button variant="primary" fullWidth type="submit">
                Faire un don personnalisé
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Donation Impact 
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              L'Impact de Votre Don
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Voici comment votre générosité contribue concrètement à nos projets humanitaires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-soft text-center"
              >
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  {item.title}
                </div>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Deduction 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Avantages Fiscaux
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En tant qu'association reconnue d'intérêt général, vos dons à Association Amanah 
              sont déductibles des impôts à hauteur de 66% de leur montant dans la limite de 20% 
              du revenu imposable.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Par exemple, un don de 100€ ne vous coûte réellement que 34€ après déduction fiscale.
            </p>
            <p className="text-gray-600 italic">
              Un reçu fiscal vous sera envoyé pour tout don effectué.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage; */}