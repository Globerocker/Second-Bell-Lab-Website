import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const SocialSkill: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">Pillar 03</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-up">Social Skill & Rhetoric</h1>
          <p className="text-xl text-slate-200 max-w-2xl animate-fade-up delay-200">
            In an age of digital isolation, we force analog connection. Eye contact, articulation, and conflict resolution.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-8">The Lost Art of Conversation</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Digital communication has eroded the ability of young people to read micro-expressions, handle awkward silences, and de-escalate face-to-face conflict.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We treat social skill as a muscle. It must be trained. From the moment they walk in, students are required to greet staff with a firm handshake and eye contact. We run daily "Rhetoric Circles" where students debate topics without using ad-hominem attacks.
          </p>
        </div>
      </section>

      {/* The Curriculum */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="h-12 w-12 bg-brand-navy text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">A</div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Conflict Resolution</h3>
              <p className="text-slate-600">Students mediate peer disputes using a structured framework. No running to the teacher unless safety is at risk.</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="h-12 w-12 bg-brand-navy text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">B</div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Public Speaking</h3>
              <p className="text-slate-600">Weekly 2-minute improvised speeches. Getting comfortable with being looked at.</p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="h-12 w-12 bg-brand-navy text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">C</div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Etiquette</h3>
              <p className="text-slate-600">Dining manners, how to introduce someone, and the importance of punctuality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Create Confident Leaders</h2>
          <Link to="/apply" className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-all inline-block">
            Join the Lab
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialSkill;