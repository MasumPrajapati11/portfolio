import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import PageTransition from '../components/ui/PageTransition';

const NotFound = () => {
  // Update document title
  useEffect(() => {
    document.title = '404 Not Found | Masum prajapati';
    
    return () => {
      document.title = 'Portfolio | M';
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center py-32">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-9xl font-bold text-green">404</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-slate-dark dark:text-slate text-lg mb-8"
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <Button as={Link} to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <Button variant="outline" as={Link} to="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;