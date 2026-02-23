import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Pricing: React.FC = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-slate-50 min-h-screen">
            <SEO
                title="Pricing & Membership"
                description="Transparent pricing for Second Bell Lab's elite after-school development programs."
            />

            {/* Hero Section */}
            <section className="bg-brand-navy text-white py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent"></div>
                <div className="relative z-10 px-4">
                    <span className="bg-brand-gold/10 backdrop-blur-md border border-brand-gold/30 text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2 rounded-full mb-8 inline-block animate-fade-in">Transparent Pricing</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
                        Where School Ends, <br /><span className="text-brand-gold italic">and Real Life Begins.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        Invest in your child's future with our comprehensive after-school development program.
                    </p>
                </div>
            </section>

            {/* Smart Savings Section (From Flyer) */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-brand-navy font-black tracking-[0.4em] uppercase text-xs mb-4 block">Smart Economics</span>
                            <h2 className="text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tighter leading-none">
                                Smart <br /><span className="text-brand-gold italic">Savings.</span>
                            </h2>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            Second Bell is a new category of after-school facility. We consolidate the essential "Success Stack" for your child, saving you thousands compared to individual vendor services.
                        </p>

                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                            <div className="space-y-4">
                                {[
                                    { label: 'Private Tutor', cost: '$300/mo' },
                                    { label: 'Kids Gym Membership', cost: '$150/mo' },
                                    { label: 'Reliable Supervision', cost: '$400/mo' },
                                    { label: 'Life Skills Program', cost: '$200/mo' },
                                    { label: 'Healthy Snacks', cost: '$100/mo' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0">
                                        <span className="text-slate-500 font-medium line-through">{item.label}</span>
                                        <span className="text-slate-400 font-bold line-through">{item.cost}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center py-6 bg-brand-gold/10 rounded-xl px-6 mt-4 border border-brand-gold/30">
                                    <span className="text-brand-navy font-black text-xl uppercase tracking-tight">SECOND BELL LAB</span>
                                    <span className="text-brand-gold font-black text-xl uppercase tracking-wider">Included</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group h-full hidden lg:block">
                        <img src="/images/builders.png" alt="Students collaborating" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2000ms]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10 flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center mb-6 shadow-2xl relative">
                                <span className="text-brand-navy font-black text-2xl leading-none">#1</span>
                                <span className="text-brand-navy text-[8px] font-bold uppercase tracking-widest text-center px-2">After-School Concept</span>
                                <div className="absolute -bottom-4 right-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <i className="fa-solid fa-bell text-brand-navy pb-0.5"></i>
                                </div>
                            </div>
                            <h3 className="text-white font-black text-4xl uppercase tracking-tighter mb-2">Second Bell Lab.</h3>
                            <p className="text-slate-300 font-medium">Where School Ends, and Real Life Begins.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers Section */}
            <section className="py-24 bg-brand-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.3),transparent_70%)]"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Membership & Access</span>
                        <h2 className="text-5xl font-black uppercase text-white tracking-tight leading-none">Find Your <span className="text-brand-gold italic">Fit.</span></h2>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* STARTER */}
                        <div className="bg-white p-8 rounded-[2rem] border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02] group">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-2 block">Starter</span>
                                    <h3 className="text-3xl font-black text-brand-navy uppercase tracking-tight">10 Visits</h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-brand-navy">$690</span>
                                        <span className="text-slate-400 font-bold text-xs uppercase">/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CORE */}
                        <div className="bg-white p-8 rounded-[2rem] border-4 border-brand-gold shadow-[0_20px_60px_rgba(251,191,36,0.2)] transition-all hover:scale-[1.02] relative group">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-brand-gold rounded-r-full"></div>
                            <div className="flex justify-between items-start pl-4">
                                <div>
                                    <span className="text-brand-navy font-black uppercase tracking-widest text-[10px] mb-2 block">Core</span>
                                    <h3 className="text-3xl font-black text-brand-navy uppercase tracking-tight">15 Visits</h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-brand-navy">$890</span>
                                        <span className="text-slate-400 font-bold text-xs uppercase">/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ELITE */}
                        <div className="bg-slate-900 p-8 rounded-[2rem] border-2 border-brand-gold shadow-[0_20px_80px_rgba(251,191,36,0.3)] transition-all hover:scale-[1.02] group ring-4 ring-brand-gold/10">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2 block">Elite</span>
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">Unlimited</h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-brand-gold">$1,190</span>
                                        <span className="text-slate-500 font-bold text-xs uppercase">/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DAY PASS */}
                        <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center px-10 group hover:bg-slate-800/70 transition-all mt-4">
                            <div>
                                <h4 className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-3">Day Pass <span className="text-[8px] text-slate-500 font-bold">(App Required)</span></h4>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-black text-white">$89</span>
                                <span className="text-slate-500 font-bold text-[10px] uppercase">/day</span>
                            </div>
                        </div>

                        {/* FAMILY DISCOUNTS */}
                        <div className="mt-8 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                            <h4 className="text-brand-gold font-black uppercase text-center tracking-[0.2em] text-sm mb-8">Family Discounts</h4>
                            <div className="space-y-4 max-w-sm mx-auto">
                                {[
                                    { label: 'Second Child', discount: '10% OFF' },
                                    { label: 'Third Child', discount: '15% OFF' },
                                    { label: 'Fourth Child', discount: '20% OFF' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                        <span className="text-white font-black uppercase tracking-tight text-xs">{item.label}</span>
                                        <span className="text-emerald-400 font-black text-sm">{item.discount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link to="/apply" className="inline-block px-16 py-6 bg-brand-gold text-brand-navy font-black uppercase tracking-[0.3em] text-lg rounded-2xl hover:bg-white hover:text-brand-navy transition-all shadow-[0_10px_40px_rgba(251,191,36,0.4)] active:scale-95">
                                Join The Lab
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-black uppercase text-brand-navy mb-12 text-center tracking-tight">Support & FAQ</h2>
                    <div className="space-y-4">
                        <details className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 group">
                            <summary className="font-bold text-brand-navy cursor-pointer list-none flex justify-between items-center uppercase tracking-tight">
                                <span>Do you offer a Day Pass?</span>
                                <i className="fa-solid fa-chevron-down text-[10px] text-brand-gold transition-transform group-open:rotate-180"></i>
                            </summary>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">Yes, we offer a single visit pass for $89 per day. This is perfect for parents visiting Phoenix or those who need a one-off development day for their child. Includes the full lab experience.</p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 group">
                            <summary className="font-bold text-brand-navy cursor-pointer list-none flex justify-between items-center uppercase tracking-tight">
                                <span>Is there a family legacy discount?</span>
                                <i className="fa-solid fa-chevron-down text-[10px] text-brand-gold transition-transform group-open:rotate-180"></i>
                            </summary>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">We believe in building family dynasties. Multi-child discounts apply automatically: 10% for the 2nd child, 15% for the 3rd, and 20% for the 4th+.</p>
                        </details>
                        <details className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 group">
                            <summary className="font-bold text-brand-navy cursor-pointer list-none flex justify-between items-center uppercase tracking-tight">
                                <span>Are meals included?</span>
                                <i className="fa-solid fa-chevron-down text-[10px] text-brand-gold transition-transform group-open:rotate-180"></i>
                            </summary>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">100%. We provide strictly whole-food, high-protein snacks. No industrial seed oils or high-fructose corn syrup are permitted in the lab environment.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
