import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-navy py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="bg-white/5 backdrop-blur-md border border-white/10 text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8 inline-block px-6 py-2 rounded-full animate-fade-in">Our Genesis</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]">The Gap Was Widening. <br /><span className="text-brand-gold italic">So We Built a Bridge.</span></h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto mb-10">
            Smart kids were graduating without the tools to navigate the real world. We built the lab to change that.
          </p>
          <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-slate-400 text-sm italic max-w-xl">
            "We are currently in the active working and validation phase. Every member of our Founding Waitlist helps shape the future of the Arcadia HQ."
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1577896334614-201b31d50dc5?q=80&w=2070&auto=format&fit=crop" alt="Founder" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Founded by Educators & Entrepreneurs</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Second Bell Lab™ was born from frustration. As parents and educators, we saw the hours between 3 PM and 6 PM being wasted on screens and passive entertainment.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We asked a simple question: <strong>"What if the after-school hours were the most productive part of the day?"</strong>
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Today, we operate premier facilities that function as a hybrid between a library, a gymnasium, and a startup incubator. We are raising the next generation of leaders.
            </p>
            <div className="p-6 bg-brand-navy text-white rounded-xl italic">
              "We don't prepare the path for the child. We prepare the child for the path."
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Elena Rostova", role: "Head of Curriculum", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" },
              { name: "Marcus Thorne", role: "Director of Operations", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" },
              { name: "Sarah Jenkins", role: "Community Relations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
            ].map((person, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-brand-gold transition-all duration-300">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{person.name}</h3>
                <p className="text-brand-gold font-medium uppercase text-xs tracking-wider">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
