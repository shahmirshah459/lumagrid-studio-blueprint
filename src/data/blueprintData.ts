export interface AppNameIdea {
  id: string;
  name: string;
  tagline: string;
  vibe: string;
  recommended?: boolean;
}

export interface WallpaperPreset {
  id: string;
  name: string;
  collection: string;
  imageUrl: string;
  seedColor: string;
  seedSurface: string;
  seedText: string;
  accentHex: string;
}

export interface WidgetSpec {
  id: number;
  name: string;
  category:
    | 'AI & Smart Context'
    | 'Live Activities'
    | 'Health & Wellness'
    | 'Finance & Crypto'
    | 'Productivity'
    | 'Weather 2.0'
    | 'Smart Home & Device'
    | 'Social & Photo'
    | 'Interactive & Fun'
    | 'Lock Screen & AOD';
  sizes: string;
  description: string;
  pack: string;
  tier: 'Free' | 'Pro';
}

export interface CompetitorRow {
  capability: string;
  lumaGrid: string;
  kwgt: string;
  widgetsmith: string;
  materialYouApps: string;
}

export interface ScreenFlowStep {
  step: string;
  title: string;
  purpose: string;
  keyElements: string[];
  uxNote: string;
}

export interface RoadmapMonth {
  month: string;
  phase: string;
  focus: string;
  deliverables: string[];
  exitGate: string;
}

export const APP_NAME_IDEAS: AppNameIdea[] = [
  {
    id: 'lumagrid',
    name: 'LumaGrid',
    tagline: 'Your Android home screen, alive in one tap.',
    vibe: 'Modern flagship · Broad consumer appeal',
    recommended: true,
  },
  {
    id: 'kroma',
    name: 'Kroma',
    tagline: 'Adaptive widgets that breathe with your wallpaper.',
    vibe: 'Design-forward · Material You native',
  },
  {
    id: 'aurawidgets',
    name: 'AuraWidgets',
    tagline: 'Glass, glow, and smart widgets without extra apps.',
    vibe: 'Aesthetic & friendly · High Play Store search match',
  },
  {
    id: 'glancecraft',
    name: 'GlanceCraft',
    tagline: 'Studio-grade Android widgets built for instant speed.',
    vibe: 'Craftsmanship · Appeals to customizers & power users',
  },
  {
    id: 'veloce',
    name: 'Veloce',
    tagline: 'Fluid live activities and zero-lag home widgets.',
    vibe: 'Fast, lightweight · Performance narrative',
  },
  {
    id: 'tessera',
    name: 'Tessera',
    tagline: 'Modular tiles for a calmer, smarter phone.',
    vibe: 'Architectural · Minimalist & editorial',
  },
  {
    id: 'nori',
    name: 'Nori',
    tagline: 'Cozy, clever widgets that adapt to your day.',
    vibe: 'Warm & approachable · Gen-Z / pastel friendly',
  },
  {
    id: 'solis',
    name: 'Solis',
    tagline: 'Widgets shaped by light, context, and rhythm.',
    vibe: 'Weather, wellness & time-aware identity',
  },
  {
    id: 'pebblegrid',
    name: 'PebbleGrid',
    tagline: 'Tactile widgets and matching walls for every Android.',
    vibe: 'Soft hardware-inspired · Playful precision',
  },
  {
    id: 'melo',
    name: 'Melo',
    tagline: 'Clean widgets, live timers, and effortless style.',
    vibe: 'Short, memorable · Everyday mainstream audience',
  },
];

export const WALLPAPER_PRESETS: WallpaperPreset[] = [
  {
    id: 'glass-aurora',
    name: 'Glass Aurora',
    collection: 'Glass',
    imageUrl: '/src/assets/images/wallpaper_glass_aurora_1794509206660.jpg',
    seedColor: '#2563EB',
    seedSurface: '#EFF6FF',
    seedText: '#0F172A',
    accentHex: '#0284C7',
  },
  {
    id: 'amoled-obsidian',
    name: 'Obsidian Rift',
    collection: 'Minimal',
    imageUrl: '/src/assets/images/wallpaper_amoled_obsidian_1794509207039.jpg',
    seedColor: '#3B82F6',
    seedSurface: '#090D16',
    seedText: '#F8FAFC',
    accentHex: '#38BDF8',
  },
  {
    id: 'botanical-mist',
    name: 'Eucalyptus Mist',
    collection: 'Nature',
    imageUrl: '/src/assets/images/wallpaper_botanical_mist_1794509208181.jpg',
    seedColor: '#15803D',
    seedSurface: '#F0FDF4',
    seedText: '#14532D',
    accentHex: '#16A34A',
  },
  {
    id: 'warm-dune',
    name: 'Sculpted Dune',
    collection: 'Minimal',
    imageUrl: '/src/assets/images/wallpaper_warm_dune_1794509208527.jpg',
    seedColor: '#C2410C',
    seedSurface: '#FFF7ED',
    seedText: '#431407',
    accentHex: '#EA580C',
  },
];

