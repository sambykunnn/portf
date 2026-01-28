
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  width: string;
}

const works: WorkItem[] = [
  { 
    id: 1, 
    title: 'Pro E-sports Branding', 
    category: 'Identity', 
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop', 
    width: 'w-64 sm:w-80' 
  },
  { 
    id: 2, 
    title: 'Gaming Social Kit', 
    category: 'Management', 
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop', 
    width: 'w-80 sm:w-96' 
  },
  { 
    id: 3, 
    title: 'Tournament Graphics', 
    category: 'Visuals', 
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop', 
    width: 'w-64 sm:w-72' 
  },
  { 
    id: 4, 
    title: 'Street Photography', 
    category: 'Photography', 
    image: 'https://images.unsplash.com/photo-1495121553079-4c61bbbc19df?q=80&w=1974&auto=format&fit=crop', 
    width: 'w-96 sm:w-[450px]' 
  },
  { 
    id: 5, 
    title: 'Stream UI/UX', 
    category: 'Overlays', 
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/11bec2202374603.Y3JvcCw4MDgsNjMyLDAsMA.png', 
    width: 'w-72 sm:w-80' 
  },
  { 
    id: 6, 
    title: 'Cinematic Highlights', 
    category: 'Videography', 
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop', 
    width: 'w-80 sm:w-96' 
  },
];

const WorkCard: React.FC<{ item: WorkItem }> = ({ item }) => (
  <div className={`flex-shrink-0 ${item.width} aspect-[16/10] bg-white/20 dark:bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden relative group cursor-pointer border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500`}>
    <img 
      src={item.image} 
      alt={item.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1 block">{item.category}</span>
        <h3 className="text-white text-xl font-black">{item.title}</h3>
      </div>
    </div>
  </div>
);

const ScrollingRow: React.FC<{ items: WorkItem[], speed: string }> = ({ items, speed }) => (
  <div className="flex gap-4 sm:gap-6 overflow-hidden py-2 select-none relative">
    <div className={`flex gap-4 sm:gap-6 animate-marquee-${speed} hover:[animation-play-state:paused]`}>
      {[...items, ...items, ...items].map((item, idx) => (
        <WorkCard key={`${item.id}-${idx}`} item={item} />
      ))}
    </div>
  </div>
);

const Works: React.FC = () => {
  return (
    <section id="works" className="w-full py-24 bg-transparent overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex flex-col items-center">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <div className="inline-block px-3 py-1 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-500">
              Portfolio
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter mb-4 text-center transition-colors duration-500 drop-shadow-sm">
              Selected Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-medium text-center max-w-lg leading-relaxed transition-colors duration-500">
              Showcasing a collection of projects from my Behance (sambykun), specializing in e-sports design, high-quality photography, and visual storytelling.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Row 1 - Faster */}
        <ScrollReveal delay={0.2} yOffset={20}>
          <ScrollingRow items={works.slice(0, 3)} speed="fast" />
        </ScrollReveal>
        
        {/* Row 2 - Medium (shifted) */}
        <ScrollReveal delay={0.3} yOffset={20}>
          <ScrollingRow items={[...works.slice(3, 6), ...works.slice(0, 1)]} speed="medium" />
        </ScrollReveal>
        
        {/* Row 3 - Slow (reversed order) */}
        <ScrollReveal delay={0.4} yOffset={20}>
          <ScrollingRow items={works.slice(2, 5).reverse()} speed="slow" />
        </ScrollReveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-medium {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        .animate-marquee-medium {
          animation: marquee-medium 45s linear infinite;
        }
        .animate-marquee-fast {
          animation: marquee-fast 30s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Works;
