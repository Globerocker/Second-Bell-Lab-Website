import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import SEO from '../components/SEO';

interface LandingProps {
}

const Landing: React.FC<LandingProps> = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="Home"
        description="Elite after-school development for the next generation of leaders. Phoenix HQ Arcadia."
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-navy overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent z-10"></div>
          <img
            src="/images/hero-lab.png"
            alt="Students learning in a modern environment"
            className="w-full h-full object-cover opacity-50 animate-fade-in"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                Founding Waitlist Now Open • Phoenix HQ
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter">
                Master the <br />
                <span className="text-brand-gold italic">3-6 PM Danger Zone.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
                The school day ends at 3. The professional workday ends at 6. We turn that unsupervised gap into <span className="text-brand-gold font-bold">the most productive part of the day.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start sm:items-center">
                <Link
                  to="/apply"
                  className="px-10 py-5 bg-brand-gold text-brand-navy font-black uppercase tracking-[0.1em] rounded-xl hover:bg-white hover:text-brand-navy transition-all duration-500 shadow-[0_20px_40px_rgba(251,191,36,0.3)] transform hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center relative overflow-hidden group"
                  aria-label="Join the Waitlist"
                >
                  <span className="relative z-10">Join the Waitlist</span>
                  <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative hidden lg:block animate-fade-up delay-300">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img src="/images/builders.png" alt="Student studying" className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
                    <p className="text-white text-sm font-medium leading-relaxed italic">"Second Bell Lab transformed how my son approaches problems. He's not just doing homework; he's building a future."</p>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-black text-xs">SP</div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Sarah P.</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest">Phoenix Parent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-brand-gold rounded-full flex items-center justify-center animate-float shadow-2xl z-20 border-8 border-brand-navy">
                <div className="text-center rotate-12">
                  <span className="block text-3xl font-black text-brand-navy uppercase leading-none">Top</span>
                  <span className="block text-[10px] font-black text-brand-navy uppercase tracking-[0.3em]">Tier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Icons Section - Overlap */}
      <section className="relative z-30 -mt-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'fa-graduation-cap', title: 'Academic Support', desc: 'Led by state-certified educators. Homework completion and exam prep so family time remains family time.', border: 'border-brand-gold' },
            { icon: 'fa-seedling', title: 'Life Skills', desc: 'Financial literacy, entrepreneurship, and etiquette. Skills standard curricula often miss but life demands.', border: 'border-brand-navy' },
            { icon: 'fa-dumbbell', title: 'Physical Discipline', desc: 'Combatives basics, gymnastics, and breathwork. Reconnecting the mind and body after a day at a desk.', border: 'border-brand-gold' }
          ].map((feature, idx) => (
            <div key={idx} className={`bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_#00000020] transition-all duration-700 border border-white/40 group cursor-default transform hover:-translate-y-4`}>
              <div className="w-20 h-20 bg-slate-100/50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-gold transition-all duration-500 shadow-inner overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <i className={`fa-solid ${feature.icon} text-4xl text-brand-navy group-hover:text-brand-gold relative z-10 transition-colors`}></i>
              </div>
              <h3 className="text-3xl font-black uppercase text-brand-navy mb-5 group-hover:text-brand-gold transition-colors tracking-tight leading-none">{feature.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed font-medium">
                {feature.desc}
              </p>
              <div className={`h-1.5 w-12 mt-8 rounded-full transition-all duration-500 group-hover:w-full ${idx === 1 ? 'bg-brand-navy' : 'bg-brand-gold'}`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem Section - The Danger Zone */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-red-500 font-black tracking-[0.4em] uppercase text-xs">The Reality</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              The 3-hour <span className="text-red-500 italic">Void.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              For millions of teenagers, the hours between school and home are a developmental dead zone.
              The risks are no longer just physical; they are psychological and behavioral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Digital Atrophy', desc: 'Active minds replaced by passive algorithms. 3 hours of TikTok is enough to erode a weeks worth of focus.', icon: 'fa-mobile-screen-button' },
              { title: 'The Sleep Thief', desc: 'Evening panic sessions to finish homework lead to chronic exhaustion and mental fog.', icon: 'fa-moon' },
              { title: 'Social Friction', desc: 'Unsupervised environments often harbor peer pressure and the erosion of basic etiquette.', icon: 'fa-users-slash' },
              { title: 'The Motivation Gap', desc: 'When the path of least resistance wins every afternoon, the "growth mindset" disappears.', icon: 'fa-arrow-trend-down' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
                <i className={`fa-solid ${item.icon} text-3xl text-red-500/50 group-hover:text-red-500 mb-6 transition-colors`}></i>
                <h4 className="text-white font-black uppercase tracking-tight text-xl mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Savings Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-brand-navy font-black tracking-[0.4em] uppercase text-xs mb-4 block">Smart Economics</span>
                <h2 className="text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tighter leading-none">
                  A Fractional <br /><span className="text-brand-gold italic">Success Stack.</span>
                </h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                To replicate the Lab Experience on your own, you would need to manage five different vendors and spend thousands more per month. We consolidated the high-performance life into a single membership.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Private Tutor / Academic Center', cost: '$400/mo' },
                  { label: 'Kids Fitness / Gym Membership', cost: '$150/mo' },
                  { label: 'Reliable Supervision / Nanny', cost: '$1,200/mo' },
                  { label: 'Health-Focused Meals / Snacks', cost: '$300/mo' },
                  { label: 'Entrepreneurship / Life Coaching', cost: '$500/mo' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">{item.label}</span>
                    <span className="text-slate-400 font-bold line-through">{item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-6">
                  <span className="text-brand-navy font-black text-2xl uppercase tracking-tighter">Total Market Value</span>
                  <span className="text-brand-navy font-black text-2xl">$2,550+/mo</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy rounded-[3rem] p-12 text-white relative shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 space-y-8">
                <div className="inline-block px-4 py-2 bg-brand-gold text-brand-navy font-black text-[10px] uppercase tracking-widest rounded-full">The Lab Membership</div>
                <h3 className="text-5xl font-black uppercase tracking-tighter leading-none">Everything. <br /><span className="text-brand-gold italic">Included.</span></h3>
                <ul className="space-y-4">
                  {[
                    'Elite Academic Performance Support',
                    'Brazilian Jiu-Jitsu & Physical Discipline',
                    'Financial Literacy & Real-World Economics',
                    'Guided Entrepreneurship & Assets Lab',
                    'Organic, Health-Forward Nutrition'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-[10px]">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-6">Founding Members save an additional 10% on lifetime tuition during our waitlist phase.</p>
                  <Link
                    to="/apply"
                    className="w-full py-5 bg-brand-gold text-brand-navy font-black uppercase tracking-widest text-center block rounded-xl hover:bg-white transition-all group-hover:scale-[1.02] active:scale-95 shadow-2xl"
                  >
                    Lock In Founding Rate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-beige/30 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-8 border-white">
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/40 transition-colors z-10"></div>
                <img src="/images/location-phoenix.png" alt="Classroom environment" className="w-full h-auto object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center z-20 shadow-2xl group-hover:scale-110 transition-transform" aria-label="Play video">
                  <i className="fa-solid fa-play text-brand-navy text-3xl ml-1"></i>
                </button>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[radial-gradient(#fbbf24_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20"></div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Philosophy</span>
                <h2 className="text-5xl md:text-6xl font-black uppercase text-brand-navy mb-6 leading-[0.9] tracking-tighter">
                  The Daylight Niche is <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-orange-500">Saturated.</span>
                </h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Traditional systems end at 3 PM. We dominate the gap where the workday exceeds the school day. But we don't just "watch" your kids. We build them.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                As a premium institution, Second Bell Lab™ is dedicated to fostering positive change through outcome-based education. We redefine student success by integrating academic support with the practical skills needed to survive and thrive in the real economy.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="text-brand-navy font-black uppercase tracking-[0.2em] text-xs border-b-4 border-brand-navy hover:text-brand-gold hover:border-brand-gold transition-all pb-2 inline-flex items-center gap-3 active:translate-y-0.5"
                  aria-label="Learn more about our philosophy"
                >
                  Explore The Mission <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '15+', label: 'Avg Class Size' },
              { val: '100%', label: 'Safety Record' },
              { val: '5', label: 'Core Pillars' },
              { val: '3-6 PM', label: 'Prime Hours' }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 group">
                <div className="text-5xl md:text-6xl font-black text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-500 inline-block">{stat.val}</div>
                <p className="text-xs text-slate-400 font-black uppercase tracking-[0.3em] leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Education Models</span>
            <h2 className="text-5xl font-black uppercase text-brand-navy tracking-tight leading-none">Designed for <br />Every Stage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'The Builders', age: '11-14', color: 'bg-brand-gold text-brand-navy', img: '/images/builders.png', desc: 'Focused on foundational discipline, academic competence, and introduction to financial literacy. We build the habits that build the man or woman.' },
              { title: 'The Creators', age: '15-17', color: 'bg-brand-navy text-white', img: '/images/creators.png', desc: 'Advanced leadership, entrepreneurship projects, and portfolio creation. Students solve real-world problems and prepare for the marketplace.' }
            ].map((prog, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white flex flex-col h-full border border-slate-100">
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/10 transition-colors z-10"></div>
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                  <div className={`absolute top-6 left-6 ${prog.color} font-black uppercase tracking-widest text-[10px] px-6 py-3 rounded-full shadow-2xl z-20`}>
                    Ages {prog.age}
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-3xl font-black uppercase text-brand-navy mb-6 tracking-tight">{prog.title}</h3>
                    <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                  <Link to="/programs" className="text-brand-navy font-black uppercase tracking-[0.2em] text-xs hover:text-brand-gold transition-all flex items-center gap-3 active:translate-x-1" aria-label={`View schedule for ${prog.title}`}>
                    View Full Schedule <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-navy py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.3),transparent_70%)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-10 leading-[0.9] tracking-tighter">Ready to see <br />the difference?</h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Schedule a tour or chat with our AI admissions officer to see if your child is a good fit for Second Bell Lab™.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white hover:text-brand-navy hover:border-white transition-all duration-500 w-full sm:w-auto active:translate-y-0.5"
              aria-label="Apply for Membership"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;