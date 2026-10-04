import React from 'react';
import { PageRoute } from '../types';
import { BrandVisual } from '../components/BrandVisual';
import { ArrowLeft, ArrowRight, Snowflake, Check, ShieldCheck, Truck, Sparkles, Layers, Package } from 'lucide-react';

interface YoghurtPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenTradeEnquiry: (interest?: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions') => void;
  guideMode?: boolean;
}

export const YoghurtPage: React.FC<YoghurtPageProps> = ({
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
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700">
                <span>Dairy & Nutrition Division</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                AZG Yoghurt
              </h1>
              <p className="text-xl font-medium text-sky-900/80">
                “Refreshment made with care.”
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                AZG Yoghurt offers smooth, wholesome dairy refreshment for active consumers, families, and everyday wellness. Crafted from quality milk cultures and pasteurized with precision, our products deliver delicious creaminess with nutritional benefits.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenTradeEnquiry('AZG Yoghurt')}
                  className="px-6 py-3.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  Become a Stockist or Distributor
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('yoghurt-formats');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  Explore Pack Formats
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-sky-200">
                <BrandVisual 
                  type="yoghurt-hero" 
                  aspect="4:3" 
                  label="AZG Chilled Dairy Products"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product & Pack-Size Presentation */}
      <section id="yoghurt-formats" className="py-16 bg-[#F0F9FF]/80 border-y border-sky-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              Product & Pack-Size Presentation
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Chilled Formats Designed for Every Consumption Occasion
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Packaged in airtight, food-grade containers to preserve freshness and ensure optimal cold-chain preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Format 1: Drinking Yoghurt */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                  <Snowflake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Drinking Yoghurt</h3>
                <p className="text-xs text-sky-800 font-semibold mt-1">On-The-Go Chilled Refreshment</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Smooth, easily drinkable consistency in convenient PET bottles. Perfect for active students, commuters, gym-goers, and midday refreshment.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
                  <div>· Ergonomic sealed bottle cap</div>
                  <div>· High chilled shelf stability</div>
                  <div>· Available for refrigerated retail displays</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-900">Single-Serve Retail SKU</span>
              </div>
            </div>

            {/* Format 2: Snack Cups */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Spoonable Cups</h3>
                <p className="text-xs text-sky-800 font-semibold mt-1">Rich & Creamy Snack Serving</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Thicker set texture formulated for spoon enjoyment. Ideal for breakfast parfaits, fruit toppings, and wholesome children's snacks.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
                  <div>· Foil-sealed hygienic protection</div>
                  <div>· Multi-pack bundle options</div>
                  <div>· School and lunchbox friendly</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-900">Cup & Multi-Pack SKU</span>
              </div>
            </div>

            {/* Format 3: Multi-Serve Family Pack */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Family & Catering Jug</h3>
                <p className="text-xs text-sky-800 font-semibold mt-1">Household & Foodservice Format</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Economical larger volume containers with pour spout. Crafted for household refrigerators, cafes, smoothies, and commercial breakfast kitchens.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
                  <div>· Handle-equipped easy-pour container</div>
                  <div>· High-yield kitchen serving</div>
                  <div>· Scheduled cold-chain distributor cases</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-900">Family & Commercial SKU</span>
              </div>
            </div>

          </div>

          {guideMode && (
            <div className="mt-8 p-4 rounded-xl bg-sky-100 border border-sky-300 text-xs text-sky-950">
              <strong>Flavor & Net-Volume Verification Slot:</strong> When authorized by management, exact flavor variants (e.g. Classic Sweetened, Strawberry, Vanilla Bean, Plain Unsweetened) and volume capacities (e.g. 250ml, 500ml, 1L) will be filled in here.
            </div>
          )}

        </div>
      </section>

      {/* Dairy Cold-Chain Rigor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">Controlled Fermentation</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Precision incubation cycles nurture live beneficial cultures, ensuring balanced acidity and velvety mouthfeel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                <Snowflake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">Unbroken Cold-Chain</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Chilled holding tanks and insulated transport vehicles keep products at recommended temperatures from plant to retailer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-900">Stockist Supply Support</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Reliable order scheduling, point-of-sale display coordination, and consistent replenishment for commercial trade outlets.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stockist / Distributor CTA */}
      <section className="py-16 bg-[#0369A1] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
            Stockist & Trade Allocation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Bring AZG Yoghurt to Your Retail Shelves
          </h2>
          <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto leading-relaxed">
            We welcome commercial stockists, convenience store chains, cold-room operators, and regional distributors looking to expand their chilled dairy portfolio.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTradeEnquiry('AZG Yoghurt')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0284C7] hover:bg-stone-100 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              Start Dairy Trade Enquiry
            </button>
            <button
              onClick={() => onRouteChange('distribution')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#075985] hover:bg-[#0C4A6E] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
            >
              Review Cold-Chain Terms
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
