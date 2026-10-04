import React from 'react';
import { PageRoute } from '../types';
import { BrandVisual } from '../components/BrandVisual';
import { ArrowLeft, ArrowRight, ShieldCheck, Target, Award, Users, Building, HeartPulse } from 'lucide-react';

interface AboutPageProps {
  onRouteChange: (route: PageRoute) => void;
  guideMode?: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
              About AZG Group
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              An African Enterprise Anchored in Essential Quality
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              AZG is a diversified Nigerian group bringing together consumer staple manufacturing and vital healthcare infrastructure. We operate on the principle that consistent everyday products and dignified community healthcare create lasting public trust.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillar Foundation */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#991B1B] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Our Purpose</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                To bring essential food products and reliable medical services closer to Nigerian households through disciplined local manufacturing and attentive clinical care.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">The Quality Standard</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Quality is not an inspection layer applied at the end; it is embedded into ingredient selection, thermal recipes, hygiene barrier protocols, and clinical governance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Community Stewardship</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We believe in serving farther—building long-term commercial relationships with retailers, distributors, employees, and patients across our host communities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Corporate Structure */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#991B1B]">
                Operating Organization
              </span>
              <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                Three Distinct Divisions. Unified Governance.
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Each division operates under focused management with technical expertise in industrial baking, dairy chemistry, and healthcare administration. Central executive governance ensures capital discipline, quality assurance, and compliance across all operations.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                  <div>
                    <strong className="text-stone-900 block text-sm">AZG Bread</strong>
                    <span className="text-stone-500">Commercial bakery manufacturing & retail dispatch</span>
                  </div>
                  <button onClick={() => onRouteChange('bread')} className="text-amber-800 font-bold hover:underline">
                    View Division &rarr;
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                  <div>
                    <strong className="text-stone-900 block text-sm">AZG Yoghurt</strong>
                    <span className="text-stone-500">Cultured dairy processing & cold-chain distribution</span>
                  </div>
                  <button onClick={() => onRouteChange('yoghurt')} className="text-sky-800 font-bold hover:underline">
                    View Division &rarr;
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                  <div>
                    <strong className="text-stone-900 block text-sm">AZG Hospital</strong>
                    <span className="text-stone-500">Community clinical care & patient healing facility</span>
                  </div>
                  <button onClick={() => onRouteChange('hospital')} className="text-teal-800 font-bold hover:underline">
                    View Division &rarr;
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                <BrandVisual 
                  type="hero-group" 
                  aspect="4:3" 
                  label="AZG Industrial Governance & Scale"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Milestone Timeline Structure */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#991B1B]">
              Milestones & Trajectory
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Building for Long-Term Value
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Structured developmental phases reflecting our ongoing expansion.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#991B1B]">PHASE 1</span>
              <h4 className="text-base font-bold text-stone-900 mt-1">Industrial Consolidation</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Establishment of automated bakery processing lines and hygienic continuous mixing systems to supply neighborhood grocery channels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#991B1B]">PHASE 2</span>
              <h4 className="text-base font-bold text-stone-900 mt-1">Dairy & Cold-Chain Integration</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Expansion into fermented dairy nutrition with chilled temperature storage and distribution infrastructure across major commercial hubs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#991B1B]">PHASE 3</span>
              <h4 className="text-base font-bold text-stone-900 mt-1">Healthcare & Community Service</h4>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Commissioning of modern clinical facility to provide patient-centered care and elevate community healthcare standards.
              </p>
            </div>
          </div>

          {guideMode && (
            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong>Corporate History Slot:</strong> Official incorporation dates, board of directors biographies, and executive leadership profiles will be added once approved by the board.
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
