import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Book, Laptop, Briefcase, Award } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

// Timeline data
const timelineData = [
  {
    year: '2025',
    title: 'Frontend Developer',
    company: 'EXTEND TECHNOLOGY',
    description: 'Developed responsive web applications and contributed to the company\'s component library. Mentored junior developers.',
    icon: <Code className="w-5 h-5" />,
  },
  {
    year: '2025',
    title: 'UI/UX Designer',
    company: 'NOT THE COMPANY  I WILL OWN WORK',
    description: 'Designed user interfaces for various clients. Created prototypes, and final designs.',
    icon: <Laptop className="w-5 h-5" />,
  },
  {
    year: '2025',
    title: "FACULTY OF ENGINEERING & TECHNOLOGY",
    company: 'PARUL University',
    description: 'CURRENT IN STUDY with honors. Focused on web technologies .',
    icon: <Book className="w-5 h-5" />,
  },
  {
    year: '2022',
    title: "complshation of school 12th science",
    company: 'INDIAN PUBLIC SCHOOL',
    description: 'complshation with honors. Focused on web technologies .',
    icon: <Book className="w-5 h-5" />,
  },
];

// Certifications
const certifications = [
  {
    title: 'web development ',
    issuer: 'parul university',
    year: '2022',
    icon: <Award className="w-5 h-5" />,
  },
];

const About = () => {
  // Update document title
  useEffect(() => {
    document.title = 'About | Masum Prajapati';
    
    return () => {
      document.title = 'Portfolio | Masum Prajapati';
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      <div className="py-32">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Hero Section */}
            <motion.div 
              variants={itemVariants}
              className="mb-16 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-slate-dark dark:text-slate max-w-2xl mx-auto text-lg">
                I'm a passionate web developer with a focus on creating intuitive and performant user experiences.
              </p>
            </motion.div>

            {/* Bio Section */}
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="bg-white dark:bg-navy-light rounded-lg overflow-hidden shadow-md w-full h-full">
                <img 
                  src="/hero.jpg" 
                  alt="Masum Prajapati" 
                  className="w-full h-auto max-h-[400px] object-cover object-center rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <p className="text-slate-dark dark:text-slate">
                  I started my journey as a web developer over 1.5 years ago. What began as a curiosity quickly turned into a passion for creating beautiful and functional websites that solve real problems.
                </p>
                <p className="text-slate-dark dark:text-slate">
                  I specialize in frontend development with React, TypeScript, and modern CSS frameworks. I'm also familiar with backend technologies and enjoy working on full-stack projects.
                </p>
                <p className="text-slate-dark dark:text-slate">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and tutorials.
                </p>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div variants={itemVariants} className="mt-20">
              <h2 className="text-2xl font-bold mb-10 text-center">Experience & Education</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-light/20 dark:bg-slate/20"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {timelineData.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    >
                      {/* Content */}
                      <div className="md:w-5/12 mb-8 md:mb-0">
                        <div className={`bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                          <div className="flex items-center mb-3">
                            <Calendar className="w-4 h-4 text-green mr-2" />
                            <span className="text-sm font-mono text-green">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-slate-dark dark:text-slate-light font-medium mb-3">{item.company}</p>
                          <p className="text-slate-dark dark:text-slate text-sm">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="relative flex items-center justify-center w-10 h-10 bg-green text-navy-dark rounded-full shadow-lg z-10">
                        {item.icon}
                      </div>
                      
                      {/* Empty space for the other side */}
                      <div className="md:w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="mt-20">
              <h2 className="text-2xl font-bold mb-10 text-center">Certifications & Achievements</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green/10 rounded-full flex items-center justify-center mr-4">
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{cert.title}</h3>
                        <p className="text-sm text-slate-dark dark:text-slate">{cert.issuer} · {cert.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;