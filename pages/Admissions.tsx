import React from 'react';

const Admissions: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <div className="bg-brand-navy text-white py-24 text-center">
        <h1 className="text-5xl font-heading font-bold mb-4">Admissions & Tuition</h1>
        <p className="text-xl text-slate-300">Membership is by application only. We are selective to ensure the culture remains elite.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">The Selection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Application", desc: "Submit basic academic and behavioral records." },
              { step: "02", title: "Interview", desc: "Both parent and student must attend a 30-min culture fit interview." },
              { step: "03", title: "Trial Day", desc: "The student spends one afternoon with us to assess social dynamics." },
              { step: "04", title: "Induction", desc: "Signing of the Code of Conduct and goal setting." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-4xl font-bold text-brand-gold/30 mb-4">{s.step}</div>
                <h3 className="font-bold text-lg text-brand-navy mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-500 mb-2">Core</h3>
                <div className="text-4xl font-bold text-brand-navy mb-4">$600<span className="text-sm font-normal text-slate-400">/mo</span></div>
                <p className="text-sm text-slate-500 mb-6">Essential after-school development.</p>
                <ul className="space-y-3 text-sm text-slate-700 mb-8">
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> 3:00 PM - 6:00 PM</li>
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Academic Support</li>
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Physical Discipline</li>
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Healthy Snack</li>
                </ul>
                <button className="w-full py-3 border-2 border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">Apply for Core</button>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-brand-navy rounded-2xl shadow-2xl border-4 border-brand-gold overflow-hidden transform md:-translate-y-4 relative">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-bl">MOST POPULAR</div>
              <div className="p-8 text-white">
                <h3 className="text-xl font-bold text-brand-gold mb-2">Elite</h3>
                <div className="text-4xl font-bold text-white mb-4">$750<span className="text-sm font-normal text-slate-400">/mo</span></div>
                <p className="text-sm text-slate-300 mb-6">Full access to all workshops.</p>
                <ul className="space-y-3 text-sm text-slate-200 mb-8">
                  <li><i className="fa-solid fa-check text-brand-gold mr-2"></i> <strong>Everything in Core</strong></li>
                  <li><i className="fa-solid fa-check text-brand-gold mr-2"></i> Late Pickup (until 7 PM)</li>
                  <li><i className="fa-solid fa-check text-brand-gold mr-2"></i> Entrepreneurship Workshops</li>
                  <li><i className="fa-solid fa-check text-brand-gold mr-2"></i> 1-on-1 Mentorship Session</li>
                </ul>
                <button className="w-full py-3 bg-brand-gold text-brand-navy font-bold rounded hover:bg-white transition-colors">Apply for Elite</button>
              </div>
            </div>

            {/* Founders */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-500 mb-2">Fellowship</h3>
                <div className="text-4xl font-bold text-brand-navy mb-4">$900<span className="text-sm font-normal text-slate-400">/mo</span></div>
                <p className="text-sm text-slate-500 mb-6">Maximum impact and personalization.</p>
                <ul className="space-y-3 text-sm text-slate-700 mb-8">
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> <strong>Everything in Elite</strong></li>
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Weekend Excursions</li>
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Personalized Fitness Plan</li>
                  <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Quarterly Review with Director</li>
                </ul>
                <button className="w-full py-3 border-2 border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">Apply for Fellowship</button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <summary className="font-bold text-brand-navy cursor-pointer">Do you offer transport from schools?</summary>
              <p className="mt-2 text-slate-600 text-sm">Yes, we have a fleet of branded shuttles picking up from select schools in the Phoenix area. Contact us to check if your school is on the route.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <summary className="font-bold text-brand-navy cursor-pointer">What happens if my child breaks a rule?</summary>
              <p className="mt-2 text-slate-600 text-sm">We believe in accountability. Minor infractions result in loss of privileges (Bell Bucks). Major infractions (lying, bullying) initiate a three-strike review process involving parents.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <summary className="font-bold text-brand-navy cursor-pointer">Is food provided?</summary>
              <p className="mt-2 text-slate-600 text-sm">Yes, we provide a nutritious, high-protein snack upon arrival. Dinner is available for the Elite and Fellowship tiers.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
