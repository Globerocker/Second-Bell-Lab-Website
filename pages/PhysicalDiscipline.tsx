import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const PhysicalDiscipline: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">Pillar 01</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-up">Physical Discipline</h1>
          <p className="text-xl text-slate-200 max-w-2xl animate-fade-up delay-200">
            Reconnecting the mind and body. We teach self-regulation through movement, not just exercise.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-8">Not A Gym Class</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Modern schooling forces students to sit still for 7+ hours a day. This disconnects them from their physical selves and leads to anxiety and restlessness.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our physical discipline module is not about "burning energy" randomly. It is about <strong>controlled exertion</strong>. We use martial arts basics (Jiu-Jitsu), breathwork (Box Breathing), and coordination drills to teach students how to lower their heart rate under stress.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-navy">
              <i className="fa-solid fa-lungs text-4xl text-brand-gold mb-6"></i>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Breathwork</h3>
              <p className="text-slate-600">Techniques to manage anxiety and focus before exams or public speaking.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-navy">
              <i className="fa-solid fa-hand-fist text-4xl text-brand-gold mb-6"></i>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Self-Defense</h3>
              <p className="text-slate-600">Fundamental Jiu-Jitsu for positioning and confidence, not aggression.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-navy">
              <i className="fa-solid fa-heart-pulse text-4xl text-brand-gold mb-6"></i>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Regulation</h3>
              <p className="text-slate-600">Learning to recognize stress signals in the body and proactively calm down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Build a Strong Foundation</h2>
          <Link to="/apply" className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-all inline-block">
            Join the Lab
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PhysicalDiscipline;