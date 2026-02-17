import React from 'react';

const Flyer: React.FC = () => {
  return (
    <div className="bg-slate-500 min-h-screen p-8 print:p-0 print:bg-white flex flex-col items-center gap-8 font-sans">
      
      <style>{`
        @media print {
          @page { margin: 0; size: landscape; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-break-after { break-after: page; }
          /* Remove all shadows to eliminate "strange rectangles" */
          * { box-shadow: none !important; text-shadow: none !important; }
          /* Remove layout borders if they appear as artifacts */
          .no-print-border { border: none !important; }
        }
      `}</style>
      
      {/* Instructions - Hidden when printing */}
      <div className="print:hidden bg-white p-6 rounded-lg shadow-xl max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Printable Brochure (v10 Content Update)</h2>
        <p className="text-slate-600 mb-4">
          <strong>Updates:</strong> Renamed Pillars (Physical Training, Rhetoric & Social Norms), updated descriptions for Financial Literacy & Entrepreneurship, changed Summer Camp to June, and updated Concept text.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => window.print()}
            className="px-6 py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white border-2 border-brand-gold transition-colors flex items-center gap-2"
          >
            <i className="fa-solid fa-print"></i> Print / Save as PDF
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-4">Select "Landscape" and "Background Graphics" in print settings.</p>
      </div>

      {/* ====================================================================================
          PAGE 1: OUTSIDE 
          (Left: Crisis | Center: Concept/Camp/Value | Right: Front Cover)
      ==================================================================================== */}
      <div className="w-[297mm] h-[210mm] bg-white shadow-2xl print:shadow-none flex overflow-hidden relative print-break-after">
         
         {/* --- PANEL 1 (LEFT): FLAP - THE CRISIS --- */}
         <div className="w-1/3 h-full bg-brand-navy relative flex flex-col text-white border-r border-brand-navy/50 print:border-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="p-8 pt-12 relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded mb-4">
                        The Problem
                    </div>
                    <h2 className="text-4xl font-heading font-black leading-none mb-4">
                        THE <span className="text-brand-gold">3-6 PM</span><br/>DANGER ZONE.
                    </h2>
                    <div className="w-20 h-2 bg-brand-gold mb-4"></div>
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">
                        School ends at 3:00. You work until 6:00. In that gap, the average teenager is unsupervised, unengaged, and plugged in.
                    </p>
                </div>

                {/* 4 Problem Points - Red Borders Preserved */}
                <div className="flex flex-col justify-center flex-grow py-4 gap-5">
                    <div className="flex items-start gap-3 p-3 border-2 border-red-600/60 rounded-lg bg-red-900/10">
                        <div className="w-8 flex justify-center flex-shrink-0">
                           <i className="fa-solid fa-mobile-screen-button text-xl text-red-500 mt-1"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-brand-gold leading-tight">Screen Addiction</h4>
                            <p className="text-sm text-slate-200 leading-snug mt-0.5">15+ hours/week lost to passive scrolling and algorithms.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border-2 border-red-600/60 rounded-lg bg-red-900/10">
                        <div className="w-8 flex justify-center flex-shrink-0">
                           <i className="fa-solid fa-brain text-xl text-red-500 mt-1"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-brand-gold leading-tight">Social Atrophy</h4>
                            <p className="text-sm text-slate-200 leading-snug mt-0.5">Loss of face-to-face communication skills due to isolation.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border-2 border-red-600/60 rounded-lg bg-red-900/10">
                        <div className="w-8 flex justify-center flex-shrink-0">
                           <i className="fa-solid fa-bed text-xl text-red-500 mt-1"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-brand-gold leading-tight">The Sleep Thief</h4>
                            <p className="text-sm text-slate-200 leading-snug mt-0.5">Late-night homework panic kills sleep quality.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border-2 border-red-600/60 rounded-lg bg-red-900/10">
                        <div className="w-8 flex justify-center flex-shrink-0">
                           <i className="fa-solid fa-triangle-exclamation text-xl text-red-500 mt-1"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-base text-brand-gold leading-tight">Anxiety Loop</h4>
                            <p className="text-sm text-slate-200 leading-snug mt-0.5">Lack of structure breeds restlessness and anxiety.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-2 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest text-white/50 font-bold">We Built The Solution.</p>
                </div>
            </div>
         </div>

         {/* --- PANEL 2 (CENTER): BACK - CONCEPT & VALUE --- */}
         <div className="w-1/3 h-full bg-slate-50 border-r border-slate-200 print:border-none flex flex-col relative">
            
            {/* Top: The Concept */}
            <div className="p-8 pb-0 flex-shrink-0">
                 <h3 className="text-brand-navy font-black text-3xl uppercase tracking-tight mb-2">The Concept</h3>
                 <div className="w-12 h-1.5 bg-brand-gold mb-4"></div> {/* Gold Dash */}
                 <p className="text-sm text-slate-700 leading-relaxed text-justify mb-5 font-medium">
                    Second Bell is a new category of after-school facility. Similar in concept to a high-end co-working space for adults, we are a hybrid between a <strong>University Library</strong>, a <strong>Private Gym</strong>, and a <strong>Startup Incubator</strong>.
                 </p>
                 
                {/* Amenities List */}
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-start">
                        <div className="w-6 mt-0.5"><i className="fa-solid fa-mountain text-brand-navy text-lg"></i></div>
                        <div>
                            <span className="text-brand-navy font-bold text-sm block">Bouldering Wall & Dojo</span>
                            <span className="text-xs text-slate-500 leading-tight">Physical problem solving and controlled exertion.</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <div className="w-6 mt-0.5"><i className="fa-solid fa-utensils text-brand-navy text-lg"></i></div>
                        <div>
                            <span className="text-brand-navy font-bold text-sm block">Nutrition Station</span>
                            <span className="text-xs text-slate-500 leading-tight">Whole foods only. No vending machines.</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <div className="w-6 mt-0.5"><i className="fa-solid fa-couch text-brand-navy text-lg"></i></div>
                        <div>
                            <span className="text-brand-navy font-bold text-sm block">Members Lounge</span>
                            <span className="text-xs text-slate-500 leading-tight">Tech-free zone for social decompression.</span>
                        </div>
                    </div>
                     <div className="flex gap-3 items-start">
                        <div className="w-6 mt-0.5"><i className="fa-solid fa-wifi text-brand-navy text-lg"></i></div>
                        <div>
                            <span className="text-brand-navy font-bold text-sm block">Deep Work Wi-Fi</span>
                            <span className="text-xs text-slate-500 leading-tight">High-speed internet with social media training to train production and not only consumption.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle: Summer Camp - No Border in Print */}
            <div className="px-8 mt-4 flex-shrink-0">
                <div className="h-40 relative group overflow-hidden rounded-xl shadow-md">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Mountains" />
                    <div className="absolute inset-0 bg-brand-navy/85 flex flex-col items-center justify-center text-center p-4">
                        <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">June 2026</span>
                        <h3 className="text-white text-xl font-black uppercase leading-none mb-3">Summer Expedition</h3>
                        
                        {/* Bullets */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left w-full max-w-[200px]">
                            <div className="flex items-center gap-2 text-white text-xs font-bold">
                                <i className="fa-solid fa-fire text-brand-gold text-[10px]"></i> Survival
                            </div>
                            <div className="flex items-center gap-2 text-white text-xs font-bold">
                                <i className="fa-solid fa-map text-brand-gold text-[10px]"></i> Navigation
                            </div>
                            <div className="flex items-center gap-2 text-white text-xs font-bold">
                                <i className="fa-solid fa-kit-medical text-brand-gold text-[10px]"></i> First Aid
                            </div>
                            <div className="flex items-center gap-2 text-white text-xs font-bold">
                                <i className="fa-solid fa-users text-brand-gold text-[10px]"></i> Leadership
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom: The Value Equation - Cleaned up */}
            <div className="px-8 pb-4 flex-grow flex flex-col justify-end">
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
                    <h4 className="font-black text-brand-navy text-base uppercase mb-2 flex items-center gap-2">
                        <i className="fa-solid fa-piggy-bank text-green-600"></i> Smart Savings
                    </h4>
                    
                    <div className="space-y-1 text-xs font-medium">
                        <div className="flex justify-between text-slate-400 line-through">
                            <span>Private Tutor</span>
                            <span>$300/mo</span>
                        </div>
                        <div className="flex justify-between text-slate-400 line-through">
                            <span>Kids Gym Membership</span>
                            <span>$150/mo</span>
                        </div>
                        <div className="flex justify-between text-slate-400 line-through">
                            <span>Healthy Snacks</span>
                            <span>$100/mo</span>
                        </div>
                        <div className="w-full h-px bg-slate-300 my-2"></div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-brand-navy text-sm">Second Bell Lab</span>
                            <span className="font-black text-brand-gold text-base">Included</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="bg-white p-4 text-center border-t border-slate-200">
                 <div className="flex justify-center items-center gap-2 mb-1">
                     <i className="fa-solid fa-shield-halved text-brand-navy"></i>
                     <span className="text-brand-navy font-bold text-xs uppercase">Veteran Owned & Operated</span>
                 </div>
                 <p className="text-xs text-slate-500 font-bold">www.secondbelllab.com</p>
            </div>
         </div>

         {/* --- PANEL 3 (RIGHT): FRONT COVER --- */}
         <div className="w-1/3 h-full relative flex flex-col bg-brand-navy">
            {/* Image Section */}
            <div className="h-[65%] relative">
                <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Group of teens" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90"></div>
                
                {/* Fall 2026 Intake Badge */}
                <div className="absolute top-8 right-8">
                    <div className="bg-brand-gold text-brand-navy font-black text-sm px-5 py-2 rounded shadow-xl uppercase tracking-wider transform rotate-3">
                        Fall 2026 Intake
                    </div>
                </div>

                {/* #1 Concept Badge */}
                <div className="absolute bottom-8 left-8">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-brand-gold flex flex-col items-center justify-center shadow-2xl transform -rotate-6">
                        <span className="text-brand-navy font-black text-2xl leading-none">#1</span>
                        <span className="text-[8px] font-bold text-brand-navy uppercase text-center leading-tight px-2">After-School<br/>Concept</span>
                    </div>
                </div>
            </div>
            
            {/* Title Section */}
            <div className="h-[35%] bg-brand-navy p-10 flex flex-col justify-center relative">
                 <div className="absolute -top-12 left-8">
                     <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center border-4 border-brand-navy shadow-xl">
                         <i className="fa-solid fa-bell text-5xl text-brand-navy"></i>
                     </div>
                 </div>
                 
                 <h1 className="text-5xl font-heading font-black text-white leading-[0.85] mb-6 mt-6">
                    SECOND<br/>BELL<br/><span className="text-brand-gold">LAB.</span>
                 </h1>
                 
                 <div className="border-l-4 border-brand-gold pl-4">
                     <p className="text-white font-bold text-xl leading-tight">
                        Where School Ends,
                     </p>
                     <p className="text-slate-400 font-bold text-xl leading-tight">
                        and Real Life Skills Begin.
                     </p>
                 </div>
            </div>
         </div>
      </div>

      {/* ====================================================================================
          PAGE 2: INSIDE 
          (Left: Pillars | Center: Rhythm | Right: Packages/QR)
      ==================================================================================== */}
      <div className="w-[297mm] h-[210mm] bg-white shadow-2xl print:shadow-none flex overflow-hidden relative print-break-after">
         
         {/* --- PANEL 1 (LEFT): PILLARS (The Blueprint) --- */}
         <div className="w-1/3 h-full bg-slate-50 border-r border-slate-200 print:border-none flex flex-col">
            
            {/* Centered Header */}
            <div className="bg-brand-navy p-10 text-center flex flex-col justify-center h-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <h2 className="text-4xl font-heading font-black text-white uppercase leading-none relative z-10">
                    The <span className="text-brand-gold">Blueprint</span>
                </h2>
            </div>

            <div className="p-8 pt-8 flex-grow flex flex-col justify-around">
                {/* 5 Pillars */}
                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold text-lg mt-1">1</div>
                    <div>
                        <h4 className="font-bold text-brand-navy text-lg uppercase">Physical Training</h4>
                        <p className="text-sm text-slate-700 leading-snug mt-1">Mat-work, Bouldering, & Breathwork. Learning self-regulation and resilience.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold text-lg mt-1">2</div>
                    <div>
                        <h4 className="font-bold text-brand-navy text-lg uppercase">Academic Competence</h4>
                        <p className="text-sm text-slate-700 leading-snug mt-1">100% Homework completion goal & Goal-setting. Certified teachers on floor. No procrastination.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold text-lg mt-1">3</div>
                    <div>
                        <h4 className="font-bold text-brand-navy text-lg uppercase">Financial Literacy</h4>
                        <p className="text-sm text-slate-700 leading-snug mt-1">Students pay "rent" & earn "Bell Bucks" in an "iterative, padded economy", learning value.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold text-lg mt-1">4</div>
                    <div>
                        <h4 className="font-bold text-brand-navy text-lg uppercase">Rhetoric and Social Norms</h4>
                        <p className="text-sm text-slate-700 leading-snug mt-1">Eye contact, firm handshakes, etiquette, "gentlemanliness" posture, gait, and oration.</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold text-lg mt-1">5</div>
                    <div>
                        <h4 className="font-bold text-brand-navy text-lg uppercase">Entrepreneurship</h4>
                        <p className="text-sm text-slate-700 leading-snug mt-1">Students undertake micro-projects to learn competence and are even brought into the fold to proffer solutions to lab problems.</p>
                    </div>
                </div>
            </div>
         </div>

         {/* --- PANEL 2 (CENTER): SCHEDULE (The Rhythm) --- */}
         <div className="w-1/3 h-full bg-white border-r border-slate-200 print:border-none flex flex-col p-8">
            <h2 className="text-4xl font-heading font-black text-brand-navy mb-2 uppercase">The Rhythm</h2>
            <p className="text-sm text-slate-500 mb-8 font-medium italic">"A structured afternoon creates a free evening."</p>

            <div className="flex-grow relative pl-8 flex flex-col justify-between pb-4">
                {/* Timeline Line */}
                <div className="absolute left-[11px] top-2 bottom-4 w-1 bg-slate-200"></div>

                <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-8 h-8 rounded-full bg-brand-gold border-4 border-white shadow-sm z-10"></div>
                    <div>
                        <span className="text-brand-gold font-black text-xl">3:00 PM</span>
                        <h4 className="font-bold text-brand-navy text-xl uppercase">Arrival & Fuel</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-snug">Phones vaulted. High-protein snack. Decompression.</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-8 h-8 rounded-full bg-brand-navy border-4 border-white shadow-sm z-10"></div>
                    <div>
                        <span className="text-brand-navy font-black text-xl">3:30 PM</span>
                        <h4 className="font-bold text-brand-navy text-xl uppercase">Deep Work</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-snug">Academic block. Tutors assist. Goal: Finish school obligations.</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-8 h-8 rounded-full bg-brand-navy border-4 border-white shadow-sm z-10"></div>
                    <div>
                        <span className="text-brand-navy font-black text-xl">4:45 PM</span>
                        <h4 className="font-bold text-brand-navy text-xl uppercase">Physical</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-snug">Boxing drills, climbing wall, or strength circuits.</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-8 h-8 rounded-full bg-brand-navy border-4 border-white shadow-sm z-10"></div>
                    <div>
                        <span className="text-brand-navy font-black text-xl">5:45 PM</span>
                        <h4 className="font-bold text-brand-navy text-xl uppercase">Wrap Up</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-snug">Shop cleanup. Locker check.</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow-sm z-10"></div>
                    <div>
                        <span className="text-green-600 font-black text-xl">6:00 - 6:30 PM</span>
                        <h4 className="font-bold text-brand-navy text-xl uppercase">Dismissal</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-snug">Parent collection. Reconnect. Evening is free.</p>
                    </div>
                </div>
            </div>
         </div>

         {/* --- PANEL 3 (RIGHT): MEMBERSHIP & QR --- */}
         <div className="w-1/3 h-full bg-brand-navy flex flex-col relative">
            
            {/* Top: Packages */}
            <div className="p-8 pb-4 flex-grow bg-slate-100/5 backdrop-blur-sm flex flex-col justify-center">
                <h2 className="text-4xl font-heading font-black text-white mb-8 uppercase">Membership</h2>
                
                <div className="space-y-6">
                    <div className="bg-white p-5 rounded-lg flex justify-between items-center shadow-lg transform hover:scale-105 transition-transform">
                        <div>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Starter</span>
                            <div className="text-brand-navy font-black text-2xl">10 Visits</div>
                        </div>
                        <div className="text-right">
                            <div className="text-brand-gold font-bold text-xl">$450<span className="text-xs text-slate-400">/mo</span></div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg flex justify-between items-center shadow-lg border-l-8 border-brand-gold transform hover:scale-105 transition-transform">
                        <div>
                            <span className="text-sm font-bold text-brand-navy uppercase tracking-wider">Growth</span>
                            <div className="text-brand-navy font-black text-2xl">20 Visits</div>
                        </div>
                        <div className="text-right">
                            <div className="text-brand-gold font-bold text-xl">$750<span className="text-xs text-slate-400">/mo</span></div>
                        </div>
                    </div>

                    <div className="bg-brand-gold p-5 rounded-lg flex justify-between items-center shadow-lg transform hover:scale-105 transition-transform">
                        <div>
                            <span className="text-sm font-bold text-brand-navy uppercase tracking-wider">Elite</span>
                            <div className="text-brand-navy font-black text-2xl">Unlimited</div>
                        </div>
                        <div className="text-right">
                            <div className="text-brand-navy font-bold text-xl">$900<span className="text-xs text-brand-navy/60">/mo</span></div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/20 pt-4">
                    <p className="text-xs text-slate-300 text-center leading-tight">
                        *Semester commitment required. Prices subject to change. Waitlist priority for Fall 2026.
                    </p>
                </div>
            </div>

            {/* Bottom: QR Code (Maximized) */}
            <div className="bg-white p-6 flex flex-col items-center justify-center text-center h-[42%]">
                <h3 className="text-brand-navy font-black text-2xl uppercase mb-1">Join the Lab</h3>
                <p className="text-slate-500 text-sm mb-4 font-bold">Scan to apply for Fall 2026.</p>
                
                <div className="w-36 h-36 bg-brand-navy p-2 rounded-xl shadow-2xl relative mb-2">
                    <div className="w-full h-full border-2 border-white flex items-center justify-center bg-white rounded-lg">
                        <i className="fa-solid fa-qrcode text-8xl text-brand-navy"></i>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-brand-gold"></div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-brand-gold"></div>
                    <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-brand-gold"></div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-brand-gold"></div>
                </div>
                
                <p className="text-brand-navy font-black text-lg mt-2 tracking-wide">www.secondbelllab.com</p>
            </div>

         </div>

      </div>

    </div>
  );
};

export default Flyer;