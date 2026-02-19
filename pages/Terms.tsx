import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-32 selection:bg-brand-gold selection:text-brand-navy">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading font-black text-brand-navy mb-8 uppercase tracking-tighter">Terms of Service</h1>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-8 text-slate-700 leading-relaxed">
                    <p className="text-sm text-slate-500 italic">Last Updated: February 19, 2026</p>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the Second Bell Lab website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">2. Use of Services</h2>
                        <p>
                            Our programs are designed for teenagers and their families. Enrollment in any program is subject to an application process and acceptance by Second Bell Lab LLC. You agree to provide accurate and complete information during the application process.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">3. Performance Standards</h2>
                        <p>
                            Second Bell Lab LLC maintains high standards for student conduct and participation. Failure to adhere to program rules, including our "No Device" policy and attendance requirements, may result in dismissal from the program without refund.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">4. Intellectual Property</h2>
                        <p>
                            All content and materials provided as part of our services, including curriculum, software, and training methods, are the intellectual property of Second Bell Lab LLC and may not be reproduced or distributed without explicit permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">5. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Second Bell Lab LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">6. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
