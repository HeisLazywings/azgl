import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BrandVisual } from '../components/BrandVisual';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Store, 
  Truck, 
  Building2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  HeartPulse, 
  FileCheck, 
  Users, 
  Briefcase, 
  Sparkles,
  ChevronRight,
  Send
} from 'lucide-react';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenTradeEnquiry: (interest?: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions') => void;
  guideMode?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRouteChange,
  onOpenTradeEnquiry,
  guideMode = false,
}) => {
  // Inline quick trade inquiry form state
  const [quickForm, setQuickForm] = useState({
    name: '',
    company: '',
    phone: '',
    businessType: 'Retailer',
    interest: 'Both Divisions' as 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions',
  });
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.phone) return;
    setQuickSubmitted(true);
  };

  return (
    <div className="space-y-0 text-stone-900">
      
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center bg-[#FAF8F5] overflow-hidden pt-8 pb-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Editorial Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#991B1B]">
                <span>Diversified Nigerian Consumer & Healthcare Group</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.08] [text-wrap:balance]">
                Made for everyday life. Built to go further.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                From food products enjoyed every day to healthcare that serves communities, AZG brings essential products and services closer to people.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('three-businesses');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <span>Explore AZG</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenTradeEnquiry('Both Divisions')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-sm font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>Become a Distribution Partner</span>
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-stone-200/80 flex items-center gap-6 text-xs text-stone-500 font-medium">
                <div>AZG Bread Division</div>
                <div aria-hidden="true" className="text-stone-300">/</div>
                <div>AZG Yoghurt Division</div>
                <div aria-hidden="true" className="text-stone-300">/</div>
                <div>AZG Hospital Division</div>
              </div>
            </div>

            {/* Right Cinematic Visual Area */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
                <BrandVisual 
                  type="hero-group" 
                  aspect="16:9" 
                  label="Enterprise Production & Logistics Infrastructure"
                  showSlotNotice={guideMode}
                />
              </div>

              {guideMode && (
                <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <strong>Photo Slot [Hero 01]:</strong> Management can replace this architectural visual with an official high-resolution corporate facility or production drone photograph.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          2. THREE BUSINESSES. ONE STANDARD.
          ======================================================== */}
      <section id="three-businesses" className="py-20 lg:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#991B1B] mb-2">
              Three Businesses. One Standard.
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
              Different needs. One commitment to quality.
            </h2>
            <p className="text-base text-stone-600 mt-3 leading-relaxed">
              Each division operates with dedicated manufacturing, cold-chain, or clinical disciplines, unified by the AZG standard of consistency and public trust.
            </p>
          </div>

          {/* Three Large Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: AZG Bread */}
            <div className="group rounded-2xl border border-stone-200 bg-[#FAF8F5] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-amber-400">
              <div className="p-2">
                <BrandVisual 
                  type="bread-hero" 
                  aspect="4:3" 
                  label="Bakery Loaf & Slices"
                  showSlotNotice={guideMode}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                    Food & Bakery
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    AZG Bread
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    “Freshness made for everyday tables.”
                  </p>
                  <p className="text-xs text-stone-500 mt-3 leading-relaxed">
                    Formulated for soft texture, golden crust, and prompt wholesale routing to retail partners and neighborhood stores.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200/80">
                  <button
                    onClick={() => onRouteChange('bread')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-950 transition-colors"
                  >
                    <span>Explore Bread</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: AZG Yoghurt */}
            <div className="group rounded-2xl border border-stone-200 bg-[#FAF8F5] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-sky-400">
              <div className="p-2">
                <BrandVisual 
                  type="yoghurt-hero" 
                  aspect="4:3" 
                  label="Chilled Yoghurt Bottles & Cups"
                  showSlotNotice={guideMode}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                    Dairy & Refreshment
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    AZG Yoghurt
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    “Refreshment made with care.”
                  </p>
                  <p className="text-xs text-stone-500 mt-3 leading-relaxed">
                    Crafted with quality dairy ingredients and smooth blending, offering consumers wholesome everyday refreshment.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200/80">
                  <button
                    onClick={() => onRouteChange('yoghurt')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-800 hover:text-sky-950 transition-colors"
                  >
                    <span>Explore Yoghurt</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: AZG Hospital */}
            <div className="group rounded-2xl border border-stone-200 bg-[#FAF8F5] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-teal-400">
              <div className="p-2">
                <BrandVisual 
                  type="hospital-hero" 
                  aspect="4:3" 
                  label="Modern Healthcare Center"
                  showSlotNotice={guideMode}
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                    Healthcare & Clinical Care
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    AZG Hospital
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    “Care when it matters.”
                  </p>
                  <p className="text-xs text-stone-500 mt-3 leading-relaxed">
                    Providing dedicated clinical attention, attentive medical personnel, and calm patient-focused care for the community.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200/80">
                  <button
                    onClick={() => onRouteChange('hospital')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 transition-colors"
                  >
                    <span>Explore Healthcare</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          3. AZG BREAD STORY
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-200/80">
                <BrandVisual 
                  type="bread-editorial" 
                  aspect="4:3" 
                  label="Bakery Production & Loaf Showcase"
                  showSlotNotice={guideMode}
                />
              </div>

              {guideMode && (
                <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <strong>Verification Slot [Bread 01]:</strong> Management can insert verified product weights (e.g. 500g / 800g / Family Slice) and official NAFDAC registration numbers when confirmed.
                </div>
              )}
            </div>

            {/* Editorial Content Side */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                AZG Bread Division
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
                Made fresh. Moving farther.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                AZG Bread serves consumers and commercial trade partners through an organized logistics and distribution network. Formulated with carefully selected grains and baked under controlled bakery standards, our loaves deliver wholesome softness and dependable shelf life for families.
              </p>

              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">Consumer Standard</div>
                  <div className="text-base font-bold text-stone-900 mt-1">Soft & Nourishing</div>
                  <div className="text-xs text-stone-500 mt-1">Everyday family breakfast & sandwiches</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">Trade Supply</div>
                  <div className="text-base font-bold text-stone-900 mt-1">Dependable Delivery</div>
                  <div className="text-xs text-stone-500 mt-1">Packaged for retail shelves & key distributors</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onRouteChange('bread')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  <span>Discover AZG Bread</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenTradeEnquiry('AZG Bread')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>Wholesale & Distribution Enquiries</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          4. AZG YOGHURT STORY
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F0F9FF]/60 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-sky-700">
                AZG Yoghurt Division
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
                Refreshment people come back to.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                Formulated for smooth texture, natural taste, and crisp refreshment. AZG Yoghurt is produced under hygienic dairy processing standards to ensure everyday nourishment and consistent quality for active consumers and families.
              </p>

              {/* Placeholder Product Pack Sizes Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Planned Pack Formats & Sizes
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-sky-200/80 shadow-xs">
                    <span className="text-xs font-bold text-sky-900 block">Grab & Go</span>
                    <span className="text-sm font-semibold text-stone-800 mt-0.5 block">Drinking Bottles</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">Chilled retail</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-sky-200/80 shadow-xs">
                    <span className="text-xs font-bold text-sky-900 block">Snack Cups</span>
                    <span className="text-sm font-semibold text-stone-800 mt-0.5 block">Spoonable Pots</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">Individual servings</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-sky-200/80 shadow-xs">
                    <span className="text-xs font-bold text-sky-900 block">Family Pack</span>
                    <span className="text-sm font-semibold text-stone-800 mt-0.5 block">Multi-Serve Jugs</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">Household size</span>
                  </div>
                </div>
              </div>

              {guideMode && (
                <div className="p-3 rounded-lg bg-sky-50 border border-sky-200 text-xs text-sky-900">
                  <strong>Variant Placement Area:</strong> Flavor profiles (Vanilla, Strawberry, Sweetened Natural) and specific volumetric sizes (e.g., 330ml, 500ml, 1L) will populate here upon product launch.
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onRouteChange('yoghurt')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  <span>Discover AZG Yoghurt</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenTradeEnquiry('AZG Yoghurt')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>Become a Stockist</span>
                </button>
              </div>
            </div>

            {/* Right Visual Side */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-sky-200/80">
                <BrandVisual 
                  type="yoghurt-editorial" 
                  aspect="4:3" 
                  label="Chilled Dairy Presentation"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          5. DISTRIBUTION / TRADE (COMMERCIALLY IMPORTANT)
          ======================================================== */}
      <section id="distribution-section" className="py-20 lg:py-28 bg-[#111827] text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">
              Commercial & Trade Partnership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              GROW WITH AZG
            </h2>
            <p className="text-base text-stone-300 mt-3 leading-relaxed">
              Retailers, distributors and institutional buyers need a simple way to start a conversation. AZG welcomes enquiries from businesses interested in stocking or distributing selected AZG products.
            </p>
          </div>

          {/* Three Channel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            <div className="p-7 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between hover:border-stone-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 text-amber-400">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Retailers</h3>
                <p className="text-sm text-stone-400 mt-2">
                  Stock AZG products. Direct access for supermarkets, grocery stores, and fast-moving neighborhood outlets.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-800">
                <button
                  onClick={() => onOpenTradeEnquiry('Both Divisions')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300"
                >
                  <span>Inquire for Retail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between hover:border-stone-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-5 text-red-400">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Distributors</h3>
                <p className="text-sm text-stone-400 mt-2">
                  Explore regional distribution opportunities. High-capacity commercial allocations with structured fleet routing.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-800">
                <button
                  onClick={() => onOpenTradeEnquiry('Both Divisions')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300"
                >
                  <span>Regional Distribution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between hover:border-stone-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-5 text-teal-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Institutions</h3>
                <p className="text-sm text-stone-400 mt-2">
                  Discuss bulk and commercial supply. Reliable scheduled deliveries for schools, corporate catering, and hospitals.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-800">
                <button
                  onClick={() => onOpenTradeEnquiry('Both Divisions')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300"
                >
                  <span>Institutional Supply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Interactive Direct Trade Form */}
          <div className="rounded-2xl bg-stone-900/90 border border-stone-800 p-8 sm:p-10 max-w-4xl mx-auto shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                Fast-Track Commercial Channel
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Start a Trade Enquiry
              </h3>
              <p className="text-sm text-stone-400 mt-2">
                Connect directly with the AZG trade desk to review terms and regional availability.
              </p>
            </div>

            {quickSubmitted ? (
              <div className="text-center py-6 bg-stone-800/60 rounded-xl border border-stone-700 p-6">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Trade Desk Request Logged</h4>
                <p className="text-sm text-stone-300 mt-1 max-w-md mx-auto">
                  Thank you, {quickForm.name}. Your trade enquiry for {quickForm.company || 'your business'} has been captured in our demo trade log.
                </p>
                <button
                  onClick={() => setQuickSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-red-400 hover:text-red-300 underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={quickForm.name}
                      onChange={e => setQuickForm({ ...quickForm, name: e.target.value })}
                      placeholder="e.g. Samuel Okon"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Company / Store Name</label>
                    <input
                      type="text"
                      value={quickForm.company}
                      onChange={e => setQuickForm({ ...quickForm, company: e.target.value })}
                      placeholder="Business Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={quickForm.phone}
                      onChange={e => setQuickForm({ ...quickForm, phone: e.target.value })}
                      placeholder="+234 ..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Business Classification</label>
                    <select
                      value={quickForm.businessType}
                      onChange={e => setQuickForm({ ...quickForm, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Retailer">Retail Store / Supermarket</option>
                      <option value="Distributor">Regional Wholesaler / Distributor</option>
                      <option value="Institution">Institution / Catering Organization</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Product Division</label>
                    <select
                      value={quickForm.interest}
                      onChange={e => setQuickForm({ ...quickForm, interest: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="AZG Bread">AZG Bread</option>
                      <option value="AZG Yoghurt">AZG Yoghurt</option>
                      <option value="Both Divisions">Both Food Divisions</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenTradeEnquiry('Both Divisions')}
                    className="text-xs text-stone-400 hover:text-white underline text-left"
                  >
                    Or open full comprehensive enquiry form &rarr;
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all focus:outline-none"
                  >
                    Start a Trade Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>


      {/* ========================================================
          6. AZG HOSPITAL
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F0FDF4]/50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-teal-200/80">
                <BrandVisual 
                  type="hospital-editorial" 
                  aspect="4:3" 
                  label="Healthcare Facility & Atrium"
                  showSlotNotice={guideMode}
                />
              </div>

              {guideMode && (
                <div className="mt-3 p-3 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-900">
                  <strong>Verification Slot [Hospital 01]:</strong> Management can insert verified clinical accreditation badges, verified hospital address, and emergency ward phone lines.
                </div>
              )}
            </div>

            {/* Editorial Side */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-teal-800">
                AZG Healthcare Division
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
                Care built around people.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                AZG's healthcare division reflects the group's commitment to supporting the communities it serves. Built with clean clinical spaces, compassionate professionals, and patient-centered attention.
              </p>

              {/* Placeholders for verified information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-teal-200/70 shadow-xs">
                  <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs">
                    <HeartPulse className="w-4 h-4 text-teal-600" />
                    <span>Clinical Services</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Structured outpatient and inpatient care designed for community health.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-teal-200/70 shadow-xs">
                  <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Visiting Hours & Guidance</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Visitor guidelines focused on quiet recovery and patient safety.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-teal-200/70 shadow-xs">
                  <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>Location & Access</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Lagos metropolitan facility <span className="text-stone-400">[Official address pending release]</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-teal-200/70 shadow-xs">
                  <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs">
                    <Building2 className="w-4 h-4 text-teal-600" />
                    <span>Administration Desk</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Direct patient liaison and corporate appointment booking.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onRouteChange('hospital')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  <span>Explore AZG Hospital</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onRouteChange('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>Contact the Hospital</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          7. QUALITY / MANUFACTURING
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#991B1B] mb-2">
              Manufacturing & Operating Rigor
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
              Quality is not a department. It is the standard.
            </h2>
            <p className="text-base text-stone-600 mt-3 leading-relaxed">
              Every loaf, bottle, and patient touchpoint operates under rigorous process discipline. We design reliable methods to protect customer confidence and elevate African production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            
            {/* Visual */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <BrandVisual 
                  type="manufacturing-line" 
                  aspect="16:9" 
                  label="Hygienic Production Facility"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

            {/* Quality Pillars */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2.5 text-stone-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-[#991B1B]" />
                  <span>Consistency in Every Batch</span>
                </div>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Calibrated dough fermentation, chilled dairy maturation, and strict temperature thresholds preserve texture and taste.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2.5 text-stone-900 font-bold text-sm">
                  <FileCheck className="w-5 h-5 text-[#991B1B]" />
                  <span>Responsible Production</span>
                </div>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Food-grade packaging materials, hygienic handling guidelines, and continuous inspection across all lines.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2.5 text-stone-900 font-bold text-sm">
                  <HeartPulse className="w-5 h-5 text-[#991B1B]" />
                  <span>Clinical Governance</span>
                </div>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Sterilization safeguards, attentive patient intake, and verified equipment maintenance in our healthcare division.
                </p>
              </div>

            </div>

          </div>

          {/* Reserved Verified Certifications Placement Slot */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Regulatory & Compliance Slot
                </span>
                <h4 className="text-base font-bold text-stone-900 mt-0.5">
                  Verified Certifications & Standards Framework
                </h4>
                <p className="text-xs text-stone-600 mt-1 max-w-xl">
                  This dedicated section is structured for management to display official statutory certifications, laboratory test seals, and regulatory registrations once certified copies are approved for public release.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onRouteChange('quality')}
                  className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  View Quality Policy
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          8. BRAND / COMMUNITY STORY
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#991B1B]">
                Heritage & Presence
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight [text-wrap:balance]">
                Built here. Made to serve farther.
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                AZG represents the ambition of modern African enterprise. Operating with local teams, local production discipline, and nationwide logistics ambitions, we create enduring value across communities.
              </p>

              <div className="space-y-3 pt-2 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-[#991B1B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-stone-900">Local Employment:</strong> Providing purposeful careers across baking operations, dairy microbiology, cold chain fleet, and healthcare support.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-[#991B1B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-stone-900">Economic Value Chain:</strong> Partnering with Nigerian grain suppliers, packaging converters, retailers, and independent trade distributors.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onRouteChange('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#991B1B] hover:text-[#7F1D1D]"
                >
                  <span>Read About AZG Group</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                <BrandVisual 
                  type="community-staff" 
                  aspect="4:3" 
                  label="Workforce & Logistics Staff"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          9. CAREERS
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#991B1B] mb-2">
            Talent & Careers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Build what's next with AZG.
          </h2>
          <p className="text-base text-stone-600 mt-3 max-w-xl mx-auto leading-relaxed">
            We are always seeking disciplined operators, skilled technicians, distribution managers, and healthcare practitioners who value operational excellence.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-stone-50 border border-stone-200 max-w-lg mx-auto text-left">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-5 h-5 text-stone-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700">Talent Registry Notice</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              No active public vacancies are currently listed. Qualified professionals in manufacturing, food science, supply chain logistics, and clinical care are invited to register general interest.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onRouteChange('careers')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* ========================================================
          10. FINAL CTA (LARGE CRIMSON SECTION)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#991B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-200">
              Commercial Connection
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              LET'S BUILD THE NEXT CONNECTION.
            </h2>
            <p className="text-base sm:text-lg text-red-100 max-w-xl mx-auto leading-relaxed">
              Whether you are an established regional wholesaler, retail network, or community healthcare partner, AZG provides the capacity and quality standard to grow together.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenTradeEnquiry('Both Divisions')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#991B1B] hover:bg-stone-100 text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all"
              >
                Become a Distributor
              </button>
              <button
                onClick={() => onRouteChange('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/80 text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
              >
                Contact AZG
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
