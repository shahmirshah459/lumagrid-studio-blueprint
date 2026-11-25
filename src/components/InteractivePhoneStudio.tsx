import { useEffect, useState } from 'react';
import {
  BatteryCharging,
  CloudSun,
  Droplets,
  Flame,
  Moon,
  Pause,
  Plane,
  Play,
  RotateCcw,
  Sparkles,
  Sun,
  TrendingUp,
  Wifi,
  Package,
  Music,
} from 'lucide-react';
import { WALLPAPER_PRESETS, type WallpaperPreset } from '../data/blueprintData';

type ThemeMode = 'auto' | 'light' | 'dark' | 'amoled';
type DynamicColorMode = 'light' | 'dark' | 'adaptive';
type PackStyle = 'Minimal' | 'Glass' | 'Pastel' | 'Cyberpunk' | 'Retro' | 'Nature' | 'Anime';
type ContextMode = 'morning' | 'work' | 'night';
type LiveActivityMode = 'flight' | 'delivery' | 'music';
type WidgetFont = 'Outfit' | 'Plus Jakarta Sans' | 'JetBrains Mono';
type PreviewWidgetKind = 'context' | 'live' | 'wellness';

interface MaterialYouSeed {
  id: string;
  label: string;
  lightPrimary: string;
  lightContainer: string;
  lightSurface: string;
  lightText: string;
  lightMuted: string;
  darkPrimary: string;
  darkContainer: string;
  darkSurface: string;
  darkText: string;
  darkMuted: string;
}

const MATERIAL_YOU_SEEDS: MaterialYouSeed[] = [
  {
    id: 'wallpaper',
    label: 'Wallpaper Sync',
    lightPrimary: '#2563EB',
    lightContainer: '#DBEAFE',
    lightSurface: '#FFFFFF',
    lightText: '#0F172A',
    lightMuted: '#475569',
    darkPrimary: '#60A5FA',
    darkContainer: '#1E3A8A',
    darkSurface: '#0F172A',
    darkText: '#F8FAFC',
    darkMuted: '#94A3B8',
  },
  {
    id: 'cobalt',
    label: 'Cobalt Sky',
    lightPrimary: '#1D4ED8',
    lightContainer: '#E0E7FF',
    lightSurface: '#F8FAFC',
    lightText: '#0F172A',
    lightMuted: '#475569',
    darkPrimary: '#38BDF8',
    darkContainer: '#0C4A6E',
    darkSurface: '#0B1120',
    darkText: '#F1F5F9',
    darkMuted: '#94A3B8',
  },
  {
    id: 'sage',
    label: 'Sage Botanical',
    lightPrimary: '#15803D',
    lightContainer: '#DCFCE7',
    lightSurface: '#F7FBF8',
    lightText: '#14532D',
    lightMuted: '#4D7C0F',
    darkPrimary: '#4ADE80',
    darkContainer: '#14532D',
    darkSurface: '#0A160E',
    darkText: '#ECFDF5',
    darkMuted: '#86EFAC',
  },
  {
    id: 'terracotta',
    label: 'Terracotta Dune',
    lightPrimary: '#C2410C',
    lightContainer: '#FFEDD5',
    lightSurface: '#FFFBF7',
    lightText: '#431407',
    lightMuted: '#7C2D12',
    darkPrimary: '#FB923C',
    darkContainer: '#7C2D12',
    darkSurface: '#1C100B',
    darkText: '#FFF7ED',
    darkMuted: '#FDBA74',
  },
  {
    id: 'iris',
    label: 'Iris Mist',
    lightPrimary: '#6D28D9',
    lightContainer: '#EDE9FE',
    lightSurface: '#FAF8FF',
    lightText: '#2E1065',
    lightMuted: '#5B21B6',
    darkPrimary: '#A78BFA',
    darkContainer: '#4C1D95',
    darkSurface: '#130D24',
    darkText: '#F5F3FF',
    darkMuted: '#C4B5FD',
  },
];

