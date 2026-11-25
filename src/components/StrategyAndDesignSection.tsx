import { useState } from 'react';
import {
  COMPETITOR_MATRIX,
  SCREEN_FLOW_STEPS,
  STYLE_GUIDE_TOKENS,
} from '../data/blueprintData';

interface StrategyAndDesignSectionProps {
  activeBrandName: string;
}

export function StrategyAndDesignSection({
  activeBrandName,
}: StrategyAndDesignSectionProps) {
  const [activeThemeIdx, setActiveThemeIdx] = useState(0);
  const [activeFlowIdx, setActiveFlowIdx] = useState(0);

  const selectedTheme = STYLE_GUIDE_TOKENS.themes[activeThemeIdx];
  const selectedStep = SCREEN_FLOW_STEPS[activeFlowIdx];

  return (
    <section
      id="strategy"
      className="mx-auto max-w-[1280px] px-6 py-16 border-b border-slate-200 space-y-16"
    >
      {/* 03. Unique Selling Points vs Competitors & Monetization */}
      <div>
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            03. Competitive USP Matrix &amp; Fair Monetization
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Positioned to bridge the gap between complex KWGT tinkering and rigid static Material You packs.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                <th className="px-5 py-3.5">Capability</th>
                <th className="px-5 py-3.5 text-[#2563EB]">{activeBrandName}</th>
                <th className="px-5 py-3.5">KWGT + Packs</th>
                <th className="px-5 py-3.5">Widgetsmith</th>
                <th className="px-5 py-3.5">Material You Packs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
              {COMPETITOR_MATRIX.map((row) => (
                <tr key={row.capability} className="hover:bg-slate-50/70">
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {row.capability}
                  </td>
                  <td className="px-5 py-4 font-medium text-slate-900 bg-[#EFF6FF]/40">
                    {row.lumaGrid}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{row.kwgt}</td>
                  <td className="px-5 py-4 text-slate-600">{row.widgetsmith}</td>
                  <td className="px-5 py-4 text-slate-600">{row.materialYouApps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fair Monetization Strip */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="text-xs font-medium text-slate-500">Free Forever Tier</div>
            <div className="mt-1 font-display text-lg font-bold text-slate-900 tabular-nums">
              50 Core Widgets + 40 Walls
            </div>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Full clock, weather, notes, steps, Pomodoro, and hydration widgets with zero ads inside widgets and zero watermarks.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="text-xs font-medium text-slate-500">Fair Pro Pass Options</div>
            <div className="mt-1 font-display text-lg font-bold text-slate-900 tabular-nums">
              $2.99/yr or $6.99 Lifetime
            </div>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Unlocks all 500+ widgets, Smart Context Morphing, Live Activities, Studio sharing, and 500+ wallpapers via Play Billing.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="text-xs font-medium text-slate-500">Trust &amp; Refund Policy</div>
            <div className="mt-1 font-display text-lg font-bold text-slate-900 tabular-nums">
              7-Day No-Questions Refund
            </div>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Explicit in-app 1-tap refund guidance alongside Google Play’s refund window builds trust and lowers churn.
            </p>
          </div>
        </div>
      </div>

      {/* 04. UI/UX Style Guide */}
      <div>
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            04. UI/UX Design Language &amp; Style Guide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Blending frosted glassmorphism, Material You dynamic tokens, crisp typography, and spring physics that settle within 200ms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Theme Palette Tokens */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <h3 className="font-display text-base font-semibold text-slate-900">
                Color Tokens by Theme Mode
              </h3>
              <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100">
                {STYLE_GUIDE_TOKENS.themes.map((t, idx) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setActiveThemeIdx(idx)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      activeThemeIdx === idx
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {[
                { label: 'Canvas Background', val: selectedTheme.canvas },
                { label: 'Widget Surface', val: selectedTheme.surface },
                { label: 'Hairline Border', val: selectedTheme.border },
                { label: 'Primary Ink', val: selectedTheme.textPrimary },
                { label: 'Muted Metadata', val: selectedTheme.textMuted },
                { label: 'Primary Accent', val: selectedTheme.accent },
              ].map((token) => (
                <div
                  key={token.label}
                  className="py-3 flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-slate-700">{token.label}</span>
                  <div className="flex items-center gap-2">
                    {token.val.startsWith('#') && (
                      <span
                        className="h-4 w-4 rounded border border-slate-300 shrink-0"
                        style={{ backgroundColor: token.val }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="font-mono text-slate-900">{token.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography & Shape/Motion */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-display text-base font-semibold text-slate-900 mb-4">
                Typography Hierarchy
              </h3>
              <div className="divide-y divide-slate-100 text-xs">
                {STYLE_GUIDE_TOKENS.typography.map((type) => (
                  <div key={type.role} className="py-2.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-slate-900">{type.role}</div>
                      <div className="text-slate-500">{type.font}</div>
                    </div>
                    <div className="text-right font-mono text-slate-700 tabular-nums">
                      <div>{type.size}</div>
                      <div className="text-[11px] text-slate-500">{type.weight}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-display text-base font-semibold text-slate-900 mb-3">
                Shapes &amp; Spring Motion
              </h3>
              <div className="space-y-2 text-xs">
                {STYLE_GUIDE_TOKENS.shapesAndMotion.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="font-mono text-slate-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 05. App Screen Flow */}
      <div>
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            05. End-to-End App Screen Flow
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Designed so a first-time user pins their first custom widget in under 20 seconds without forced sign-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          {SCREEN_FLOW_STEPS.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveFlowIdx(idx)}
              className={`text-left rounded-xl border p-4 transition-colors cursor-pointer ${
                activeFlowIdx === idx
                  ? 'border-[#2563EB] bg-[#EFF6FF]'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="font-mono text-xs font-semibold text-[#2563EB]">
                Screen {step.step}
              </div>
              <div className="mt-1 font-display text-sm font-bold text-slate-900">
                {step.title}
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="font-mono text-xs text-[#2563EB]">
                Step {selectedStep.step}
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">
                {selectedStep.title}
              </h3>
            </div>
            <p className="text-sm font-medium text-slate-600">{selectedStep.purpose}</p>
          </div>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
            {selectedStep.keyElements.map((el) => (
              <li key={el} className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-[#2563EB] mt-1">→</span>
                <span>{el}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500">
            UX Principle: {selectedStep.uxNote}
          </p>
        </div>
      </div>
    </section>
  );
}
