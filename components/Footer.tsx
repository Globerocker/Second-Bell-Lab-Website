import React from 'react';
import { Page } from '../types';

const Footer: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  return (
    <footer className="bg-brand-navy text-slate-300 py-16 border-t border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/bell-icon.svg"
                alt="Logo"
                className="w-10 h-10 hover:scale-105 transition-transform"
              />
              <span className="font-heading font-black text-2xl text-white tracking-tight uppercase">Second Bell Lab</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8">
              Closing the widening gap between public schooling and real-world skill development.
              We build resilient leaders through academic support, financial literacy, and disciplined physical training.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-wider">Programs</h3>
            <ul className="space-y-3">
              <li><button onClick={() => setPage(Page.PARENTS)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Builders (11-14)</button></li>
              <li><button onClick={() => setPage(Page.PARENTS)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Creators (15-17)</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-wider">Corporate</h3>
            <ul className="space-y-3">
              <li><button onClick={() => setPage(Page.BLOG)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Blog & Insights</button></li>
              <li><button onClick={() => setPage(Page.CAREERS)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Careers</button></li>
              <li><button onClick={() => setPage(Page.FLYER)} className="text-brand-gold hover:text-white transition-colors flex items-center gap-2 font-bold"><i className="fa-solid fa-print text-xs"></i> Printable Brochure</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Second Bell Lab Inc. Phoenix, AZ. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;