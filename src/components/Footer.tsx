import React from 'react';
import { PageRoute } from '../types';
import { Shield, Lock, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenTradeEnquiry: (interest?: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions') => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenTradeEnquiry }) => {
  const handleNav = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-stone-300 border-t border-stone-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left group focus:outline-none"
            >
              <span className="text-3xl font-extrabold tracking-tighter text-[#B91C1C] group-hover:text-white transition-colors">
                AZG
              </span>
            </button>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              A diversified African enterprise providing essential consumer goods and vital healthcare services. Built with standard-driven manufacturing and community-centered care.
            </p>
            
            {/* Private Sales Demo Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700/80 text-xs text-stone-400">
              <Lock className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>Private Sales Demo · Confidential Client Preview</span>
            </div>

            {/* Placeholder Contact Details Notice */}
            <div className="space-y-2 pt-2 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>Executive Office & Plant Facilities: Lagos, Nigeria <span className="text-stone-500">(Official physical address pending corporate release)</span></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <span>corporate@azg-group.demo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                <span>+234 1 800 000 AZG (Trade Desk Desk Placeholder)</span>
              </div>
            </div>
          </div>

          {/* Businesses Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Businesses
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('bread')}
                  className="hover:text-white transition-colors text-left"
                >
                  AZG Bread
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('yoghurt')}
                  className="hover:text-white transition-colors text-left"
                >
                  AZG Yoghurt
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hospital')}
                  className="hover:text-white transition-colors text-left"
                >
                  AZG Hospital
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('distribution')}
                  className="hover:text-white transition-colors text-left"
                >
                  Regional Distribution
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About AZG
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quality')}
                  className="hover:text-white transition-colors text-left"
                >
                  Quality Standard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="hover:text-white transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Trade & Commercial Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trade & Supply
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onOpenTradeEnquiry('Both Divisions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Distributor Enquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTradeEnquiry('AZG Bread')}
                  className="hover:text-white transition-colors text-left"
                >
                  Retailer Enquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTradeEnquiry('AZG Yoghurt')}
                  className="hover:text-white transition-colors text-left"
                >
                  Stockist Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTradeEnquiry('Both Divisions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Institutional Supply
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-stone-800/80 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} AZG Group. All rights reserved. Private sales presentation.
          </div>
          <div className="flex items-center gap-6">
            <span>Confidential Sales Preview</span>
            <span aria-hidden="true">·</span>
            <span>No Public Indexation</span>
            <span aria-hidden="true">·</span>
            <span>Placeholder Data Model</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