export const PLAY_STORE_SHORT_DESCRIPTION =
  '500+ native widgets, live activities & studio editor. No KWGT needed.';

export function buildFullPlayStoreDescription(appName: string): string {
  return `Transform your Android home screen in seconds — zero extra apps, zero complicated setup.

${appName} brings 500+ handcrafted, battery-friendly widgets, Live Activity cards, and 500+ matching wallpapers natively to ANY Android phone (Samsung Galaxy, Google Pixel, OnePlus, Nothing, Xiaomi, Motorola & more).

Just install, tap a widget, and drop it straight onto your home screen. No KWGT, no third-party plugins, and no confusing scripts required.

✨ WHY ${appName.toUpperCase()} FEELS DIFFERENT
✔️ 500+ Standalone Native Widgets — Powered by Jetpack Compose & Glance for instant loading and ultra-low battery use.
✔️ Zero Extra Apps Needed — Works out of the box on every Android launcher.
✔️ Auto-Adaptive Material You — Colors automatically harmonize with your wallpaper, plus Light, Dark & True Black AMOLED themes.
✔️ Built-in Widget Studio — Customize corner radius, glass blur, fonts, gradients, and layout, or share presets with friends.
✔️ Smart Context Widgets — Widgets automatically shift between Morning Briefing, Work Focus, and Night Mode based on time or charging state.
✔️ Live Activity Cards — Track live timers, deliveries, flights, sports scores, and now-playing music right on your home screen.
✔️ Weather 2.0 & Air Quality — Hyperlocal rain radar, UV index, AQI, sunrise/sunset arcs, and moon phases.
✔️ Privacy-First Wellness & Productivity — On-device step counter, hydration log, Pomodoro focus timer, habit streaks, and quick notes.
✔️ Finance & Crypto Mini Charts — Live currency converters, stock watchlists, and crypto sparklines.
✔️ 500+ Matching Wallpapers & Packs — Curated Minimal, Glass, Pastel, Cyberpunk, Retro, Anime, and Nature collections.
✔️ Lock Screen & Always-On Support — Clean glanceable widgets where supported by your device OS.
✔️ 100% Ad-Free Widgets — Never see banners or clutter on your home screen.

📦 50+ FREE WIDGETS INCLUDED
Start right away with 50 thoughtfully crafted free widgets, resizable across Small (2×2), Medium (4×2), Large (4×4), and Extra-Large (4×5) grids. Upgrade anytime with a fair one-time unlock or low-cost pass — backed by a no-questions-asked 7-day refund guarantee.

🔒 BUILT WITH RESPECT FOR YOUR PRIVACY & BATTERY
• No sensitive data collection or background tracking
• Offline-ready caching so clocks, notes, and habits work even in Airplane Mode
• Full TalkBack accessibility & multi-language support

Make your phone feel calm, fast, and unmistakably yours. Download ${appName} today.`;
}

