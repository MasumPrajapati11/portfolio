import { motion } from 'framer-motion';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1
    }
  },
  end: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: '0%'
  },
  end: {
    y: '100%'
  }
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut'
};

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <motion.div
        className="flex space-x-2"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className="block w-4 h-4 rounded-full bg-green"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="block w-4 h-4 rounded-full bg-green"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="block w-4 h-4 rounded-full bg-green"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
};

export default Loading;