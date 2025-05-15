import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link as RouterLink } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg'; // <-- Make sure you have this image in your project

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="h-screen flex items-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/20 dark:from-navy dark:to-navy-light z-10" />
      </div>

      <div className="container-custom">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Text Section */}
          <div className="max-w-3xl">
            <motion.p variants={item} className="text-green font-mono mb-5 text-lg">
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-navy-dark dark:text-white"
            >
              Masum Prajapati.
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-slate-dark dark:text-slate"
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-slate-dark dark:text-slate text-lg mb-8 max-w-xl"
            >
              I'm a Frontend developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button as={RouterLink} to="/projects">
                View My Work
              </Button>

              <Button variant="outline" as={RouterLink} to="/contact">
                Get In Touch
              </Button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            variants={item}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green shadow-lg"
          >
            <img 
               src="/hero.jpg" 
               alt="Masum Prajapati" 
               className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-slate-dark dark:text-slate hover:text-green dark:hover:text-green transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce-slow" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;