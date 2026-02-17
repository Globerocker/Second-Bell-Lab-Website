import React from 'react';

const Locations: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-brand-navy text-white py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/location-phoenix-ext.png')] bg-cover bg-center opacity-30 scale-105 animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/40 to-slate-50"></div>
                <div className="relative z-10 px-4">
                    <span className="bg-white/5 backdrop-blur-md border border-white/10 text-brand-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8 inline-block px-6 py-2 rounded-full animate-fade-in shadow-2xl">Laboratory Network</span>
                    <h1 className="text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-none">Find Your <br /><span className="text-brand-gold italic">Lab.</span></h1>
                    <p className="text-brand-navy/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">Strategically positioned to serve the greater Phoenix metropolitan area.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] overflow-hidden border border-white/40 mb-20 transform hover:-translate-y-2 transition-all duration-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 lg:p-16 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                                <span className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Flagship • Arcadia PHX</span>
                            </div>
                            <h2 className="text-5xl font-black text-brand-navy mb-6 uppercase tracking-tighter leading-tight">Phoenix <span className="text-brand-gold">HQ</span></h2>
                            <p className="text-slate-600 mb-10 leading-relaxed text-lg font-medium">
                                Our flagship facility spans <strong className="text-brand-navy">12,000 square feet</strong> of purpose-built development space. Featuring a dedicated dojo, sound-dampened study pods, and a collaborative startup lounge.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Address</p>
                                    <p className="text-brand-navy font-bold leading-tight">4400 E Camelback Rd<br />Phoenix, AZ 85018</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Capacity</p>
                                    <p className="text-brand-navy font-bold">50 Students Max<br /><span className="text-green-600">38 Enrolled</span></p>
                                </div>
                            </div>

                            <button className="px-10 py-5 bg-brand-navy text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 w-fit">
                                Schedule a Tour
                            </button>
                        </div>
                        <div className="h-[500px] lg:h-auto w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.038472909893!2d-111.98675448479982!3d33.50766398075775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0c3f30960573%3A0x794b6d400e96435!2s4400%20E%20Camelback%20Rd%2C%20Phoenix%2C%20AZ%2085018!5e0!3m2!1sen!2sus!4v1629837192837!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="filter grayscale hover:grayscale-0 transition-all duration-700"
                                title="Second Bell Lab Phoenix HQ Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="bg-slate-50 p-8 border-t border-slate-200">
                        <h3 className="text-2xl font-bold text-brand-navy mb-6">Facility Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <img src="/images/location-phoenix-lounge.png" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 object-cover h-48 w-full" alt="Lounge" />
                            <img src="/images/location-phoenix-library.png" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 object-cover h-48 w-full" alt="Library" />
                            <img src="/images/location-phoenix-dojo.png" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 object-cover h-48 w-full" alt="Dojo" />
                            <img src="/images/location-phoenix-ext.png" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 object-cover h-48 w-full" alt="Exterior" />
                        </div>
                    </div>
                </div>

                {/* Expansion - Hidden for Focus */}
                <div className="text-center max-w-3xl mx-auto mt-12 p-12 bg-brand-navy/5 rounded-[2.5rem] border border-brand-navy/10">
                    <h3 className="text-2xl font-black text-brand-navy mb-4 uppercase tracking-tighter">Founding Phase</h3>
                    <p className="text-slate-600 mb-0 font-medium leading-relaxed">
                        We are currently in the validation and working phase for our Phoenix HQ. By joining the waitlist, you help us calibrate the final dojo and library capacity to best serve the community. Founding members receive priority enrollment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Locations;