import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleViewer from '../components/ScheduleViewer';
import { Page } from '../types';

interface ParentsProps {
}

const Parents: React.FC<ParentsProps> = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Premium Hero */}
      <div className="relative bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="text-brand-gold font-black tracking-[0.3em] uppercase mb-6 animate-fade-in text-xs block bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">Excellence in After-School</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase mb-8 animate-fade-up leading-[0.85] tracking-tighter">
            More Than <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-orange-500">Childcare.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl animate-fade-up delay-200 leading-relaxed font-medium">
            Second Bell Lab™ is a membership-based premium development center. We turn the <span className="text-white font-bold">"dead time"</span> between school and dinner into your child's most productive hours.
          </p>
        </div>
      </div>

      {/* The 5 Pillars - Grid Design */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Methodology</span>
          <h2 className="text-5xl font-black uppercase text-brand-navy mt-2 tracking-tight">The 5 Core Pillars</h2>
          <p className="text-slate-500 mt-4 font-bold text-sm">Targeted development across the critical dimensions of growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Physical Discipline", icon: "fa-person-running", desc: "Movement, self-regulation, breathwork.", link: "/discipline", color: "bg-brand-gold" },
            { title: "Academic Competence", icon: "fa-book-open", desc: "Homework support, goal setting.", link: "/academic", color: "bg-brand-navy" },
            { title: "Social Skill", icon: "fa-users", desc: "Conflict resolution, rhetoric, teamwork.", link: "/social", color: "bg-brand-gold" },
            { title: "Financial Literacy", icon: "fa-coins", desc: "Budgeting, 'padded' economy, value.", link: "/financial", color: "bg-brand-navy" },
            { title: "Entrepreneurship", icon: "fa-rocket", desc: "Project work, ownership, bold execution.", link: "/entrepreneurship", color: "bg-brand-gold" },
          ].map((pillar, i) => (
            <Link
              key={i}
              to={pillar.link}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-4 group cursor-pointer block text-center overflow-hidden relative"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8 text-white ${pillar.color} shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                <i className={`fa-solid ${pillar.icon} text-2xl`}></i>
              </div>
              <h3 className="font-black text-brand-navy mb-4 text-lg uppercase group-hover:text-brand-gold transition-colors leading-none tracking-tight">{pillar.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Explore Pillar</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Culture Section - Split Layout */}
      <section className="bg-brand-navy text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase mb-8 text-white"><span className="text-brand-gold">Culture</span> Code</h2>
              <ul className="space-y-8">
                <li className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0 text-brand-gold font-black text-xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-brand-gold uppercase">No Lying</h4>
                    <p className="text-slate-400 font-medium">Three chances. Persisting in a proven lie is grounds for ejection. Integrity is paramount.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0 text-brand-gold font-black text-xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-brand-gold uppercase">Self-Reliance</h4>
                    <p className="text-slate-400 font-medium">"Solve Problems at the Lowest Level". We teach agency, not dependency.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0 text-brand-gold font-black text-xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-brand-gold uppercase">Elite Commitment</h4>
                    <p className="text-slate-400 font-medium">Membership requires buy-in from the family. We interview every student.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy text-3xl animate-bounce">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3 className="text-2xl font-black uppercase mb-6">A Typical Afternoon</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed font-medium">
                <p>Your child arrives at <span className="text-white font-bold">3:00 PM</span>. Instead of screens, they get a snack and go straight into academic focus while their brain is still in 'work mode'.</p>
                <p>By <span className="text-white font-bold">4:30 PM</span>, they shift to physical discipline to release energy.</p>
                <p>By <span className="text-white font-bold">6:00 PM</span>, they've done their homework, learned a life skill, and exercised.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-brand-gold font-bold text-lg text-center uppercase tracking-wide">
                  You get your evenings back as a family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase text-brand-navy">Weekly Schedule</h2>
            <p className="text-slate-600 mt-2 font-bold">Structured for success, balanced for well-being.</p>
          </div>
          <ScheduleViewer />
        </div>
      </section>

      {/* Heroic CTA Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy skew-x-12 translate-x-20 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-black uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Enrollment Open for Fall 2025
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-brand-navy mb-8 tracking-tight leading-none">
            Stop managing "dead time".<br />Start <span className="text-brand-gold">building their future</span>.
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Membership is strictly capped at 50 students per location to ensure elite mentorship and safety. Don't let your child get lost in the crowd.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link
              to="/apply"
              className="w-full sm:w-auto px-10 py-5 bg-brand-gold hover:bg-brand-navy hover:text-white text-brand-navy text-lg font-black uppercase tracking-wide rounded-lg shadow-xl shadow-brand-gold/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <i className="fa-solid fa-pen-nib group-hover:rotate-12 transition-transform"></i>
              Sign Up Now
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-brand-navy text-lg font-black uppercase tracking-wide rounded-lg border-2 border-slate-200 hover:border-brand-navy transition-all duration-300 flex items-center justify-center gap-3"
            >
              <i className="fa-solid fa-clipboard-question"></i>
              Learn More Features
            </Link>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-wide">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-check-circle text-green-500 text-lg"></i> No long-term contracts
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-check-circle text-green-500 text-lg"></i> 100% Satisfaction Guarantee
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-check-circle text-green-500 text-lg"></i> State Certified Educators
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parents;