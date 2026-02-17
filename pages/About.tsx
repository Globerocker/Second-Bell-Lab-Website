import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-beige py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl font-heading font-bold text-brand-navy mb-8">The Gap Was Widening. <br/>So We Built a Bridge.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            We noticed a disturbing trend. Smart kids were graduating school without the basic life skills needed to navigate the real world. They could solve calculus problems but couldn't shake hands, manage a budget, or handle conflict.
          </p>
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
