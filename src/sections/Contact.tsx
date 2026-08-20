import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, AlertCircle, Linkedin, Github } from 'lucide-react';
import { heroData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate safe API submission callback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            10 // Transmission Interface
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Have an interesting opportunity, project, or quality consultation request? Send a message and I'll respond within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card Panel */}
          <div className="md:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
            <div>
              <h3 className="text-base font-bold text-slate-950 dark:text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                You can reach out directly via email or connect through professional networks.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-accent-cyan">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                      Direct Email
                    </span>
                    <a href={`mailto:${heroData.email}`} className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-accent-cyan transition-colors">
                      {heroData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60">
              <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wide mb-3">
                Social Node Links
              </span>
              <div className="flex gap-2">
                <a
                  href={heroData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-accent-cyan/30 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4 text-sky-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={heroData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-accent-cyan/30 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <Github className="h-4 w-4 text-slate-950 dark:text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Card Panel */}
          <div className="md:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Mercer"
                      className={`mt-2 block w-full rounded-lg border px-4 py-2.5 text-xs bg-transparent dark:bg-slate-950/40 text-slate-900 dark:text-white transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 focus:border-accent-cyan focus:ring-accent-cyan dark:border-slate-800'
                      }`}
                    />
                    {errors.name && (
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-red-500 font-medium">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex.mercer@example.com"
                      className={`mt-2 block w-full rounded-lg border px-4 py-2.5 text-xs bg-transparent dark:bg-slate-950/40 text-slate-900 dark:text-white transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 focus:border-accent-cyan focus:ring-accent-cyan dark:border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-red-500 font-medium">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your testing needs, automation challenges, or pipeline architectures..."
                      className={`mt-2 block w-full rounded-lg border px-4 py-2.5 text-xs bg-transparent dark:bg-slate-950/40 text-slate-900 dark:text-white transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 focus:border-accent-cyan focus:ring-accent-cyan dark:border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-red-500 font-medium">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary font-semibold flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-slate-950 dark:border-t-transparent" />
                        <span>Transmitting Payload...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-500" />
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Transmission Complete!
                  </h3>
                  <p className="max-w-md text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Thank you. Your message payload was validated and simulated successfully. I will review the logs and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn-secondary text-xs px-4 py-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