export const TOP_50_WIDGETS: WidgetSpec[] = [
  // 1. AI & Smart Context (5)
  {
    id: 1,
    name: 'Morning & Evening Briefing',
    category: 'AI & Smart Context',
    sizes: '4×2 · 4×4',
    description: 'Combines weather summary, first calendar event, and commute ETA into one calm headline.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 2,
    name: 'AI Quick-Prompt Capsule',
    category: 'AI & Smart Context',
    sizes: '4×1 · 4×2',
    description: 'One-tap voice or text prompt launcher with pinned smart actions like Summarize or Draft Reply.',
    pack: 'Glass',
    tier: 'Pro',
  },
  {
    id: 3,
    name: 'Context Morph Card',
    category: 'AI & Smart Context',
    sizes: '4×2',
    description: 'Automatically rotates from Work Focus at 9am to Gym Recovery at 6pm and Sleep Wind-Down at 10pm.',
    pack: 'Minimal',
    tier: 'Pro',
  },
  {
    id: 4,
    name: 'Smart App & Routine Predictor',
    category: 'AI & Smart Context',
    sizes: '4×2',
    description: 'Surfaces 4 context-aware shortcuts based on headphones connected, charging state, or location.',
    pack: 'Glass',
    tier: 'Free',
  },
  {
    id: 5,
    name: 'Daily Digest Headline',
    category: 'AI & Smart Context',
    sizes: '4×4',
    description: 'Concise 3-bullet summary of your unread reminders, weather shifts, and saved articles.',
    pack: 'Minimal',
    tier: 'Pro',
  },

  // 2. Live Activities (5)
  {
    id: 6,
    name: 'Flight Boarding & Gate Tracker',
    category: 'Live Activities',
    sizes: '4×2',
    description: 'Live flight progress arc, gate number, terminal, and countdown to boarding.',
    pack: 'Minimal',
    tier: 'Pro',
  },
  {
    id: 7,
    name: 'Parcel & Delivery Progress',
    category: 'Live Activities',
    sizes: '4×2',
    description: 'Visual carrier progress bar with out-for-delivery alerts and doorstep ETA.',
    pack: 'Glass',
    tier: 'Pro',
  },
  {
    id: 8,
    name: 'Live Sports Scoreboard',
    category: 'Live Activities',
    sizes: '4×2 · 4×3',
    description: 'Real-time match clock, team crests, and quarter/half status for followed leagues.',
    pack: 'Cyberpunk',
    tier: 'Pro',
  },
  {
    id: 9,
    name: 'Now Playing Glass Deck',
    category: 'Live Activities',
    sizes: '4×2 · 4×3',
    description: 'Adaptive album art tinting, tactile play/skip controls, and subtle waveform scrub.',
    pack: 'Glass',
    tier: 'Free',
  },
  {
    id: 10,
    name: 'Multi-Timer & Stopwatch Stack',
    category: 'Live Activities',
    sizes: '2×2 · 4×2',
    description: 'Run cooking, laundry, and workout countdowns simultaneously with one-tap pause.',
    pack: 'Retro',
    tier: 'Free',
  },

  // 3. Health & Wellness (5)
  {
    id: 11,
    name: 'Step Ring & Distance Arc',
    category: 'Health & Wellness',
    sizes: '2×2 · 4×2',
    description: 'Privacy-first Health Connect step progress ring with 7-day average comparison.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 12,
    name: 'One-Tap Hydration Counter',
    category: 'Health & Wellness',
    sizes: '2×2',
    description: 'Tap +250ml directly on the home screen without opening the app; tracks daily goal.',
    pack: 'Pastel',
    tier: 'Free',
  },
  {
    id: 13,
    name: 'Sleep Quality & Recovery',
    category: 'Health & Wellness',
    sizes: '4×2',
    description: 'Displays last night sleep duration, bedtime consistency, and gentle wake window.',
    pack: 'Nature',
    tier: 'Pro',
  },
  {
    id: 14,
    name: 'Mood Check-In Grid',
    category: 'Health & Wellness',
    sizes: '2×2 · 4×2',
    description: 'Log calm, energized, or stressed in one tap and view your weekly emotional color mosaic.',
    pack: 'Pastel',
    tier: 'Free',
  },
  {
    id: 15,
    name: 'Screen-Time Mindful Balance',
    category: 'Health & Wellness',
    sizes: '2×2 · 4×2',
    description: 'On-device pickup count and focus-vs-social breakdown to curb mindless scrolling.',
    pack: 'Minimal',
    tier: 'Pro',
  },

  // 4. Finance & Crypto (5)
  {
    id: 16,
    name: 'Dual Stock Sparkline',
    category: 'Finance & Crypto',
    sizes: '4×2',
    description: 'Clean mini-charts for two favorite tickers with tabular percentage deltas.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 17,
    name: 'Crypto Pulse Matrix',
    category: 'Finance & Crypto',
    sizes: '4×2 · 4×4',
    description: 'Track BTC, ETH, SOL, or custom tokens with 24h range bars and AMOLED contrast.',
    pack: 'Cyberpunk',
    tier: 'Pro',
  },
  {
    id: 18,
    name: 'Travel Currency Converter',
    category: 'Finance & Crypto',
    sizes: '4×2',
    description: 'Instant offline-cached FX pair rates with quick +10 / +50 unit tap presets.',
    pack: 'Glass',
    tier: 'Free',
  },
  {
    id: 19,
    name: 'Market Open Countdown',
    category: 'Finance & Crypto',
    sizes: '2×2',
    description: 'Shows NYSE, NASDAQ, or London session status and exact countdown to bell.',
    pack: 'Minimal',
    tier: 'Pro',
  },
  {
    id: 20,
    name: 'Monthly Budget Burn Bar',
    category: 'Finance & Crypto',
    sizes: '4×2',
    description: 'Local-only remaining discretionary budget vs. days left in the month.',
    pack: 'Minimal',
    tier: 'Pro',
  },

  // 5. Productivity (5)
  {
    id: 21,
    name: 'Pomodoro Deep Work Timer',
    category: 'Productivity',
    sizes: '2×2 · 4×2',
    description: '25/5 focus countdown with optional brown-noise trigger and session streak counter.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 22,
    name: 'Habit Streak Heatmap',
    category: 'Productivity',
    sizes: '4×2 · 4×4',
    description: 'GitHub-style 12-week consistency tiles with instant daily check-off on tap.',
    pack: 'Nature',
    tier: 'Free',
  },
  {
    id: 23,
    name: 'Interactive To-Do Checklist',
    category: 'Productivity',
    sizes: '4×2 · 4×4',
    description: 'Check off tasks directly from the home screen with smooth strikethrough state.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 24,
    name: 'Sticky Glass Quick Note',
    category: 'Productivity',
    sizes: '2×2 · 4×2',
    description: 'Pin a shopping list, lock code, or idea in crisp legible type over frosted glass.',
    pack: 'Glass',
    tier: 'Free',
  },
  {
    id: 25,
    name: 'Calendar Timeline & Countdowns',
    category: 'Productivity',
    sizes: '4×2 · 4×4',
    description: 'Today’s upcoming meetings plus days-remaining cards for trips, exams, or launches.',
    pack: 'Minimal',
    tier: 'Free',
  },

  // 6. Weather 2.0 (5)
  {
    id: 26,
    name: 'Hyperlocal Hourly Curve',
    category: 'Weather 2.0',
    sizes: '4×2',
    description: 'Smooth temperature curve with rain probability bars for the next 8 hours.',
    pack: 'Glass',
    tier: 'Free',
  },
  {
    id: 27,
    name: 'Air Quality & Pollen Index',
    category: 'Weather 2.0',
    sizes: '2×2 · 4×2',
    description: 'EPA/European AQI meter, PM2.5 reading, and allergy forecast at a glance.',
    pack: 'Nature',
    tier: 'Pro',
  },
  {
    id: 28,
    name: 'Solar Arc & Golden Hour',
    category: 'Weather 2.0',
    sizes: '4×2',
    description: 'Live sun position along the horizon with exact golden hour and blue hour times.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 29,
    name: 'UV Exposure & SPF Advisor',
    category: 'Weather 2.0',
    sizes: '2×2',
    description: 'Real-time UV index dial with peak window alert for outdoor runs.',
    pack: 'Pastel',
    tier: 'Pro',
  },
  {
    id: 30,
    name: 'Live Mini Rain Radar & Moon',
    category: 'Weather 2.0',
    sizes: '4×4',
    description: 'Static-snapshot radar tile updated on interval alongside lunar illumination phase.',
    pack: 'Minimal',
    tier: 'Pro',
  },

  // 7. Smart Home & Device (5)
  {
    id: 31,
    name: 'Bluetooth & Earbuds Battery Hub',
    category: 'Smart Home & Device',
    sizes: '4×2',
    description: 'Shows phone, smartwatch, and left/right earbuds charge percentages cleanly.',
    pack: 'Glass',
    tier: 'Free',
  },
  {
    id: 32,
    name: 'Quick Connectivity Matrix',
    category: 'Smart Home & Device',
    sizes: '2×2 · 4×2',
    description: 'One-tap toggles for Wi-Fi, Bluetooth, DND, Flashlight, and Hotspot.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 33,
    name: 'Storage, RAM & Battery Temp',
    category: 'Smart Home & Device',
    sizes: '4×2',
    description: 'Hardware telemetry card with tabular readouts for free space and battery health.',
    pack: 'Cyberpunk',
    tier: 'Free',
  },
  {
    id: 34,
    name: 'Network Speed & Ping Tile',
    category: 'Smart Home & Device',
    sizes: '2×2',
    description: 'Displays active SSID / 5G signal quality and local link speed on demand.',
    pack: 'Retro',
    tier: 'Pro',
  },
  {
    id: 35,
    name: 'Smart Home Room Scenes',
    category: 'Smart Home & Device',
    sizes: '4×2',
    description: 'Trigger Home Assistant or Matter scenes (Movie Night, All Off) in one tap.',
    pack: 'Glass',
    tier: 'Pro',
  },

  // 8. Social & Photo (5)
  {
    id: 36,
    name: 'Memory Photo Stack',
    category: 'Social & Photo',
    sizes: '2×2 · 4×4',
    description: 'Swipe-styled card stack cycling favorite local albums with zero cloud upload.',
    pack: 'Pastel',
    tier: 'Free',
  },
  {
    id: 37,
    name: 'Couple & Best Friend Distance',
    category: 'Social & Photo',
    sizes: '2×2 · 4×2',
    description: 'Shows partner local time, weather, and shared status doodle via encrypted sync.',
    pack: 'Pastel',
    tier: 'Pro',
  },
  {
    id: 38,
    name: 'Shared Note Canvas',
    category: 'Social & Photo',
    sizes: '4×2',
    description: 'Receive live handwritten notes or quick reminders directly from a paired friend.',
    pack: 'Anime',
    tier: 'Pro',
  },
  {
    id: 39,
    name: 'Polaroid Frame & Caption',
    category: 'Social & Photo',
    sizes: '2×2 · 4×4',
    description: 'Editorial instant-film border with date stamp and customizable location subtitle.',
    pack: 'Retro',
    tier: 'Free',
  },
  {
    id: 40,
    name: 'Birthday & Anniversary Radar',
    category: 'Social & Photo',
    sizes: '4×2',
    description: 'Reads local contacts to count down upcoming celebrations so you never miss one.',
    pack: 'Minimal',
    tier: 'Free',
  },

  // 9. Interactive & Fun (5)
  {
    id: 41,
    name: 'Pocket Pixel Pet Companion',
    category: 'Interactive & Fun',
    sizes: '2×2',
    description: 'Feed, pat, and level up a lightweight pixel pet whose mood tracks your step goal.',
    pack: 'Anime',
    tier: 'Free',
  },
  {
    id: 42,
    name: 'Micro-Game: 2048 / Tic-Tac-Toe',
    category: 'Interactive & Fun',
    sizes: '4×4',
    description: 'Play turn-based taps right inside the widget while waiting in line — zero battery drain.',
    pack: 'Retro',
    tier: 'Pro',
  },
  {
    id: 43,
    name: 'Vinyl Spin & Equalizer Bar',
    category: 'Interactive & Fun',
    sizes: '2×2 · 4×2',
    description: 'Skeuomorphic matte vinyl sleeve with tonearm state and media controls.',
    pack: 'Retro',
    tier: 'Pro',
  },
  {
    id: 44,
    name: 'Word of the Day & Pronunciation',
    category: 'Interactive & Fun',
    sizes: '4×2',
    description: 'Expand vocabulary with curated etymology, phonetic guide, and example sentence.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 45,
    name: 'Stoic & Creative Daily Quote',
    category: 'Interactive & Fun',
    sizes: '4×2',
    description: 'Clean editorial typography paired with curated daily prompts and save-to-notes tap.',
    pack: 'Minimal',
    tier: 'Free',
  },

  // 10. Lock Screen & AOD (5)
  {
    id: 46,
    name: 'AOD Ultra-Thin Digital Clock',
    category: 'Lock Screen & AOD',
    sizes: '4×2',
    description: 'Pure #000000 pixel-shifted clock engineered for zero AMOLED burn-in.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 47,
    name: 'Lock Glance Weather Strip',
    category: 'Lock Screen & AOD',
    sizes: '4×1',
    description: 'Single-line condition, current temp, and precipitation icon for lock screens.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 48,
    name: 'Next Alarm & Sleep Countdown',
    category: 'Lock Screen & AOD',
    sizes: '2×1 · 2×2',
    description: 'Instant reassurance of tomorrow’s alarm time and remaining rest hours.',
    pack: 'Minimal',
    tier: 'Free',
  },
  {
    id: 49,
    name: 'Analog Precision Chronograph',
    category: 'Lock Screen & AOD',
    sizes: '2×2',
    description: 'Minimalist Swiss dial with customizable hand contrast and date aperture.',
    pack: 'Minimal',
    tier: 'Pro',
  },
  {
    id: 50,
    name: 'Quick Action Dock Pair',
    category: 'Lock Screen & AOD',
    sizes: '2×1',
    description: 'Dual monochrome lock shortcuts for Camera, Shazam, Voice Memo, or QR Wallet.',
    pack: 'Minimal',
    tier: 'Free',
  },
];

