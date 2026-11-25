import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  APP_NAME_IDEAS,
  PLAY_STORE_SHORT_DESCRIPTION,
  buildFullPlayStoreDescription,
  type AppNameIdea,
} from '../data/blueprintData';

interface PlayStoreAndNamingSectionProps {
  selectedApp: AppNameIdea;
  onSelectApp: (app: AppNameIdea) => void;
}

export function PlayStoreAndNamingSection({
  selectedApp,
  onSelectApp,
}: PlayStoreAndNamingSectionProps) {
  const [copiedShort, setCopiedShort] = useState(false);
  const [copiedFull, setCopiedFull] = useState(false);
  const [iconError, setIconError] = useState(false);

  const appIconPath = '/src/assets/images/lumagrid_app_icon_1794509530544.jpg';

  const fullDescription = buildFullPlayStoreDescription(selectedApp.name);

  const handleCopy = async (text: string, type: 'short' | 'full') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'short') {
        setCopiedShort(true);
        setTimeout(() => setCopiedShort(false), 2000);
      } else {
        setCopiedFull(true);
        setTimeout(() => setCopiedFull(false), 2000);
      }
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  return (
    <section
      id="play-store"
      className="mx-auto max-w-[1280px] px-6 py-16 border-b border-slate-200"
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          01. Brand Naming &amp; Google Play Store Copy
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Select any of the 10 brandable app concepts to preview its tagline and full Play Store listing dynamically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 10 App Name Options */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100">
          <div className="px-5 py-4">
            <h3 className="font-display text-base font-semibold text-slate-900">
              10 App Name Options
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Click a row to test that brand across the header and store listing.
            </p>
          </div>
          {APP_NAME_IDEAS.map((item, idx) => {
            const isSelected = item.id === selectedApp.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectApp(item)}
                className={`w-full text-left px-5 py-3.5 transition-colors cursor-pointer flex items-start justify-between gap-4 ${
                  isSelected ? 'bg-[#EFF6FF]' : 'hover:bg-slate-50'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item.name}</span>
                    {item.recommended && (
                      <span className="text-xs font-medium text-[#2563EB]">
                        · Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                    {item.tagline}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{item.vibe}</p>
                </div>
                <span
                  className={`mt-1 text-xs font-semibold shrink-0 ${
                    isSelected ? 'text-[#2563EB]' : 'text-slate-400'
                  }`}
                >
                  {isSelected ? 'Active' : 'Select'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Google Play Store Preview */}
        <div className="lg:col-span-7 space-y-6">
          {/* Play Store Header Mock */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-4">
                {iconError ? (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB] text-white font-display text-2xl font-bold">
                    {selectedApp.name.slice(0, 1)}
                  </div>
                ) : (
                  <img
                    src={appIconPath}
                    alt={`${selectedApp.name} Studio app icon`}
                    referrerPolicy="no-referrer"
                    onError={() => setIconError(true)}
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover border border-slate-200/80 shadow-xs"
                  />
                )}
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {selectedApp.name} — Native Widgets &amp; Walls
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Personalization · No KWGT Needed · Ad-Free Widgets
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-slate-500">Target Rating</div>
                <div className="font-mono text-sm font-semibold text-slate-900 tabular-nums">
                  4.8★ · Free (50 Widgets)
                </div>
              </div>
            </div>

            {/* Short Description (< 80 chars) */}
            <div className="mt-5">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-slate-700">
                  Play Store Short Description
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    {PLAY_STORE_SHORT_DESCRIPTION.length} / 80 chars
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(PLAY_STORE_SHORT_DESCRIPTION, 'short')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] cursor-pointer"
                  >
                    {copiedShort ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900">
                {PLAY_STORE_SHORT_DESCRIPTION}
              </p>
            </div>

            {/* Full Play Store Description */}
            <div className="mt-6">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold text-slate-700">
                  Full Play Store Listing (One UI Widgets Style with ✔️ Bullets)
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(fullDescription, 'full')}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  {copiedFull ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#16A34A]" aria-hidden="true" />
                      <span>Copied Listing</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Full Description</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700 rounded-xl border border-slate-200 bg-slate-50/70 p-5 max-h-[520px] overflow-y-auto">
                {fullDescription}
              </pre>
            </div>
          </div>

          {/* App Icon & Adaptive Mask Preview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-display text-base font-semibold text-slate-900">
                  LumaGrid Studio Adaptive Icon System
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Glassmorphism 2×2 modular tiles paired with Material You tonal cobalt refraction over an obsidian squircle.
                </p>
              </div>
              <span className="font-mono text-xs text-slate-500 shrink-0">
                1024×1024 Play Asset
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-4 items-center text-center">
              <div className="flex flex-col items-center gap-2">
                {iconError ? (
                  <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-slate-900 text-white font-display text-xl font-bold">
                    LG
                  </div>
                ) : (
                  <img
                    src={appIconPath}
                    alt="LumaGrid Studio Squircle Launcher Icon"
                    referrerPolicy="no-referrer"
                    className="h-20 w-20 rounded-[22px] object-cover border border-slate-200"
                  />
                )}
                <span className="text-xs font-medium text-slate-600">One UI Squircle</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                {iconError ? (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-white font-display text-xl font-bold">
                    LG
                  </div>
                ) : (
                  <img
                    src={appIconPath}
                    alt="LumaGrid Studio Pixel Circle Icon"
                    referrerPolicy="no-referrer"
                    className="h-20 w-20 rounded-full object-cover border border-slate-200"
                  />
                )}
                <span className="text-xs font-medium text-slate-600">Pixel Circle</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                {iconError ? (
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-slate-900 text-white font-display text-xl font-bold">
                    LG
                  </div>
                ) : (
                  <img
                    src={appIconPath}
                    alt="LumaGrid Studio Play Store 512px Icon"
                    referrerPolicy="no-referrer"
                    className="h-20 w-20 rounded-xl object-cover border border-slate-200"
                  />
                )}
                <span className="text-xs font-medium text-slate-600">Play Store 512px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
