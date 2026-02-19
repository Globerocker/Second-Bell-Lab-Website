import React from 'react';

const Imprint: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-32 selection:bg-brand-gold selection:text-brand-navy">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading font-black text-brand-navy mb-8 uppercase tracking-tighter">Imprint</h1>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">Company Information</h2>
                        <p className="font-bold">Second Bell Lab LLC</p>
                        <p>4400 E Camelback Rd</p>
                        <p>Phoenix, AZ 85018</p>
                        <p>United States</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">Contact</h2>
                        <p>Phone: +1 520 994 8344</p>
                        <p>Email: admissions@secondbelllab.com</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">Represented By</h2>
                        <p>Marcus Thorne, Director of Operations</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">Registry Information</h2>
                        <p>State of Formation: Arizona</p>
                        <p>Company Type: Limited Liability Company (LLC)</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">Disclaimer</h2>
                        <p>
                            The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Imprint;
