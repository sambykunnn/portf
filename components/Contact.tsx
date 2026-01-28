
import React, { useState } from 'react';
import { Mail, MapPin, ArrowUpRight, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');

  const budgetOptions = [
    "₱1,500 - ₱5,000",
    "₱5,000 - ₱15,000",
    "₱15,000 - ₱30,000",
    "₱30,000+",
    "Negotiable"
  ];

  const serviceOptions = [
    "Graphic Design & Branding",
    "Stream Overlays Package",
    "Video Editing",
    "Photography",
    "Prints & Edits",
    "Other / Custom"
  ];

  return (
    <section id="contact" className="w-full py-24 bg-white/20 dark:bg-black/20 backdrop-blur-xl text-black dark:text-white rounded-t-[3rem] mt-12 transition-colors duration-500 border-t border-white/20 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div>
            <ScrollReveal>
              <div className="inline-block px-3 py-1 bg-black/80 dark:bg-white/90 text-white dark:text-black backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 transition-colors duration-500">
                Contact
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none mb-8 transition-colors duration-500 drop-shadow-sm">
                Let's build <br /> something <span className="text-gray-500 dark:text-gray-500 transition-colors duration-500">iconic.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-md transition-colors duration-500">
                Ready to elevate your brand? Fill out the form or shoot me a direct email. I'm currently accepting new projects for {new Date().getFullYear()}.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.3}>
                <a href="mailto:contact@samby.design" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/30 dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10 transition-colors border border-white/20 dark:border-white/5 hover:border-white/30 dark:hover:border-white/10 shadow-sm dark:shadow-none backdrop-blur-md">
                  <div className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-xl transition-colors duration-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest font-bold">Email Me</p>
                    <p className="font-medium text-lg group-hover:underline decoration-yellow-400 underline-offset-4 text-black dark:text-white transition-colors duration-500">contact@samby.design</p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/5 shadow-sm dark:shadow-none transition-colors duration-500 backdrop-blur-md">
                  <div className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-xl transition-colors duration-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest font-bold">Based In</p>
                    <p className="font-medium text-lg text-black dark:text-white transition-colors duration-500">Batangas, Philippines</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal delay={0.2} yOffset={50} className="h-full">
            <div className="bg-white/40 dark:bg-black/40 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] shadow-2xl transition-colors duration-500 border border-white/40 dark:border-white/10 h-full">
              <h3 className="text-2xl font-black mb-6 text-black dark:text-white transition-colors duration-500">Send a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 ml-2">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-black dark:text-white backdrop-blur-sm placeholder-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 ml-2">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-black dark:text-white backdrop-blur-sm placeholder-gray-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 ml-2">Service Interest</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setService(option)}
                        className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 border text-left backdrop-blur-sm ${
                          service === option
                            ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg transform scale-[1.02]'
                            : 'bg-white/50 dark:bg-black/50 text-gray-700 dark:text-gray-300 border-white/30 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 hover:bg-white/70 dark:hover:bg-white/5'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 ml-2">Budget Range (PHP)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setBudget(option)}
                        className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 border backdrop-blur-sm ${
                          budget === option
                            ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg transform scale-[1.02]'
                            : 'bg-white/50 dark:bg-black/50 text-gray-700 dark:text-gray-300 border-white/30 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 hover:bg-white/70 dark:hover:bg-white/5'
                        } ${option === 'Negotiable' ? 'col-span-2' : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 ml-2">Message</label>
                  <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all resize-none text-black dark:text-white backdrop-blur-sm placeholder-gray-500"></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group shadow-lg">
                  <span>Send Message</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