export const COMPETITOR_MATRIX: CompetitorRow[] = [
  {
    capability: 'Setup Experience',
    lumaGrid: 'Zero-config: 1 tap to place natively',
    kwgt: 'Requires KWGT Pro + complex manual import',
    widgetsmith: 'iOS-only (no native Android app)',
    materialYouApps: 'Basic templates, little layout freedom',
  },
  {
    capability: 'Visual Engine',
    lumaGrid: 'Glass + Material You + AMOLED + Neumorphic',
    kwgt: 'User-dependent; heavy bitmap rendering',
    widgetsmith: 'Clean flat iOS cards; static styles',
    materialYouApps: 'Flat pastel Material 3 shapes only',
  },
  {
    capability: 'Battery & Performance',
    lumaGrid: 'Native Jetpack Glance + WorkManager batching',
    kwgt: 'Higher background wakeups & RAM footprint',
    widgetsmith: 'N/A on Android',
    materialYouApps: 'Lightweight, but often lacks smart caching',
  },
  {
    capability: 'Smart Context & Live Cards',
    lumaGrid: 'Auto Morning/Work/Night morph + Live Flights/Timers',
    kwgt: 'Requires advanced Tasker / Formula scripting',
    widgetsmith: 'Time-scheduled stacks only',
    materialYouApps: 'Static clock/weather widgets only',
  },
  {
    capability: 'Built-in Studio & Sharing',
    lumaGrid: 'Visual editor + 1-link community preset import',
    kwgt: 'Steep developer-style layer tree editor',
    widgetsmith: 'Simple font/color picker',
    materialYouApps: 'Very limited color overrides',
  },
  {
    capability: 'Pricing & Ads',
    lumaGrid: '50 free widgets, zero widget ads, 7-day refund',
    kwgt: 'Paid Pro key + paid third-party packs',
    widgetsmith: 'Recurring monthly subscription',
    materialYouApps: 'Often ad-supported or fragmented packs',
  },
];

