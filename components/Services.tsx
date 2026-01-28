import React from 'react';
import { Palette, Camera, Video, Layers, Printer, Share2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  className?: string;
  isMain?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tags, className = '', isMain = false }) => (
  <div className={`group p-8 rounded-[2.5rem] transition-all duration-500 border flex flex-col justify-between backdrop-blur-md h-full ${
    isMain 
    ? 'bg-black/80 dark:bg-white/90 text-white dark:text-black border-black/50 dark:border-white/50 col-span-1 lg:col-span-2 shadow-xl' 
    : 'bg-white/40 dark:bg-black/20 text-black dark:text-white border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-black/40 hover:border-black/10 dark:hover:border-white/20 hover:shadow-2xl shadow-sm'
  } ${className}`}>
    <div>
      <div className={`mb-6 inline-flex p-4 rounded-2xl ${
        isMain 
        ? 'bg-white/10 dark:bg-black/10 text-yellow-400 dark:text-yellow-600' 
        : 'bg-white/50 dark:bg-white/10 text-black dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500'
      }`}>
        {icon}
      </div>
      <h3 className={`text-2xl sm:text-3xl font-black mb-4 tracking-tighter`}>{title}</h3>
      <p className={`text-lg mb-8 leading-relaxed ${isMain ? 'text-gray-400 dark:text-gray-600' : 'text-gray-600 dark:text-gray-300'}`}>
        {description}
      </p>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span key={idx} className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${
          isMain 
          ? 'bg-white/10 dark:bg-black/10 text-white dark:text-black' 
          : 'bg-white/50 dark:bg-white/10 text-gray-600 dark:text-gray-300 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500'
        }`}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-block px-3 py-1 bg-black/80 dark:bg-white/90 backdrop-blur-sm text-white dark:text-black rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 transition-colors duration-500">
                Expertise
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl sm:text-7xl font-black text-black dark:text-white tracking-tighter leading-none transition-all duration-300 hover:scale-[1.02] hover:text-yellow-500 dark:hover:text-yellow-400 cursor-default origin-left drop-shadow-sm">
                Visual Solutions <br /> For The Next Gen.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 dark:text-gray-300 font-medium max-w-sm text-lg leading-relaxed transition-colors duration-500">
              From Batangas to the global stage. I bridge the gap between imagination and reality through digital craft.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          
          <ScrollReveal delay={0.1} className="col-span-1 lg:col-span-2 h-full">
            <ServiceCard 
              className="h-full"
              title="Graphic Design & Branding"
              description="Specializing in the e-sports industry, I create aggressive yet professional identities. From logo conceptualization to full stream overlays and social media kits that command attention."
              icon={<Palette size={32} />}
              tags={['E-sports Logo', 'Stream Overlays', 'Brand Identity', 'Twitch Panels']}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="h-full">
            <ServiceCard 
              className="h-full"
              title="Videography"
              description="High-impact video production and post-processing. I turn raw footage into cinematic stories, e-sports highlights, and viral short-form content."
              icon={<Video size={28} />}
              tags={['Video Editing', 'Cinematic', 'Reels', 'Highlights']}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="h-full">
            <ServiceCard 
              className="h-full"
              title="Photography"
              description="Capturing the soul of the moment. Whether it's the grit of street photography, the intimacy of portraits, or the energy of live events."
              icon={<Camera size={28} />}
              tags={['Street', 'Portrait', 'Events', 'Product']}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="h-full">
           <ServiceCard 
            className="h-full"
            title="Prints & Creative Edits"
            description="Tangible designs and digital manipulations. I design print-ready assets like flyers and posters, and perform high-end photo retouching."
            icon={<Printer size={28} />}
            tags={['Flyers', 'Posters', 'Photo Manipulation', 'Retouching']}
          />
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="h-full">
            <ServiceCard 
              className="h-full"
              title="Social Media Mgmt"
              description="Strategic content planning and management. I help brands grow their digital footprint through consistent, high-quality visual storytelling."
              icon={<Share2 size={28} />}
              tags={['Content Strategy', 'Scheduling', 'Engagement', 'Analytics']}
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Services;