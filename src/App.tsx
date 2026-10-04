import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { ManagementAnnotationBanner } from './components/ManagementAnnotationBanner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TradeEnquiryModal } from './components/TradeEnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { BreadPage } from './pages/BreadPage';
import { YoghurtPage } from './pages/YoghurtPage';
import { HospitalPage } from './pages/HospitalPage';
import { DistributionPage } from './pages/DistributionPage';
import { AboutPage } from './pages/AboutPage';
import { QualityPage } from './pages/QualityPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const [tradeModalInterest, setTradeModalInterest] = useState<'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions'>('Both Divisions');
  const [guideMode, setGuideMode] = useState(false);

  // Parse path on initial load & popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (['bread', 'yoghurt', 'hospital', 'distribution', 'about', 'quality', 'careers', 'contact'].includes(path)) {
        setCurrentRoute(path as PageRoute);
      } else {
        setCurrentRoute('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleRouteChange = (newRoute: PageRoute) => {
    setCurrentRoute(newRoute);
    const newPath = newRoute === 'home' ? '/' : `/${newRoute}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTradeEnquiry = (interest: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions' = 'Both Divisions') => {
    setTradeModalInterest(interest);
    setTradeModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111827] font-sans selection:bg-[#991B1B] selection:text-white">
      {/* Executive Demo Status Banner with Verification Slots Guide Toggle */}
      <ManagementAnnotationBanner 
        guideMode={guideMode} 
        onToggleGuideMode={() => setGuideMode(!guideMode)} 
      />

      {/* Top Bar Navigation */}
      <Header
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenTradeEnquiry={() => handleOpenTradeEnquiry('Both Divisions')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onRouteChange={handleRouteChange}
            onOpenTradeEnquiry={handleOpenTradeEnquiry}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'bread' && (
          <BreadPage
            onRouteChange={handleRouteChange}
            onOpenTradeEnquiry={handleOpenTradeEnquiry}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'yoghurt' && (
          <YoghurtPage
            onRouteChange={handleRouteChange}
            onOpenTradeEnquiry={handleOpenTradeEnquiry}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'hospital' && (
          <HospitalPage
            onRouteChange={handleRouteChange}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'distribution' && (
          <DistributionPage
            onRouteChange={handleRouteChange}
            onOpenTradeEnquiry={handleOpenTradeEnquiry}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'about' && (
          <AboutPage
            onRouteChange={handleRouteChange}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'quality' && (
          <QualityPage
            onRouteChange={handleRouteChange}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'careers' && (
          <CareersPage
            onRouteChange={handleRouteChange}
            guideMode={guideMode}
          />
        )}
        {currentRoute === 'contact' && (
          <ContactPage
            onRouteChange={handleRouteChange}
            onOpenTradeEnquiry={handleOpenTradeEnquiry}
            guideMode={guideMode}
          />
        )}
      </main>

      {/* Corporate Master Footer */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenTradeEnquiry={handleOpenTradeEnquiry}
      />

      {/* Reusable Trade Enquiry Intake Modal */}
      <TradeEnquiryModal
        isOpen={tradeModalOpen}
        onClose={() => setTradeModalOpen(false)}
        initialInterest={tradeModalInterest}
      />
    </div>
  );
}
