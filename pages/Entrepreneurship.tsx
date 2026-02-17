import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const Entrepreneurship: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 scale-105 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/50 to-slate-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <span className="bg-brand-gold/10 backdrop-blur-md border border-brand-gold/30 text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2 rounded-full mb-8 animate-fade-in shadow-2xl">Pillar 05 • Initiative</span>
          <h1 className="text-6xl md:text-9xl font-black text-brand-navy mb-8 animate-fade-up tracking-tighter leading-none uppercase">Entrepreneur<span className="text-brand-gold italic">ship</span></h1>
          <p className="text-lg md:text-xl text-brand-navy/70 max-w-2xl animate-fade-up delay-200 font-medium leading-relaxed">
            Ownership, initiative, and the courage to fail. Moving from consumers to creators.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-brand-navy mb-8 uppercase tracking-tight">Solving Problems at the Lowest Level</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
            Traditional education teaches compliance: wait for instructions, then execute. The real world rewards <span className="text-brand-navy font-bold">initiative</span>: see a problem, then solve it.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Our Entrepreneurship pillar isn't just about starting businesses; it's about an <span className="text-brand-gold font-bold">ownership mindset</span>. Whether it's organizing a facility cleanup or launching a lemonade stand, students learn they have the power to change their environment.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-black text-center mb-16 text-brand-gold uppercase tracking-widest">Semester Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl border border-white/10 hover:border-brand-gold transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                <i className="fa-solid fa-rocket text-xl"></i>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">The $50 Startup</h3>
              <p className="text-slate-400 font-medium leading-relaxed">Teams are given $50 seed capital. They must source a product, market it to peers, and generate real profit.</p>
            </div>
            <div className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl border border-white/10 hover:border-brand-gold transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                <i className="fa-solid fa-microphone-lines text-xl"></i>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Shark Tank Pitch</h3>
              <p className="text-slate-400 font-medium leading-relaxed">Students develop a pitch deck for a community solution. They present to local business owners who visit the lab.</p>
            </div>
            <div className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl border border-white/10 hover:border-brand-gold transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                <i className="fa-solid fa-shield-heart text-xl"></i>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Failure Resume</h3>
              <p className="text-slate-400 font-medium leading-relaxed">A workshop where students document their failures, analyze errors, and destigmatize the path to success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-brand-navy mb-10 uppercase tracking-tighter">Ignite Their Potential Today</h2>
          <Link to="/apply" className="px-12 py-5 bg-brand-gold text-brand-navy font-black uppercase tracking-widest rounded-2xl hover:bg-brand-navy hover:text-white transition-all shadow-2xl active:scale-95 inline-block">
            Join the Lab
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Entrepreneurship;