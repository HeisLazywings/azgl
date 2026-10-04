import React, { useState } from 'react';
import { PageRoute, TradeEnquiryData } from '../types';
import { BrandVisual } from '../components/BrandVisual';
import { ArrowLeft, ArrowRight, Store, Truck, Building2, CheckCircle2, ShieldCheck, MapPin, Send, HelpCircle } from 'lucide-react';

interface DistributionPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenTradeEnquiry: (interest?: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions') => void;
  guideMode?: boolean;
}

export const DistributionPage: React.FC<DistributionPageProps> = ({
  onRouteChange,
  onOpenTradeEnquiry,
  guideMode = false,
}) => {
  const [formData, setFormData] = useState<TradeEnquiryData>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    locationState: '',
    businessType: 'Distributor',
    productInterest: 'Both Divisions',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof TradeEnquiryData, string>>>({});

  const validate = () => {
    const errs: Partial<Record<keyof TradeEnquiryData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.companyName.trim()) errs.companyName = 'Please enter your company / store name';
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Please enter your phone number';
    if (!formData.emailAddress.trim()) errs.emailAddress = 'Please enter your email';
    if (!formData.locationState.trim()) errs.locationState = 'Please enter your state / city';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setRefId(`AZG-TRD-${Math.floor(100000 + Math.random() * 900000)}`);
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#991B1B]">
                Commercial Partnership Portal
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                GROW WITH AZG
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                “Retailers, distributors and institutional buyers need a simple way to start a conversation. AZG welcomes enquiries from businesses interested in stocking or distributing selected AZG products.”
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('trade-enquiry-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  Start a Trade Enquiry
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('channel-cards');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  Explore Channel Models
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
                <BrandVisual 
                  type="distribution-fleet" 
                  aspect="16:9" 
                  label="Logistics & Fleet Network"
                  showSlotNotice={guideMode}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Three Channel Cards */}
      <section id="channel-cards" className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#991B1B]">
              Distribution Categories
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Choose the Partnership Channel Built for Your Business
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Whether you represent an independent supermarket, a regional logistics fleet, or a large public institution, AZG provides transparent commercial terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Retailers */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Retailers</h3>
                <p className="text-xs font-semibold text-amber-800 mt-1">Stock AZG Products</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Direct stock delivery for supermarkets, grocery stores, convenience outlets, and neighborhood bakeries looking for fast-moving items.
                </p>
                <div className="mt-5 space-y-2 text-xs text-stone-500 pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Regular morning drop-offs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Point-of-sale display coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Competitive retail trade margins</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-200">
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, businessType: 'Retailer', productInterest: 'Both Divisions' }));
                    document.getElementById('trade-enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#991B1B] hover:text-[#7F1D1D]"
                >
                  <span>Select Retail Channel &rarr;</span>
                </button>
              </div>
            </div>

            {/* Distributors */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 text-[#991B1B] flex items-center justify-center mb-5">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Distributors</h3>
                <p className="text-xs font-semibold text-red-800 mt-1">Regional Distribution Opportunities</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  High-capacity commercial supply agreements for established wholesalers with warehousing, logistics vehicles, and sub-distributor networks.
                </p>
                <div className="mt-5 space-y-2 text-xs text-stone-500 pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Territorial trade allocations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Bulk pallet pricing tiers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dedicated account desk manager</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-200">
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, businessType: 'Distributor', productInterest: 'Both Divisions' }));
                    document.getElementById('trade-enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#991B1B] hover:text-[#7F1D1D]"
                >
                  <span>Select Distributor Channel &rarr;</span>
                </button>
              </div>
            </div>

            {/* Institutions */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Institutions</h3>
                <p className="text-xs font-semibold text-teal-800 mt-1">Bulk & Commercial Supply</p>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Contractual procurement for schools, university campuses, corporate dining providers, hospital catering, and event contractors.
                </p>
                <div className="mt-5 space-y-2 text-xs text-stone-500 pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Scheduled batch deliveries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Invoiced commercial accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Rigorous food safety documentation</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-200">
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, businessType: 'Institution', productInterest: 'Both Divisions' }));
                    document.getElementById('trade-enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#991B1B] hover:text-[#7F1D1D]"
                >
                  <span>Select Institutional Supply &rarr;</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Onboarding Process Steps */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#991B1B]">
              Onboarding Process
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">
              How Partner Onboarding Works
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#991B1B]">STEP 01</span>
              <h4 className="text-base font-bold text-stone-900 mt-2">Submit Enquiry</h4>
              <p className="text-xs text-stone-500 mt-1">Share your location, volume expectations, and business details.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#991B1B]">STEP 02</span>
              <h4 className="text-base font-bold text-stone-900 mt-2">Desk Review</h4>
              <p className="text-xs text-stone-500 mt-1">Our commercial manager evaluates territory allocations and logistics schedules.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#991B1B]">STEP 03</span>
              <h4 className="text-base font-bold text-stone-900 mt-2">Commercial Agreement</h4>
              <p className="text-xs text-stone-500 mt-1">Agree upon delivery frequency, pricing structure, and crate terms.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-stone-200">
              <span className="text-xs font-mono font-bold text-[#991B1B]">STEP 04</span>
              <h4 className="text-base font-bold text-stone-900 mt-2">First Delivery</h4>
              <p className="text-xs text-stone-500 mt-1">Fleet routing activates for consistent, reliable product dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Trade Form Section */}
      <section id="trade-enquiry-form" className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Official Trade Desk Intake
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Start Your AZG Trade Enquiry
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-xl mx-auto">
              Complete the intake details below to connect with our commercial team.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 text-stone-900 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Application Logged in Demo System
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mt-1">
                  Thank You, {formData.fullName}
                </h3>
                <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto">
                  Your commercial inquiry for <strong className="text-stone-900">{formData.companyName}</strong> has been assigned demo reference code:
                </p>
                
                <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-xs mx-auto">
                  <div className="text-xs text-stone-500 font-medium">Reference Code</div>
                  <div className="text-lg font-mono font-bold text-[#991B1B] mt-0.5">{refId}</div>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={() => onRouteChange('home')}
                    className="px-6 py-2.5 bg-stone-100 text-stone-700 rounded-lg text-xs font-semibold hover:bg-stone-200 transition-colors"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alaba Davies"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                        errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Business / Company *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Grand Apex Retailers Ltd"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                        errors.companyName ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                      }`}
                    />
                    {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. +234 803 000 0000"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                        errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                      }`}
                    />
                    {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.emailAddress}
                      onChange={e => setFormData({ ...formData, emailAddress: e.target.value })}
                      placeholder="procurement@business.ng"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                        errors.emailAddress ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                      }`}
                    />
                    {errors.emailAddress && <p className="text-xs text-red-600 mt-1">{errors.emailAddress}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      State / City / Hub Location *
                    </label>
                    <input
                      type="text"
                      value={formData.locationState}
                      onChange={e => setFormData({ ...formData, locationState: e.target.value })}
                      placeholder="e.g. Lagos (Ikeja / Lekki / Alaba)"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                        errors.locationState ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                      }`}
                    />
                    {errors.locationState && <p className="text-xs text-red-600 mt-1">{errors.locationState}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Business Classification
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={e => setFormData({ ...formData, businessType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#991B1B]"
                    >
                      <option value="Retailer">Retailer / Supermarket / Store</option>
                      <option value="Distributor">Regional Wholesaler / Distributor</option>
                      <option value="Institution">Institutional Buyer / Catering / Facility</option>
                      <option value="Other">Other Commercial Channel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Product Interest
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {(['AZG Bread', 'AZG Yoghurt', 'Both Divisions'] as const).map(option => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setFormData({ ...formData, productInterest: option })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border text-center transition-all ${
                          formData.productInterest === option
                            ? 'bg-[#991B1B] text-white border-[#991B1B] shadow-sm'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Enquiry Details (Estimated Volumes, Outlets, Delivery Cadence)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={e => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Provide details about your retail outlets, storage capacity, or commercial volume requirements..."
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#991B1B]"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Official Trade Enquiry</span>
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
