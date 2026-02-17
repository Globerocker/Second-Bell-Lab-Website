import React from 'react';
import SEO from '../components/SEO';

const Admissions: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Admissions & Tuition"
        description="Elite after-school development membership tiers and pricing. Join the Second Bell Lab cohort."
      />

      <div className="bg-brand-navy text-white py-24 text-center">
        <h1 className="text-5xl font-heading font-bold mb-4 uppercase tracking-tighter">Admissions & Tuition</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Membership is by application only. We are selective to ensure the culture remains elite and focused.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
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

        {/* Pricing */}
        <div className="mb-32">
          <h2 className="text-3xl font-black uppercase text-brand-navy mb-4 text-center tracking-tight">Membership Tiers</h2>
          <p className="text-center text-slate-500 mb-16 max-w-xl mx-auto">Premium investment in your child's future. All memberships billed monthly.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-transform">
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-black uppercase text-slate-400 mb-4 tracking-tight">Starter</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black text-brand-navy">$690</span>
                  <span className="text-slate-400 font-bold">/mo</span>
                </div>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded mb-8">10 Visits Included</div>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>3:00 PM - 6:00 PM Access</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Academic Homework Support</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Physical Discipline Sessions</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Nutritious Post-School Snack</span></li>
                </ul>
              </div>
              <div className="p-10 pt-0">
                <button className="w-full py-4 bg-brand-navy text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all">Apply for Starter</button>
              </div>
            </div>

            {/* Core */}
            <div className="bg-brand-navy rounded-3xl shadow-2xl border-[6px] border-brand-gold overflow-hidden flex flex-col h-full relative transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-widest">Most Selected</div>
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-black uppercase text-brand-gold mb-4 tracking-tight">Core Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-6xl font-black text-white">$890</span>
                  <span className="text-slate-400 font-bold">/mo</span>
                </div>
                <div className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded mb-8">15 Visits Included</div>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex gap-3 items-start font-bold text-white"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Everything in Starter</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Extended Visit Allowance</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Basic Financial Literacy</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Progress Reporting</span></li>
                </ul>
              </div>
              <div className="p-10 pt-0">
                <button className="w-full py-5 bg-brand-gold text-brand-navy font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all shadow-xl">Apply for Core</button>
              </div>
            </div>

            {/* Elite */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-transform">
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-black uppercase text-slate-400 mb-4 tracking-tight">Elite</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black text-brand-navy">$1,190</span>
                  <span className="text-slate-400 font-bold">/mo</span>
                </div>
                <div className="inline-block px-3 py-1 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest rounded mb-8">Unlimited Visits (Mon-Fri)</div>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex gap-3 items-start font-bold"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Everything in Core</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Unlimited Lab Training</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>Entrepreneurship Studio Access</span></li>
                  <li className="flex gap-3 items-start"><i className="fa-solid fa-circle-check text-brand-gold mt-1"></i> <span>1-on-1 Director Coaching</span></li>
                </ul>
              </div>
              <div className="p-10 pt-0">
                <button className="w-full py-4 bg-brand-navy text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all">Apply for Elite</button>
              </div>
            </div>
          </div>
        </div>

        {/* Day Pass & Family Discount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-brand-gold/10 rounded-3xl p-10 border-2 border-brand-gold/30">
            <h3 className="text-2xl font-black uppercase text-brand-navy mb-4 tracking-tight">Day Pass Access</h3>
            <p className="text-slate-600 mb-6 font-medium">Visiting Phoenix or need a one-off development day? Our single visit pass includes the full lab experience.</p>
            <div className="text-4xl font-black text-brand-navy mb-8">$89 <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Per Day</span></div>
            <button className="px-8 py-3 bg-brand-navy text-white font-black uppercase tracking-widest text-[10px] rounded-lg">Buy Day Pass</button>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-slate-200">
            <h3 className="text-2xl font-black uppercase text-brand-navy mb-4 tracking-tight">Family Legacy Discount</h3>
            <p className="text-slate-600 mb-8 font-medium">We believe in building family dynasties. Multi-child discounts apply automatically.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black text-brand-navy">10%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">2nd Child</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-brand-navy">15%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">3rd Child</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-brand-navy">20%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">4th Child+</div>
              </div>
            </div>
          </div>
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
