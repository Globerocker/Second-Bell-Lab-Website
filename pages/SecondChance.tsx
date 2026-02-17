import React from 'react';
import { Page } from '../types';

const SecondChance: React.FC<{setPage: (p:Page) => void}> = ({setPage}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">Reintegration Initiative</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-up max-w-3xl">
            The Dojo as a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-orange-500">Courtroom.</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl animate-fade-up delay-200 leading-relaxed">
            Partnering with the Juvenile Justice System to provide a path forward, not a dead end. We replace detention with discipline.
          </p>
        </div>
      </div>

      {/* The Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-8">Restorative, Not Punitive.</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            When a young person brushes against the law, society often pushes them further to the margins. We believe in pulling them back to the center.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            The Second Bell "Second Chance" track is a government-subsidized program for non-violent juvenile offenders. Instead of community service that teaches nothing, they undergo a rigorous 6-month curriculum of martial arts, stoic philosophy, and vocational training.
          </p>
        </div>
      </section>

      {/* Combat Sports Science */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-gold">Why Combat Sports?</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                   It seems counter-intuitive to teach fighting to "troubled" youth. However, studies consistently show that controlled, disciplined combat sports (Jiu-Jitsu, Boxing, Wrestling) significantly reduce aggression outside the gym.
                </p>
                <ul className="space-y-4">
                   <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-bold"><i className="fa-solid fa-brain"></i></div>
                      <div>
                         <h4 className="font-bold">Regulation</h4>
                         <p className="text-sm text-slate-400">High-intensity exertion releases pent-up cortisol and adrenaline in a safe environment.</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-bold"><i className="fa-solid fa-handshake"></i></div>
                      <div>
                         <h4 className="font-bold">Respect</h4>
                         <p className="text-sm text-slate-400">On the mat, status is earned by skill and humility, not by posturing or background.</p>
                      </div>
                   </li>
                   <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-bold"><i className="fa-solid fa-shield-halved"></i></div>
                      <div>
                         <h4 className="font-bold">Anti-Bullying</h4>
                         <p className="text-sm text-slate-400">Research validates that students who know they can defend themselves are statistically less likely to initiate violence.</p>
                      </div>
                   </li>
                </ul>
             </div>
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                   <i className="fa-solid fa-quote-left text-4xl text-brand-gold opacity-50"></i>
                   <p className="text-xl font-heading italic">"He didn't need more rules. He needed a channel for his energy."</p>
                </div>
                <div className="flex items-center gap-4">
                   <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover" alt="Officer" />
                   <div>
                      <p className="font-bold">Officer James R.</p>
                      <p className="text-xs text-slate-400">Juvenile Liaison Officer</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">For Judges, POs, and Social Workers</h2>
          <p className="text-slate-600 mb-8">
            We accept referrals directly from the Maricopa County Juvenile Court system. Contact our specialized intake officer to discuss placement.
          </p>
          <div className="flex justify-center gap-4">
             <button onClick={() => setPage(Page.CONTACT)} className="px-8 py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all">
                Contact Intake Officer
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondChance;