import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { socialLinks } from '../../data/projectsData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Association Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Association Amanah</h3>
            <p className="text-gray-300 mb-4">
              Ensemble pour un monde meilleur 
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transform transition-all hover:scale-110 duration-300"
                  aria-label={link.platform}
                >
                  {link.icon === 'facebook' ? (
                    <Facebook size={24} />
                  ) : (
                    <Instagram size={24} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/projets" className="text-gray-300 hover:text-white transition-colors">
                  Nos Projets
                </Link>
              </li>
              <li>          
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>          
                <Link to="/02/contact" className="text-gray-300 hover:text-white transition-colors">
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-300">
                  19 rue du Docteur Louis Michel, 54000 Nancy
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-300">+33 6 18 37 53 73</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-yellow-400" />
                <a href="mailto:contact@association-amanah.org" className="text-gray-300 hover:text-white transition-colors break-all">
                  associationamanah.contact@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Association Amanah. Tous droits réservés.
          </p>
          <div className="flex items-center text-gray-400 text-sm justify-center sm:justify-start">
            <span>Créé avec</span>
            <Heart size={14} className="mx-1 text-yellow-400" />
            <span>pour un monde meilleur</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;