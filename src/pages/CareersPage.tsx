import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowLeft, ArrowRight, Briefcase, Mail, Send, CheckCircle2, UserCheck, Shield } from 'lucide-react';

interface CareersPageProps {
  onRouteChange: (route: PageRoute) => void;
  guideMode?: boolean;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onRouteChange,
  guideMode = false,
}) => {
  const [talentForm, setTalentForm] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'Manufacturing / Production',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!talentForm.name || !talentForm.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => onRouteChange('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to AZG Group</span>
        </button>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#991B1B]">
              Careers at AZG
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Build what's next with AZG.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              We bring together dedicated food science technicians, logistics coordinators, industrial baking masters, and healthcare practitioners committed to operational excellence in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Authentic Empty-State Experience */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center py-12 px-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-500 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Talent Registry Status
            </span>
            <h2 className="text-2xl font-bold text-stone-900 mt-1">
              No Public Openings Currently Listed
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
              AZG is currently not running open public recruitment campaigns. However, we regularly review expressions of interest from experienced professionals in manufacturing, food safety, fleet distribution, and clinical administration.
            </p>

            <div className="mt-8 pt-6 border-t border-stone-200/80 max-w-md mx-auto text-left space-y-2 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />
                <span>Commercial Bakery & Dairy Processing Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />
                <span>Fleet Distribution & Regional Wholesale Management</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />
                <span>Clinical Nursing & Hospital Healthcare Administration</span>
              </div>
            </div>
          </div>

          {/* Talent Expression of Interest Form */}
          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-stone-900 mb-1">
              Register Future Talent Interest
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Submit your background details to our talent database for consideration when positions open.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-stone-900">Talent Profile Recorded</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Thank you, {talentForm.name}. Your details have been placed on file in our confidential talent registry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={talentForm.name}
                      onChange={e => setTalentForm({ ...talentForm, name: e.target.value })}
                      placeholder="e.g. Chinedu Eze"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#991B1B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={talentForm.email}
                      onChange={e => setTalentForm({ ...talentForm, email: e.target.value })}
                      placeholder="e.g. chinedu@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#991B1B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={talentForm.phone}
                      onChange={e => setTalentForm({ ...talentForm, phone: e.target.value })}
                      placeholder="+234 ..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#991B1B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Functional Discipline</label>
                    <select
                      value={talentForm.discipline}
                      onChange={e => setTalentForm({ ...talentForm, discipline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:border-[#991B1B]"
                    >
                      <option value="Manufacturing / Production">Industrial Manufacturing & Baking</option>
                      <option value="Dairy / Food Science">Dairy Science & Quality Assurance</option>
                      <option value="Logistics & Fleet">Logistics, Fleet & Distribution</option>
                      <option value="Healthcare & Nursing">Clinical Care & Hospital Services</option>
                      <option value="Finance & Administration">Finance, HR & Corporate Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Experience Summary</label>
                  <textarea
                    rows={2}
                    value={talentForm.notes}
                    onChange={e => setTalentForm({ ...talentForm, notes: e.target.value })}
                    placeholder="Briefly state your years of experience, relevant certifications, or current focus..."
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#991B1B]"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Submit Talent Interest
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
