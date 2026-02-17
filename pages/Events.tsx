import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Community</span>
          <h1 className="text-5xl font-heading font-bold text-brand-navy">Upcoming Events</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {/* Event 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row gap-8 items-center border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-24 h-24 bg-brand-navy rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0">
              <span className="text-3xl font-bold">15</span>
              <span className="text-sm uppercase tracking-wide">OCT</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Fall Open House</h3>
              <p className="text-slate-600 mb-2">Meet the mentors, tour the facility, and see our "Builders" in action. Refreshments provided.</p>
              <div className="flex gap-4 justify-center md:justify-start text-sm text-slate-500">
                <span><i className="fa-regular fa-clock mr-1"></i> 5:00 PM - 7:00 PM</span>
                <span><i className="fa-solid fa-location-dot mr-1"></i> Arcadia HQ</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-brand-navy hover:text-white transition-colors">RSVP</button>
          </div>

          {/* Event 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row gap-8 items-center border border-slate-100 hover:shadow-xl transition-shadow">
            <div className="w-24 h-24 bg-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-600 flex-shrink-0">
              <span className="text-3xl font-bold">02</span>
              <span className="text-sm uppercase tracking-wide">NOV</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Parent Workshop: Digital Hygiene</h3>
              <p className="text-slate-600 mb-2">Expert-led session on managing screen time and social media for teens. Open to the public.</p>
              <div className="flex gap-4 justify-center md:justify-start text-sm text-slate-500">
                <span><i className="fa-regular fa-clock mr-1"></i> 6:30 PM - 8:00 PM</span>
                <span><i className="fa-solid fa-location-dot mr-1"></i> Virtual & In-Person</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-white border-2 border-brand-navy text-brand-navy font-bold rounded-lg hover:bg-brand-navy hover:text-white transition-colors">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
