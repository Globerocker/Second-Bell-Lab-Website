import React from 'react';
import { Page } from '../types';

interface LandingProps {
  setPage: (page: Page) => void;
}

const Landing: React.FC<LandingProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-navy overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
            alt="Students learning" 
            className="w-full h-full object-cover opacity-60 animate-fade-in"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                Enrollment Open for Fall 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tight">
                Bridging the Gap <br/>
                Between <span className="text-brand-gold italic">School</span> & <br/>
                the <span className="relative z-10 after:absolute after:bottom-2 after:left-0 after:w-full after:h-4 after:bg-brand-gold/20 after:-z-10">Real World.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
                A premium after-school development concept designed to close the widening gap between public schooling and real-world skill development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setPage(Page.PARENTS)}
                  className="px-8 py-4 bg-brand-gold text-brand-navy font-black uppercase tracking-wide rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] transform hover:-translate-y-1"
                >
                  Start Your Application
                </button>
                <button 
                  onClick={() => setPage(Page.INVESTORS)}
                  className="px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-black uppercase tracking-wide rounded-lg hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                >
                  Investment Deck
                </button>
              </div>
              <div className="pt-2">
                 <button onClick={() => setPage(Page.FLYER)} className="text-slate-400 text-sm hover:text-brand-gold flex items-center gap-2 transition-colors font-bold uppercase tracking-wide">
                    <i className="fa-solid fa-print"></i> View Printable Brochure
                 </button>
              </div>
            </div>
            
            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative hidden lg:block animate-fade-up delay-300">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" alt="Student studying" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy to-transparent p-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-white text-sm font-semibold">"Second Bell Lab transformed how my son approaches problems. He's not just doing homework; he's building a future."</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-xs">SP</div>
                      <span className="text-xs text-slate-300">Sarah P., Parent</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center animate-bounce duration-[3000ms] shadow-xl z-20">
                <div className="text-center">
                  <span className="block text-2xl font-black text-brand-navy uppercase leading-none">Top</span>
                  <span className="block text-xs font-bold text-brand-navy uppercase tracking-widest">Tier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Icons Section - Overlap */}
      <section className="relative z-30 -mt-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-brand-gold group cursor-default">
            <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors duration-300">
              <i className="fa-solid fa-graduation-cap text-3xl text-brand-navy group-hover:text-brand-gold transition-colors"></i>
            </div>
            <h3 className="text-xl font-black uppercase text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">Academic Support</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Led by state-certified educators. Homework completion and exam prep so family time remains family time.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-brand-navy group cursor-default">
            <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors duration-300">
              <i className="fa-solid fa-seedling text-3xl text-brand-navy group-hover:text-brand-gold transition-colors"></i>
            </div>
            <h3 className="text-xl font-black uppercase text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">Life Skills</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Financial literacy, entrepreneurship, and etiquette. Skills standard curricula often miss but life demands.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-brand-gold group cursor-default">
            <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors duration-300">
              <i className="fa-solid fa-dumbbell text-3xl text-brand-navy group-hover:text-brand-gold transition-colors"></i>
            </div>
            <h3 className="text-xl font-black uppercase text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">Physical Discipline</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Combatives basics, gymnastics, and breathwork. Reconnecting the mind and body after a day at a desk.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-beige/50 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Classroom environment" className="w-full h-auto object-cover" />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-play text-brand-navy text-2xl ml-1"></i>
                </button>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dots-pattern opacity-20"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-gold font-black uppercase tracking-widest text-sm mb-2 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-brand-navy mb-6 leading-none">
                The Daylight Niche is <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-orange-500">Saturated.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">
                Traditional systems end at 3 PM. We dominate the gap where the workday exceeds the school day. But we don't just "watch" your kids. We build them.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                As a premium institution, Second Bell Lab™ is dedicated to fostering positive change through outcome-based education. We redefine student success by integrating academic support with the practical skills needed to survive and thrive in the real economy.
              </p>
              <div className="flex items-center gap-4">
                <button onClick={() => setPage(Page.PARENTS)} className="text-brand-navy font-black uppercase tracking-wide border-b-2 border-brand-navy hover:text-brand-gold hover:border-brand-gold transition-all pb-1">
                  More About Us <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-brand-gold mb-2">15+</div>
              <p className="text-sm md:text-base text-slate-300 font-bold uppercase tracking-widest">Avg Class Size</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-brand-gold mb-2">100%</div>
              <p className="text-sm md:text-base text-slate-300 font-bold uppercase tracking-widest">Safety Record</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-brand-gold mb-2">5</div>
              <p className="text-sm md:text-base text-slate-300 font-bold uppercase tracking-widest">Core Pillars</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-black text-brand-gold mb-2">3-6<span className="text-2xl">PM</span></div>
              <p className="text-sm md:text-base text-slate-300 font-bold uppercase tracking-widest">Prime Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-navy font-black uppercase tracking-widest text-sm">Our Programs</span>
            <h2 className="text-4xl font-black uppercase text-brand-navy mt-2">Designed for Every Stage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Builders" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 bg-brand-gold text-brand-navy font-black uppercase tracking-wide px-4 py-2 rounded-lg shadow-lg">
                  Ages 11-14
                </div>
                <h3 className="text-2xl font-black uppercase text-brand-navy mb-4">The Builders</h3>
                <p className="text-slate-600 mb-6 font-medium">
                  Focused on foundational discipline, academic competence, and introduction to financial literacy. We build the habits that build the man or woman.
                </p>
                <button onClick={() => setPage(Page.PARENTS)} className="text-brand-navy font-black uppercase tracking-wide text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
                  View Schedule <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Creators" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 bg-brand-navy text-white font-black uppercase tracking-wide px-4 py-2 rounded-lg shadow-lg">
                  Ages 15-17
                </div>
                <h3 className="text-2xl font-black uppercase text-brand-navy mb-4">The Creators</h3>
                <p className="text-slate-600 mb-6 font-medium">
                  Advanced leadership, entrepreneurship projects, and portfolio creation. Students solve real-world problems and prepare for the marketplace.
                </p>
                <button onClick={() => setPage(Page.PARENTS)} className="text-brand-navy font-black uppercase tracking-wide text-sm hover:text-brand-gold transition-colors flex items-center gap-2">
                  View Schedule <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full">
            <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
         </div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-8 leading-none">Ready to see the difference?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Schedule a tour or chat with our AI admissions officer to see if your child is a good fit for Second Bell Lab™.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={() => setPage(Page.ASSISTANT)} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy font-black uppercase tracking-wide rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                 <i className="fa-solid fa-robot"></i>
                 AI Admissions Chat
              </button>
              <button onClick={() => setPage(Page.PARENTS)} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-black uppercase tracking-wide rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300">
                 Apply for Membership
              </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Landing;