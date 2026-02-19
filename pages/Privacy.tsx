import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-32 selection:bg-brand-gold selection:text-brand-navy">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading font-black text-brand-navy mb-8 uppercase tracking-tighter">Privacy Policy</h1>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-8 text-slate-700 leading-relaxed">
                    <p className="text-sm text-slate-500 italic">Last Updated: February 19, 2026</p>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">1. Introduction</h2>
                        <p>
                            Second Bell Lab LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">2. Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us, such as when you fill out an application form, sign up for our newsletter, or contact us. This may include:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Name and contact information (email, phone, address).</li>
                            <li>Student information for application purposes.</li>
                            <li>Payment information (processed securely through third-party providers).</li>
                            <li>Communication preferences.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">3. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Process and review program applications.</li>
                            <li>Provide and improve our educational services.</li>
                            <li>Communicate with you about our programs and updates.</li>
                            <li>Ensure the safety and security of our students and facilities.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">4. Data Security</h2>
                        <p>
                            We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider">5. Your Rights</h2>
                        <p>
                            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at admissions@secondbelllab.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
