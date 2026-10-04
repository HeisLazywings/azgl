import React from 'react';
import { Camera, Layers, ShieldCheck, HeartPulse, Sparkles, Building2, Truck, Check } from 'lucide-react';

interface BrandVisualProps {
  type: 
    | 'hero-group' 
    | 'bread-hero' 
    | 'bread-editorial' 
    | 'bread-pack' 
    | 'yoghurt-hero' 
    | 'yoghurt-editorial' 
    | 'yoghurt-pack' 
    | 'hospital-hero' 
    | 'hospital-editorial' 
    | 'hospital-care' 
    | 'manufacturing-line' 
    | 'distribution-fleet' 
    | 'community-staff';
  className?: string;
  label?: string;
  aspect?: '16:9' | '4:3' | '3:2' | 'square';
  showSlotNotice?: boolean;
}

export const BrandVisual: React.FC<BrandVisualProps> = ({
  type,
  className = '',
  label,
  aspect = '16:9',
  showSlotNotice = false,
}) => {
  const aspectClass = 
    aspect === '16:9' ? 'aspect-[16/9]' :
    aspect === '4:3' ? 'aspect-[4/3]' :
    aspect === '3:2' ? 'aspect-[3/2]' : 'aspect-square';

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#0F172A] border border-stone-200/20 shadow-sm group select-none ${aspectClass} ${className}`}>
      {/* Background Graphic Compositions */}
      {type === 'hero-group' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C0A0A] via-[#111827] to-[#0A0E17]">
          {/* Architectural Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Glowing Crimson Horizon */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-[#991B1B]/40 via-[#991B1B]/15 to-transparent blur-3xl pointer-events-none" />
          
          {/* Enterprise Silhouette Structure */}
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 675" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Architectural Corporate Towers & Logistics Hub */}
            <path d="M 120 675 L 120 320 L 260 320 L 260 675 Z" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <path d="M 280 675 L 280 240 L 450 240 L 450 675 Z" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            <path d="M 470 675 L 470 180 L 640 180 L 640 675 Z" fill="#1E293B" stroke="#991B1B" strokeWidth="1.5" />
            <path d="M 660 675 L 660 280 L 820 280 L 820 675 Z" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <path d="M 840 675 L 840 360 L 1080 360 L 1080 675 Z" fill="#0F172A" stroke="#475569" strokeWidth="1" />
            
            {/* Horizon & Sky Accent Lines */}
            <line x1="0" y1="520" x2="1200" y2="520" stroke="#991B1B" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
            <line x1="0" y1="540" x2="1200" y2="540" stroke="#475569" strokeWidth="1" opacity="0.4" />
            
            {/* Windows Matrix */}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect key={i} x={495 + (i % 4) * 32} y={220 + Math.floor(i / 4) * 45} width="16" height="24" rx="2" fill="#E2E8F0" opacity="0.15" />
            ))}
          </svg>

          {/* Central Overlay Badge & Visual Focus */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#991B1B]/30 border border-[#991B1B]/60 flex items-center justify-center mb-4 backdrop-blur-md shadow-lg shadow-[#991B1B]/20">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-red-200/80 font-semibold mb-2">
              AZG Diversified Group
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight max-w-xl">
              Industrial Scale. Essential Impact.
            </div>
            <p className="text-sm text-stone-300/80 mt-2 max-w-md">
              Nationwide consumer supply, bakery manufacturing, dairy processing, and healthcare infrastructure.
            </p>
          </div>
        </div>
      )}

      {type === 'bread-hero' || type === 'bread-editorial' ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#271708] via-[#1C120A] to-[#120B06]">
          {/* Warm Amber Wheat Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D97706]/20 rounded-full blur-3xl pointer-events-none" />
          
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Artisanal Loaf & Slice Silhouettes */}
            <g transform="translate(180, 160)">
              {/* Wooden Cutting Board / Table */}
              <rect x="20" y="240" width="400" height="24" rx="8" fill="#78350F" opacity="0.4" />
              {/* Freshly Baked Golden Loaf Silhouette */}
              <path d="M 60 230 C 60 120 120 70 220 70 C 320 70 380 120 380 230 Z" fill="#B45309" opacity="0.8" />
              <path d="M 80 220 C 80 130 130 90 220 90 C 310 90 360 130 360 220 Z" fill="#D97706" opacity="0.9" />
              {/* Bakery Slash Marks */}
              <path d="M 140 130 Q 155 170 160 210" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
              <path d="M 210 120 Q 220 165 225 210" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
              <path d="M 280 130 Q 285 170 290 210" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
              {/* Golden Slices in Foreground */}
              <path d="M 20 230 C 20 160 50 140 90 140 C 130 140 150 160 150 230 Z" fill="#FBBF24" opacity="0.9" stroke="#B45309" strokeWidth="3" />
            </g>
          </svg>

          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              AZG Bread Division
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Freshly Baked. Packaged with Care.
            </h4>
            <p className="text-xs text-stone-300 mt-1 max-w-sm">
              Formulated for everyday freshness, soft texture, and reliable delivery to neighborhood shelves.
            </p>
          </div>
        </div>
      ) : null}

      {type === 'bread-pack' && (
        <div className="absolute inset-0 bg-[#1E140C] flex items-center justify-center p-6">
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#2E1D10] to-[#170E08] border border-amber-600/30 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-28 rounded-lg bg-gradient-to-b from-amber-500 to-amber-700 shadow-md border-2 border-amber-300/40 flex flex-col items-center justify-between p-2 mb-3">
              <span className="text-[10px] font-black tracking-widest text-amber-950 uppercase">AZG</span>
              <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">LOAF</span>
              </div>
              <span className="text-[8px] font-semibold text-amber-100">BREAD</span>
            </div>
            <span className="text-sm font-bold text-white">Commercial Pack Size</span>
            <span className="text-xs text-amber-300/80 mt-0.5">Family & Retail Format</span>
          </div>
        </div>
      )}

      {type === 'yoghurt-hero' || type === 'yoghurt-editorial' ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#061A2B] via-[#09233B] to-[#04121F]">
          {/* Cool Blue Dew / Wave Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#0284C7]/25 rounded-full blur-3xl pointer-events-none" />

          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Chilled Bottles & Dairy Splash Silhouettes */}
            <g transform="translate(240, 140)">
              {/* Milk Splash Crest */}
              <path d="M 40 320 C 100 280 180 340 240 290 C 300 240 360 300 420 280 L 420 360 L 40 360 Z" fill="#E0F2FE" opacity="0.3" />
              {/* Bottle 1: Chilled Drinking Yoghurt */}
              <rect x="80" y="100" width="90" height="200" rx="28" fill="#F8FAFC" opacity="0.95" />
              <rect x="95" y="60" width="60" height="40" rx="8" fill="#0284C7" />
              {/* Bottle Label */}
              <rect x="80" y="160" width="90" height="80" fill="#0284C7" opacity="0.9" />
              <text x="125" y="195" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">AZG</text>
              <text x="125" y="215" fill="#BAE6FD" fontSize="11" textAnchor="middle">YOGHURT</text>
              {/* Bottle 2: Family Pack */}
              <rect x="200" y="80" width="110" height="220" rx="32" fill="#E2E8F0" opacity="0.85" />
              <rect x="220" y="40" width="70" height="40" rx="8" fill="#0369A1" />
              <rect x="200" y="140" width="110" height="90" fill="#0369A1" opacity="0.9" />
              <text x="255" y="180" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">AZG</text>
              <text x="255" y="202" fill="#BAE6FD" fontSize="12" textAnchor="middle">PURE DAIRY</text>
            </g>
          </svg>

          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-1">
              AZG Yoghurt Division
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Smooth Taste. Modern Dairy Craft.
            </h4>
            <p className="text-xs text-stone-300 mt-1 max-w-sm">
              Rich in nourishment, prepared under strictly chilled hygiene controls for crisp, delightful taste.
            </p>
          </div>
        </div>
      ) : null}

      {type === 'yoghurt-pack' && (
        <div className="absolute inset-0 bg-[#071A2C] flex items-center justify-center p-6">
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#0C2A44] to-[#061827] border border-sky-600/30 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-24 rounded-2xl bg-gradient-to-b from-sky-400 to-sky-600 shadow-md border-2 border-sky-200/50 flex flex-col items-center justify-between p-2 mb-3">
              <span className="text-[10px] font-black tracking-widest text-sky-950 uppercase">AZG</span>
              <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">CUP</span>
              </div>
              <span className="text-[8px] font-semibold text-sky-100">YOGHURT</span>
            </div>
            <span className="text-sm font-bold text-white">Chilled SKU Format</span>
            <span className="text-xs text-sky-300/80 mt-0.5">Drinkable & Spoonable</span>
          </div>
        </div>
      )}

      {type === 'hospital-hero' || type === 'hospital-editorial' || type === 'hospital-care' ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#061F1C] via-[#092B27] to-[#041412]">
          {/* Calming Clinical Teal Geometric Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />

          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Modern Hospital Atrium Silhouette */}
            <g transform="translate(160, 120)">
              {/* Clinical Wing Architectural Elevation */}
              <rect x="40" y="80" width="380" height="280" rx="12" fill="#0F2E2A" stroke="#14B8A6" strokeWidth="1" />
              {/* Floor bands */}
              <line x1="40" y1="170" x2="420" y2="170" stroke="#134E4A" strokeWidth="2" />
              <line x1="40" y1="260" x2="420" y2="260" stroke="#134E4A" strokeWidth="2" />
              {/* Glass entrance canopy */}
              <path d="M 160 360 L 160 280 L 300 280 L 300 360 Z" fill="#134E4A" opacity="0.8" />
              <path d="M 130 280 L 330 280 L 350 295 L 110 295 Z" fill="#14B8A6" opacity="0.6" />
              {/* Medical Cross Insignia */}
              <g transform="translate(210, 110)">
                <rect x="14" y="0" width="12" height="40" rx="2" fill="#2DD4BF" opacity="0.9" />
                <rect x="0" y="14" width="40" height="12" rx="2" fill="#2DD4BF" opacity="0.9" />
              </g>
            </g>
          </svg>

          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold mb-1">
              AZG Healthcare Division
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Care Built Around People.
            </h4>
            <p className="text-xs text-stone-300 mt-1 max-w-sm">
              Committed to compassionate clinical service, hygienic facilities, and community health.
            </p>
          </div>
        </div>
      ) : null}

      {type === 'manufacturing-line' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#0F172A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 800 450" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Stainless Steel Conveyor Belt & Automated Packaging */}
            <path d="M 60 320 L 740 320" stroke="#64748B" strokeWidth="12" strokeLinecap="round" />
            <path d="M 60 340 L 740 340" stroke="#334155" strokeWidth="6" />
            {/* Precision Quality Sensors */}
            <rect x="220" y="160" width="80" height="150" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" rx="4" />
            <circle cx="260" cy="200" r="16" fill="#991B1B" opacity="0.8" />
            <rect x="480" y="140" width="100" height="170" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" rx="4" />
            <circle cx="530" cy="180" r="18" fill="#10B981" opacity="0.8" />
            {/* Moving Product Units */}
            <rect x="120" y="270" width="40" height="46" rx="4" fill="#F8FAFC" opacity="0.8" />
            <rect x="360" y="270" width="40" height="46" rx="4" fill="#F8FAFC" opacity="0.8" />
            <rect x="620" y="270" width="40" height="46" rx="4" fill="#F8FAFC" opacity="0.8" />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-1">
              Manufacturing & Logistics
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Standardized Quality Control
            </h4>
            <p className="text-xs text-stone-300 mt-1 max-w-sm">
              Continuous monitoring, sanitary preparation protocols, and traceable batch consistency.
            </p>
          </div>
        </div>
      )}

      {type === 'distribution-fleet' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C0F0F] via-[#241313] to-[#120B0B]">
          <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 800 450" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Delivery Fleet Trucks */}
            <g transform="translate(100, 140)">
              <rect x="40" y="60" width="220" height="140" rx="8" fill="#991B1B" />
              <rect x="260" y="90" width="70" height="110" rx="6" fill="#7F1D1D" />
              <circle cx="90" cy="210" r="26" fill="#1E293B" stroke="#475569" strokeWidth="6" />
              <circle cx="210" cy="210" r="26" fill="#1E293B" stroke="#475569" strokeWidth="6" />
              <circle cx="290" cy="210" r="26" fill="#1E293B" stroke="#475569" strokeWidth="6" />
              <text x="150" y="140" fill="white" fontSize="24" fontWeight="900" letterSpacing="4">AZG</text>
            </g>
          </svg>
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10">
            <span className="text-xs uppercase tracking-widest text-red-300 font-semibold mb-1">
              Distribution Network
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Direct Route to Commercial Channels
            </h4>
            <p className="text-xs text-stone-300 mt-1 max-w-sm">
              Structured supply to retail chains, key wholesalers, and institutional hubs.
            </p>
          </div>
        </div>
      )}

      {type === 'community-staff' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#151D24] via-[#10171D] to-[#0A0F13]">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
            <div className="w-14 h-14 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-stone-300" />
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-1">
              People & Community
            </span>
            <h4 className="text-xl font-bold text-white tracking-tight">
              Proud Nigerian Workforce
            </h4>
            <p className="text-xs text-stone-300 mt-2 max-w-md">
              From our bakery master mixers to dairy technicians, logistics teams, and caring healthcare staff.
            </p>
          </div>
        </div>
      )}

      {/* Management Photo Replacement Notice Tag */}
      {(showSlotNotice || label) && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[11px] font-medium text-stone-200">
          <Camera className="w-3.5 h-3.5 text-stone-400" />
          <span>{label || 'Photo Placement Area'}</span>
        </div>
      )}
    </div>
  );
};