function hexToRgbTuple(hex: string): string {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return '255, 255, 255';
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

interface InteractivePhoneStudioProps {
  activeBrandName: string;
  activeTagline: string;
}

export function InteractivePhoneStudio({
  activeBrandName,
  activeTagline,
}: InteractivePhoneStudioProps) {
  const [wallpaper, setWallpaper] = useState<WallpaperPreset>(WALLPAPER_PRESETS[0]);
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [packStyle, setPackStyle] = useState<PackStyle>('Glass');
  const [cornerRadius, setCornerRadius] = useState<number>(22);
  const [glassOpacity, setGlassOpacity] = useState<number>(78);
  const [widgetFont, setWidgetFont] = useState<WidgetFont>('Outfit');

  const [seedId, setSeedId] = useState<string>('wallpaper');
  const [previewWidget, setPreviewWidget] = useState<PreviewWidgetKind>('context');

  const [contextMode, setContextMode] = useState<ContextMode>('morning');
  const [liveMode, setLiveMode] = useState<LiveActivityMode>('flight');
  const [waterMl, setWaterMl] = useState<number>(1250);
  const [stepsCount, setStepsCount] = useState<number>(6840);

  const [pomoSeconds, setPomoSeconds] = useState<number>(24 * 60 + 35);
  const [pomoRunning, setPomoRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!pomoRunning) return;
    const timer = window.setInterval(() => {
      setPomoSeconds((prev) => (prev > 0 ? prev - 1 : 25 * 60));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [pomoRunning]);

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60)
      .toString()
      .padStart(2, '0');
    const s = (totalSec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Resolve active Material You seed palette (dynamic from wallpaper if 'wallpaper' selected)
  const resolveSeedPalette = (): MaterialYouSeed => {
    if (seedId === 'wallpaper') {
      return {
        id: 'wallpaper',
        label: `Wallpaper (${wallpaper.name})`,
        lightPrimary: wallpaper.accentHex,
        lightContainer: wallpaper.seedSurface,
        lightSurface: '#FFFFFF',
        lightText: wallpaper.seedText,
        lightMuted: '#475569',
        darkPrimary: wallpaper.accentHex === '#16A34A' ? '#4ADE80' : wallpaper.accentHex === '#EA580C' ? '#FB923C' : '#60A5FA',
        darkContainer: '#1E293B',
        darkSurface: '#0B1120',
        darkText: '#F8FAFC',
        darkMuted: '#94A3B8',
      };
    }
    return MATERIAL_YOU_SEEDS.find((s) => s.id === seedId) ?? MATERIAL_YOU_SEEDS[0];
  };

  const activeSeed = resolveSeedPalette();

  // Map ThemeMode ('auto' | 'light' | 'dark' | 'amoled') to DynamicColorMode ('light' | 'dark' | 'adaptive')
  const dynamicColorMode: DynamicColorMode =
    themeMode === 'light' ? 'light' : themeMode === 'dark' || themeMode === 'amoled' ? 'dark' : 'adaptive';

  const setDynamicColorMode = (mode: DynamicColorMode) => {
    if (mode === 'light') setThemeMode('light');
    else if (mode === 'dark') setThemeMode('dark');
    else setThemeMode('auto');
  };

  const computePaletteForMode = (mode: ThemeMode) => {
    const alpha = Math.max(0.22, Math.min(0.98, glassOpacity / 100));
    const isDarkWallpaper = wallpaper.id === 'amoled-obsidian';
    const effectiveIsDark = mode === 'dark' || mode === 'amoled' || (mode === 'auto' && isDarkWallpaper);

    // Pack overrides still harmonize with Light/Dark/Adaptive polarity
    if (packStyle === 'Cyberpunk') {
      return {
        bg: effectiveIsDark ? `rgba(9, 11, 20, ${Math.max(alpha, 0.88)})` : `rgba(240, 249, 255, ${Math.max(alpha, 0.9)})`,
        surfaceHex: effectiveIsDark ? '#090B14' : '#F0F9FF',
        containerHex: effectiveIsDark ? '#0F172A' : '#E0F2FE',
        text: effectiveIsDark ? '#F8FAFC' : '#0C4A6E',
        muted: effectiveIsDark ? '#94A3B8' : '#0369A1',
        border: effectiveIsDark ? '1px solid rgba(56, 189, 248, 0.45)' : '1px solid rgba(2, 132, 199, 0.35)',
        borderHex: effectiveIsDark ? '#38BDF8' : '#0284C7',
        accent: effectiveIsDark ? '#38BDF8' : '#0284C7',
        backdrop: 'blur(16px)',
      };
    }
    if (packStyle === 'Pastel') {
      return {
        bg: effectiveIsDark ? `rgba(43, 25, 48, ${Math.max(alpha, 0.88)})` : `rgba(253, 244, 245, ${Math.max(alpha, 0.88)})`,
        surfaceHex: effectiveIsDark ? '#2B1930' : '#FDF4F5',
        containerHex: effectiveIsDark ? '#4A2545' : '#FCE7F3',
        text: effectiveIsDark ? '#FDF2F8' : '#1E1B4B',
        muted: effectiveIsDark ? '#F9A8D4' : '#6B7280',
        border: effectiveIsDark ? '1px solid rgba(244, 114, 182, 0.35)' : '1px solid rgba(251, 207, 232, 0.7)',
        borderHex: effectiveIsDark ? '#F472B6' : '#FBCFE8',
        accent: effectiveIsDark ? '#F472B6' : '#DB2777',
        backdrop: 'blur(14px)',
      };
    }
    if (packStyle === 'Retro') {
      return {
        bg: effectiveIsDark ? `rgba(28, 25, 23, ${Math.max(alpha, 0.94)})` : `rgba(245, 240, 229, ${Math.max(alpha, 0.94)})`,
        surfaceHex: effectiveIsDark ? '#1C1917' : '#F5F0E5',
        containerHex: effectiveIsDark ? '#292524' : '#E7E0D0',
        text: effectiveIsDark ? '#F5F0E5' : '#1C1917',
        muted: effectiveIsDark ? '#A8A29E' : '#57534E',
        border: effectiveIsDark ? '1.5px solid #57534E' : '1.5px solid #292524',
        borderHex: effectiveIsDark ? '#57534E' : '#292524',
        accent: effectiveIsDark ? '#FB923C' : '#C2410C',
        backdrop: 'blur(6px)',
      };
    }
    if (packStyle === 'Nature') {
      return {
        bg: effectiveIsDark ? `rgba(10, 24, 16, ${Math.max(alpha, 0.88)})` : `rgba(240, 253, 244, ${Math.max(alpha, 0.86)})`,
        surfaceHex: effectiveIsDark ? '#0A1810' : '#F0FDF4',
        containerHex: effectiveIsDark ? '#14532D' : '#DCFCE7',
        text: effectiveIsDark ? '#ECFDF5' : '#14532D',
        muted: effectiveIsDark ? '#86EFAC' : '#4D7C0F',
        border: effectiveIsDark ? '1px solid rgba(74, 222, 128, 0.3)' : '1px solid rgba(134, 239, 172, 0.55)',
        borderHex: effectiveIsDark ? '#4ADE80' : '#86EFAC',
        accent: effectiveIsDark ? '#4ADE80' : '#15803D',
        backdrop: 'blur(16px)',
      };
    }
    if (packStyle === 'Anime') {
      return {
        bg: effectiveIsDark ? `rgba(23, 23, 38, ${Math.max(alpha, 0.86)})` : `rgba(250, 245, 255, ${Math.max(alpha, 0.88)})`,
        surfaceHex: effectiveIsDark ? '#171726' : '#FAF5FF',
        containerHex: effectiveIsDark ? '#3B0764' : '#F3E8FF',
        text: effectiveIsDark ? '#FAF5FF' : '#3B0764',
        muted: effectiveIsDark ? '#C4B5FD' : '#6B21A8',
        border: effectiveIsDark ? '1px solid rgba(167, 139, 250, 0.45)' : '1px solid rgba(192, 132, 252, 0.45)',
        borderHex: effectiveIsDark ? '#A78BFA' : '#C084FC',
        accent: effectiveIsDark ? '#C084FC' : '#9333EA',
        backdrop: 'blur(16px)',
      };
    }

    if (mode === 'amoled') {
      return {
        bg: `rgba(0, 0, 0, ${Math.max(alpha, 0.92)})`,
        surfaceHex: '#000000',
        containerHex: '#111827',
        text: '#FFFFFF',
        muted: '#8B95A5',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        borderHex: '#272E3B',
        accent: activeSeed.darkPrimary,
        backdrop: packStyle === 'Glass' ? 'blur(18px)' : 'none',
      };
    }

    if (effectiveIsDark) {
      const rgb = hexToRgbTuple(activeSeed.darkSurface);
      return {
        bg: `rgba(${rgb}, ${alpha})`,
        surfaceHex: activeSeed.darkSurface,
        containerHex: activeSeed.darkContainer,
        text: activeSeed.darkText,
        muted: activeSeed.darkMuted,
        border: '1px solid rgba(255, 255, 255, 0.16)',
        borderHex: '#2A3447',
        accent: activeSeed.darkPrimary,
        backdrop: packStyle === 'Glass' ? 'blur(18px)' : 'blur(6px)',
      };
    }

    const rgb = hexToRgbTuple(activeSeed.lightSurface);
    return {
      bg: `rgba(${rgb}, ${alpha})`,
      surfaceHex: activeSeed.lightSurface,
      containerHex: activeSeed.lightContainer,
      text: activeSeed.lightText,
      muted: activeSeed.lightMuted,
      border: '1px solid rgba(15, 23, 42, 0.11)',
      borderHex: '#CBD5E1',
      accent: activeSeed.lightPrimary,
      backdrop: packStyle === 'Glass' ? 'blur(18px)' : 'blur(6px)',
    };
  };

  const surface = computePaletteForMode(themeMode);
  const lightPreviewSurface = computePaletteForMode('light');
  const darkPreviewSurface = computePaletteForMode('dark');
  const adaptivePreviewSurface = computePaletteForMode('auto');

  const fontCss =
    widgetFont === 'JetBrains Mono'
      ? 'var(--font-mono)'
      : widgetFont === 'Plus Jakarta Sans'
      ? 'var(--font-sans)'
      : 'var(--font-display)';

  const resetStudio = () => {
    setWallpaper(WALLPAPER_PRESETS[0]);
    setThemeMode('auto');
    setSeedId('wallpaper');
    setPackStyle('Glass');
    setCornerRadius(22);
    setGlassOpacity(78);
    setWidgetFont('Outfit');
    setContextMode('morning');
    setLiveMode('flight');
  };

  return (
    <section
      id="studio"
      className="mx-auto max-w-[1280px] px-6 pt-12 pb-16 border-b border-slate-200"
    >
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-medium tracking-wide text-[#2563EB]">
          Native Jetpack Compose &amp; Glance Product Blueprint
        </p>
        <h1
          className="mt-2 font-display font-bold tracking-tight text-slate-900"
          style={{
            fontSize: 'clamp(2.25rem, 4vw, 3.35rem)',
            lineHeight: 1.08,
            textWrap: 'balance',
          }}
        >
          {activeBrandName}: {activeTagline}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-2xl">
          Zero KWGT or third-party plugins. Test the interactive Android widget engine below — switch between Light, Dark, AMOLED, and Material You Auto-Adaptive themes, customize geometry, and tap live widgets directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Live Interactive Android Device Canvas */}
        <div className="lg:col-span-5 flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-100/70 p-6 sm:p-8">
          <div
            className="relative w-full max-w-[356px] overflow-hidden rounded-[40px] border-[6px] border-slate-900 bg-slate-950 shadow-xl"
            style={{ aspectRatio: '9 / 19.2' }}
          >
            {/* Wallpaper Layer */}
            <img
              src={wallpaper.imageUrl}
              alt={`${wallpaper.name} mobile wallpaper`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />

            {/* Android Status Bar */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-3.5 pb-2 text-[11px] font-semibold text-white">
              <span className="tabular-nums">10:46</span>
              <div className="h-3.5 w-3.5 rounded-full bg-black/80 border border-white/15" aria-hidden="true" />
              <div className="flex items-center gap-1.5">
                <Wifi className="h-3 w-3" aria-hidden="true" />
                <span className="tabular-nums">92%</span>
              </div>
            </div>

            {/* Widget Grid inside Phone */}
            <div
              className="relative z-10 flex flex-col gap-2.5 px-3.5 pt-2 pb-4"
              style={{ fontFamily: fontCss }}
            >
              {/* Widget 1: Smart Context Morph Card (4x2) */}
              <div
                className="p-3.5 transition-all duration-200"
                style={{
                  backgroundColor: surface.bg,
                  color: surface.text,
                  border: surface.border,
                  borderRadius: `${cornerRadius}px`,
                  backdropFilter: surface.backdrop,
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: surface.accent }}>
                    {contextMode === 'morning' && <Sun className="h-3.5 w-3.5" aria-hidden="true" />}
                    {contextMode === 'work' && <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />}
                    {contextMode === 'night' && <Moon className="h-3.5 w-3.5" aria-hidden="true" />}
                    <span>
                      {contextMode === 'morning'
                        ? 'Morning Briefing'
                        : contextMode === 'work'
                        ? 'Work Focus Mode'
                        : 'Sleep Wind-Down'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {(['morning', 'work', 'night'] as ContextMode[]).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setContextMode(mode)}
                        className="px-1.5 py-0.5 text-[10px] font-medium rounded transition-colors cursor-pointer capitalize"
                        style={{
                          backgroundColor:
                            contextMode === mode ? surface.accent : 'transparent',
                          color: contextMode === mode ? '#FFFFFF' : surface.muted,
                        }}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mt-1.5 text-[13px] font-semibold leading-snug">
                  {contextMode === 'morning' &&
                    'Clear 19°C · Design Sync at 11:00 · 18 min commute'}
                  {contextMode === 'work' &&
                    'Notifications silenced · 2 deep tasks remaining today'}
                  {contextMode === 'night' &&
                    'Alarm set 07:00 AM · 7h 45m rest · Charging optimized'}
                </p>
              </div>

              {/* Widget 2: Live Activity Card (4x2) */}
              <div
                className="p-3.5 transition-all duration-200"
                style={{
                  backgroundColor: surface.bg,
                  color: surface.text,
                  border: surface.border,
                  borderRadius: `${cornerRadius}px`,
                  backdropFilter: surface.backdrop,
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: surface.muted }}>
                    Live Activity
                  </span>
                  <div className="flex items-center gap-1">
                    {(
                      [
                        { id: 'flight', label: 'Flight' },
                        { id: 'delivery', label: 'Parcel' },
                        { id: 'music', label: 'Music' },
                      ] as { id: LiveActivityMode; label: string }[]
                    ).map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setLiveMode(item.id)}
                        className="px-1.5 py-0.5 text-[10px] font-medium rounded transition-colors cursor-pointer"
                        style={{
                          backgroundColor:
                            liveMode === item.id ? surface.accent : 'transparent',
                          color: liveMode === item.id ? '#FFFFFF' : surface.muted,
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {liveMode === 'flight' && (
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-bold tabular-nums">
                        <Plane className="h-3.5 w-3.5" style={{ color: surface.accent }} aria-hidden="true" />
                        <span>SFO → HND · LH 402</span>
                      </div>
                      <p className="text-[11px] mt-0.5" style={{ color: surface.muted }}>
                        Gate B14 · Boarding in 42m
                      </p>
                    </div>
                    <span
                      className="text-xs font-bold tabular-nums"
                      style={{ color: surface.accent }}
                    >
                      On Time
                    </span>
                  </div>
                )}

                {liveMode === 'delivery' && (
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Package className="h-3.5 w-3.5" style={{ color: surface.accent }} aria-hidden="true" />
                        Out for Delivery
                      </span>
                      <span className="tabular-nums" style={{ color: surface.accent }}>
                        3 stops away
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-400/25 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: '78%', backgroundColor: surface.accent }}
                      />
                    </div>
                  </div>
                )}

                {liveMode === 'music' && (
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                        style={{ backgroundColor: surface.accent }}
                      >
                        <Music className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold">Midnight Horizon</p>
                        <p className="truncate text-[10px]" style={{ color: surface.muted }}>
                          Kiasmos · Lossless
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono tabular-nums" style={{ color: surface.accent }}>
                      02:14
                    </span>
                  </div>
                )}
              </div>

              {/* Row 3: Two 2x2 Interactive Widgets */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Pomodoro Focus Widget (2x2) */}
                <div
                  className="p-3 flex flex-col justify-between transition-all duration-200"
                  style={{
                    backgroundColor: surface.bg,
                    color: surface.text,
                    border: surface.border,
                    borderRadius: `${cornerRadius}px`,
                    backdropFilter: surface.backdrop,
                    minHeight: '112px',
                  }}
                >
                  <div className="flex items-center justify-between text-[11px]" style={{ color: surface.muted }}>
                    <span className="font-medium">Focus</span>
                    <Flame className="h-3.5 w-3.5" style={{ color: surface.accent }} aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-bold tracking-tight tabular-nums my-1">
                    {formatTimer(pomoSeconds)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPomoRunning((r) => !r)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold text-white cursor-pointer"
                      style={{ backgroundColor: surface.accent }}
                    >
                      {pomoRunning ? (
                        <>
                          <Pause className="h-2.5 w-2.5" aria-hidden="true" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-2.5 w-2.5" aria-hidden="true" />
                          <span>Start</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      aria-label="Reset Pomodoro timer"
                      onClick={() => {
                        setPomoRunning(false);
                        setPomoSeconds(25 * 60);
                      }}
                      className="p-1 rounded-md cursor-pointer"
                      style={{ color: surface.muted }}
                    >
                      <RotateCcw className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Hydration + Steps Interactive Widget (2x2) */}
                <div
                  className="p-3 flex flex-col justify-between transition-all duration-200"
                  style={{
                    backgroundColor: surface.bg,
                    color: surface.text,
                    border: surface.border,
                    borderRadius: `${cornerRadius}px`,
                    backdropFilter: surface.backdrop,
                    minHeight: '112px',
                  }}
                >
                  <div className="flex items-center justify-between text-[11px]" style={{ color: surface.muted }}>
                    <span className="font-medium">Wellness</span>
                    <Droplets className="h-3.5 w-3.5" style={{ color: surface.accent }} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-lg font-bold tabular-nums leading-tight">
                      {waterMl} ml
                    </div>
                    <div className="text-[10px] tabular-nums" style={{ color: surface.muted }}>
                      {stepsCount.toLocaleString()} steps
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setWaterMl((w) => (w >= 3000 ? 500 : w + 250));
                      setStepsCount((s) => s + 120);
                    }}
                    className="w-full py-1 rounded-md text-[10px] font-semibold text-white cursor-pointer"
                    style={{ backgroundColor: surface.accent }}
                  >
                    +250 ml Water
                  </button>
                </div>
              </div>

              {/* Row 4: Weather 2.0 + Market Sparkline (4x2) */}
              <div
                className="p-3.5 flex items-center justify-between gap-3 transition-all duration-200"
                style={{
                  backgroundColor: surface.bg,
                  color: surface.text,
                  border: surface.border,
                  borderRadius: `${cornerRadius}px`,
                  backdropFilter: surface.backdrop,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <CloudSun className="h-6 w-6 shrink-0" style={{ color: surface.accent }} aria-hidden="true" />
                  <div>
                    <div className="text-base font-bold tabular-nums leading-none">
                      19°C · Clear
                    </div>
                    <div className="text-[10px] mt-1 tabular-nums" style={{ color: surface.muted }}>
                      AQI 22 Good · UV 3
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-xs font-bold tabular-nums">
                    <TrendingUp className="h-3 w-3" style={{ color: surface.accent }} aria-hidden="true" />
                    <span>BTC $94.2k</span>
                  </div>
                  <div className="text-[10px] font-mono tabular-nums mt-0.5" style={{ color: surface.accent }}>
                    +3.4% 24h
                  </div>
                </div>
              </div>

              {/* Android Dock Indicator */}
              <div className="mt-1 flex items-center justify-center gap-2 text-[10px] text-white/80">
                <BatteryCharging className="h-3 w-3" aria-hidden="true" />
                <span>Pack: {packStyle} · Theme: {themeMode.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Widget Studio Control Panel */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-900">
                  Widget Studio Live Customizer
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Adjust theme engine, pack style, corner radius, transparency, and wallpaper seed in real time.
                </p>
              </div>
              <button
                type="button"
                onClick={resetStudio}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer shrink-0"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset</span>
              </button>
            </div>

            {/* 1. Wallpaper & Material You Seed */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2.5">
                01. Matching Wallpaper &amp; Auto-Adaptive Color Seed
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {WALLPAPER_PRESETS.map((preset) => {
                  const selected = wallpaper.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setWallpaper(preset)}
                      className={`group relative overflow-hidden rounded-xl border text-left transition-all cursor-pointer ${
                        selected
                          ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <img
                          src={preset.imageUrl}
                          alt={preset.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-2 bg-white">
                        <div className="flex items-center justify-between gap-1">
                          <span className="truncate text-xs font-semibold text-slate-900">
                            {preset.name}
                          </span>
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0 border border-black/10"
                            style={{ backgroundColor: preset.accentHex }}
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-[11px] text-slate-500">{preset.collection}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Theme Mode & Style Pack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="block text-xs font-semibold text-slate-700 mb-2">
                  02. Theme Engine
                </span>
                <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-slate-100">
                  {(
                    [
                      { id: 'auto', label: 'Auto-Adaptive' },
                      { id: 'light', label: 'Light' },
                      { id: 'dark', label: 'Dark Slate' },
                      { id: 'amoled', label: 'AMOLED' },
                    ] as { id: ThemeMode; label: string }[]
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setThemeMode(item.id)}
                      className={`px-3 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        themeMode === item.id
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold text-slate-700 mb-2">
                  03. Widget Pack Collection
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      'Minimal',
                      'Glass',
                      'Pastel',
                      'Cyberpunk',
                      'Retro',
                      'Nature',
                      'Anime',
                    ] as PackStyle[]
                  ).map((pack) => (
                    <button
                      key={pack}
                      type="button"
                      onClick={() => setPackStyle(pack)}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer whitespace-nowrap ${
                        packStyle === pack
                          ? 'border-[#2563EB] bg-[#2563EB] text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {pack}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Geometry & Surface Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <label htmlFor="radius-slider" className="font-semibold text-slate-700">
                    Corner Radius
                  </label>
                  <span className="font-mono text-slate-600 tabular-nums">{cornerRadius}dp</span>
                </div>
                <input
                  id="radius-slider"
                  type="range"
                  min={8}
                  max={30}
                  value={cornerRadius}
                  onChange={(e) => setCornerRadius(Number(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <label htmlFor="opacity-slider" className="font-semibold text-slate-700">
                    Surface Opacity
                  </label>
                  <span className="font-mono text-slate-600 tabular-nums">{glassOpacity}%</span>
                </div>
                <input
                  id="opacity-slider"
                  type="range"
                  min={25}
                  max={98}
                  value={glassOpacity}
                  onChange={(e) => setGlassOpacity(Number(e.target.value))}
                  className="w-full accent-[#2563EB] cursor-pointer"
                />
              </div>
            </div>

            {/* 4. Typography Selector */}
            <div>
              <span className="block text-xs font-semibold text-slate-700 mb-2">
                04. Widget Typography Pairing
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['Outfit', 'Plus Jakarta Sans', 'JetBrains Mono'] as WidgetFont[]).map(
                  (font) => (
                    <button
                      key={font}
                      type="button"
                      onClick={() => setWidgetFont(font)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer truncate ${
                        widgetFont === font
                          ? 'border-[#2563EB] bg-[#EFF6FF] text-[#1E40AF]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {font}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span>
              Interactive preview: tap Morning/Work/Night, Start Focus, or +250 ml Water inside the phone.
            </span>
            <span className="font-mono text-slate-700">
              Engine: Jetpack Glance 1.1+ · 0 ads
            </span>
          </div>
        </div>
      </div>

      {/* Dedicated Live Preview Area: Material You Dynamic Color Inspector */}
      <div className="mt-12 pt-10 border-t border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Live Preview — Material You Dynamic Color
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Toggle <strong className="font-semibold text-slate-900">Dynamic Color</strong> modes (Light, Dark, Adaptive) and switch Material You seed palettes to inspect how your current widget design ({packStyle} · {cornerRadius}dp · {glassOpacity}%) renders across system themes.
            </p>
          </div>

          {/* Dynamic Color Mode Segmented Control */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-700">Dynamic Color:</span>
            <div
              role="group"
              aria-label="Dynamic Color Mode"
              className="flex items-center gap-1 p-1 rounded-lg bg-slate-100"
            >
              {(
                [
                  { id: 'light', label: 'Light' },
                  { id: 'dark', label: 'Dark' },
                  { id: 'adaptive', label: 'Adaptive' },
                ] as { id: DynamicColorMode; label: string }[]
              ).map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setDynamicColorMode(mode.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    dynamicColorMode === mode.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Material You Seed Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-700 mr-1">
              Material You Palette:
            </span>
            {MATERIAL_YOU_SEEDS.map((seed) => {
              const isSelected = seedId === seed.id;
              const dotColor =
                seed.id === 'wallpaper'
                  ? wallpaper.accentHex
                  : dynamicColorMode === 'dark'
                  ? seed.darkPrimary
                  : seed.lightPrimary;
              return (
                <button
                  key={seed.id}
                  type="button"
                  onClick={() => setSeedId(seed.id)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'border-[#2563EB] bg-[#EFF6FF] text-[#1E40AF]'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0 border border-black/10"
                    style={{ backgroundColor: dotColor }}
                    aria-hidden="true"
                  />
                  <span>{seed.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100">
            {(
              [
                { id: 'context', label: 'Smart Context' },
                { id: 'live', label: 'Live Activity' },
                { id: 'wellness', label: 'Focus & Steps' },
              ] as { id: PreviewWidgetKind; label: string }[]
            ).map((kind) => (
              <button
                key={kind.id}
                type="button"
                onClick={() => setPreviewWidget(kind.id)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  previewWidget === kind.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {kind.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Preview Stage + Token Readout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: High-Resolution Interactive Live Preview Stage */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-slate-200 min-h-[300px] flex flex-col justify-between p-6 sm:p-8">
            <img
              src={wallpaper.imageUrl}
              alt={`${wallpaper.name} live preview backdrop`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 transition-colors duration-200"
              style={{
                backgroundColor:
                  dynamicColorMode === 'dark'
                    ? 'rgba(2, 6, 23, 0.52)'
                    : dynamicColorMode === 'light'
                    ? 'rgba(248, 250, 252, 0.25)'
                    : 'rgba(15, 23, 42, 0.28)',
              }}
            />

            <div className="relative z-10 flex items-center justify-between text-xs font-medium text-white">
              <span>
                {activeBrandName} Live Preview · {dynamicColorMode.toUpperCase()} · {activeSeed.label}
              </span>
              <span className="font-mono tabular-nums">
                {cornerRadius}dp · {glassOpacity}% · {widgetFont}
              </span>
            </div>

            {/* Active Widget Rendered at Full Clarity */}
            <div className="relative z-10 my-6" style={{ fontFamily: fontCss }}>
              {previewWidget === 'context' && (
                <div
                  className="p-6 transition-all duration-200 shadow-lg"
                  style={{
                    backgroundColor: surface.bg,
                    color: surface.text,
                    border: surface.border,
                    borderRadius: `${cornerRadius}px`,
                    backdropFilter: surface.backdrop,
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: surface.accent }}>
                      <Sun className="h-4 w-4" aria-hidden="true" />
                      <span>Smart Context · Morning Briefing</span>
                    </div>
                    <span className="font-mono text-xs tabular-nums" style={{ color: surface.muted }}>
                      4×2 Glance Grid
                    </span>
                  </div>
                  <div className="mt-3 text-xl sm:text-2xl font-bold tracking-tight">
                    19°C Clear · Design Sync in 25m
                  </div>
                  <p className="mt-1.5 text-sm" style={{ color: surface.muted }}>
                    Commute is 18 min via Highway 101 · 3 unread tasks synced offline.
                  </p>
                </div>
              )}

              {previewWidget === 'live' && (
                <div
                  className="p-6 transition-all duration-200 shadow-lg"
                  style={{
                    backgroundColor: surface.bg,
                    color: surface.text,
                    border: surface.border,
                    borderRadius: `${cornerRadius}px`,
                    backdropFilter: surface.backdrop,
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: surface.accent }}>
                      <Plane className="h-4 w-4" aria-hidden="true" />
                      <span>Live Activity · Lufthansa LH 402</span>
                    </div>
                    <span className="text-xs font-bold" style={{ color: surface.accent }}>
                      On Time
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <div className="text-2xl font-bold tracking-tight tabular-nums">
                      SFO → HND
                    </div>
                    <div className="text-sm font-mono tabular-nums" style={{ color: surface.muted }}>
                      Gate B14 · 42m to board
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-400/25 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-200"
                      style={{ width: '68%', backgroundColor: surface.accent }}
                    />
                  </div>
                </div>
              )}

              {previewWidget === 'wellness' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="p-5 transition-all duration-200 shadow-lg"
                    style={{
                      backgroundColor: surface.bg,
                      color: surface.text,
                      border: surface.border,
                      borderRadius: `${cornerRadius}px`,
                      backdropFilter: surface.backdrop,
                    }}
                  >
                    <div className="flex items-center justify-between text-xs" style={{ color: surface.muted }}>
                      <span>Deep Focus</span>
                      <Flame className="h-4 w-4" style={{ color: surface.accent }} aria-hidden="true" />
                    </div>
                    <div className="mt-2 text-3xl font-bold tabular-nums">
                      {formatTimer(pomoSeconds)}
                    </div>
                    <div className="mt-3 text-xs font-semibold" style={{ color: surface.accent }}>
                      Session 2 of 4 · DND Active
                    </div>
                  </div>

                  <div
                    className="p-5 transition-all duration-200 shadow-lg"
                    style={{
                      backgroundColor: surface.bg,
                      color: surface.text,
                      border: surface.border,
                      borderRadius: `${cornerRadius}px`,
                      backdropFilter: surface.backdrop,
                    }}
                  >
                    <div className="flex items-center justify-between text-xs" style={{ color: surface.muted }}>
                      <span>Daily Hydration</span>
                      <Droplets className="h-4 w-4" style={{ color: surface.accent }} aria-hidden="true" />
                    </div>
                    <div className="mt-2 text-3xl font-bold tabular-nums">
                      {waterMl} ml
                    </div>
                    <div className="mt-3 text-xs font-medium tabular-nums" style={{ color: surface.muted }}>
                      {stepsCount.toLocaleString()} steps logged
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom 3-Mode Quick Comparison Switcher */}
            <div className="relative z-10 grid grid-cols-3 gap-2.5">
              {(
                [
                  { id: 'light', label: 'Light Mode', s: lightPreviewSurface },
                  { id: 'dark', label: 'Dark Mode', s: darkPreviewSurface },
                  { id: 'adaptive', label: 'Adaptive', s: adaptivePreviewSurface },
                ] as { id: DynamicColorMode; label: string; s: typeof surface }[]
              ).map((item) => {
                const isSelected = dynamicColorMode === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDynamicColorMode(item.id)}
                    className={`rounded-xl p-2.5 text-left transition-all cursor-pointer ${
                      isSelected ? 'ring-2 ring-white shadow-md' : 'opacity-85 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: item.s.surfaceHex,
                      color: item.s.text,
                      border: item.s.border,
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold truncate">{item.label}</span>
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.s.accent }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-1 font-mono text-[10px] tabular-nums" style={{ color: item.s.muted }}>
                      {item.s.accent}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Live Material You Token Readout */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-display text-base font-semibold text-slate-900">
                    Active Material You Tokens
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Computed dynamically for {dynamicColorMode} polarity
                  </p>
                </div>
                <span className="font-mono text-xs text-[#2563EB]">
                  {themeMode === 'amoled' ? 'AMOLED' : dynamicColorMode.toUpperCase()}
                </span>
              </div>

              <div className="mt-4 divide-y divide-slate-100 text-xs">
                {[
                  { label: 'Primary Accent', value: surface.accent },
                  { label: 'Tonal Container', value: surface.containerHex },
                  { label: 'Widget Surface Base', value: surface.surfaceHex },
                  { label: 'Primary On-Surface Ink', value: surface.text },
                  { label: 'Secondary Variant Ink', value: surface.muted },
                  { label: 'Outline Rim Token', value: surface.borderHex },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="py-3 flex items-center justify-between gap-4"
                  >
                    <span className="font-medium text-slate-700">{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className="h-4 w-4 rounded border border-slate-300 shrink-0"
                        style={{ backgroundColor: row.value }}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-slate-900 tabular-nums">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
              On Android 12+, Jetpack Glance reads <span className="font-mono text-slate-700">GlanceTheme.colors</span> from system wallpaper extraction, falling back to these tonal tokens on Android 8–11.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
