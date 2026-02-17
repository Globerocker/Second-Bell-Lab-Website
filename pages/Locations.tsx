import React from 'react';

const Locations: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-brand-navy text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/location-phoenix-ext.png')] bg-cover bg-center opacity-40"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">Our Locations</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">Strategically positioned to serve the greater Phoenix metropolitan area.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 lg:p-14 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-green-600 font-bold uppercase tracking-wider text-xs">Flagship Location • Open Now</span>
                            </div>
                            <h2 className="text-4xl font-heading font-bold text-brand-navy mb-4">Phoenix HQ (Arcadia)</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                Our flagship facility spans <strong className="text-brand-navy">12,000 square feet</strong> of purpose-built development space. Located in the heart of Arcadia, it features a dedicated dojo, a "Deep Work" library with sound-dampened study pods, a collaborative startup lounge, and a tech-free recharge garden.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4 text-slate-700">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-gold"><i className="fa-solid fa-location-dot"></i></div>
                                    <div>
                                        <p className="font-bold text-brand-navy">Address</p>
                                        <p>4400 E Camelback Rd, Phoenix, AZ 85018</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-700">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-gold"><i className="fa-solid fa-ruler-combined"></i></div>
                                    <div>
                                        <p className="font-bold text-brand-navy">Capacity</p>
                                        <p>50 Students Max (Currently: 38 Enrolled)</p>
                                    </div>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg w-fit">
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

                {/* Expansion */}
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Expansion Roadmap</h3>
                    <p className="text-slate-600 mb-8">We are actively securing leases for North Scottsdale (Fall 2025) and Gilbert (Spring 2026).</p>
                    <div className="flex justify-center gap-4">
                        <div className="px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-400 font-bold cursor-not-allowed">Scottsdale (Waitlist Full)</div>
                        <div className="px-6 py-3 bg-white border-2 border-brand-navy rounded-lg text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-colors cursor-pointer">Gilbert (Join List)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;