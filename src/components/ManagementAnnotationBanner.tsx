import React from 'react';
import { Eye, ShieldAlert, Sparkles, SlidersHorizontal, Check } from 'lucide-react';

interface ManagementAnnotationBannerProps {
  guideMode: boolean;
  onToggleGuideMode: () => void;
}

export const ManagementAnnotationBanner: React.FC<ManagementAnnotationBannerProps> = ({
  guideMode,
  onToggleGuideMode,
}) => {
  return (
    <aside aria-label="Demo Status" className="bg-[#1C1917] text-stone-300 border-b border-stone-800 text-xs px-4 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-stone-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-white">AZG Executive Preview:</span>
          <span className="hidden md:inline text-stone-400">
            Private sales demonstration · Unindexed crawler-blocked environment
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleGuideMode}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
              guideMode 
                ? 'bg-[#991B1B] text-white shadow-sm' 
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
            title="Toggle highlight markers for management verification slots"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>{guideMode ? 'Guide Mode: Active' : 'Show Data Slots Guide'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
