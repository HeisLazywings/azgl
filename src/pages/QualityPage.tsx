import React from 'react';
import { PageRoute } from '../types';
import { BrandVisual } from '../components/BrandVisual';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, FileCheck, Layers, Sparkles, AlertCircle, Building2 } from 'lucide-react';

interface QualityPageProps {
  onRouteChange: (route: PageRoute) => void;
  guideMode?: boolean;
}

export const QualityPage: React.FC<QualityPageProps> = ({
  onRouteChange,
  guideMode = false,
}) => {
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
              Manufacturing & Operating Standard
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Quality is not a department. It is the standard.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              At AZG, operational excellence governs every stage of production and service delivery. From verified raw material intake to automated packaging hygiene and clinical sanitization protocols, we engineer reliability into everything bearing the AZG mark.
            </p>
          </div>
        </div>
      </section>

      {/* Four Tenets of AZG Quality */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#991B1B] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-stone-900">Consistency in Every Batch</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Consistency is achieved through repeatable recipes, monitored mixing times, calibrated oven temperatures, and uniform cooling cycles. Whether a customer opens a loaf on Monday or Friday, texture and freshness remain identical.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#991B1B] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-stone-900">Responsible Production</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We prioritize food-grade packaging materials that resist environmental moisture, non-toxic sanitizers, and rigorous facility cleanliness that protects both workers and consumers.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#991B1B] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-stone-900">Customer Confidence</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Public confidence cannot be bought—it must be earned through every morning loaf and every chilled dairy bottle. We listen closely to feedback from distributors, retailers, and families.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#991B1B] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-stone-900">Reliable Processes</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Preventative machinery maintenance, disciplined hygiene air locks, and strict clinical guidelines ensure downtime is minimized and cross-contamination is eliminated.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Quality Verification / Reserved Certifications Placement Area */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-[#991B1B]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Compliance Framework Slot
                </span>
                <h3 className="text-xl font-bold text-stone-900">
                  Statutory Registrations & Quality Certifications
                </h3>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              This space has been architected to display official regulatory seals, statutory certifications, and third-party laboratory audits once executive documentation is supplied.
            </p>

            {/* Certification Slot Wireframes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl border border-dashed border-stone-300 bg-stone-50 flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-8 h-8 text-stone-400 mb-2" />
                <span className="text-xs font-bold text-stone-800">Food Safety Seal Slot</span>
                <span className="text-[11px] text-stone-500 mt-1">[Official accreditation pending verification]</span>
              </div>

              <div className="p-5 rounded-xl border border-dashed border-stone-300 bg-stone-50 flex flex-col items-center justify-center text-center">
                <FileCheck className="w-8 h-8 text-stone-400 mb-2" />
                <span className="text-xs font-bold text-stone-800">NAFDAC Registry Slot</span>
                <span className="text-[11px] text-stone-500 mt-1">[Official registration numbers pending release]</span>
              </div>

              <div className="p-5 rounded-xl border border-dashed border-stone-300 bg-stone-50 flex flex-col items-center justify-center text-center">
                <Building2 className="w-8 h-8 text-stone-400 mb-2" />
                <span className="text-xs font-bold text-stone-800">Clinical Facility License Slot</span>
                <span className="text-[11px] text-stone-500 mt-1">[State health accreditation pending release]</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-100 text-xs text-stone-600">
              <strong>Demo Protocol Notice:</strong> In strict compliance with private demo guidelines, no fabricated certification logos, fake NAFDAC registration numbers, or unverified statistical claims are displayed.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
