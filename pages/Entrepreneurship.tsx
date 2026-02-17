import React from 'react';
import { Page } from '../types';

const Entrepreneurship: React.FC<{setPage: (p:Page) => void}> = ({setPage}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">Pillar 05</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-up">Entrepreneurship</h1>
          <p className="text-xl text-slate-200 max-w-2xl animate-fade-up delay-200">
            Ownership, initiative, and the courage to fail. Moving from consumers to creators.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-8">Solving Problems at the Lowest Level</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Traditional education teaches compliance: wait for instructions, then execute. The real world rewards initiative: see a problem, then solve it.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our Entrepreneurship pillar isn't just about starting businesses; it's about an <strong>ownership mindset</strong>. Whether it's organizing a facility cleanup or launching a lemonade stand, students learn that they have the power to change their environment.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-brand-gold">Semester Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-brand-gold transition-colors">
              <h3 className="text-2xl font-bold mb-4">The $50 Startup</h3>
              <p className="text-slate-300">Teams are given $50 seed capital (in Bell Bucks). They must source a product/service, market it to peers, and generate profit.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-brand-gold transition-colors">
              <h3 className="text-2xl font-bold mb-4">Shark Tank Pitch</h3>
              <p className="text-slate-300">Students develop a pitch deck for a solution to a community problem. They present to local business owners who visit the lab.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-brand-gold transition-colors">
              <h3 className="text-2xl font-bold mb-4">Failure Resume</h3>
              <p className="text-slate-300">A workshop where students document their failures, analyze what went wrong, and what they learned. Destigmatizing error.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy mb-8">Ignite Their Potential</h2>
          <button onClick={() => setPage(Page.PARENTS)} className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-brand-navy hover:text-white transition-all">
            Join the Lab
          </button>
        </div>
      </section>
    </div>
  );
};

export default Entrepreneurship;