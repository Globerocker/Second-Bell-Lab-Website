import React from 'react';
import ScheduleViewer from '../components/ScheduleViewer';

const Programs: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-brand-navy text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="text-brand-gold font-black tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in">Curriculum & Methodology</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 animate-fade-up leading-none">Built for the <span className="text-brand-gold">Real World</span>.</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-100 font-medium">
            We don't do "babysitting". We run a structured development lab designed to equip your child with the tools traditional schooling ignores.
          </p>
        </div>
      </div>

      {/* The Two Tracks */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-brand-navy relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="fa-solid fa-hammer text-9xl text-brand-navy"></i>
            </div>
            <span className="text-brand-navy font-black uppercase tracking-widest text-sm mb-2 block">Ages 11-14</span>
            <h2 className="text-4xl font-black uppercase text-brand-navy mb-6">The Builders</h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              The Builders track focuses on establishing the foundational habits of success. At this age, the brain is pruning connections rapidly. We ensure the connections that remain are those of discipline, curiosity, and respect.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                <span className="text-slate-700"><strong>Academic Triage:</strong> Immediate homework completion strategies.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                <span className="text-slate-700"><strong>Physical Foundations:</strong> Coordination, posture, and breath control.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-gold mt-1"></i>
                <span className="text-slate-700"><strong>Micro-Economy:</strong> Earning "Bell Bucks" for tasks to learn value.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-brand-gold relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="fa-solid fa-lightbulb text-9xl text-brand-gold"></i>
            </div>
            <span className="text-brand-gold font-black uppercase tracking-widest text-sm mb-2 block">Ages 15-17</span>
            <h2 className="text-4xl font-black uppercase text-brand-navy mb-6">The Creators</h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              The Creators track shifts from habit formation to execution. Students are treated as junior associates. They manage projects, lead peer groups, and engage in real-world market simulations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-navy mt-1"></i>
                <span className="text-slate-700"><strong>Portfolio Work:</strong> Creating real assets (code, media, business plans).</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-navy mt-1"></i>
                <span className="text-slate-700"><strong>Advanced Rhetoric:</strong> Negotiation and public speaking.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-navy mt-1"></i>
                <span className="text-slate-700"><strong>Market Exposure:</strong> Guest lectures from local business leaders.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deep Dive Pillars */}
      <section className="bg-brand-beige py-24">
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
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black uppercase text-brand-navy text-center mb-8">Weekly Rhythm</h2>
        <ScheduleViewer />
      </section>
    </div>
  );
};

export default Programs;