import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ArrowLeft, MapPin, Mail, Phone, Clock, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenTradeEnquiry: (interest?: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions') => void;
  guideMode?: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onRouteChange,
  onOpenTradeEnquiry,
  guideMode = false,
}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: 'General Corporate',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
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
              Contact & Departmental Routing
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Connect with AZG
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              We welcome dialogue with trade partners, retail stockists, healthcare collaborators, and institutional procurement teams.
            </p>
          </div>
        </div>
      </section>

      {/* Departmental Desks Grid */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Desk 1: Corporate HQ */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500 block mb-2">Executive Desk</span>
                <h3 className="text-lg font-bold text-stone-900">AZG Corporate Office</h3>
                <p className="text-xs text-stone-500 mt-2">
                  Governance, trade partnerships, and corporate affairs.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#991B1B]" />
                    <span>corporate@azg-group.demo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#991B1B]" />
                    <span>+234 1 800 000 AZG</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desk 2: Bread Division */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800 block mb-2">Bakery Sales</span>
                <h3 className="text-lg font-bold text-stone-900">AZG Bread Desk</h3>
                <p className="text-xs text-stone-500 mt-2">
                  Wholesale allocation, retail crates, and morning bakery delivery.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                    <span>bread@azg-group.demo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-700" />
                    <span>+234 1 800 AZG BREAD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desk 3: Yoghurt Division */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-sky-200/80 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-sky-800 block mb-2">Dairy & Cold-Chain</span>
                <h3 className="text-lg font-bold text-stone-900">AZG Yoghurt Desk</h3>
                <p className="text-xs text-stone-500 mt-2">
                  Stockist contracts, cold-chain deliveries, and supermarket accounts.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-700" />
                    <span>yoghurt@azg-group.demo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sky-700" />
                    <span>+234 1 800 AZG MILK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desk 4: Hospital Desk */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-teal-200/80 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-teal-800 block mb-2">Clinical Care</span>
                <h3 className="text-lg font-bold text-stone-900">AZG Hospital Desk</h3>
                <p className="text-xs text-stone-500 mt-2">
                  Patient admissions, corporate healthcare retainers, and visiting guidance.
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-teal-700" />
                    <span>hospital@azg-group.demo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-teal-700" />
                    <span>+234 1 800 AZG HOSP</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Contact Message Desk & Placeholder Notice */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl border border-stone-200 p-8">
              <h3 className="text-xl font-bold text-stone-900 mb-1">
                Send an Administrative Message
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Our central routing desk will direct your enquiry to the appropriate department.
              </p>

              {sent ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-stone-900">Message Received in Demo System</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Thank you, {form.name}. Your note has been logged for the {form.department} division.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-xs font-semibold text-[#991B1B] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Maryam Bello"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#991B1B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. maryam@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#991B1B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Select Department</label>
                    <select
                      value={form.department}
                      onChange={e => setForm({ ...form, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:border-[#991B1B]"
                    >
                      <option value="General Corporate">AZG Corporate Executive Desk</option>
                      <option value="AZG Bread Commercial">AZG Bread Wholesale & Distribution</option>
                      <option value="AZG Yoghurt Commercial">AZG Yoghurt Stockist Relations</option>
                      <option value="AZG Hospital">AZG Hospital Administration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your enquiry, proposal, or general question..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#991B1B]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-stone-200">
                <span className="text-xs font-bold uppercase tracking-widest text-[#991B1B] block mb-2">
                  Operating Location Notice
                </span>
                <h4 className="text-base font-bold text-stone-900">
                  Physical Plant & Hospital Facilities
                </h4>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  AZG operations are centered in the commercial hub of Lagos, Nigeria. In accordance with private demo guidelines, verified street addresses and cadastral plot coordinates will be updated once official company registration filings are approved by management.
                </p>
                <div className="mt-4 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-500">
                  Physical Location: <strong className="text-stone-800">Lagos State, Nigeria</strong>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <h4 className="text-base font-bold text-stone-900 mb-2">Looking for Commercial Wholesale?</h4>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  For bulk bread orders, regional dairy allocations, or institutional procurement, please use our commercial intake form.
                </p>
                <button
                  onClick={() => onOpenTradeEnquiry('Both Divisions')}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors text-center"
                >
                  Start Trade Enquiry
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
