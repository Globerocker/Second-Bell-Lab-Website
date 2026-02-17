import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
         <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-black text-brand-navy mb-4 uppercase">Start the Conversation</h1>
            <p className="text-slate-600">Whether you are a parent, investor, or government partner, we are ready to listen.</p>
         </div>

         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row mb-16">
            {/* Info Panel */}
            <div className="bg-brand-navy p-10 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <h2 className="text-2xl font-black mb-8 font-heading uppercase">Contact Info</h2>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <p className="font-bold text-xs uppercase tracking-wider text-slate-400">Phone</p>
                                <p className="text-lg font-semibold">(602) 555-0199</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group cursor-pointer">
                             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <p className="font-bold text-xs uppercase tracking-wider text-slate-400">Email</p>
                                <p className="text-lg font-semibold">admissions@secondbell.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group cursor-pointer">
                             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <p className="font-bold text-xs uppercase tracking-wider text-slate-400">HQ</p>
                                <p className="text-lg font-semibold">4400 E Camelback Rd,<br/>Phoenix, AZ 85018</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12">
                     <p className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Quick Connect</p>
                     <button className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg">
                        <i className="fa-brands fa-whatsapp text-xl"></i> Chat on WhatsApp
                     </button>
                </div>
            </div>

            {/* Form */}
            <div className="p-10 md:w-3/5 bg-white">
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-2">First Name</label>
                    <input type="text" className="w-full border-b-2 border-slate-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors" placeholder="Jane" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full border-b-2 border-slate-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors" placeholder="Doe" />
                </div>
                </div>
                <div>
                <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Email</label>
                <input type="email" className="w-full border-b-2 border-slate-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Department</label>
                <select className="w-full border-b-2 border-slate-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent transition-colors cursor-pointer">
                    <option>General Admissions</option>
                    <option>Investor Relations</option>
                    <option>Government / Court Partners</option>
                    <option>Press / Media</option>
                </select>
                </div>
                <div>
                <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Message</label>
                <textarea className="w-full border-b-2 border-slate-200 py-2 focus:outline-none focus:border-brand-gold bg-transparent h-32 resize-none transition-colors" placeholder="How can we help?"></textarea>
                </div>
                <button className="px-8 py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all w-full shadow-lg transform hover:-translate-y-1">Send Message</button>
            </form>
            </div>
         </div>

         {/* Email Footer Generator */}
         <div className="max-w-3xl mx-auto">
             <div className="text-center mb-8">
                 <h2 className="text-2xl font-black text-brand-navy uppercase">Official E-Mail Signature</h2>
                 <p className="text-slate-500">Copy this footer for your official Second Bell Lab correspondence.</p>
             </div>
             
             <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 relative group">
                 {/* Copy Button Overlay */}
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded hover:bg-brand-gold transition-colors">
                         <i className="fa-regular fa-copy mr-1"></i> Copy
                     </button>
                 </div>

                 <div className="flex flex-col md:flex-row gap-6 items-center md:items-start font-sans">
                     {/* Logo Section */}
                     <div className="flex-shrink-0">
                         <img src="/images/bell-icon.svg" className="w-20 h-20 shadow-md rounded-xl" alt="Second Bell Lab Logo" />
                     </div>
                     
                     {/* Text Section */}
                     <div className="border-l-0 md:border-l-2 border-slate-200 md:pl-6 text-center md:text-left">
                         <h3 className="text-2xl font-black text-brand-navy uppercase leading-none mb-1">Marcus Thorne</h3>
                         <p className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-4">Director of Operations</p>
                         
                         <div className="text-slate-600 text-sm space-y-1">
                             <p className="flex items-center justify-center md:justify-start gap-2">
                                 <i className="fa-solid fa-building text-slate-400"></i> 
                                 <span className="font-bold text-brand-navy">Second Bell Lab Inc.</span>
                             </p>
                             <p className="flex items-center justify-center md:justify-start gap-2">
                                 <i className="fa-solid fa-phone text-slate-400"></i> +1 (602) 555-0199
                             </p>
                             <p className="flex items-center justify-center md:justify-start gap-2">
                                 <i className="fa-solid fa-globe text-slate-400"></i> www.secondbell.com
                             </p>
                         </div>
                         
                         <div className="mt-4 pt-3 border-t border-slate-100">
                             <p className="text-[10px] text-slate-400 italic">
                                 "Closing the gap between school and the real world."
                             </p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Contact;