export const STYLE_GUIDE_TOKENS = {
  themes: [
    {
      name: 'Light Daylight',
      canvas: '#F8FAFC',
      surface: '#FFFFFF',
      border: '#E2E8F0',
      textPrimary: '#0F172A',
      textMuted: '#64748B',
      accent: '#2563EB',
    },
    {
      name: 'Dark Slate',
      canvas: '#0B0F17',
      surface: '#151B26',
      border: '#242E42',
      textPrimary: '#F8FAFC',
      textMuted: '#94A3B8',
      accent: '#38BDF8',
    },
    {
      name: 'True AMOLED',
      canvas: '#000000',
      surface: '#090B10',
      border: '#1A1F2B',
      textPrimary: '#FFFFFF',
      textMuted: '#8B95A5',
      accent: '#60A5FA',
    },
    {
      name: 'Auto-Adaptive (Material You)',
      canvas: 'Dynamic Wallpaper Seed',
      surface: 'Tonal Surface Container (88% Alpha)',
      border: 'Outline Variant (18% Alpha)',
      textPrimary: 'On-Surface High Contrast',
      textMuted: 'On-Surface Variant',
      accent: 'Primary Dynamic Color Token',
    },
  ],
  typography: [
    { role: 'Widget Hero Numerals (Clock / Temp)', font: 'Outfit / JetBrains Mono', size: '36sp – 52sp', weight: '600 SemiBold · tabular-nums' },
    { role: 'Widget Card Headline', font: 'Outfit', size: '16sp – 20sp', weight: '600 SemiBold · -0.02em' },
    { role: 'Body & Briefings', font: 'Plus Jakarta Sans', size: '13sp – 14sp', weight: '400 Regular / 500 Medium' },
    { role: 'Micro Metadata & Units', font: 'JetBrains Mono', size: '11sp – 12sp', weight: '500 Medium · tabular-nums' },
  ],
  shapesAndMotion: [
    { label: 'Outer Widget Radius', value: '24dp default (Studio range 8dp – 32dp)' },
    { label: 'Nested Card Radius', value: '14dp (maintains r_inner = r_outer - 10dp padding)' },
    { label: 'Glass Surface Stack', value: 'Android 12+ RenderEffect blur (20dp) + 1px 14% white rim stroke' },
    { label: 'Spring Animation Curve', value: 'Spring(dampingRatio = 0.78f, stiffness = 380f) · settles ≤ 200ms' },
  ],
};

