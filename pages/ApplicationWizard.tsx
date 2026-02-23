import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hubspotService } from '../services/hubspotService';

const ApplicationWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Controlled State
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    zipCode: '',
    student: {
      firstName: '',
      lastName: '',
      gender: '',
      dobDay: '',
      dobMonth: '',
      dobYear: '',
      school: '',
      interests: [] as string[],
      deficits: '',
      academicStanding: '',
      hasSuspension: '',
      nutritionType: 'Standard',
      allergies: '',
    },
    pickupType: '' as 'Pickup' | 'Self-Transition' | '',
    pickupTime: '',
    parentWorkUntil: '',
    specialWishes: '',
    parentStatement: '',
    agreedCommitment: false,
  });

  const [isPartialCaptured, setIsPartialCaptured] = useState(false);

  // Time options for curated select
  const timeOptions = [
    '3:00 PM', '3:15 PM', '3:30 PM', '3:45 PM',
    '4:00 PM', '4:15 PM', '4:30 PM', '4:45 PM',
    '5:00 PM', '5:15 PM', '5:30 PM', '5:45 PM',
    '6:00 PM', '6:15 PM', '6:30 PM'
  ];

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateStudentField = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      student: { ...prev.student, [field]: value }
    }));
  };

  const getFormattedDob = (student: any) => {
    if (student.dobDay && student.dobMonth && student.dobYear) {
      const year = parseInt(student.dobYear.length === 2 ? `20${student.dobYear}` : student.dobYear);
      const month = parseInt(student.dobMonth) - 1;
      const day = parseInt(student.dobDay);
      // HubSpot expects a UTC midnight timestamp for Date properties
      const date = new Date(Date.UTC(year, month, day));
      return date.getTime().toString();
    }
    return '';
  };

  const handlePartialCapture = async (nextStep: number) => {
    if (formData.parentEmail && formData.parentFirstName && !isPartialCaptured) {
      try {
        const HUB_FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;
        const student = formData.student;

        await hubspotService.submitLead({
          email: formData.parentEmail,
          studentName: `${student.firstName} ${student.lastName}`,
          firstName: student.firstName,
          lastName: student.lastName,
          studentDob: getFormattedDob(student),
          studentGender: student.gender,
          studentSchool: student.school,
          studentInterests: student.interests,
          studentDeficits: student.deficits,
          gpaStatus: student.academicStanding,
          hasSuspension: student.hasSuspension,
          pickupType: formData.pickupType as any || 'Pickup',
          pickupTime: formData.pickupTime,
          parentWorkUntil: formData.parentWorkUntil,
          nutritionType: student.nutritionType,
          allergies: student.allergies,
          specialWishes: formData.specialWishes,
          parentStatement: formData.parentStatement,
          parentFirstName: formData.parentFirstName,
          parentLastName: formData.parentLastName,
          parentPhone: formData.parentPhone,
          zipCode: formData.zipCode,
          company: `${formData.parentLastName} Household`,
          lastStepCompleted: (nextStep - 1).toString()
        }, HUB_FORM_ID, 'Partial');

        setIsPartialCaptured(true);
      } catch (err) {
        console.error('Partial Capture Error:', err);
      }
    }
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetForNextStudent = () => {
    setFormData(prev => ({
      ...prev,
      student: {
        firstName: '',
        lastName: '',
        gender: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        school: '',
        interests: [] as string[],
        deficits: '',
        academicStanding: '',
        hasSuspension: '',
        nutritionType: 'Standard',
        allergies: '',
      },
      agreedCommitment: false,
    }));
    setIsPartialCaptured(false);
    setStep(1);
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleStudentInterest = (interest: string) => {
    setFormData(prev => {
      const interests = prev.student.interests.includes(interest)
        ? prev.student.interests.filter(i => i !== interest)
        : [...prev.student.interests, interest];
      return { ...prev, student: { ...prev.student, interests } };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const HUB_FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;
    const student = formData.student;

    try {
      // Submit student to HubSpot
      await hubspotService.submitLead({
        email: formData.parentEmail,
        studentName: `${student.firstName} ${student.lastName}`,
        firstName: student.firstName,
        lastName: student.lastName,
        studentDob: getFormattedDob(student),
        studentGender: student.gender,
        studentSchool: student.school,
        studentInterests: student.interests,
        studentDeficits: student.deficits,
        gpaStatus: student.academicStanding,
        hasSuspension: student.hasSuspension,
        pickupType: formData.pickupType as any,
        pickupTime: formData.pickupTime,
        parentWorkUntil: formData.parentWorkUntil,
        nutritionType: student.nutritionType,
        allergies: student.allergies,
        specialWishes: formData.specialWishes,
        parentStatement: formData.parentStatement,
        parentFirstName: formData.parentFirstName,
        parentLastName: formData.parentLastName,
        parentPhone: formData.parentPhone,
        zipCode: formData.zipCode,
        company: `${formData.parentLastName} Household`
      }, HUB_FORM_ID, 'Submitted');

      // Webhook fallback with full payload (one call for N8N is enough)
      await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
      });

      setIsSubmitted(true);
      setStep(6);
    } catch (err) {
      console.error('Submission Error:', err);
      alert('Entschuldigung, es gab einen Fehler beim Absenden. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
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
            {step === 1 && (
              <div className="animate-fade-in space-y-12">
                <section className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Parent / Guardian</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" value={formData.parentFirstName} onChange={(e) => updateField('parentFirstName', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                    <input type="text" placeholder="Last Name" value={formData.parentLastName} onChange={(e) => updateField('parentLastName', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="email" placeholder="Email" value={formData.parentEmail} onChange={(e) => updateField('parentEmail', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                    <input type="tel" placeholder="Phone" value={formData.parentPhone} onChange={(e) => updateField('parentPhone', e.target.value)} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                    <input type="text" placeholder="Zip Code" value={formData.zipCode} onChange={(e) => updateField('zipCode', e.target.value.replace(/\D/g, '').slice(0, 5))} className="w-full p-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required />
                  </div>
                </section>

                <section className="space-y-8">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">
                    <span>Student Details</span>
                  </div>

                  <div className="p-8 bg-brand-navy rounded-[2.5rem] border-2 border-brand-gold shadow-[0_20px_60px_rgba(0,0,0,0.5)] space-y-8 relative overflow-hidden transition-all hover:scale-[1.01] group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <div className="flex justify-between items-center relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                          1
                        </div>
                        <h4 className="font-black text-white uppercase tracking-widest text-xs">Student Profile</h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                      <input type="text" placeholder="First Name" value={formData.student.firstName} onChange={(e) => updateStudentField('firstName', e.target.value)} className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium text-white placeholder:text-slate-600" required />
                      <input type="text" placeholder="Last Name" value={formData.student.lastName} onChange={(e) => updateStudentField('lastName', e.target.value)} className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium text-white placeholder:text-slate-600" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-brand-gold ml-2 tracking-widest opacity-80">Birth Date</label>
                        <div className="flex gap-2">
                          <input type="text" placeholder="DD" value={formData.student.dobDay} onChange={(e) => updateStudentField('dobDay', e.target.value.replace(/\D/g, '').slice(0, 2))} className="w-14 p-4 bg-white/5 border border-white/10 rounded-xl text-center font-bold focus:ring-2 focus:ring-brand-gold outline-none text-white placeholder:text-slate-600" required />
                          <input type="text" placeholder="MM" value={formData.student.dobMonth} onChange={(e) => updateStudentField('dobMonth', e.target.value.replace(/\D/g, '').slice(0, 2))} className="w-14 p-4 bg-white/5 border border-white/10 rounded-xl text-center font-bold focus:ring-2 focus:ring-brand-gold outline-none text-white placeholder:text-slate-600" required />
                          <input type="text" placeholder="YYYY" value={formData.student.dobYear} onChange={(e) => updateStudentField('dobYear', e.target.value.replace(/\D/g, '').slice(0, 4))} className="w-24 p-4 bg-white/5 border border-white/10 rounded-xl text-center font-bold focus:ring-2 focus:ring-brand-gold outline-none text-white placeholder:text-slate-600" required />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-brand-gold ml-2 tracking-widest opacity-80">Gender Identity</label>
                        <div className="flex gap-3">
                          {['Male', 'Female'].map(g => (
                            <button key={g} type="button" onClick={() => updateStudentField('gender', g)} className={`flex-1 p-5 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 transition-all ${formData.student.gender === g ? 'bg-brand-gold border-brand-gold text-brand-navy shadow-lg' : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-gold/50 hover:text-white'}`}>{g}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="flex justify-end pt-8">
                  <button type="button" onClick={() => handlePartialCapture(2)} className="px-12 py-6 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 group" disabled={!formData.student.firstName || !formData.student.dobYear}>Next Phase <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i></button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-10 p-10 bg-brand-navy rounded-[2.5rem] border-2 border-brand-gold/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-black text-xs shadow-lg">1</div>
                    <h3 className="font-black text-white uppercase tracking-widest text-xs">{formData.student.firstName}'s Academic Profile</h3>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1 opacity-80">Current School</label>
                    <input type="text" placeholder="Name of school..." value={formData.student.school} onChange={(e) => updateStudentField('school', e.target.value)} className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium text-white placeholder:text-slate-600" required />
                  </div>

                  <div className="space-y-4 relative z-10">
                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1 opacity-80">Academic Status</label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { val: 'High Performer', label: "Top Tier (Mostly A's)" },
                        { val: 'Average', label: "Stable (B/C Range)" },
                        { val: 'Struggling', label: "At Risk (D/F Range)" }
                      ].map(opt => (
                        <button key={opt.val} type="button" onClick={() => updateStudentField('academicStanding', opt.val)} className={`p-6 text-left border-2 rounded-2xl transition-all flex items-center justify-between ${formData.student.academicStanding === opt.val ? 'border-brand-gold bg-brand-gold text-brand-navy shadow-xl scale-[1.02]' : 'border-white/10 bg-white/5 text-slate-400 hover:border-brand-gold/50 hover:text-white'}`}>
                          <span className="font-black uppercase tracking-tight text-sm">{opt.label}</span>
                          {formData.student.academicStanding === opt.val && <i className="fa-solid fa-circle-check"></i>}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1 opacity-80">Has {formData.student.firstName} ever been suspended?</label>
                    <div className="flex gap-3">
                      {['Yes', 'No'].map(opt => (
                        <button key={opt} type="button" onClick={() => updateStudentField('hasSuspension', opt)} className={`flex-1 p-5 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 transition-all ${formData.student.hasSuspension === opt ? 'bg-brand-gold border-brand-gold text-brand-navy shadow-lg' : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-gold/50 hover:text-white'}`}>{opt}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(1)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={() => handlePartialCapture(3)} className="px-12 py-6 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 group" disabled={!formData.student.academicStanding}>Continue <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i></button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-10 p-10 bg-brand-navy rounded-[2.5rem] border-2 border-brand-gold/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-black text-xs shadow-lg">1</div>
                    <h3 className="font-black text-white uppercase tracking-widest text-xs">{formData.student.firstName}'s Interests</h3>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1 opacity-80">Passions & Interests</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Sports', 'Tech', 'Arts', 'Coding', 'Leader', 'Science', 'Music', 'Media'].map((interest) => (
                        <button key={interest} type="button" onClick={() => toggleStudentInterest(interest)} className={`p-4 border-2 rounded-2xl transition-all text-center group ${formData.student.interests.includes(interest) ? 'border-brand-gold bg-brand-gold text-brand-navy' : 'border-white/10 bg-white/5 hover:border-brand-gold/50'}`}>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${formData.student.interests.includes(interest) ? 'text-brand-navy' : 'text-slate-500 group-hover:text-white'}`}>{interest}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest ml-1 opacity-80">Behavioral Gaps / Struggles</label>
                    <textarea placeholder="Tell us where your child needs support..." value={formData.student.deficits} onChange={(e) => updateStudentField('deficits', e.target.value)} className="w-full p-6 bg-white/5 border border-white/10 rounded-3xl h-32 focus:ring-2 focus:ring-brand-gold outline-none transition-all placeholder:text-slate-600 font-medium text-white"></textarea>
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(2)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={() => handlePartialCapture(4)} className="px-12 py-6 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 group">Continue <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i></button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Daily Routine (General)</div>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" onClick={() => updateField('pickupType', 'Pickup')} className={`p-6 border-2 rounded-2xl transition-all text-left ${formData.pickupType === 'Pickup' ? 'border-brand-navy bg-brand-navy text-white shadow-lg' : 'border-white bg-white hover:border-slate-200'}`}>
                      <h4 className="font-black uppercase tracking-tight text-xs">Pickup</h4>
                      <p className="text-[10px] opacity-60">I will collect my children</p>
                    </button>
                    <button type="button" onClick={() => updateField('pickupType', 'Self-Transition')} className={`p-6 border-2 rounded-2xl transition-all text-left ${formData.pickupType === 'Self-Transition' ? 'border-brand-navy bg-brand-navy text-white shadow-lg' : 'border-white bg-white hover:border-slate-200'}`}>
                      <h4 className="font-black uppercase tracking-tight text-xs">Self-Transition</h4>
                      <p className="text-[10px] opacity-60">Go home alone</p>
                    </button>
                  </div>
                  {formData.pickupType && (
                    <div className="animate-fade-in">
                      <label className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-widest">{formData.pickupType === 'Pickup' ? 'Pickup Time' : 'Parent Works Until'}</label>
                      <select value={formData.pickupType === 'Pickup' ? formData.pickupTime : formData.parentWorkUntil} onChange={(e) => updateField(formData.pickupType === 'Pickup' ? 'pickupTime' : 'parentWorkUntil', e.target.value)} className="w-full mt-2 p-5 bg-white border border-slate-200 rounded-2xl outline-none font-medium appearance-none" required>
                        <option value="">Select Time</option>
                        {timeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  )}
                </div>

                <div className="space-y-10 p-10 bg-brand-navy rounded-[2.5rem] border-2 border-brand-gold/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-black text-xs font-black shadow-lg">1</div>
                    <h3 className="font-black text-white uppercase tracking-widest text-xs">{formData.student.firstName}'s Nutrition</h3>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <label className="text-[10px] font-black text-brand-gold ml-2 uppercase tracking-widest opacity-80">Nutrition Preference</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Standard', 'Vegan', 'Vegetarian', 'Keto', 'Gluten-Free', 'Halal'].map(diet => (
                        <button key={diet} type="button" onClick={() => updateStudentField('nutritionType', diet)} className={`p-4 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2 transition-all ${formData.student.nutritionType === diet ? 'bg-brand-gold border-brand-gold text-brand-navy shadow-lg' : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-gold/50 hover:text-white'}`}>{diet}</button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-brand-gold ml-2 uppercase tracking-widest opacity-80">Allergies / Restrictions</label>
                      <input type="text" placeholder="e.g. Peanuts..." value={formData.student.allergies} onChange={(e) => updateStudentField('allergies', e.target.value)} className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl outline-none font-medium text-white placeholder:text-slate-600" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(3)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                  <button type="button" onClick={() => handlePartialCapture(5)} className="px-12 py-6 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl active:scale-95 group" disabled={!formData.pickupType}>Continue <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i></button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-fade-in space-y-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-brand-gold pl-4 font-black text-brand-navy uppercase tracking-widest text-sm">Why Second Bell Lab?</div>
                  <textarea placeholder={`Tell us about your goals for ${formData.student.firstName}...`} value={formData.parentStatement} onChange={(e) => updateField('parentStatement', e.target.value)} className="w-full p-6 bg-white border border-slate-200 rounded-3xl h-40 focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium" required></textarea>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
                  <h4 className="text-[10px] font-black text-brand-navy uppercase tracking-widest mb-4">{formData.student.firstName}'s Commitment</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">1. Mandatory daily attendance.<br />2. No Device policy.<br />3. Quarterly strategy sessions.</p>
                  <label className="pt-4 flex items-center gap-3 text-brand-navy cursor-pointer group">
                    <div className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center transition-all ${formData.agreedCommitment ? 'bg-brand-navy border-brand-navy text-white' : 'bg-white border-slate-200'}`}>
                      <input type="checkbox" className="hidden" checked={formData.agreedCommitment} onChange={(e) => updateField('agreedCommitment', e.target.checked)} />
                      {formData.agreedCommitment && <i className="fa-solid fa-check text-xs"></i>}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">I commit to these standards.</span>
                  </label>
                </div>
                <div className="flex justify-between pt-8">
                  <button type="button" onClick={() => setStep(4)} className="text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-navy transition-colors">Back</button>
                  <button
                    type="submit"
                    className={`px-12 py-6 font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all shadow-2xl flex items-center gap-3 ${formData.agreedCommitment && !isSubmitting ? 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    disabled={!formData.agreedCommitment || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch animate-spin"></i> Sending...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="animate-fade-in text-center py-10 space-y-8">
                <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <i className="fa-solid fa-check text-4xl text-brand-navy"></i>
                </div>
                <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter">Application Received</h2>
                <p className="text-slate-500 font-bold leading-relaxed max-w-md mx-auto">
                  Vielen Dank, {formData.parentFirstName}. Wir haben die Anmeldung für {formData.student.firstName} erhalten.
                  Unsere Mentoren werden sich innerhalb von 48 Stunden bei Ihnen melden.
                </p>
                <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                  <button type="button" onClick={handleResetForNextStudent} className="px-10 py-5 bg-brand-navy text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl active:scale-95">Weiteres Kind anmelden</button>
                  <Link to="/" className="inline-flex items-center gap-3 text-brand-navy font-black uppercase tracking-widest text-[10px] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-all">Zurück zur Startseite <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-12 text-center text-[10px] space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-8 opacity-40 uppercase font-black tracking-widest">
            <span>Encrypted Data</span>
            <span>Privacy Protected</span>
            <span>Member Support</span>
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest">© 2025 Second Bell Lab • High Performance Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationWizard;