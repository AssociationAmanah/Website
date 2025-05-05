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
  { label: 'Nous Contacter', path: '/contact' }, // <- CORRIGÉ
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu(); // Close menu on route change
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
        >
          <img src="/images/logo.png" alt="Logo de l'Association Amanah" className="h-12" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-medium transform transition-all duration-300 hover:scale-105 hover:text-[#D4AF37] relative ${
                  isActive ? 'text-[#D4AF37] font-semibold' : 'text-[#FAE1A2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navigation-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-3">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F9E0A7] hover:text-[#D4AF37] transform hover:scale-110 transition-transform duration-300"
              aria-label={link.platform}
            >
              {link.icon === 'facebook' ? (
                <Facebook size={20} />
              ) : (
                <Instagram size={20} />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#D4AF37] hover:text-[#FAE1A2] transform hover:scale-110 transition-transform duration-300"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-xl font-medium transform transition-all duration-300 hover:scale-105 hover:text-[#D4AF37] ${
                        isActive ? 'text-[#D4AF37] font-semibold' : 'text-gray-700'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {/* Social links mobile */}
              <div className="mt-auto pb-8 flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#D4AF37] transform hover:scale-110 transition-transform duration-300"
                  >
                    {link.icon === 'facebook' ? (
                      <Facebook size={24} />
                    ) : (
                      <Instagram size={24} />
                    )}
                    <span className="ml-2">{link.platform}</span>
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