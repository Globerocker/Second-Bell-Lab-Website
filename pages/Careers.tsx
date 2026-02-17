import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-heading font-bold text-brand-navy mb-6">We Don't Hire Babysitters. <br/>We Hire Mentors.</h1>
          <p className="text-xl text-slate-600">
            If you are passionate about shaping the next generation of leaders and have expertise in a specific field, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-brand-beige p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Why Work Here?</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-gold"></i> Premium compensation packages</li>
              <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-gold"></i> Small ratios (1:15 max)</li>
              <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-gold"></i> Autonomy in curriculum delivery</li>
              <li className="flex items-center gap-3"><i className="fa-solid fa-check text-brand-gold"></i> Impact-driven culture</li>
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-full min-h-[300px]">
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Team" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-brand-navy mb-8">Open Positions</h2>
        <div className="space-y-4">
          <div className="border border-slate-200 p-6 rounded-xl flex justify-between items-center hover:border-brand-gold transition-colors">
            <div>
              <h3 className="font-bold text-lg text-brand-navy">Academic Success Coach (Math Focus)</h3>
              <p className="text-sm text-slate-500">Phoenix, AZ • Part-Time (3pm-6pm)</p>
            </div>
            <button className="text-brand-gold font-bold">Apply <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="border border-slate-200 p-6 rounded-xl flex justify-between items-center hover:border-brand-gold transition-colors">
            <div>
              <h3 className="font-bold text-lg text-brand-navy">Physical Discipline Instructor</h3>
              <p className="text-sm text-slate-500">Phoenix, AZ • Part-Time</p>
            </div>
            <button className="text-brand-gold font-bold">Apply <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
