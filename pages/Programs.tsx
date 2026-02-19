import React from 'react';
import ScheduleViewer from '../components/ScheduleViewer';

const Programs: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-brand-navy text-white py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy to-brand-navy"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="bg-brand-gold/10 backdrop-blur-md border border-brand-gold/30 text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2 rounded-full mb-8 inline-block animate-fade-in">The Methodology</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase mb-8 animate-fade-up leading-[0.85] tracking-tighter">
            The Lab <br /><span className="text-brand-gold italic">Experience.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-100 font-medium">
            We don't do "supervision". We run a high-performance environment designed to turn passive consumers into <span className="text-white font-bold">active creators</span>.
          </p>
          <div className="mt-12 flex justify-center gap-4 animate-fade-up delay-200">
            <div className="px-8 py-4 bg-brand-gold text-brand-navy font-black uppercase tracking-widest text-xs rounded-xl shadow-2xl">
              Founding Member Perks Included
            </div>
          </div>
        </div>
      </div>

      {/* The Two Tracks */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl border border-white/40 relative overflow-hidden group hover:-translate-y-4 transition-all duration-700">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-navy/5 rounded-full blur-3xl group-hover:bg-brand-navy/10 transition-colors"></div>
            <div className="relative z-10">
              <span className="text-brand-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block opacity-60">Pillar Alpha • Ages 11-14</span>
              <h2 className="text-5xl font-black uppercase text-brand-navy mb-8 tracking-tighter leading-none">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-slate-600">Builders</span></h2>
              <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg">
                The Builders track focuses on establishing the foundational habits of success. We ensure the connections that remain are those of discipline, curiosity, and respect.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: "fa-hammer", label: "Academic Triage", desc: "Immediate homework completion strategies." },
                  { icon: "fa-heart-pulse", label: "Physical Foundations", desc: "Coordination, posture, and breath control." },
                  { icon: "fa-coins", label: "Micro-Economy", desc: "Earning 'Bell Bucks' for tasks to learn value." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <i className={`fa-solid ${item.icon} text-sm`}></i>
                    </div>
                    <div>
                      <span className="block font-black text-brand-navy uppercase tracking-tight text-sm mb-1">{item.label}</span>
                      <span className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-brand-navy p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group hover:-translate-y-4 transition-all duration-700">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-colors"></div>
            <div className="relative z-10 text-white">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4 block opacity-60">Pillar Omega • Ages 15-17</span>
              <h2 className="text-5xl font-black uppercase text-brand-gold mb-8 tracking-tighter leading-none">The <span className="italic">Creators</span></h2>
              <p className="text-slate-300 mb-10 leading-relaxed font-medium text-lg">
                The Creators track shifts from habit formation to execution. Students are treated as junior associates—leading peer groups and market simulations.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: "fa-lightbulb", label: "Portfolio Work", desc: "Creating real assets (code, media, business plans)." },
                  { icon: "fa-comments", label: "Advanced Rhetoric", desc: "Negotiation, public speaking, and persuasion." },
                  { icon: "fa-earth-americas", label: "Market Exposure", desc: "Direct mentorship from local industry leaders." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors border border-white/10">
                      <i className={`fa-solid ${item.icon} text-sm`}></i>
                    </div>
                    <div>
                      <span className="block font-black text-brand-gold uppercase tracking-tight text-sm mb-1">{item.label}</span>
                      <span className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Pillars */}
      <section className="bg-brand-beige py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-brand-navy">The 5 Core Pillars in Depth</h2>
          </div>
          <div className="space-y-12">
            {[
              {
                title: "1. Physical Discipline",
                text: "We are not a gym, but we believe the body feeds the mind. Our sessions include Brazilian Jiu-Jitsu basics for self-defense and humility, Yoga for regulation, and interval training for grit.",
                img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "2. Academic Competence",
                text: "We hire state-certified teachers, not just tutors. Our goal is 100% homework completion before pickup. We teach 'Deep Work' principles—how to focus without distraction for extended periods.",
                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "3. Social Skill & Rhetoric",
                text: "In an age of digital isolation, we force analog connection. Students learn to shake hands, look in the eye, de-escalate conflict, and persuade others through speech, not text.",
                img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "4. Financial Literacy",
                text: "Understanding debt, assets, and cash flow. We run a simulated internal economy where students pay 'rent' for their lockers and earn income through leadership roles.",
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop"
              },
              {
                title: "5. Entrepreneurship & Initiative",
                text: "Waiting for instructions is a recipe for mediocrity. We reward initiative. Students must identify problems in the facility or community and propose solutions.",
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((pillar, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white p-6 rounded-xl shadow-md`}>
                <div className="w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-black uppercase text-brand-navy mb-4">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Component */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase text-brand-navy text-center mb-8">Weekly Rhythm</h2>
        <ScheduleViewer />
      </section>
    </div>
  );
};

export default Programs;