export const SCREEN_FLOW_STEPS: ScreenFlowStep[] = [
  {
    step: '01',
    title: 'Onboarding (20 Seconds)',
    purpose: 'Instant value before asking for permissions.',
    keyElements: [
      'Auto-detect wallpaper palette & device launcher (One UI, Pixel, Nothing, etc.)',
      '1-tap Theme Preference (Auto-Adaptive, Glass, Minimal, AMOLED)',
      'Contextual permission primer: only request Health/Location when placing that specific widget',
    ],
    uxNote: 'No forced account creation. Users reach the widget gallery in 2 taps.',
  },
  {
    step: '02',
    title: 'Home Gallery & Packs',
    purpose: 'Visual browsing without overwhelm.',
    keyElements: [
      'Featured Smart Context & Live Activity carousel at top',
      'Category filter strip (Clock, Weather 2.0, Wellness, Finance, Fun)',
      'Curated Style Packs (Minimal, Glass, Pastel, Cyberpunk, Retro, Anime, Nature) + Matching Wallpapers tab',
    ],
    uxNote: 'Tap any widget for live interactive preview across 2×2, 4×2, and 4×4 sizes before pinning.',
  },
  {
    step: '03',
    title: 'Widget Studio Editor',
    purpose: 'Deep personalization without KWGT complexity.',
    keyElements: [
      'Real-time canvas preview over user’s actual current wallpaper',
      '4 intuitive controls: Palette/Material You, Corner Radius & Glass Blur, Typography Pair, Data Source',
      'One-tap "Add to Home Screen" via RequestPinAppWidget + Share Preset Code / QR',
    ],
    uxNote: 'Every edit auto-saves locally as a reusable preset.',
  },
  {
    step: '04',
    title: 'Settings, Sync & Pro Pass',
    purpose: 'Transparency, battery peace of mind, and fair upgrade.',
    keyElements: [
      'Battery & Refresh Optimizer (15m / 30m / Smart Charging-Aware intervals)',
      'Offline Cache & Local Backup / Restore JSON',
      'Transparent Pro Pass screen (50 free forever · Lifetime or Annual · 7-day refund guarantee)',
    ],
    uxNote: 'Includes explicit Privacy Dashboard showing zero third-party ad SDKs.',
  },
];

