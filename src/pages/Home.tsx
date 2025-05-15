import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import PageTransition from '../components/ui/PageTransition';

const Home = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Portfolio | Masum Prajapati';
  }, []);

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <AboutSection />
      </motion.div>
    </PageTransition>
  );
};

export default Home;