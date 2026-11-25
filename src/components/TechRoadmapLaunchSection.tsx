import { useState } from 'react';
import {
  ASO_KEYWORDS,
  LAUNCH_PLAN_CHANNELS,
  ROADMAP_MONTHS,
  SCREENSHOT_CAPTIONS,
  TECH_STACK_MODULES,
} from '../data/blueprintData';

export function TechRoadmapLaunchSection() {
  const [activeMonthIdx, setActiveMonthIdx] = useState(0);
  const currentMonth = ROADMAP_MONTHS[activeMonthIdx];

  return (
    <section
      id="roadmap"
      className="mx-auto max-w-[1280px] px-6 py-16 space-y-16"
    >
      {/* 06. Tech Stack & Architecture */}
      <div>
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            06. Tech Stack &amp; Battery-First Architecture
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            100% Kotlin + Jetpack Compose + Jetpack Glance. Zero webviews, zero background polling loops, offline-cached by default.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK_MODULES.map((mod) => (
            <div
              key={mod.layer}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="text-xs font-medium text-[#2563EB]">{mod.layer}</div>
              <h3 className="mt-1 font-display text-base font-semibold text-slate-900">
                {mod.stack}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {mod.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 07. 6-Month Development Roadmap */}
      <div>
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            07. 6-Month Development Roadmap
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Phased execution from Glance foundation to 500+ widgets, beta testing, and public Play Store launch.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {ROADMAP_MONTHS.map((m, idx) => (
            <button
              key={m.month}
              type="button"
              onClick={() => setActiveMonthIdx(idx)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                activeMonthIdx === idx
                  ? 'border-[#2563EB] bg-[#2563EB] text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {m.month} · {m.phase.split('&')[0].trim()}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="font-mono text-xs font-semibold text-[#2563EB]">
                {currentMonth.month}
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">
                {currentMonth.phase}
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-500">
              Exit Gate: {currentMonth.exitGate}
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-700">{currentMonth.focus}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {currentMonth.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-[#2563EB] mt-1">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 08. ASO Keywords & 5 Screenshot Captions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-display text-xl font-bold text-slate-900">
            08. High-Intent ASO Keywords
          </h2>
          <p className="mt-1.5 text-xs text-slate-600">
            Target non-Samsung and mainstream Android search queries alongside KWGT-frustrated customizers.
          </p>
          <ol className="mt-5 divide-y divide-slate-100 text-sm">
            {ASO_KEYWORDS.map((kw, i) => (
              <li key={kw} className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-slate-800 font-medium">{kw}</span>
                <span className="font-mono text-xs text-slate-400 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-display text-xl font-bold text-slate-900">
            09. 5 Google Play Screenshot Captions
          </h2>
          <p className="mt-1.5 text-xs text-slate-600">
            Sequenced for 3-second scroll conversion on mobile Play Store product pages.
          </p>
          <div className="mt-5 divide-y divide-slate-100">
            {SCREENSHOT_CAPTIONS.map((cap) => (
              <div key={cap.frame} className="py-3.5">
                <div className="font-mono text-xs text-[#2563EB]">{cap.frame}</div>
                <div className="mt-1 font-display text-base font-bold text-slate-900">
                  {cap.headline}
                </div>
                <p className="mt-0.5 text-xs text-slate-600">{cap.subcopy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 10. Promotional Launch Plan */}
      <div>
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            10. Multi-Channel Launch Playbook
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Coordinated organic distribution across short-form video, Android enthusiast hubs, and Product Hunt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LAUNCH_PLAN_CHANNELS.map((plan) => (
            <article
              key={plan.channel}
              className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-medium text-[#2563EB]">{plan.goal}</div>
                <h3 className="mt-1 font-display text-lg font-bold text-slate-900">
                  {plan.channel}
                </h3>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {plan.tactics.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-slate-400">·</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Launch Hook: </span>
                {plan.hookExample}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
