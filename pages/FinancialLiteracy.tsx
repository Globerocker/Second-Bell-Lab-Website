import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const FinancialLiteracy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop')] bg-cover bg-center opacity-40 scale-105 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/50 to-slate-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <span className="bg-white/5 backdrop-blur-md border border-white/10 text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2 rounded-full mb-8 animate-fade-in shadow-2xl">Pillar 04 • Value</span>
          <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 animate-fade-up tracking-tighter leading-none uppercase">Financial <br /><span className="text-brand-gold italic">Literacy</span></h1>
          <p className="text-lg md:text-xl text-brand-navy/70 max-w-2xl animate-fade-up delay-200 font-medium leading-relaxed">
            Understanding value, not just cost. A simulated economy that teaches budgeting, saving, and investing.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-8">The "Bell Buck" Economy</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Money is abstract to most children until they have to earn it. At Second Bell Lab™, we run a closed-loop internal economy.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Students pay "rent" for their lockers. They earn "Bell Bucks" through academic performance, leadership roles, or facility maintenance tasks. They can "invest" their bucks in group projects or spend them on privileges. This creates a tangible understanding of cash flow.
          </p>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-brand-navy">Compound Interest</h3>
                <p className="text-slate-600 mt-2">Visualizing how small savings grow over time. We use real market data simulations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-brand-navy">Budgeting 101</h3>
                <p className="text-slate-600 mt-2">Needs vs. Wants. Creating a monthly budget for a hypothetical $50k salary.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-gold">
                <h3 className="text-xl font-bold text-brand-navy">Assets vs. Liabilities</h3>
                <p className="text-slate-600 mt-2">Understanding the difference between buying a new phone vs. buying a stock.</p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop" alt="Trading simulation" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Prepare Them for Reality</h2>
          <Link to="/apply" className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-all inline-block">
            Join the Lab
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FinancialLiteracy;