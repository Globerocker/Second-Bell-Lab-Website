import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ApplicationWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isWaitlisted, setIsWaitlisted] = useState(false);

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // CRM Webhook Integration
    try {
      const response = await fetch('https://n8n.secondbelllab.com/webhook/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          student: {
            firstName: (e.target as any).elements[0]?.value,
            lastName: (e.target as any).elements[1]?.value,
            dob: (e.target as any).elements[2]?.value,
            school: (e.target as any).elements[3]?.value,
          },
          submittedAt: new Date().toISOString(),
        }),
      });
      console.log('CRM Response:', response.status);
    } catch (err) {
      console.error('CRM Webhook Error:', err);
    }

    // Simulate logic for waitlist vs acceptance
    setIsWaitlisted(true);
    nextStep();
  };

  const Progress = () => (
    <div className="w-full bg-slate-200 h-2 mb-8 rounded-full overflow-hidden">
      <div
        className="bg-brand-gold h-full transition-all duration-500 ease-out"
        style={{ width: `${(step / 7) * 100}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-heading font-bold text-brand-navy mb-2">Membership Application</h1>
          <p className="text-slate-500">Fall 2025 Cohort</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {step < 8 && <Progress />}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Student Info */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Step 1: The Student</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold outline-none" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth</label>
                    <input type="date" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current School</label>
                    <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold outline-none" required />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-colors">Next: Academic Standing</button>
                </div>
              </div>
            )}

            {/* Step 2: Academic Standing */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Step 2: Academic Standing</h2>
                <p className="text-slate-600 mb-6 text-sm">We don't require straight A's, but we require a commitment to improvement. Where do they stand currently?</p>
                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-brand-gold cursor-pointer transition-colors">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="gpa" className="w-5 h-5 text-brand-gold" />
                      <span className="font-bold text-slate-700">High Performer (Mostly A's)</span>
                    </label>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-brand-gold cursor-pointer transition-colors">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="gpa" className="w-5 h-5 text-brand-gold" />
                      <span className="font-bold text-slate-700">Average (B's and C's)</span>
                    </label>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-lg hover:border-brand-gold cursor-pointer transition-colors">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="gpa" className="w-5 h-5 text-brand-gold" />
                      <span className="font-bold text-slate-700">Struggling (D's or below)</span>
                    </label>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-500 font-bold hover:text-brand-navy">Back</button>
                  <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-colors">Next: Behavioral History</button>
                </div>
              </div>
            )}

            {/* Step 3: Behavioral History */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Step 3: Behavioral History</h2>
                <p className="text-slate-600 mb-6 text-sm">Honesty is Rule #1. Past infractions do not disqualify a student, but lying about them does.</p>
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Has the student ever been suspended or expelled?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2"><input type="radio" name="suspension" className="w-4 h-4" /> Yes</label>
                    <label className="flex items-center gap-2"><input type="radio" name="suspension" className="w-4 h-4" /> No</label>
                  </div>
                  <div className="pt-4">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Has the student had any interaction with law enforcement?</label>
                    <p className="text-xs text-slate-500 mb-2">If yes, we may recommend our Reintegration / Second Chance track.</p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2"><input type="radio" name="law" className="w-4 h-4" /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name="law" className="w-4 h-4" /> No</label>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-500 font-bold hover:text-brand-navy">Back</button>
                  <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-colors">Next: Family Commitment</button>
                </div>
              </div>
            )}

            {/* Step 4: Family Commitment */}
            {step === 4 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Step 4: Family Commitment</h2>
                <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-gold mb-6">
                  <p className="text-sm text-slate-700 italic">"We cannot build what you tear down at home."</p>
                </div>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-brand-navy" required />
                    <span className="text-sm text-slate-600">I understand that attendance is mandatory (Mon-Fri) barring illness.</span>
                  </label>
                  <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-brand-navy" required />
                    <span className="text-sm text-slate-600">I agree to support the "No Phone" policy during lab hours.</span>
                  </label>
                  <label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-brand-navy" required />
                    <span className="text-sm text-slate-600">I am willing to attend a quarterly parent-director strategy session.</span>
                  </label>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-500 font-bold hover:text-brand-navy">Back</button>
                  <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-colors">Next: Location</button>
                </div>
              </div>
            )}

            {/* Step 5: Location */}
            {step === 5 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Step 5: Select Location</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 border-2 border-brand-navy bg-brand-navy/5 rounded-lg cursor-pointer">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="font-bold text-brand-navy">Phoenix HQ (Arcadia)</span>
                      <input type="radio" name="location" checked readOnly className="w-5 h-5 text-brand-navy" />
                    </label>
                    <p className="text-xs text-slate-500 mt-1">Open Now • Limited Spots</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-lg opacity-60 cursor-not-allowed">
                    <label className="flex items-center justify-between">
                      <span className="font-bold text-slate-500">Scottsdale North</span>
                      <span className="text-xs font-bold bg-slate-200 px-2 py-1 rounded">Waitlist Only</span>
                    </label>
                    <p className="text-xs text-slate-400 mt-1">Opening Fall 2025</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-500 font-bold hover:text-brand-navy">Back</button>
                  <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-colors">Next: Statement</button>
                </div>
              </div>
            )}

            {/* Step 6: Motivation */}
            {step === 6 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Step 6: Parent Statement</h2>
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Why do you want your child at Second Bell Lab?</label>
                  <textarea className="w-full p-4 border border-slate-300 rounded-lg h-32 focus:ring-2 focus:ring-brand-gold outline-none resize-none" placeholder="We are looking for families who want growth, not just childcare..." required></textarea>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-500 font-bold hover:text-brand-navy">Back</button>
                  <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-colors">Review Application</button>
                </div>
              </div>
            )}

            {/* Step 7: Review & Submit */}
            {step === 7 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Step 7: Final Review</h2>
                <div className="bg-slate-50 p-6 rounded-lg mb-6 text-sm text-slate-600 space-y-2">
                  <p><strong>Name:</strong> [Student Name]</p>
                  <p><strong>Location:</strong> Arcadia HQ</p>
                  <p><strong>Program:</strong> Fall 2025</p>
                </div>
                <p className="text-xs text-slate-500 mb-6">By clicking Submit, you agree to the non-refundable application fee of $50 (waived for waitlist applications).</p>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-slate-500 font-bold hover:text-brand-navy">Back</button>
                  <button type="submit" className="px-8 py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white border-2 border-brand-gold transition-colors">Submit Application</button>
                </div>
              </div>
            )}

            {/* Success / Waitlist */}
            {step === 8 && (
              <div className="animate-fade-in text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-check text-4xl text-green-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Application Received</h2>
                <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                  Thank you. Due to extremely high demand, we have placed your application on our <strong>Priority Waitlist</strong>.
                </p>
                <div className="bg-brand-beige p-6 rounded-lg max-w-lg mx-auto mb-8 border border-brand-gold/20">
                  <p className="text-sm text-slate-700"><strong>Note:</strong> Our waitlist helps us expedite the rollout of new locations. The more interest we have in a zip code, the faster we build. You will be notified immediately when a spot opens.</p>
                </div>
                <Link to="/" className="text-brand-navy font-bold hover:underline">Return to Home</Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationWizard;