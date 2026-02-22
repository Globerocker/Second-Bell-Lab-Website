import React from 'react';
import SEO from '../components/SEO';

const Admissions: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Admissions & Tuition"
        description="Elite after-school development membership tiers and pricing. Join the Second Bell Lab cohort."
      />

      <div className="bg-brand-navy text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent"></div>
        <div className="relative z-10 px-4">
          <span className="bg-brand-gold/10 backdrop-blur-md border border-brand-gold/30 text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2 rounded-full mb-8 inline-block animate-fade-in">Founding Waitlist Incentives</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">Tuition & <br /><span className="text-brand-gold italic">Founding Membership</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the Founding Waitlist today to secure a <span className="text-brand-gold font-bold">Free Day Pass</span> and <span className="text-brand-gold font-bold">10% Off</span> lifetime membership when we launch.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Process Steps */}
        <div className="mb-32">
          <h2 className="text-3xl font-black uppercase text-brand-navy mb-12 text-center tracking-tight">The Selection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Application", desc: "Submit basic academic and behavioral records for review." },
              { step: "02", title: "Interview", desc: "Both parent and student attend a 30-min culture fit interview." },
              { step: "03", title: "Trial Day", desc: "One full afternoon with us to assess social dynamics and grit." },
              { step: "04", title: "Induction", desc: "Signing of the Code of Conduct and personalized goal setting." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-gold transition-colors group">
                <div className="text-5xl font-black text-brand-gold/20 mb-6 group-hover:text-brand-gold transition-colors leading-none">{s.step}</div>
                <h3 className="font-bold text-xl text-brand-navy mb-3 uppercase tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing CTA */}
        <div className="mb-32 text-center bg-white p-12 rounded-3xl shadow-sm border border-slate-200">
          <h2 className="text-3xl font-black uppercase text-brand-navy mb-4 tracking-tight">Transparent Pricing</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto font-medium">
            Explore our membership tiers, founding family incentives, and discover how Second Bell Lab can replace your current after-school expenses.
          </p>
          <a href="/pricing" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-navy text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">
            View Pricing Details <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black uppercase text-brand-navy mb-10 text-center tracking-tight">Support & FAQ</h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group">
              <summary className="font-bold text-brand-navy cursor-pointer list-none flex justify-between items-center uppercase tracking-tight">
                <span>Do you offer transport from schools?</span>
                <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-open:rotate-180"></i>
              </summary>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">Yes, our logistics team manages a fleet of branded shuttles picking up from select private and charter schools in the Phoenix/Arcadia area. Contact us to verify your school is on the route.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group">
              <summary className="font-bold text-brand-navy cursor-pointer list-none flex justify-between items-center uppercase tracking-tight">
                <span>What happens if my child breaks a rule?</span>
                <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-open:rotate-180"></i>
              </summary>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">We enforce a "Natural Consequences" model. Minor infractions result in loss of privileges. Major infractions (lying, bullying, toxicity) trigger a leadership review involving parents. We build character, we don't just punish.</p>
            </details>
            <details className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group">
              <summary className="font-bold text-brand-navy cursor-pointer list-none flex justify-between items-center uppercase tracking-tight">
                <span>Is food quality a priority?</span>
                <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-open:rotate-180"></i>
              </summary>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">100%. We provide strictly whole-food, high-protein snacks. No industrial seed oils or high-fructose corn syrup are permitted in the lab environment.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
