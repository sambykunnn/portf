import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <main className="w-full min-h-screen text-black dark:text-white selection:bg-blue-900 selection:text-white relative overflow-x-hidden scroll-smooth
      bg-gradient-to-br from-gray-50 via-gray-200 to-gray-50 dark:from-black dark:via-[#020410] dark:to-black bg-size-200 animate-gradient">
      
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      
      <Works />
      
      <section id="services">
        <Services />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <Contact />
      
      {/* Footer / Copyright - Glass Style */}
      <footer className="w-full text-center text-gray-500 dark:text-gray-400 text-xs py-8 bg-white/10 dark:bg-black/10 backdrop-blur-md border-t border-white/20 dark:border-white/5 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Samby Design. All rights reserved. Crafted with passion from Batangas.</p>
        </div>
      </footer>
      <ChatBot />
    </main>
  );
}

export default App;