export const TECH_STACK_MODULES = [
  {
    layer: 'UI & Widget Engine',
    stack: 'Jetpack Compose + Jetpack Glance (AppWidgets)',
    rationale: 'Single Kotlin codebase for both in-app Studio and native RemoteViews widgets; fast cold starts and zero external dependencies.',
  },
  {
    layer: 'Design & Dynamic Color',
    stack: 'Material 3 DynamicColor + Palette API + RenderEffect',
    rationale: 'Extracts wallpaper seed colors automatically on Android 12+ and gracefully falls back to curated tonal palettes on Android 8–11.',
  },
  {
    layer: 'Background & Battery',
    stack: 'WorkManager + GlanceStateDefinition + AlarmManager (Exact only for timers)',
    rationale: 'Coalesces network calls, skips updates when screen is off or Battery Saver is active, keeping daily battery drain under 0.8%.',
  },
  {
    layer: 'Local Data & Offline',
    stack: 'Room Database + Proto DataStore + Kotlinx Serialization',
    rationale: 'Caches weather, FX rates, habits, and notes locally so every widget renders immediately offline.',
  },
  {
    layer: 'Networking & Integrations',
    stack: 'Ktor Client + Health Connect SDK + OpenWeather / Tomorrow.io + Yahoo/CoinGecko APIs',
    rationale: 'Lightweight coroutine-based HTTP caching with ETags to slash data usage and server costs.',
  },
  {
    layer: 'DI, Performance & Billing',
    stack: 'Hilt + Baseline Profiles + Play Billing Library 7',
    rationale: 'AOT-compiled startup paths reduce app launch latency by ~30% across mid-range Android devices.',
  },
];

export const ROADMAP_MONTHS: RoadmapMonth[] = [
  {
    month: 'Month 1',
    phase: 'Foundation & Design System',
    focus: 'Core Compose + Glance architecture, Material You token engine, and Widget Studio canvas.',
    deliverables: [
      'Glance multi-size grid renderer (2×2, 4×2, 4×4, 4×5)',
      'Light, Dark, AMOLED, and Auto-Adaptive theme switcher',
      'Room + DataStore offline state layer & WorkManager scheduler',
    ],
    exitGate: '20 core clock/battery/note widgets pinned smoothly on Pixel, One UI, and MIUI.',
  },
  {
    month: 'Month 2',
    phase: 'Core 50 Free Widgets & Weather 2.0',
    focus: 'Build the initial 50 free widgets, Weather 2.0 pipeline, and Productivity suite.',
    deliverables: [
      'Hyperlocal weather, AQI, UV, and solar arc widgets',
      'Pomodoro timer, habit heatmap, to-do checklist, and calendar agenda',
      '100 initial matching static & gradient wallpapers',
    ],
    exitGate: 'Cold widget render < 120ms; battery benchmark < 1% per 24h.',
  },
  {
    month: 'Month 3',
    phase: 'Widget Studio & Style Packs',
    focus: 'Ship full visual editor, preset sharing, and 4 flagship theme packs.',
    deliverables: [
      'Real-time Corner Radius, Glass Blur, Font, and Color sliders',
      'Minimal, Glass, Pastel, and Cyberpunk packs (250+ total widgets)',
      '1-link preset import/export & Play Billing 7 Pro Pass integration',
    ],
    exitGate: 'Internal closed alpha with 250 Android customization enthusiasts.',
  },
  {
    month: 'Month 4',
    phase: 'Live Activities, AI Context & Wellness',
    focus: 'Differentiation features that outperform standard widget packs.',
    deliverables: [
      'Smart Context Morph widget (Morning / Work / Night auto-switching)',
      'Live Activity cards (flights, parcel tracking, sports, media deck)',
      'Health Connect step/sleep integration & Finance/Crypto sparklines',
    ],
    exitGate: 'Open Beta on Google Play (1,500+ testers) & TalkBack accessibility audit.',
  },
  {
    month: 'Month 5',
    phase: 'Social Widgets, Wallpaper Vault & Polish',
    focus: 'Expand to 500+ widgets/wallpapers, couple/photo widgets, and localization.',
    deliverables: [
      'Photo Memory Stack, Couple Distance widget, and Retro/Anime/Nature packs',
      '500+ curated & AI-assisted wallpapers + matching icon pack',
      'Localization into top 10 languages + Baseline Profile optimization',
    ],
    exitGate: 'Crash-free sessions > 99.7% across Android 10–15.',
  },
  {
    month: 'Month 6',
    phase: 'Public Launch & Growth Loops',
    focus: 'Store conversion optimization, creator launch wave, and Community Gallery.',
    deliverables: [
      'Google Play Production rollout + A/B tested store icon & screenshots',
      'Community Preset Gallery live for user-submitted setups',
      'TikTok, YouTube Shorts, Reddit, and Product Hunt launch campaign',
    ],
    exitGate: 'Hit Day-7 retention ≥ 38% and 4.7★+ initial Play Store rating.',
  },
];

