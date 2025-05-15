import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';

// Form field interface
interface FormField {
  value: string;
  error: string;
  touched: boolean;
}

// Initial form state
const initialFormState = {
  name: { value: '', error: '', touched: false },
  email: { value: '', error: '', touched: false },
  subject: { value: '', error: '', touched: false },
  message: { value: '', error: '', touched: false },
};

const Contact = () => {
  // Form state
  const [form, setForm] = useState<Record<string, FormField>>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Update document title
  useEffect(() => {
    document.title = 'Contact | Masum Prajapati';
    
    return () => {
      document.title = 'Portfolio | Masum Prajapati';
    };
  }, []);

  // Validate a field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        return value.trim() === '' 
          ? 'Email is required' 
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? 'Invalid email address'
            : '';
      case 'subject':
        return value.trim() === '' ? 'Subject is required' : '';
      case 'message':
        return value.trim() === '' 
          ? 'Message is required' 
          : value.trim().length < 10
            ? 'Message must be at least 10 characters'
            : '';
      default:
        return '';
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setForm(prev => ({
      ...prev,
      [name]: {
        value,
        error,
        touched: true,
      },
    }));
  };

  // Handle blur event for validation
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setForm(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        error,
        touched: true,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newForm = { ...form };
    let isValid = true;
    
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key].value);
      newForm[key] = {
        ...form[key],
        error,
        touched: true,
      };
      
      if (error) {
        isValid = false;
      }
    });
    
    setForm(newForm);
    
    if (!isValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success!
      setSubmitStatus('success');
      setForm(initialFormState);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation variants
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
            {/* Contact Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-slate-dark dark:text-slate max-w-2xl mx-auto text-lg">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-5 gap-10">
              {/* Contact Info */}
              <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
                <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green/10 p-2 rounded-full mr-4">
                        <Mail className="w-5 h-5 text-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-dark dark:text-white">Email</h3>
                        <p className="text-slate-dark dark:text-slate">prajapatimasum1107@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green/10 p-2 rounded-full mr-4">
                        <Phone className="w-5 h-5 text-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-dark dark:text-white">Phone</h3>
                        <p className="text-slate-dark dark:text-slate">+91 7778942378</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green/10 p-2 rounded-full mr-4">
                        <MapPin className="w-5 h-5 text-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-dark dark:text-white">Location</h3>
                        <p className="text-slate-dark dark:text-slate">Sabarkantha, gujarat, india</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold mb-4">collage  Hours</h2>
                  <p className="text-slate-dark dark:text-slate mb-4">
                    I'm available during the following hours:
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-navy-dark dark:text-white font-medium">Monday - Friday</span>
                      <span className="text-slate-dark dark:text-slate">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-dark dark:text-white font-medium">Saturday</span>
                      <span className="text-slate-dark dark:text-slate">By appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-dark dark:text-white font-medium">Sunday</span>
                      <span className="text-slate-dark dark:text-slate">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div variants={itemVariants} className="md:col-span-3">
                <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                  
                  {submitStatus === 'success' ? (
                    <div className="bg-green/10 border border-green rounded-lg p-4 text-center">
                      <h3 className="font-bold text-navy-dark dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-dark dark:text-slate mb-4">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setSubmitStatus('idle')}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center">
                      <h3 className="font-bold text-red-700 mb-2">Message Failed to Send</h3>
                      <p className="text-red-600 mb-4">
                        There was an error sending your message. Please try again.
                      </p>
                      <Button onClick={() => setSubmitStatus('idle')}>
                        Try Again
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-navy-dark dark:text-white mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-2 rounded-md border ${
                              form.name.error && form.name.touched 
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-slate-light dark:border-slate/30 focus:ring-green'
                            } bg-white dark:bg-navy text-navy-dark dark:text-white focus:outline-none focus:ring-2`}
                            placeholder="Your name"
                          />
                          {form.name.error && form.name.touched && (
                            <p className="mt-1 text-red-500 text-xs flex items-center">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              {form.name.error}
                            </p>
                          )}
                        </div>
                        
                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-navy-dark dark:text-white mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-2 rounded-md border ${
                              form.email.error && form.email.touched 
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-slate-light dark:border-slate/30 focus:ring-green'
                            } bg-white dark:bg-navy text-navy-dark dark:text-white focus:outline-none focus:ring-2`}
                            placeholder="Your email"
                          />
                          {form.email.error && form.email.touched && (
                            <p className="mt-1 text-red-500 text-xs flex items-center">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              {form.email.error}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-navy-dark dark:text-white mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={form.subject.value}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-2 rounded-md border ${
                            form.subject.error && form.subject.touched 
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-slate-light dark:border-slate/30 focus:ring-green'
                          } bg-white dark:bg-navy text-navy-dark dark:text-white focus:outline-none focus:ring-2`}
                          placeholder="Message subject"
                        />
                        {form.subject.error && form.subject.touched && (
                          <p className="mt-1 text-red-500 text-xs flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {form.subject.error}
                          </p>
                        )}
                      </div>
                      
                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-navy-dark dark:text-white mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message.value}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-2 rounded-md border ${
                            form.message.error && form.message.touched 
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-slate-light dark:border-slate/30 focus:ring-green'
                          } bg-white dark:bg-navy text-navy-dark dark:text-white focus:outline-none focus:ring-2`}
                          placeholder="Your message"
                        />
                        {form.message.error && form.message.touched && (
                          <p className="mt-1 text-red-500 text-xs flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {form.message.error}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
            
            {/* Map or Additional Info */}
            <motion.div variants={itemVariants} className="mt-10">
              <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm overflow-hidden">
                <h2 className="text-xl font-bold mb-6">Find Me</h2>
                <div className="h-64 bg-slate-light/20 dark:bg-slate/20 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/place/Sabarkantha,+Gujarat/@23.867192,72.411351,254712m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395db8ec3fec2839:0x7950465ec6b52ef3!8m2!3d23.8476704!4d72.9932969!16zL20vMDRwa2c5?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;