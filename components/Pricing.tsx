
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface PricingItem {
  name: string;
  description?: string;
  price: string;
}

interface PricingCategory {
  id: string;
  category: string;
  note?: string;
  items: PricingItem[];
}

const pricingData: PricingCategory[] = [
  {
    id: 'branding',
    category: "Logo & Brand Visual Identity",
    note: "Open for value-based pricing / negotiation",
    items: [
      { name: "Basic", description: "Basic Logo Design Only", price: "₱1,500 - ₱5,000" },
      { name: "Standard", description: "Logo + Basic One Page Brand Guide", price: "₱10,000 - ₱20,000" },
      { name: "Premium", description: "Logo + Full Set Business Brand Guide", price: "₱30,000 - ₱80,000" },
    ]
  },
  {
    id: 'social',
    category: "Social Media Design",
    note: "Open for value-based pricing / negotiation",
    items: [
      { name: "Facebook / Instagram Post", price: "₱500 - ₱1,000" },
      { name: "Reels / Tiktok", price: "₱1,500 - ₱3,000" },
      { name: "Social Media Cover Banner", price: "₱1,000 - ₱1,500" },
    ]
  },
  {
    id: 'stationeries',
    category: "Stationeries",
    items: [
      { name: "Business Card", description: "Digital Copy/PNG/PDF", price: "₱500 - ₱1,500" },
      { name: "Letterhead", description: "Digital Copy/PNG/PDF", price: "₱500 - ₱1,500" },
      { name: "Corporate Folder", description: "Digital Copy/PNG/PDF", price: "₱500 - ₱1,500" },
    ]
  },
  {
    id: 'printables',
    category: "Printables",
    note: "Open for value-based pricing / negotiation",
    items: [
      { name: "Flyer", description: "1 to 2 pages", price: "₱1,000 - ₱2,000" },
      { name: "Brochure", description: "1 to 3 pages", price: "₱1,000 - ₱2,000" },
      { name: "Poster", price: "₱1,000 - ₱1,500" },
      { name: "Banner", price: "₱1,000 - ₱1,500" },
      { name: "Invitation Card", price: "₱1,500 - ₱2,000" },
      { name: "Certificate", price: "₱1,500 - ₱2,000" },
      { name: "Menu", price: "₱2,000 - ₱3,000" },
      { name: "Product Label", description: "Up to 2 products/mockup", price: "₱2,500 - ₱4,000" },
      { name: "Product Packaging", description: "Up to 2 products/mockup", price: "₱2,500 - ₱5,000" },
    ]
  },
  {
    id: 'digital',
    category: "Digital Artwork",
    note: "Open for value-based pricing / negotiation",
    items: [
      { name: "Photo Editing", price: "₱500 - ₱1,000" },
      { name: "Photomanipulation", price: "₱500 - ₱1,500" },
      { name: "Event / Movie Poster", price: "₱1,000 - ₱1,500" },
    ]
  },
  {
    id: 'subscription',
    category: "Subscription Based (Package)",
    note: "approx. ₱1,000 per artboard",
    items: [
      { name: "10 Social Media Posts", price: "₱8,000 - ₱10,000" },
      { name: "20 Social Media Posts", price: "₱15,000 - ₱20,000" },
      { name: "30 Social Media Posts", price: "₱25,000 - ₱30,000" },
    ]
  },
  {
    id: 'photography',
    category: "Photography Services",
    note: "Open for value-based pricing / negotiation",
    items: [
      { name: "Portrait", description: "Individual, Proposal, Family", price: "₱5,000 - ₱15,000" },
      { name: "Event", description: "Wedding, Birthdays, Corporate", price: "₱25,000 - ₱40,000" },
      { name: "Commercial", description: "Concert, Product Shots, Ads", price: "₱50,000 - ₱150,000" },
    ]
  }
];

interface AccordionItemProps {
  data: PricingCategory;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ data, isOpen, onClick }) => {
  return (
    <div className="border border-white/40 dark:border-white/10 rounded-3xl overflow-hidden bg-white/40 dark:bg-black/20 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800/20">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-white/20 dark:hover:bg-white/5 transition-colors"
      >
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white tracking-tight">{data.category}</h3>
          {data.note && (
            <p className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-500 font-medium mt-1 flex items-center gap-1">
              <Sparkles size={12} /> {data.note}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full bg-white/50 dark:bg-white/10 text-black dark:text-white transition-transform duration-300 ${isOpen ? 'rotate-180 bg-black text-white dark:bg-white dark:text-black' : ''}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 sm:p-8 pt-0 border-t border-white/20 dark:border-white/5 bg-white/20 dark:bg-black/20">
          <div className="space-y-4">
            {data.items.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/20 dark:border-white/10 last:border-0 hover:bg-white/30 dark:hover:bg-white/5 rounded-lg px-2 transition-colors">
                <div className="mb-1 sm:mb-0">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">{item.name}</h4>
                  {item.description && <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>}
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg text-black dark:text-white">{item.price}</span>
                </div>
              </div>
            ))}
            {data.id === 'subscription' && (
              <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-2">
                * Simple or short-form video editing like "reels" may be incorporated into the package, although its inclusion ultimately depends on the discretion of the designer.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('branding');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="pricing" className="w-full py-24 bg-transparent transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-6xl font-black text-black dark:text-white tracking-tighter mb-6 transition-colors duration-500 drop-shadow-sm">
              Pricing
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-yellow-500/10 dark:bg-yellow-900/20 border border-yellow-500/20 dark:border-yellow-900/30 backdrop-blur-md rounded-2xl p-6 text-left sm:text-center transition-colors duration-500">
              <div className="flex items-start sm:items-center gap-3 justify-center mb-2 text-yellow-700 dark:text-yellow-500 font-bold">
                <AlertCircle size={20} className="shrink-0 mt-0.5 sm:mt-0" />
                <span>Disclaimer</span>
              </div>
              <p className="text-sm text-yellow-800/80 dark:text-yellow-400/80 leading-relaxed">
                This price list serves as a guide for initial reference. Final pricing depends on project complexity, duration, and scope.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 mb-20">
          {pricingData.map((category, idx) => (
            <ScrollReveal key={category.id} delay={idx * 0.1} yOffset={20}>
              <AccordionItem 
                data={category} 
                isOpen={openId === category.id}
                onClick={() => handleToggle(category.id)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Custom Deal Banner - Glass Style */}
        <ScrollReveal delay={0.4}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 text-black dark:text-white p-8 sm:p-12 text-center transition-colors duration-500 shadow-xl">
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl font-black mb-4">Have a unique budget?</h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-xl mb-8">
                Every project is different. The rates above are a guide, not a rule. 
                Let's discuss your specific needs and find a price that works for both of us.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg">
                <MessageCircle size={18} />
                <span>Let's Talk Numbers</span>
              </a>
            </div>
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-20 dark:opacity-20 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 dark:opacity-20 -translate-x-1/3 translate-y-1/3"></div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Pricing;
