import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Page } from '../types';

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNav = [
    { path: '/programs', label: 'Experience' },
    { path: '/locations', label: 'Locations' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className={`w-full z-50 sticky top-0 font-sans transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white border-b border-slate-100'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Second Bell Lab */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/images/bell-icon.png"
                alt="Second Bell Lab Logo"
                className="w-12 h-12 hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col justify-center h-full">
                <span className="font-heading font-black text-xl md:text-2xl text-brand-navy leading-none tracking-tight uppercase">Second<span className="text-brand-gold">Bell</span>Lab</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold">After School</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-black uppercase tracking-wide transition-all relative group py-2 ${location.pathname === item.path ? 'text-brand-navy' : 'text-slate-500 hover:text-brand-navy'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold transform transition-transform duration-300 origin-left ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end mr-2">
              <a href="tel:6025550199" className="text-brand-navy font-bold text-sm hover:text-brand-gold transition-colors" aria-label="Call admissions line">+1 (602) 555-0199</a>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Admissions Line</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <Link
              to="/apply"
              className="px-6 py-3 bg-brand-navy text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-navy/20 transform hover:-translate-y-0.5"
              aria-label="Apply Now"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-navy p-2" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col gap-4 animate-fade-in z-50">
            {[...mainNav, { path: '/apply', label: 'Apply Now' }, { path: '/contact', label: 'Contact' }].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-lg font-heading font-black text-brand-navy py-3 border-b border-slate-50 last:border-0 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;