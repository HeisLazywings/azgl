import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Menu, X, ChevronDown, ArrowUpRight, Shield } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenTradeEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onRouteChange,
  onOpenTradeEnquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdownOpen, setBusinessesDropdownOpen] = useState(false);

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    setBusinessesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#991B1B]"
            aria-label="AZG Home"
          >
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-[#991B1B] transition-transform duration-200 group-hover:scale-105">
              AZG
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            {/* Our Businesses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setBusinessesDropdownOpen(true)}
              onMouseLeave={() => setBusinessesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 py-2 hover:text-[#991B1B] transition-colors focus:outline-none ${
                  ['bread', 'yoghurt', 'hospital'].includes(currentRoute) ? 'text-[#991B1B] font-semibold' : ''
                }`}
                onClick={() => setBusinessesDropdownOpen(!businessesDropdownOpen)}
              >
                <span>Our Businesses</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${businessesDropdownOpen ? 'rotate-180 text-[#991B1B]' : 'text-stone-400'}`} />
              </button>

              {businessesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-2 space-y-1">
                    <button
                      onClick={() => handleNavClick('bread')}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-stone-50 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-bold text-stone-900 group-hover:text-amber-800">
                          AZG Bread
                        </div>
                        <div className="text-xs text-stone-500">Fresh daily table loaves</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button
                      onClick={() => handleNavClick('yoghurt')}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-stone-50 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-bold text-stone-900 group-hover:text-sky-800">
                          AZG Yoghurt
                        </div>
                        <div className="text-xs text-stone-500">Chilled refreshment & dairy</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button
                      onClick={() => handleNavClick('hospital')}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-stone-50 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-bold text-stone-900 group-hover:text-teal-800">
                          AZG Hospital
                        </div>
                        <div className="text-xs text-stone-500">Care when it matters</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#991B1B] transition-colors ${currentRoute === 'about' ? 'text-[#991B1B] font-semibold' : ''}`}
            >
              About AZG
            </button>

            <button
              onClick={() => handleNavClick('distribution')}
              className={`hover:text-[#991B1B] transition-colors ${currentRoute === 'distribution' ? 'text-[#991B1B] font-semibold' : ''}`}
            >
              Distribution
            </button>

            <button
              onClick={() => handleNavClick('quality')}
              className={`hover:text-[#991B1B] transition-colors ${currentRoute === 'quality' ? 'text-[#991B1B] font-semibold' : ''}`}
            >
              Quality
            </button>

            <button
              onClick={() => handleNavClick('careers')}
              className={`hover:text-[#991B1B] transition-colors ${currentRoute === 'careers' ? 'text-[#991B1B] font-semibold' : ''}`}
            >
              Careers
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#991B1B] transition-colors ${currentRoute === 'contact' ? 'text-[#991B1B] font-semibold' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTradeEnquiry}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#991B1B]/50 whitespace-nowrap"
            >
              <span>Partner With AZG</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Navigation (Cap ≤ 15% sticky height constraint respected) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-18 sm:top-20 z-30 bg-[#FAF8F5] border-b border-stone-300 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="p-5 space-y-4">
            <div className="space-y-1 border-b border-stone-200 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
                Divisions
              </span>
              <button
                onClick={() => handleNavClick('bread')}
                className="w-full text-left py-2 text-stone-900 font-semibold hover:text-[#991B1B] flex items-center justify-between"
              >
                <span>AZG Bread</span>
                <span className="text-xs text-amber-700">Explore &rarr;</span>
              </button>
              <button
                onClick={() => handleNavClick('yoghurt')}
                className="w-full text-left py-2 text-stone-900 font-semibold hover:text-[#991B1B] flex items-center justify-between"
              >
                <span>AZG Yoghurt</span>
                <span className="text-xs text-sky-700">Explore &rarr;</span>
              </button>
              <button
                onClick={() => handleNavClick('hospital')}
                className="w-full text-left py-2 text-stone-900 font-semibold hover:text-[#991B1B] flex items-center justify-between"
              >
                <span>AZG Hospital</span>
                <span className="text-xs text-teal-700">Explore &rarr;</span>
              </button>
            </div>

            <div className="space-y-1.5 border-b border-stone-200 pb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
                Corporate
              </span>
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-1.5 text-stone-800 text-sm font-medium hover:text-[#991B1B]"
              >
                About AZG
              </button>
              <button
                onClick={() => handleNavClick('distribution')}
                className="w-full text-left py-1.5 text-stone-800 text-sm font-medium hover:text-[#991B1B]"
              >
                Distribution & Trade
              </button>
              <button
                onClick={() => handleNavClick('quality')}
                className="w-full text-left py-1.5 text-stone-800 text-sm font-medium hover:text-[#991B1B]"
              >
                Quality Standard
              </button>
              <button
                onClick={() => handleNavClick('careers')}
                className="w-full text-left py-1.5 text-stone-800 text-sm font-medium hover:text-[#991B1B]"
              >
                Careers
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-1.5 text-stone-800 text-sm font-medium hover:text-[#991B1B]"
              >
                Contact
              </button>
            </div>

            <div className="pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTradeEnquiry();
                }}
                className="w-full py-3 bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm"
              >
                Partner With AZG
              </button>
              <p className="text-[11px] text-stone-500 text-center mt-3">
                Private Corporate Presentation · AZG Group
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
