import React, { useState } from 'react';
import { X, CheckCircle2, Building, Phone, Mail, MapPin, Briefcase, FileText, Send, ArrowRight } from 'lucide-react';
import { TradeEnquiryData } from '../types';

interface TradeEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions';
}

export const TradeEnquiryModal: React.FC<TradeEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialInterest = 'Both Divisions',
}) => {
  const [formData, setFormData] = useState<TradeEnquiryData>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    locationState: '',
    businessType: 'Retailer',
    productInterest: initialInterest,
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof TradeEnquiryData, string>>>({});

  // Reset when opened with initialInterest
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        productInterest: initialInterest,
      }));
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, initialInterest]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof TradeEnquiryData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company or trade business name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().length < 7) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.locationState.trim()) newErrors.locationState = 'Location / State / City is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate demo reference ID
    const ref = `AZG-TRD-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trade-enquiry-title"
      >
        {/* Header Banner */}
        <div className="bg-[#991B1B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-xs uppercase tracking-widest text-red-200 font-semibold mb-1">
            Commercial & Trade Desk
          </div>
          <h3 id="trade-enquiry-title" className="text-2xl font-bold tracking-tight">
            Start a Trade Enquiry with AZG
          </h3>
          <p className="text-sm text-red-100/90 mt-1 max-w-md">
            Direct channel for retailers, regional distributors, and institutional procurement partners.
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
                Enquiry Recorded Successfully
              </span>
              <h4 className="text-2xl font-bold text-stone-900 mt-1">
                Thank You, {formData.fullName}
              </h4>
              <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto">
                Your trade enquiry for <strong className="text-stone-900">{formData.companyName}</strong> regarding <strong className="text-stone-900">{formData.productInterest}</strong> has been logged in our demo trade desk.
              </p>

              {/* Reference Box */}
              <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-left">
                <div className="text-xs text-stone-500 font-medium">Demo Reference Code</div>
                <div className="text-lg font-mono font-bold text-[#991B1B] mt-0.5">{referenceId}</div>
                <div className="text-xs text-stone-500 mt-2">
                  Trade category: <span className="text-stone-800 font-medium">{formData.businessType}</span> · Location: <span className="text-stone-800 font-medium">{formData.locationState}</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-stone-800 transition-colors"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Babatunde Adeleke"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Crest Supermarkets Ltd"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                      errors.companyName ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                    }`}
                  />
                  {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                </div>

                {/* Phone */}
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

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={e => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="procurement@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                      errors.emailAddress ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                    }`}
                  />
                  {errors.emailAddress && <p className="text-xs text-red-600 mt-1">{errors.emailAddress}</p>}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Operating Location / State / City *
                  </label>
                  <input
                    type="text"
                    value={formData.locationState}
                    onChange={e => setFormData({ ...formData, locationState: e.target.value })}
                    placeholder="e.g. Lagos / Ibadan / Abuja"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 ${
                      errors.locationState ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-red-100 focus:border-[#991B1B]'
                    }`}
                  />
                  {errors.locationState && <p className="text-xs text-red-600 mt-1">{errors.locationState}</p>}
                </div>

                {/* Business Type */}
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
                    <option value="Other">Other Commercial Partner</option>
                  </select>
                </div>
              </div>

              {/* Product Interest */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Product Division Interest
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

              {/* Details */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Enquiry Details & Expected Order Volume
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={e => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about your distribution footprint, outlet count, or bulk requirements..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#991B1B]"
                />
              </div>

              {/* Privacy Demo Notice */}
              <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                🔒 <strong>Private Demo Submission:</strong> Enquiries submitted during this sales demonstration are captured for evaluation purposes. Management will configure live CRM routing upon production launch.
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Trade Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
