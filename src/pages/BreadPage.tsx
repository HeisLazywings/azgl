import React from 'react';
import { PageRoute } from '../types';
import { BrandVisual } from '../components/BrandVisual';
import { ArrowLeft, ArrowRight, Check, Package, Truck, Store, ShieldCheck, Flame, Scale, Clock } from 'lucide-react';

interface BreadPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenTradeEnquiry: (interest?: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions') => void;
  guideMode?: boolean;
}

export const BreadPage: React.FC<BreadPageProps> = ({
  onRouteChange,
  onOpenTradeEnquiry,
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
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
                <span>Food & Bakery Division</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                AZG Bread
              </h1>
              <p className="text-xl font-medium text-amber-900/80">
                “Freshness made for everyday tables.”
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                AZG Bread delivers freshly baked, soft, and wholesome loaves formulated for everyday Nigerian households. Produced with premium flour blends, balanced enrichment, and disciplined bakery hygiene, every loaf guarantees consistent texture and enduring table freshness.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenTradeEnquiry('AZG Bread')}
                  className="px-6 py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  Wholesale & Distributor Supply
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('bread-categories');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  View Product Categories
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-amber-200">
                <BrandVisual 
                  type="bread-hero" 
                  aspect="4:3" 
                  label="AZG Packaged Bread Loaves"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="bread-categories" className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Product Categories & Formats
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Crafted for Families, Retail & Foodservice
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Our bakery lines are organized to fulfill both fast-moving consumer retail and commercial institutional supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Category 1 */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Family Loaves</h3>
                <p className="text-xs text-amber-800 font-semibold mt-1">Everyday Household Classic</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Substantial golden loaves with tender crumb and soft crust. Built to retain softness for breakfast tea, spreads, and family meals.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1">
                  <div>· Standard & Jumbo sizes</div>
                  <div>· Sealed moisture-protective wrapping</div>
                  <div>· Daily morning bakery release</div>
                </div>
              </div>
              <div className="mt-6 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">Retail & Supermarket SKU</span>
              </div>
            </div>

            {/* Category 2 */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Sandwich Slices</h3>
                <p className="text-xs text-amber-800 font-semibold mt-1">Precision Sliced Packaging</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Evenly machine-sliced bread offering convenience for quick sandwiches, school lunchboxes, and breakfast toasting.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1">
                  <div>· Uniform automated slice thickness</div>
                  <div>· Easy-reseal clip closures</div>
                  <div>· High toastability and crumb stability</div>
                </div>
              </div>
              <div className="mt-6 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">Retail & Convenience Format</span>
              </div>
            </div>

            {/* Category 3 */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Commercial & Catering</h3>
                <p className="text-xs text-amber-800 font-semibold mt-1">Bulk Institutional Supply</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Bulk crates designed for hotel breakfast services, school cafeterias, institutional food providers, and event caterers.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1">
                  <div>· Wholesale pallet and crate packaging</div>
                  <div>· Scheduled morning route deliveries</div>
                  <div>· Dedicated account manager routing</div>
                </div>
              </div>
              <div className="mt-6 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">Institutional & Wholesale SKU</span>
              </div>
            </div>

          </div>

          {guideMode && (
            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong>Management Verification Slot:</strong> When officially released, the exact Net Weights (e.g., 500g, 800g, 1kg) and statutory NAFDAC numbers can be populated across each category card.
            </div>
          )}

        </div>
      </section>

      {/* Production & Hygiene Standards */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">Controlled Baking Temperatures</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Even thermal distribution creates golden uniform crusts without scorched bases, locking in crumb moisture.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">Sanitary Packaging Line</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Automated bagging and cooling zones prevent condensation and mold formation, securing shelf life.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">Morning Route Logistics</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Scheduled dispatch vans deliver fresh stock to partner retailers and distribution depots before peak morning sales.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Retail Availability & Bulk Supply CTA */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Retail Availability & Bulk Supply
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Interested in Stocking or Distributing AZG Bread?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            We partner with supermarkets, independent retailers, key wholesalers, and institutional caterers seeking a dependable bakery supply partner.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTradeEnquiry('AZG Bread')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              Start Bakery Trade Enquiry
            </button>
            <button
              onClick={() => onRouteChange('distribution')}
              className="w-full sm:w-auto px-8 py-3.5 bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
            >
              Explore Distribution Terms
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
