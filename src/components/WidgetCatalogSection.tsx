import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { TOP_50_WIDGETS, type WidgetSpec } from '../data/blueprintData';

const CATEGORIES: Array<'All' | WidgetSpec['category']> = [
  'All',
  'AI & Smart Context',
  'Live Activities',
  'Health & Wellness',
  'Finance & Crypto',
  'Productivity',
  'Weather 2.0',
  'Smart Home & Device',
  'Social & Photo',
  'Interactive & Fun',
  'Lock Screen & AOD',
];

export function WidgetCatalogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | WidgetSpec['category']>('All');
  const [tierFilter, setTierFilter] = useState<'All' | 'Free' | 'Pro'>('All');

  const filteredWidgets = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return TOP_50_WIDGETS.filter((widget) => {
      const matchesCat =
        selectedCategory === 'All' || widget.category === selectedCategory;
      const matchesTier = tierFilter === 'All' || widget.tier === tierFilter;
      const matchesQuery =
        !q ||
        widget.name.toLowerCase().includes(q) ||
        widget.description.toLowerCase().includes(q) ||
        widget.pack.toLowerCase().includes(q) ||
        widget.category.toLowerCase().includes(q);
      return matchesCat && matchesTier && matchesQuery;
    });
  }, [searchQuery, selectedCategory, tierFilter]);

  return (
    <section
      id="widgets-50"
      className="mx-auto max-w-[1280px] px-6 py-16 border-b border-slate-200"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            02. Top 50 Flagship Widget Ideas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Organized across 10 everyday categories (5 widgets each). Every widget supports Small (2×2), Medium (4×2), Large (4×4), or Extra-Large (4×5) scaling, offline caching, and TalkBack accessibility.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 50 widgets..."
              aria-label="Search 50 widgets"
              className="w-56 rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100">
            {(['All', 'Free', 'Pro'] as const).map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setTierFilter(tier)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  tierFilter === tier
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'border-[#2563EB] bg-[#2563EB] text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-4 text-xs text-slate-500 tabular-nums">
        Showing {filteredWidgets.length} of {TOP_50_WIDGETS.length} widgets
      </div>

      {/* Widget Grid */}
      {filteredWidgets.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-sm font-medium text-slate-900">
            No widgets match "{searchQuery}".
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setTierFilter('All');
            }}
            className="mt-3 rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1D4ED8] cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWidgets.map((widget) => (
            <article
              key={widget.id}
              className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span>{widget.category}</span>
                  <span className="font-mono tabular-nums">
                    #{String(widget.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-slate-900">
                  {widget.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {widget.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono tabular-nums">
                  {widget.sizes} · {widget.pack}
                </span>
                <span
                  className={`font-semibold ${
                    widget.tier === 'Free' ? 'text-[#15803D]' : 'text-[#2563EB]'
                  }`}
                >
                  {widget.tier}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
