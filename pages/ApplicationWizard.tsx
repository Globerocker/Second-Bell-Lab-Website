import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hubspotService } from '../services/hubspotService';

const ApplicationWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Controlled State
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    studentFirstName: '',
    studentLastName: '',
    studentDob: '',
    studentGender: '',
    studentSchool: '',
    studentInterests: [] as string[],
    studentDeficits: '',
    academicStanding: '',
    hasSuspension: '',
    hasLawInteraction: '',
    pickupType: '' as 'pickup' | 'alone' | '',
    pickupTime: '',
    parentWorkUntil: '',
    nutritionType: 'Standard',
    allergies: '',
    specialWishes: '',
    location: 'Phoenix HQ (Arcadia)',
    parentStatement: '',
    agreedCommitment: false, // Must be checked now
    agreedAttendance: true,
    agreedNoPhone: true,
    agreedParentStrategy: true,
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const interests = prev.studentInterests.includes(interest)
        ? prev.studentInterests.filter(i => i !== interest)
        : [...prev.studentInterests, interest];
      return { ...prev, studentInterests: interests };
    });
  };

  // Auto-next utility for single-selection steps
  const autoNext = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(prev => prev + 1);
    }, 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const HUB_FORM_ID = '51085955'; // Using the portal ID provided earlier as a fallback or if this is the form ID

    try {
      await hubspotService.submitLead({
        email: formData.parentEmail,
        firstName: formData.parentFirstName,
        lastName: formData.parentLastName,
        phone: formData.parentPhone,
        studentName: `${formData.studentFirstName} ${formData.studentLastName}`,
        studentDob: formData.studentDob,
        studentGender: formData.studentGender,
        studentSchool: formData.studentSchool,
        studentInterests: formData.studentInterests,
        studentDeficits: formData.studentDeficits,
        gpaStatus: formData.academicStanding,
        hasSuspension: formData.hasSuspension,
        lawInteraction: formData.hasLawInteraction,
        pickupType: formData.pickupType as 'pickup' | 'alone',
        pickupTime: formData.pickupTime,
        parentWorkUntil: formData.parentWorkUntil,
        nutritionType: formData.nutritionType,
        allergies: formData.allergies,
        specialWishes: formData.specialWishes,
        preferredLocation: formData.location,
        parentStatement: formData.parentStatement
      }, HUB_FORM_ID);

      // Webhook fallback
      await fetch('https://n8n.secondbelllab.com/webhook/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
      });

      setIsSubmitted(true);
      setStep(6);
    } catch (err) {
      console.error('Submission Error:', err);
    }
  };

  const Progress = () => (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">Phase {step} of 5</span>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{Math.round(((step - 1) / 5) * 100)}% Complete</span>
      </div>
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-brand-navy h-full transition-all duration-700 ease-in-out"
          style={{ width: `${((step - 1) / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-20 px-4 pt-32 selection:bg-brand-gold selection:text-brand-navy">
      <div className="max-w-3xl mx-auto">
        {/* Minimal Header */}
        <div className="text-center mb-10 animate-fade-in">
          <Link to="/" className="inline-block mb-8">
            <img src="/favicon.svg" alt="Second Bell Lab" className="h-10 mx-auto" />
          </Link>
          <h1 className="text-4xl font-heading font-black text-brand-navy mb-2 tracking-tighter uppercase">Application Portal</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">High-Performance Student Cohort • Fall 2025</p>
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-14 border border-slate-100 relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

          {step < 6 && <Progress />}

          <form onSubmit={handleSubmit}>
            {/* Step 1: The Identity (Parent & Student) */}
            {step === 1 && (
              <div className="animate-fade-in space-y-12">
                <section className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Parent / Guardian</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" value={formData.parentFirstName} onChange={(e) => updateField('parentFirstName', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                    <input type="text" placeholder="Last Name" value={formData.parentLastName} onChange={(e) => updateField('parentLastName', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email" value={formData.parentEmail} onChange={(e) => updateField('parentEmail', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                    <input type="tel" placeholder="Phone" value={formData.parentPhone} onChange={(e) => updateField('parentPhone', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Student Details</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Student First Name" value={formData.studentFirstName} onChange={(e) => updateField('studentFirstName', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                    <input type="text" placeholder="Student Last Name" value={formData.studentLastName} onChange={(e) => updateField('studentLastName', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="studentDob" className="text-[10px] font-black uppercase text-slate-400 ml-2">Birth Date (Must be 8+ years old)</label>
                      <input id="studentDob" type="date" value={formData.studentDob} onChange={(e) => updateField('studentDob', e.target.value)} className={`w-full p-5 bg-white border rounded-2xl outline-none font-medium ${formData.studentDob && new Date().getFullYear() - new Date(formData.studentDob).getFullYear() < 8 ? 'border-red-500' : 'border-slate-200'}`} required />
                      {formData.studentDob && new Date().getFullYear() - new Date(formData.studentDob).getFullYear() < 8 && (
                        <p className="text-red-500 text-[10px] font-bold ml-2">Student must be at least 8 years old.</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="studentGender" className="text-[10px] font-black uppercase text-slate-400 ml-2">Gender</label>
                      <select id="studentGender" value={formData.studentGender} onChange={(e) => updateField('studentGender', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none font-medium appearance-none" required title="Student Gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                </section>

                <div className="flex justify-end pt-8">
                  <button type="button" onClick={() => setStep(2)} className="px-12 py-6 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 group">
                    Next Phase <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Performance & School (Click-Friendly) */}
            {step === 2 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Current School</div>
                  <input type="text" placeholder="Name of school..." value={formData.studentSchool} onChange={(e) => updateField('studentSchool', e.target.value)} className="w-full p-6 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Academic Status</label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { val: 'High Performer', label: "Top Tier (Mostly A's)" },
                      { val: 'Average', label: "Stable (B/C Range)" },
                      { val: 'Struggling', label: "At Risk (D/F Range)" }
                    ].map(opt => (
                      <button key={opt.val} type="button" onClick={() => { updateField('academicStanding', opt.val); autoNext(); }} className={`p-6 text-left border-2 rounded-2xl transition-all flex items-center justify-between ${formData.academicStanding === opt.val ? 'border-brand-navy bg-brand-navy text-white shadow-xl' : 'border-white bg-white hover:border-slate-200'}`}>
                        <span className="font-black uppercase tracking-tight text-sm">{opt.label}</span>
                        {formData.academicStanding === opt.val && <i className="fa-solid fa-circle-check"></i>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(1)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                </div>
              </div>
            )}

            {/* Step 3: Child Profile (Grouped) */}
            {step === 3 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Passions & Interests</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Sports', 'Tech', 'Arts', 'Coding', 'Leader', 'Science', 'Music', 'Media'].map((interest) => (
                      <div key={interest} onClick={() => toggleInterest(interest)} className={`p-4 border-2 rounded-2xl cursor-pointer transition-all text-center group ${formData.studentInterests.includes(interest) ? 'border-brand-gold bg-brand-gold/10' : 'border-white bg-white hover:border-slate-200'}`}>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${formData.studentInterests.includes(interest) ? 'text-brand-navy' : 'text-slate-400 group-hover:text-brand-navy'}`}>{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Behavioral Gaps / Struggles</div>
                  <textarea placeholder="Tell us where your child needs support (focus, social, etc)..." value={formData.studentDeficits} onChange={(e) => updateField('studentDeficits', e.target.value)} className="w-full p-6 bg-white border border-slate-200 rounded-3xl h-32 focus:ring-2 focus:ring-brand-gold outline-none transition-all placeholder:text-slate-300 font-medium"></textarea>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(2)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={() => setStep(4)} className="px-12 py-6 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 group">
                    Continue <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Logistics & Nutrition */}
            {step === 4 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Daily Routine</div>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => updateField('pickupType', 'pickup')} className={`p-6 border-2 rounded-2xl transition-all text-left ${formData.pickupType === 'pickup' ? 'border-brand-navy bg-brand-navy text-white shadow-lg' : 'border-white bg-white hover:border-slate-200'}`}>
                      <h4 className="font-black uppercase tracking-tight text-xs">Pickup</h4>
                      <p className="text-[10px] opacity-60">I will collect my child</p>
                    </button>
                    <button type="button" onClick={() => updateField('pickupType', 'alone')} className={`p-6 border-2 rounded-2xl transition-all text-left ${formData.pickupType === 'alone' ? 'border-brand-navy bg-brand-navy text-white shadow-lg' : 'border-white bg-white hover:border-slate-200'}`}>
                      <h4 className="font-black uppercase tracking-tight text-xs">Self-Transition</h4>
                      <p className="text-[10px] opacity-60">Goes home alone</p>
                    </button>
                  </div>
                  {formData.pickupType && (
                    <div className="animate-fade-in">
                      <label htmlFor="pickupTime" className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">{formData.pickupType === 'pickup' ? 'Pickup Time' : 'Parent Works Until'}</label>
                      <input id="pickupTime" type="time" value={formData.pickupType === 'pickup' ? formData.pickupTime : formData.parentWorkUntil} onChange={(e) => updateField(formData.pickupType === 'pickup' ? 'pickupTime' : 'parentWorkUntil', e.target.value)} className="w-full mt-2 p-5 bg-white border border-slate-200 rounded-2xl outline-none font-medium" required title={formData.pickupType === 'pickup' ? 'Pickup Time' : 'Parent Works Until'} />
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="nutritionType" className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">Nutrition Preference</label>
                    <select id="nutritionType" value={formData.nutritionType} onChange={(e) => updateField('nutritionType', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none font-medium appearance-none" title="Nutrition Type">
                      <option value="Standard">Standard</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Kosher">Kosher</option>
                      <option value="Halal">Halal</option>
                      <option value="Gluten-Free">Gluten-Free</option>
                      <option value="Keto">Keto</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">Allergies / Restrictions</label>
                    <input type="text" placeholder="e.g. Peanuts, Shellfish, Lactose..." value={formData.allergies} onChange={(e) => updateField('allergies', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none font-medium" />
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(3)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={() => { if (formData.pickupType) setStep(5); }} className="px-12 py-6 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 group" disabled={!formData.pickupType}>
                    Continue <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: The Commitment & Final Review */}
            {step === 5 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Why Second Bell Lab?</div>
                  <textarea placeholder="Tell us about your goals for your child..." value={formData.parentStatement} onChange={(e) => updateField('parentStatement', e.target.value)} className="w-full p-6 bg-white border border-slate-200 rounded-3xl h-40 focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required></textarea>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
                  <h4 className="text-[10px] font-black text-brand-navy uppercase tracking-widest mb-4">The Partnership Terms</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-bold">
                    1. Mandatory daily attendance (Mon-Fri).<br />
                    2. 100% "No Device" policy during Lab hours.<br />
                    3. Commitment to quarterly strategy sessions.
                  </p>
                  <label className="pt-4 flex items-center gap-3 text-brand-navy cursor-pointer group">
                    <div className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center transition-all ${formData.agreedCommitment ? 'bg-brand-navy border-brand-navy text-white' : 'bg-white border-slate-200 group-hover:border-brand-gold'}`}>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.agreedCommitment}
                        onChange={(e) => updateField('agreedCommitment', e.target.checked)}
                      />
                      {formData.agreedCommitment && <i className="fa-solid fa-check text-xs"></i>}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">I commit to these standards.</span>
                  </label>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(4)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                  <button
                    type="submit"
                    className={`px-12 py-6 font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all shadow-2xl active:scale-95 ${formData.agreedCommitment ? 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    disabled={!formData.agreedCommitment}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}

            {/* Success */}
            {step === 6 && (
              <div className="animate-fade-in text-center py-10 space-y-8">
                <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <i className="fa-solid fa-check text-4xl text-brand-navy"></i>
                </div>
                <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter">Application Received</h2>
                <p className="text-slate-500 font-bold leading-relaxed max-w-md mx-auto">Thank you, {formData.parentFirstName}. Our mentors will review your application for {formData.studentFirstName} and reach out within 48 hours.</p>
                <div className="pt-8">
                  <Link to="/" className="inline-flex items-center gap-3 text-brand-navy font-black uppercase tracking-[0.2em] text-[10px] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-all">
                    Return Home <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Trust Footnote */}
        <div className="mt-12 text-center text-[10px] space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            <span className="font-black uppercase tracking-widest">Encrypted Data</span>
            <span className="font-black uppercase tracking-widest">Privacy Protected</span>
            <span className="font-black uppercase tracking-widest">Member Support</span>
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest">© 2025 Second Bell Lab • High Performance Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationWizard;