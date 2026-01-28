import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [active, setActive] = React.useState('Home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or previous setting
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = async (e: React.MouseEvent) => {
    const doc = document as any; // Cast for View Transitions API support

    // Helper function to update state and DOM
    const updateTheme = () => {
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        setIsDark(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        setIsDark(true);
      }
    };

    // Fallback if View Transitions aren't supported
    if (!doc.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      updateTheme();
      return;
    }

    // Determine the shadow color for the feather effect based on the TARGET theme
    // If currently dark, we go to light -> White Shadow
    // If currently light, we go to dark -> Black Shadow
    const shadowColor = isDark ? '#ffffff' : '#000000';
    document.documentElement.style.setProperty('--wipe-shadow', shadowColor);

    // Circular Wipe Coordinates
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Start the transition
    const transition = doc.startViewTransition(() => {
      // flushSync forces React to update the DOM immediately, ensuring the browser
      // snapshots the new state correctly.
      flushSync(() => {
        updateTheme();
      });
    });

    await transition.ready;

    // Animate the "new" view using clipPath (Hardware Accelerated)
    // The feather effect is handled by the CSS drop-shadow filter on the pseudo-element
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500, // Faster duration for a snappy feel
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  const handleClick = (label: string, e: React.MouseEvent) => {
    setActive(label);
    const id = label.toLowerCase() === 'home' ? 'home' : label.toLowerCase().replace(' ', '');
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex justify-center pt-8 pb-4 fixed top-0 left-0 z-50 px-4 pointer-events-none">
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* iOS Fluid Glass Container */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 p-1.5 rounded-full 
          bg-white/30 dark:bg-black/30 
          backdrop-blur-2xl backdrop-saturate-150
          border border-white/20 dark:border-white/10
          shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
          transition-all duration-300 ring-1 ring-white/10 dark:ring-white/5">
          
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(item.label, e)}
              className={`
                relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden
                ${active === item.label 
                  ? 'text-white dark:text-black shadow-lg scale-100' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10'}
              `}
            >
              {active === item.label && (
                <div className="absolute inset-0 bg-black dark:bg-white rounded-full -z-10 transition-all duration-300" />
              )}
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle - Glass Style */}
        <button 
          onClick={toggleTheme}
          className="p-3.5 rounded-full 
            bg-white/30 dark:bg-black/30 
            backdrop-blur-2xl backdrop-saturate-150
            border border-white/20 dark:border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
            text-black dark:text-white 
            hover:scale-105 hover:bg-white/50 dark:hover:bg-white/10
            transition-all duration-300 ring-1 ring-white/10 dark:ring-white/5"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;