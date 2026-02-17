import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hubspotService } from '../services/hubspotService';

const ApplicationWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isWaitlisted, setIsWaitlisted] = useState(false);

  // Controlled State
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    studentFirstName: '',
    studentLastName: '',
    studentDob: '',
    studentSchool: '',
    academicStanding: '',
    hasSuspension: '',
    hasLawInteraction: '',
    location: 'Phoenix HQ (Arcadia)',
    parentStatement: '',
    agreedAttendance: false,
    agreedNoPhone: false,
    agreedParentStrategy: false,
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. CRM Submission (HubSpot)
    // Placeholder Form ID - USER needs to create a form in HubSpot and put ID here
    const HUB_FORM_ID = 'YOUR_FORM_ID_HERE';

    await hubspotService.submitLead({
      email: formData.parentEmail,
      firstName: formData.parentFirstName,
      lastName: formData.parentLastName,
      phone: formData.parentPhone,
      studentName: `${formData.studentFirstName} ${formData.studentLastName}`,
      studentDob: formData.studentDob,
      studentSchool: formData.studentSchool,
      gpaStatus: formData.academicStanding,
      hasSuspension: formData.hasSuspension,
      lawInteraction: formData.hasLawInteraction,
      preferredLocation: formData.location,
      parentStatement: formData.parentStatement
    }, HUB_FORM_ID);

    // 2. Legacy Webhook (n8n)
    try {
      await fetch('https://n8n.secondbelllab.com/webhook/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      // Track conversion in Google Ads / Analytics
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID/LABEL',
          'value': 50.0,
          'currency': 'USD'
        });
      }
    } catch (err) {
      console.error('Submission Error:', err);
    }

    setIsWaitlisted(true);
    nextStep();
  };

  const Progress = () => (
    <div className="w-full bg-slate-200 h-1 mb-8 rounded-full overflow-hidden">
      <div
        className="bg-brand-gold h-full transition-all duration-500 ease-out"
        style={{ width: `${(step / 8) * 100}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">Membership Application</h1>
          <p className="text-slate-500">Fall 2025 Cohort • Priority Access</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
          {step < 9 && <Progress />}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Parent Info */}
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 1 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">Parent/Guardian</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentFirstName" className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name</label>
                    <input
                      id="parentFirstName"
                      type="text"
                      value={formData.parentFirstName}
                      onChange={(e) => updateField('parentFirstName', e.target.value)}
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="parentLastName" className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name</label>
                    <input
                      id="parentLastName"
                      type="text"
                      value={formData.parentLastName}
                      onChange={(e) => updateField('parentLastName', e.target.value)}
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="parentEmail" className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                  <input
                    id="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={(e) => updateField('parentEmail', e.target.value)}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="parentPhone" className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                  <input
                    id="parentPhone"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) => updateField('parentPhone', e.target.value)}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                    required
                  />
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={nextStep} className="px-10 py-4 bg-brand-navy text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">Next Step</button>
                </div>
              </div>
            )}

            {/* Step 2: Student Info */}
            {step === 2 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 2 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">The Student</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="studentFirstName" className="block text-xs font-bold text-slate-500 uppercase mb-2">Student First Name</label>
                    <input
                      id="studentFirstName"
                      type="text"
                      value={formData.studentFirstName}
                      onChange={(e) => updateField('studentFirstName', e.target.value)}
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="studentLastName" className="block text-xs font-bold text-slate-500 uppercase mb-2">Student Last Name</label>
                    <input
                      id="studentLastName"
                      type="text"
                      value={formData.studentLastName}
                      onChange={(e) => updateField('studentLastName', e.target.value)}
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="studentDob" className="block text-xs font-bold text-slate-500 uppercase mb-2">Date of Birth</label>
                  <input
                    id="studentDob"
                    type="date"
                    value={formData.studentDob}
                    onChange={(e) => updateField('studentDob', e.target.value)}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="studentSchool" className="block text-xs font-bold text-slate-500 uppercase mb-2">Current School</label>
                  <input
                    id="studentSchool"
                    type="text"
                    value={formData.studentSchool}
                    onChange={(e) => updateField('studentSchool', e.target.value)}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all"
                    required
                  />
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={nextStep} className="px-10 py-4 bg-brand-navy text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">Next Step</button>
                </div>
              </div>
            )}

            {/* Step 3: Academic Standing */}
            {step === 3 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 3 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">Academic Standing</h2>
                </div>
                <p className="text-slate-600 mb-6 text-sm">We don't require straight A's, but we require a commitment to improvement. Where do they stand currently?</p>
                <div className="space-y-4">
                  {[
                    { val: 'High Performer', label: "High Performer (Mostly A's)" },
                    { val: 'Average', label: "Average (B's and C's)" },
                    { val: 'Struggling', label: "Struggling (D's or below)" }
                  ].map((option) => (
                    <div
                      key={option.val}
                      onClick={() => updateField('academicStanding', option.val)}
                      className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${formData.academicStanding === option.val ? 'border-brand-gold bg-brand-gold/5' : 'border-slate-100 hover:border-slate-200'}`}
                    >
                      <label className="flex items-center gap-4 cursor-pointer">
                        <input type="radio" checked={formData.academicStanding === option.val} readOnly className="w-5 h-5 accent-brand-gold" />
                        <span className="font-bold text-brand-navy">{option.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={nextStep} className="px-10 py-4 bg-brand-navy text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">Next Step</button>
                </div>
              </div>
            )}

            {/* Step 4: Behavioral History */}
            {step === 4 && (
              <div className="animate-fade-in space-y-8">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 4 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">Behavioral History</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-4">Has the student ever been suspended or expelled?</label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map(val => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => updateField('hasSuspension', val)}
                          className={`px-8 py-3 rounded-xl font-bold transition-all border-2 ${formData.hasSuspension === val ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'}`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-2">Has the student had any interaction with law enforcement?</label>
                    <p className="text-xs text-slate-500 mb-4">If yes, we may recommend our Reintegration track.</p>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map(val => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => updateField('hasLawInteraction', val)}
                          className={`px-8 py-3 rounded-xl font-bold transition-all border-2 ${formData.hasLawInteraction === val ? 'bg-brand-navy text-white border-brand-navy' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200'}`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={nextStep} className="px-10 py-4 bg-brand-navy text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">Next Step</button>
                </div>
              </div>
            )}

            {/* Step 5: Family Commitment */}
            {step === 5 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 5 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">Commitment</h2>
                </div>
                <div className="bg-brand-gold/5 p-6 rounded-2xl border-l-4 border-brand-gold mb-8">
                  <p className="text-sm text-brand-navy font-medium italic">"We cannot build what you tear down at home."</p>
                </div>
                <div className="space-y-4">
                  {[
                    { id: 'agreedAttendance', label: 'I understand that attendance is mandatory (Mon-Fri) barring illness.' },
                    { id: 'agreedNoPhone', label: 'I agree to support the "No Phone" policy during lab hours.' },
                    { id: 'agreedParentStrategy', label: 'I am willing to attend a quarterly parent-director strategy session.' }
                  ].map((item) => (
                    <label key={item.id} className="flex items-start gap-4 p-5 hover:bg-slate-50 rounded-2xl cursor-pointer transition-all border border-transparent hover:border-slate-100">
                      <input
                        type="checkbox"
                        checked={(formData as any)[item.id]}
                        onChange={(e) => updateField(item.id, e.target.checked)}
                        className="mt-1 w-6 h-6 rounded-lg accent-brand-navy cursor-pointer"
                        required
                      />
                      <span className="text-sm text-slate-600 font-medium leading-relaxed">{item.label}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={nextStep} className="px-10 py-4 bg-brand-navy text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">Next Step</button>
                </div>
              </div>
            )}

            {/* Step 6: Location */}
            {step === 6 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 6 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">Location</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div
                    onClick={() => updateField('location', 'Phoenix HQ (Arcadia)')}
                    className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${formData.location === 'Phoenix HQ (Arcadia)' ? 'border-brand-navy bg-brand-navy/5' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="font-bold text-brand-navy text-lg">Phoenix HQ (Arcadia)</span>
                      <input type="radio" checked={formData.location === 'Phoenix HQ (Arcadia)'} readOnly className="w-6 h-6 accent-brand-navy" />
                    </label>
                    <p className="text-xs text-slate-500 mt-2">Open Now • Limited Founding Member Spots</p>
                  </div>
                  <div className="p-6 border border-slate-100 rounded-2xl opacity-40 cursor-not-allowed bg-slate-50">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-400 text-lg">Scottsdale North</span>
                      <span className="text-[10px] font-black bg-slate-200 px-3 py-1 rounded-full uppercase tracking-widest">Waitlist Only</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Opening Fall 2025</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={nextStep} className="px-10 py-4 bg-brand-navy text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">Next Step</button>
                </div>
              </div>
            )}

            {/* Step 7: Motivation */}
            {step === 7 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 7 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">Statement</h2>
                </div>
                <div className="space-y-4">
                  <label htmlFor="parentStatement" className="block text-sm font-bold text-brand-navy mb-2">Why do you want your child at Second Bell Lab?</label>
                  <textarea
                    id="parentStatement"
                    value={formData.parentStatement}
                    onChange={(e) => updateField('parentStatement', e.target.value)}
                    className="w-full p-5 border border-slate-200 rounded-2xl h-48 focus:ring-2 focus:ring-brand-gold outline-none resize-none transition-all placeholder:text-slate-300"
                    placeholder="We are looking for families who want growth, not just childcare..."
                    required
                  ></textarea>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={nextStep} className="px-10 py-4 bg-brand-navy text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-95">Review</button>
                </div>
              </div>
            )}

            {/* Step 8: Review & Submit */}
            {step === 8 && (
              <div className="animate-fade-in space-y-8">
                <div>
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-widest block mb-2">Step 8 of 8</span>
                  <h2 className="text-3xl font-black text-brand-navy mb-6">Final Review</h2>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Parent</span>
                      <p className="text-brand-navy font-bold">{formData.parentFirstName} {formData.parentLastName}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Student</span>
                      <p className="text-brand-navy font-bold">{formData.studentFirstName} {formData.studentLastName}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Email</span>
                    <p className="text-brand-navy font-bold">{formData.parentEmail}</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest leading-relaxed">By clicking Submit, you agree to the non-refundable application fee of $50 <br /> (waived for founding waitlist applications).</p>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors">Back</button>
                  <button type="submit" className="px-12 py-5 bg-brand-gold text-brand-navy font-black uppercase tracking-widest rounded-xl hover:bg-brand-navy hover:text-white transition-all shadow-2xl active:scale-95">Submit Application</button>
                </div>
              </div>
            )}

            {/* Success / Waitlist */}
            {step === 9 && (
              <div className="animate-fade-in text-center py-10 space-y-6">
                <div className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-brand-gold animate-bounce">
                  <i className="fa-solid fa-check text-4xl text-brand-gold"></i>
                </div>
                <h2 className="text-4xl font-black text-brand-navy mb-4 tracking-tighter">APPLICATION RECEIVED</h2>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto font-medium leading-relaxed">
                  Thank you. Due to high demand for the Arcadia HQ, we have placed your application on our <strong>Priority Founding Waitlist</strong>.
                </p>
                <div className="bg-brand-navy text-white p-8 rounded-[2.5rem] max-w-lg mx-auto mb-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"></div>
                  <p className="text-sm leading-relaxed relative z-10 font-medium">
                    <span className="text-brand-gold font-bold block mb-2 uppercase tracking-widest text-xs">What happens next?</span>
                    Our waitlist helps us expedite the rollout. The more interest we have in a specific zip code, the faster we build. You will be notified via email when a spot opens.
                  </p>
                </div>
                <Link to="/" className="inline-flex items-center gap-2 text-brand-navy font-black uppercase tracking-widest text-xs border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">Return to Dashboard <i className="fa-solid fa-arrow-right text-[10px]"></i></Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationWizard;