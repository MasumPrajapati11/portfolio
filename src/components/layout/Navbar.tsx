import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-navy-dark dark:text-green">
          <span className="text-green dark:text-white">{'<'}</span>
          Portfolio
          <span className="text-green dark:text-white">{'/>'}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  <span className="text-green">0{index + 1}.</span> {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-dark dark:text-slate hover:text-green dark:hover:text-green transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-slate-dark/10 dark:hover:bg-slate/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-green" />
              ) : (
                <Moon className="w-5 h-5 text-navy-dark" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-dark/10 dark:hover:bg-slate/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-green" />
            ) : (
              <Moon className="w-5 h-5 text-navy-dark" />
            )}
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="text-navy-dark dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-white dark:bg-navy-dark pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col h-full">
              <ul className="flex flex-col gap-8 mb-8">
                {navLinks.map((link, index) => (
                  <li key={link.path}>
                    <NavLink 
                      to={link.path} 
                      onClick={closeMenu}
                      className={({ isActive }) => 
                        `text-xl font-semibold ${isActive ? 'text-green' : 'text-navy-dark dark:text-slate-light'}`
                      }
                    >
                      <span className="text-green">0{index + 1}.</span> {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex gap-6 mt-auto mb-8">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-dark dark:text-slate-light hover:text-green dark:hover:text-green transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;