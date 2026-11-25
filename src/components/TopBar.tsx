import { Check, Copy } from 'lucide-react';

interface TopBarProps {
  activeBrandName: string;
  copiedFullBlueprint: boolean;
  onCopyFullBlueprint: () => void;
}

export function TopBar({
  activeBrandName,
  copiedFullBlueprint,
  onCopyFullBlueprint,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#F8FAFC]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-4">
        <a
          href="#studio"
          className="font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
        >
          {activeBrandName}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            href="#studio"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Widget Studio
          </a>
          <a
            href="#play-store"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Names &amp; Play Store
          </a>
          <a
            href="#widgets-50"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            50 Widgets
          </a>
          <a
            href="#strategy"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            UX &amp; Strategy
          </a>
          <a
            href="#roadmap"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Tech &amp; Launch
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onCopyFullBlueprint}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {copiedFullBlueprint ? (
              <>
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Blueprint Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Copy Full Blueprint</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
