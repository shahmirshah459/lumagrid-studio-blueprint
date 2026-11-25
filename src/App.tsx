/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  APP_NAME_IDEAS,
  ASO_KEYWORDS,
  COMPETITOR_MATRIX,
  LAUNCH_PLAN_CHANNELS,
  PLAY_STORE_SHORT_DESCRIPTION,
  ROADMAP_MONTHS,
  SCREEN_FLOW_STEPS,
  SCREENSHOT_CAPTIONS,
  TECH_STACK_MODULES,
  TOP_50_WIDGETS,
  buildFullPlayStoreDescription,
  type AppNameIdea,
} from './data/blueprintData';
import { TopBar } from './components/TopBar';
import { InteractivePhoneStudio } from './components/InteractivePhoneStudio';
import { PlayStoreAndNamingSection } from './components/PlayStoreAndNamingSection';
import { WidgetCatalogSection } from './components/WidgetCatalogSection';
import { StrategyAndDesignSection } from './components/StrategyAndDesignSection';
import { TechRoadmapLaunchSection } from './components/TechRoadmapLaunchSection';

export default function App() {
  const [selectedApp, setSelectedApp] = useState<AppNameIdea>(APP_NAME_IDEAS[0]);
  const [copiedFullBlueprint, setCopiedFullBlueprint] = useState(false);

  const handleCopyFullBlueprint = async () => {
    const markdown = [
      `# ${selectedApp.name} — Next-Gen Android Widget App Blueprint`,
      `Tagline: ${selectedApp.tagline}`,
      '',
      '## 1. 10 App Name Options',
      ...APP_NAME_IDEAS.map((a, i) => `${i + 1}. ${a.name} — ${a.tagline}`),
      '',
      '## 2. Google Play Store Copy',
      `Short Description (${PLAY_STORE_SHORT_DESCRIPTION.length} chars): ${PLAY_STORE_SHORT_DESCRIPTION}`,
      '',
      buildFullPlayStoreDescription(selectedApp.name),
      '',
      '## 3. Top 50 Widget Ideas',
      ...TOP_50_WIDGETS.map(
        (w) => `${w.id}. [${w.category}] ${w.name} (${w.sizes}, ${w.pack}, ${w.tier}) — ${w.description}`
      ),
      '',
      '## 4. Competitor USP Matrix',
      ...COMPETITOR_MATRIX.map(
        (r) => `- ${r.capability}: ${selectedApp.name} (${r.lumaGrid}) vs KWGT (${r.kwgt}) vs Widgetsmith (${r.widgetsmith})`
      ),
      '',
      '## 5. App Screen Flow',
      ...SCREEN_FLOW_STEPS.map((s) => `${s.step}. ${s.title}: ${s.purpose}`),
      '',
      '## 6. Tech Stack',
      ...TECH_STACK_MODULES.map((m) => `- ${m.layer}: ${m.stack} — ${m.rationale}`),
      '',
      '## 7. 6-Month Roadmap',
      ...ROADMAP_MONTHS.map((m) => `- ${m.month} (${m.phase}): ${m.focus} Exit: ${m.exitGate}`),
      '',
      '## 8. ASO Keywords',
      ASO_KEYWORDS.join(', '),
      '',
      '## 9. Screenshot Captions',
      ...SCREENSHOT_CAPTIONS.map((c) => `- ${c.frame}: ${c.headline} — ${c.subcopy}`),
      '',
      '## 10. Launch Plan',
      ...LAUNCH_PLAN_CHANNELS.map((l) => `- ${l.channel}: ${l.goal} | Hook: ${l.hookExample}`),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(markdown);
      setCopiedFullBlueprint(true);
      setTimeout(() => setCopiedFullBlueprint(false), 2200);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <TopBar
        activeBrandName={selectedApp.name}
        copiedFullBlueprint={copiedFullBlueprint}
        onCopyFullBlueprint={handleCopyFullBlueprint}
      />

      <main>
        <InteractivePhoneStudio
          activeBrandName={selectedApp.name}
          activeTagline={selectedApp.tagline}
        />

        <PlayStoreAndNamingSection
          selectedApp={selectedApp}
          onSelectApp={setSelectedApp}
        />

        <WidgetCatalogSection />

        <StrategyAndDesignSection activeBrandName={selectedApp.name} />

        <TechRoadmapLaunchSection />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500">
          <span>
            {selectedApp.name} · Next-Gen Android Widget Studio &amp; Product Strategy Blueprint
          </span>
          <span>
            Built with Jetpack Compose &amp; Glance architecture · Zero widget ads · 7-day refund policy
          </span>
        </div>
      </footer>
    </div>
  );
}
