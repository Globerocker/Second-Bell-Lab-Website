import React from 'react';
import { Page } from '../types';

interface InvestorsProps {
  setPage: (page: Page) => void;
}

const Investors: React.FC<InvestorsProps> = ({ setPage }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy text-white pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
           <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-brand-gold font-bold text-xs uppercase tracking-widest mb-6 animate-fade-in">
             Investment Opportunity
           </div>
           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">The "Daylight Niche" <br/>is <span className="text-brand-gold">Wide Open.</span></h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-up delay-100">
             The after-school market is fragmented and under-served. We are building the premium standard for the 3pm-6pm window.
           </p>
        </div>
      </div>

      {/* Stats / Opportunity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="text-center">
             <div className="text-5xl font-bold text-brand-navy mb-2">$23B</div>
             <p className="text-sm font-bold uppercase tracking-wider text-slate-500">After-School Market</p>
           </div>
           <div className="text-center border-l border-slate-100">
             <div className="text-5xl font-bold text-brand-navy mb-2">82%</div>
             <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Parent Dissatisfaction</p>
           </div>
           <div className="text-center border-l border-slate-100">
             <div className="text-5xl font-bold text-brand-navy mb-2">35%</div>
             <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Target EBITDA</p>
           </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">The Problem</span>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">A Broken Afternoon Economy</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Public schools release students at 3:00 PM. Most parents work until 5:00 PM or 6:00 PM. This "gap" creates a massive demand for supervision.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Currently, parents have two poor choices: "warehousing" (low-quality daycare) or "fragmentation" (driving kids to separate tutors, karate, and music lessons).
            </p>
            <p className="text-slate-600 font-bold text-lg">
              Second Bell Lab™ consolidates this into one premium location.
            </p>
          </div>
          <div className="bg-slate-100 p-8 rounded-2xl relative">
             <div className="absolute -top-4 -right-4 bg-brand-navy text-white p-4 rounded-xl shadow-lg">
               <i className="fa-solid fa-chart-line text-2xl"></i>
             </div>
             <h3 className="text-xl font-bold text-brand-navy mb-4">Unit Economics (Mature)</h3>
             <ul className="space-y-4">
               <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                 <span className="text-slate-600">Capacity</span>
                 <span className="font-bold text-brand-navy">50 Students</span>
               </li>
               <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                 <span className="text-slate-600">Avg Revenue / Student</span>
                 <span className="font-bold text-brand-navy">$750/mo</span>
               </li>
               <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                 <span className="text-slate-600">Monthly Revenue</span>
                 <span className="font-bold text-brand-navy">$37,500</span>
               </li>
               <li className="flex justify-between items-center pt-2">
                 <span className="text-slate-600">Monthly OpEx</span>
                 <span className="font-bold text-red-500">~$24,000</span>
               </li>
             </ul>
             <div className="mt-6 pt-6 border-t border-slate-300 text-center">
               <span className="block text-sm text-slate-500 uppercase tracking-widest">Net Profit</span>
               <span className="text-4xl font-bold text-green-600">$13,500<span className="text-sm text-slate-400">/mo</span></span>
             </div>
          </div>
        </div>
      </section>

      {/* Expansion Plan */}
      <section className="bg-brand-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl font-bold mb-12">Growth Roadmap</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
               <div className="text-brand-gold font-bold text-6xl mb-4 opacity-20">01</div>
               <h3 className="text-2xl font-bold mb-4">Proof of Concept</h3>
               <p className="text-slate-400 text-sm">Launch Phoenix HQ. Fill to capacity (50 students). Refine curriculum and ops manual.</p>
               <div className="mt-6 inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">Current Phase</div>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
               <div className="text-brand-gold font-bold text-6xl mb-4 opacity-20">02</div>
               <h3 className="text-2xl font-bold mb-4">Regional Expansion</h3>
               <p className="text-slate-400 text-sm">Open 3 additional units in Scottsdale, Chandler, and Gilbert. Centralize admin and marketing.</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
               <div className="text-brand-gold font-bold text-6xl mb-4 opacity-20">03</div>
               <h3 className="text-2xl font-bold mb-4">Franchise Model</h3>
               <p className="text-slate-400 text-sm">Package the IP, branding, and LMS software for national franchising.</p>
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-6">Request Investor Deck</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Accredited investors only. Please contact us to schedule a meeting with the founders.
        </p>
        <button onClick={() => setPage(Page.CONTACT)} className="px-8 py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl">
          Contact Investor Relations
        </button>
      </section>
    </div>
  );
};

export default Investors;