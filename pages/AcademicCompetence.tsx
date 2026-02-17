import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const AcademicCompetence: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">Pillar 02</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-up">Academic Competence</h1>
          <p className="text-xl text-slate-200 max-w-2xl animate-fade-up delay-200">
            Mastering "Deep Work". We prioritize focus, strategy, and completion over rote memorization.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-8">The End of Homework Battles</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            The #1 source of family friction is evening homework. We eliminate this. Our goal is 100% completion before your child leaves our facility.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            But we don't do the work for them. We teach them <strong>how to learn</strong>. Using Cal Newport's "Deep Work" philosophy, we train students to focus without distraction for 45-minute blocks—a superpower in the age of TikTok.
          </p>
        </div>
      </section>

      {/* Methods */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop" alt="Studying" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Triage System</h3>
                  <p className="text-slate-600">Upon arrival, students list tasks. We prioritize by deadline and difficulty (Eat the Frog first).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Certified Support</h3>
                  <p className="text-slate-600">Our floor is staffed by state-certified teachers, not just high school tutors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">No Phones Policy</h3>
                  <p className="text-slate-600">Phones are locked in the "Vault" during academic blocks. No exceptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Reclaim Your Evenings</h2>
          <Link to="/apply" className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-all inline-block">
            Join the Lab
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AcademicCompetence;