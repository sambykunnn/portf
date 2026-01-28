import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent">
      
      {/* Content Grid */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-screen pt-20">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center items-start space-y-8 h-full order-2 lg:order-1 pb-12 lg:pb-0 z-20">
          
          {/* Status Badge */}
          <ScrollReveal delay={0.1} className="w-fit">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-black/40 rounded-full border border-white/30 dark:border-white/10 shadow-sm backdrop-blur-md transition-colors duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">Available for hire</span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <div className="space-y-2">
            <ScrollReveal delay={0.2}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black dark:text-white tracking-tighter leading-[0.9] transition-all duration-300 hover:scale-[1.02] hover:text-yellow-500 dark:hover:text-yellow-400 cursor-default origin-left">
                Hello there!
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black dark:text-white tracking-tighter leading-[0.9] transition-all duration-300 hover:scale-[1.02] hover:text-yellow-500 dark:hover:text-yellow-400 cursor-default origin-left">
                I'm Samby
              </h1>
            </ScrollReveal>
          </div>

          {/* Description */}
          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-lg font-medium leading-relaxed tracking-tight transition-colors duration-500">
              A 20-year-old freelance graphic designer from Batangas who specializes in designing professional graphics for the e-sports industry. I'm also a social media manager, photographer, videographer and video editor.
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={0.5} className="w-fit">
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Let's work together!</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform text-yellow-400 dark:text-yellow-600 relative z-10" />
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gray-900 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
            </a>
          </ScrollReveal>
        </div>

        {/* Right Column: Hero Image "Background" */}
        <div className="relative h-full w-full flex items-end justify-center lg:justify-end order-1 lg:order-2 pointer-events-none">
             {/* 
                Main Portrait Image 
                Positioned to anchor at the bottom and overlap slightly on smaller screens
             */}
             <div className="relative z-10 h-[50vh] lg:h-[90vh] w-full flex items-end justify-center lg:justify-end">
                <ScrollReveal delay={0.4} duration={1.2} yOffset={100} className="h-full w-full flex justify-center lg:justify-end items-end">
                  <img 
                    src="/samby.png" 
                    alt="Samby Portrait" 
                    className="h-full w-auto object-contain object-bottom drop-shadow-2xl grayscale dark:grayscale-0 transition-all duration-500"
                  />
                </ScrollReveal>
             </div>
             
             {/* Decorative Ambient Background Blob */}
             <div className="absolute top-1/2 left-1/2 lg:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[150%] lg:w-[120%] h-[120%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] -z-10 opacity-60 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;