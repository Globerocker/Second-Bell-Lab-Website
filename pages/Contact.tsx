import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
         <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-brand-navy mb-4">Start the Conversation</h1>
            <p className="text-slate-600">Whether you are a parent, investor, or government partner, we are ready to listen.</p>
         </div>

         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Info Panel */}
            <div className="bg-brand-navy p-10 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-8 font-heading">Contact Info</h2>
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
      </div>
    </div>
  );
};

export default Contact;