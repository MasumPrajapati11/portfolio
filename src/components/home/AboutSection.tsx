import { motion } from 'framer-motion';
import Section from '../ui/Section';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'SQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { category: 'Other', items: ['UI/UX Design', 'AWS', 'Database Design', 'Vercel and Netlify'] },
];

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section 
      id="about-section"
      title="About Me"
      subtitle="Here you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-xl font-bold mb-4 text-navy-dark dark:text-white">Get to know me!</h3>
          <div className="space-y-4 text-slate-dark dark:text-slate">
            <p>
              I'm a <strong className="text-navy-dark dark:text-white">Frontend Developer</strong> with a passion for building 
              digital experiences that are not only functional but also intuitive and accessible.
            </p>
            <p>
              I have over <strong className="text-navy-dark dark:text-white">1.5 years of experience</strong> working with JavaScript, 
              React, TypeScript, and modern frontend tools. I enjoy solving complex problems and learning new technologies.
            </p>
            <p>
              Beyond coding, I'm interested in design systems, user experience, and the intersection of technology and creativity. 
              I'm always looking to expand my knowledge and grow as a developer.
            </p>
            <p>
              I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches 
              my skills and experience then don't hesitate to contact me.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col"
        >
          <h3 className="text-xl font-bold mb-4 text-navy-dark dark:text-white">Skills</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-navy-light p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-navy-dark dark:text-green mb-3">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-slate-dark dark:text-slate flex items-center">
                      <span className="w-2 h-2 bg-green rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;