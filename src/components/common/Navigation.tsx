import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { NavItem } from '../../types';
import { socialLinks } from '../../data/projectsData';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Projets', path: '/projets' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Nos Événements', path: '/evenements' },
  { label: 'Nous Contacter', path: '/contact' },
];

const greenDark = '#2e8b57';   // vert foncé (actif)
const greenLight = '#a8d5ba';  // vert clair (inactif)

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Fermer le menu mobile au changement de route
  }, [location]);

  const navigationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navigationVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
          aria-label="Accueil"
        >
          <img src="images/logovert.png" alt="Logo de l'Association Amanah" className="h-16 md:h-20 lg:h-24" />
        </NavLink>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className="text-base font-medium transform transition-all duration-300 hover:scale-105 relative"
              style={({ isActive }) => ({
                color: isActive ? greenDark : greenLight,
                fontWeight: isActive ? 600 : 400,
              })}
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navigation-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: greenDark }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Icônes sociales Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          {socialLinks.map(({ platform, url, icon }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110 flex items-center"
              style={{ color: greenLight }}
              onMouseEnter={e => (e.currentTarget.style.color = greenDark)}
              onMouseLeave={e => (e.currentTarget.style.color = greenLight)}
              aria-label={platform}
            >
              {icon === 'facebook' ? <Facebook size={20} /> : <Instagram size={20} />}
            </a>
          ))}
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="transform transition-transform duration-300 hover:scale-110"
            style={{ color: greenDark }}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20"
          >
            <div className="container mx-auto px-4 flex flex-col h-full">
              <nav className="flex flex-col space-y-6 py-8">
                {navItems.map(({ label, path }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className="text-xl font-medium transform transition-all duration-300 hover:scale-105"
                    style={({ isActive }) => ({
                      color: isActive ? greenDark : greenLight,
                      fontWeight: isActive ? 600 : 400,
                    })}
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* Réseaux sociaux mobile */}
              <div className="mt-auto pb-8 flex space-x-6">
                {socialLinks.map(({ platform, url, icon }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-300 hover:scale-110 flex items-center"
                    style={{ color: greenLight }}
                    onMouseEnter={e => (e.currentTarget.style.color = greenDark)}
                    onMouseLeave={e => (e.currentTarget.style.color = greenLight)}
                    aria-label={platform}
                  >
                    {icon === 'facebook' ? <Facebook size={24} /> : <Instagram size={24} />}
                    <span className="ml-2">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;