export const ASO_KEYWORDS = [
  'android widgets',
  'material you widgets',
  'glass widgets android',
  'aesthetic home screen',
  'kwgt alternative no extra app',
  'one ui style widgets',
  'live activity widget android',
  'amoled clock weather widget',
  'custom widget maker',
  'minimalist android setup',
  'pomodoro habit widget',
  'couple photo widget',
];

export const SCREENSHOT_CAPTIONS = [
  {
    frame: '01 · Hero Setup',
    headline: '500+ Native Widgets. Zero Extra Apps.',
    subcopy: 'Tap once to place on Pixel, Galaxy, Nothing, or any Android.',
  },
  {
    frame: '02 · Auto-Adaptive',
    headline: 'Colors That Match Every Wallpaper.',
    subcopy: 'Switch effortlessly between Glass, Material You, Light, and True AMOLED.',
  },
  {
    frame: '03 · Smart Context & Live',
    headline: 'Widgets That Move With Your Day.',
    subcopy: 'Morning briefings, live flight cards, timers, and hyperlocal weather.',
  },
  {
    frame: '04 · Widget Studio',
    headline: 'Your Style, Fine-Tuned in Seconds.',
    subcopy: 'Customize blur, radius, fonts, and share setups with a single link.',
  },
  {
    frame: '05 · All-in-One Pack',
    headline: '500+ Matching Walls & Zero Widget Ads.',
    subcopy: 'Start with 50 free widgets forever. Fast, offline-ready, battery-kind.',
  },
];

export const LAUNCH_PLAN_CHANNELS = [
  {
    channel: 'TikTok & Instagram Reels',
    goal: 'Viral "15-second home screen makeover" discovery',
    tactics: [
      'Run a 14-day "Transform a boring Android home screen in 15 seconds" before/after series.',
      'Feature 1-tap Material You wallpaper matching and the interactive Pet + Couple widgets.',
      'Partner with 15 micro-creators in the desk-setup & Android customization niche (10k–150k followers) with free Pro codes.',
    ],
    hookExample: '"Stop paying for 3 apps just to get clean Android widgets — here’s a 1-tap native pack."',
  },
  {
    channel: 'YouTube Shorts & Tech Reviewers',
    goal: 'High-intent search & evergreen setup traffic',
    tactics: [
      'Send crisp press kits + 20 promo codes to Android setup YouTubers (Sam Beckman, HowToMen, Parker Burton style channels).',
      'Publish native 45-second Shorts showing "5 Free Widgets That Replace 5 Apps" (Pomodoro, Weather 2.0, Flight Tracker, Steps, Quick Notes).',
    ],
    hookExample: '"Best free KWGT alternative on Android in 2026 — zero setup headache."',
  },
  {
    channel: 'Reddit Communities',
    goal: 'Early-adopter feedback, high retention & word of mouth',
    tactics: [
      'Share genuine "Developer Showcase + 50 Free Pro Codes" posts in r/androidapps, r/androidthemes, r/GooglePixel, and r/OneUI.',
      'Include a transparent battery benchmark screenshot and privacy promise (no widget ads, no tracking).',
      'Actively collect feature requests for Week 2 updates and credit Redditors in release notes.',
    ],
    hookExample: '"Built a native Jetpack Glance widget suite with 50 free widgets and zero KWGT dependency — feedback welcome."',
  },
  {
    channel: 'Product Hunt Launch',
    goal: 'Design credibility, press pickup & cross-platform curiosity',
    tactics: [
      'Launch Tuesday 12:01 AM PT with an interactive web Widget Studio demo link.',
      'Highlight the Smart Context Engine, 7-day refund guarantee, and open community preset sharing.',
      'Offer a Launch-Day 40% Lifetime Pro discount exclusively for PH community members.',
    ],
    hookExample: '"LumaGrid — Studio-grade native Android widgets, live activities, and matching wallpapers."',
  },
];
