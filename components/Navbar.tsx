import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNav = [
    { id: Page.PROGRAMS, label: 'Programs' },
    { id: Page.LOCATIONS, label: 'Locations' },
    { id: Page.BLOG, label: 'Blog' },
    { id: Page.SECOND_CHANCE, label: 'Gov / Reintegration' },
    { id: Page.ABOUT, label: 'About' },
  ];

  return (
    <div className={`w-full z-50 sticky top-0 font-sans transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white border-b border-slate-100'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Nano Banana */}
          <div className="flex items-center cursor-pointer group" onClick={() => setPage(Page.HOME)}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center border-2 border-brand-gold group-hover:bg-brand-gold group-hover:border-brand-navy transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transform hover:translate-x-[2px] hover:translate-y-[2px]">
                 {/* Nano Banana SVG Icon */}
                 <svg viewBox="0 0 100 100" className="w-8 h-8 fill-brand-gold group-hover:fill-brand-navy transition-colors">
                    <path d="M20,80 C10,10 85,10 85,30 C50,30 50,80 20,80 Z" />
                    <circle cx="82" cy="22" r="6" className="fill-white" />
                    <rect x="78" y="18" width="8" height="8" className="fill-brand-navy group-hover:fill-brand-gold transition-colors" rx="1" />
                 </svg>
              </div>
              <div className="flex flex-col justify-center h-full">
                <span className="font-heading font-black text-2xl text-brand-navy leading-none tracking-tight uppercase">Nano<span className="text-brand-gold">Banana</span></span>
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold">Future Labs</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id as Page)}
                className={`text-sm font-black uppercase tracking-wide transition-all relative group py-2 ${
                  currentPage === item.id ? 'text-brand-navy' : 'text-slate-500 hover:text-brand-navy'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold transform transition-transform duration-300 origin-left ${currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
             <div className="flex flex-col items-end mr-2">
                <a href="tel:6025550199" className="text-brand-navy font-bold text-sm hover:text-brand-gold transition-colors">+1 (602) 555-0199</a>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Admissions Line</span>
             </div>
             <button 
               onClick={() => setPage(Page.ASSISTANT)}
               className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300"
               title="AI Assistant"
             >
               <i className="fa-solid fa-robot"></i>
             </button>
             <button 
              onClick={() => setPage(Page.APPLICATION)}
              className="px-6 py-3 bg-brand-navy text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-navy/20 transform hover:-translate-y-0.5"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-4">
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-navy p-2">
                <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
             </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col gap-4 animate-fade-in z-50">
            {[...mainNav, {id: Page.APPLICATION, label: 'Apply Now'}, {id: Page.CONTACT, label: 'Contact'}].map((item) => (
              <button
                key={item.id}
                onClick={() => { setPage(item.id as Page); setMobileMenuOpen(false); }}
                className="text-left text-lg font-heading font-black text-brand-navy py-3 border-b border-slate-50 last:border-0 uppercase"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;