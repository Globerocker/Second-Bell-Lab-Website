import React from 'react';
import { Page } from '../types';

const Footer: React.FC<{setPage: (p:Page) => void}> = ({setPage}) => {
  return (
    <footer className="bg-brand-navy text-slate-300 py-16 border-t border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/20">
                <i className="fa-solid fa-bell text-brand-navy text-lg"></i>
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">Second Bell Lab™</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8">
              Closing the widening gap between public schooling and real-world skill development. 
              We build resilient leaders through academic support, financial literacy, and disciplined physical training.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><i className="fa-brands fa-instagram"></i></a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><button onClick={() => setPage(Page.PARENTS)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Builders (11-14)</button></li>
              <li><button onClick={() => setPage(Page.PARENTS)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Creators (15-17)</button></li>
              <li><button onClick={() => setPage(Page.SECOND_CHANCE)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Reintegration</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Corporate</h3>
            <ul className="space-y-3">
              <li><button onClick={() => setPage(Page.INVESTORS)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Investor Relations</button></li>
              <li><button onClick={() => setPage(Page.BLOG)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Blog & Insights</button></li>
              <li><button onClick={() => setPage(Page.CAREERS)} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs"></i> Careers</button></li>
              <li><button onClick={() => setPage(Page.FLYER)} className="text-brand-gold hover:text-white transition-colors flex items-center gap-2 font-bold"><i className="fa-solid fa-print text-xs"></i> Printable Brochure</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Second Bell Lab™. Phoenix, AZ. All rights reserved.</p>
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