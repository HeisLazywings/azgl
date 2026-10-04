import React from 'react';
import { PageRoute } from '../types';
import { BrandVisual } from '../components/BrandVisual';
import { ArrowLeft, ArrowRight, HeartPulse, Clock, MapPin, Building2, ShieldCheck, Users, Phone, FileText, CheckCircle2 } from 'lucide-react';

interface HospitalPageProps {
  onRouteChange: (route: PageRoute) => void;
  guideMode?: boolean;
}

export const HospitalPage: React.FC<HospitalPageProps> = ({
  onRouteChange,
  guideMode = false,
}) => {
  return (
    <div className="bg-[#FAF8F5] text-stone-900">
      
      {/* Back breadcrumb navigation */}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800">
                <span>Healthcare & Clinical Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                AZG Hospital
              </h1>
              <p className="text-xl font-medium text-teal-900/80">
                “Care when it matters.”
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                AZG's healthcare division reflects the group's commitment to supporting the communities it serves. Built on a philosophy of dignity, attentive clinical care, and patient-centered healing, our facility provides accessible and dependable health services.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onRouteChange('contact')}
                  className="px-6 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  Contact the Hospital
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('hospital-structure');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  Patient & Facility Information
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-teal-200">
                <BrandVisual 
                  type="hospital-hero" 
                  aspect="4:3" 
                  label="AZG Healthcare Facility"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Structured Hospital Information Placeholders */}
      <section id="hospital-structure" className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
              Facility Structure & Patient Services
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Care Built Around People
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Every detail of the healthcare environment is organized to facilitate calm recovery, professional clinical attention, and clear patient guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Slot 1: About the Hospital */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-teal-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">About the Hospital</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Established as part of the AZG Group's community commitment, the hospital brings quality general medical consultations, inpatient ward care, and diagnostics into modern clinical spaces.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-500">
                  <span className="font-semibold text-stone-800 block mb-1">Administrative Commitment:</span>
                  Patient dignity, hygienic room sanitization, and compassionate nursing care are standard across all departments.
                </div>
              </div>

              {guideMode && (
                <div className="mt-4 pt-3 border-t border-teal-200/80 text-[11px] text-teal-900">
                  <strong>Verification Slot [About]:</strong> Official governance charter, hospital board details, and state licensing numbers will be confirmed here.
                </div>
              )}
            </div>

            {/* Slot 2: Verified Services Placeholder */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-teal-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">Clinical Services</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Our clinical services cover general medical care, outpatient consultations, observational wards, and community health services.
                </p>
                
                {/* Clean unboxed service list */}
                <div className="mt-4 space-y-2 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>General Outpatient & Family Consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Inpatient Observation & Recovery Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Maternal & Child Health Consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Routine Diagnostic Laboratory & Screening</span>
                  </div>
                </div>
              </div>

              {guideMode && (
                <div className="mt-4 pt-3 border-t border-teal-200/80 text-[11px] text-teal-900">
                  <strong>Specialty Verification Slot:</strong> As verified clinical specialties (e.g. Pediatrics, Internal Medicine, Surgery) are approved by management, they will be listed with accreditation details.
                </div>
              )}
            </div>

            {/* Slot 3: Visiting Information */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-teal-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">Visiting Information & Guidelines</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  To protect patient rest and support clinical hygiene, visitor schedules are designed to maintain a quiet, therapeutic environment.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 space-y-2 text-xs text-stone-600">
                  <div className="flex justify-between items-center py-1 border-b border-stone-100">
                    <span className="font-semibold text-stone-800">Morning Visiting Session:</span>
                    <span>11:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-100">
                    <span className="font-semibold text-stone-800">Evening Visiting Session:</span>
                    <span>5:00 PM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-semibold text-stone-800">Emergency & Admission Desk:</span>
                    <span className="text-teal-700 font-semibold">24 Hours / 7 Days</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-teal-200/80 text-[11px] text-stone-500">
                Visitor protocol: Maximum 2 visitors per bedside at a time to support patient comfort.
              </div>
            </div>

            {/* Slot 4: Location & Contact */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-teal-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">Location & Administration Contact</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Conveniently situated to serve residential communities and corporate employee health programs.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 space-y-2.5 text-xs text-stone-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>Lagos Metropolitan Center, Nigeria <span className="text-stone-400">[Official address pending management release]</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Hospital Desk: +234 1 800 AZG HOSP (Placeholder)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>hospital@azg-group.demo</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-teal-200/80">
                <button
                  onClick={() => onRouteChange('contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950"
                >
                  <span>Submit an Administrative Inquiry &rarr;</span>
                </button>
              </div>
            </div>

          </div>

          {guideMode && (
            <div className="mt-8 p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
              <strong>Management Verification Protocol:</strong> In accordance with client specifications, no unverified medical certifications, mortality rates, or unapproved surgical specialties are shown. Management will provide accredited service listings prior to public release.
            </div>
          )}

        </div>
      </section>

      {/* Community Health CTA */}
      <section className="py-16 bg-[#0F766E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
            Corporate & Community Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Partnering for Community Health
          </h2>
          <p className="text-sm sm:text-base text-teal-100 max-w-xl mx-auto leading-relaxed">
            AZG Hospital works with community stakeholders, corporate employers, and insurance administrators to provide reliable healthcare coverage.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRouteChange('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0D9488] hover:bg-stone-100 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              Contact Hospital Administration
            </button>
            <button
              onClick={() => onRouteChange('home')}
              className="w-full sm:w-auto px-8 py-3.5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
            >
              Return to Group Overview
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
