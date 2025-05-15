import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-white dark:bg-navy py-8 border-t border-slate-light/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-dark dark:text-slate text-sm">
              © {year} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-dark dark:text-slate hover:text-green dark:hover:text-green transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-dark dark:text-slate text-sm flex items-center gap-1 justify-center md:justify-end">
              Built with 
              <Heart className="w-4 h-4 text-red-500 inline-block fill-current" /> 
              using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;