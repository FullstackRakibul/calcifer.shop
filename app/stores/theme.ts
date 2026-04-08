import { defineStore } from 'pinia'

/**
 * Color presets — each value is an oklch() string that gets
 * written to the CSS custom properties consumed by tailwind.css.
 *
 * We keep the same shade keys the design system already uses
 * (fire-50 … fire-700, ember, glow, accent, ring).
 */
export const colorPresets: Record<string, Record<string, string>> = {
  orange: {
    'fire-50':  'oklch(0.97 0.04 45)',
    'fire-100': 'oklch(0.92 0.07 45)',
    'fire-200': 'oklch(0.84 0.13 43)',
    'fire-300': 'oklch(0.76 0.17 41)',
    'fire-400': 'oklch(0.7  0.19 38)',
    'fire-500': 'oklch(0.64 0.21 36)',
    'fire-600': 'oklch(0.56 0.19 34)',
    'fire-700': 'oklch(0.46 0.16 32)',
    ember:      'oklch(0.68 0.22 38)',
    glow:       'oklch(0.55 0.14 45)',
    accent:     'oklch(0.68 0.18 40)',
    ring:       'oklch(0.68 0.18 40)',
  },
  red: {
    'fire-50':  'oklch(0.97 0.03 25)',
    'fire-100': 'oklch(0.91 0.06 25)',
    'fire-200': 'oklch(0.83 0.11 25)',
    'fire-300': 'oklch(0.74 0.16 25)',
    'fire-400': 'oklch(0.67 0.19 25)',
    'fire-500': 'oklch(0.59 0.22 25)',
    'fire-600': 'oklch(0.52 0.20 24)',
    'fire-700': 'oklch(0.44 0.17 23)',
    ember:      'oklch(0.63 0.23 25)',
    glow:       'oklch(0.50 0.14 25)',
    accent:     'oklch(0.63 0.20 25)',
    ring:       'oklch(0.63 0.20 25)',
  },
  blue: {
    'fire-50':  'oklch(0.97 0.02 250)',
    'fire-100': 'oklch(0.91 0.05 250)',
    'fire-200': 'oklch(0.83 0.09 250)',
    'fire-300': 'oklch(0.73 0.14 250)',
    'fire-400': 'oklch(0.65 0.17 250)',
    'fire-500': 'oklch(0.57 0.20 250)',
    'fire-600': 'oklch(0.50 0.18 250)',
    'fire-700': 'oklch(0.42 0.15 250)',
    ember:      'oklch(0.60 0.21 250)',
    glow:       'oklch(0.48 0.14 250)',
    accent:     'oklch(0.60 0.18 250)',
    ring:       'oklch(0.60 0.18 250)',
  },
  purple: {
    'fire-50':  'oklch(0.97 0.03 300)',
    'fire-100': 'oklch(0.91 0.06 300)',
    'fire-200': 'oklch(0.83 0.11 300)',
    'fire-300': 'oklch(0.73 0.16 300)',
    'fire-400': 'oklch(0.65 0.19 300)',
    'fire-500': 'oklch(0.57 0.22 300)',
    'fire-600': 'oklch(0.50 0.20 300)',
    'fire-700': 'oklch(0.42 0.17 300)',
    ember:      'oklch(0.60 0.23 300)',
    glow:       'oklch(0.48 0.16 300)',
    accent:     'oklch(0.60 0.20 300)',
    ring:       'oklch(0.60 0.20 300)',
  },
  green: {
    'fire-50':  'oklch(0.97 0.03 155)',
    'fire-100': 'oklch(0.92 0.06 155)',
    'fire-200': 'oklch(0.84 0.11 155)',
    'fire-300': 'oklch(0.75 0.15 155)',
    'fire-400': 'oklch(0.67 0.18 155)',
    'fire-500': 'oklch(0.60 0.20 155)',
    'fire-600': 'oklch(0.52 0.18 155)',
    'fire-700': 'oklch(0.44 0.15 155)',
    ember:      'oklch(0.63 0.21 155)',
    glow:       'oklch(0.50 0.14 155)',
    accent:     'oklch(0.63 0.18 155)',
    ring:       'oklch(0.63 0.18 155)',
  },
  rose: {
    'fire-50':  'oklch(0.97 0.03 350)',
    'fire-100': 'oklch(0.91 0.07 350)',
    'fire-200': 'oklch(0.83 0.12 350)',
    'fire-300': 'oklch(0.74 0.17 350)',
    'fire-400': 'oklch(0.67 0.20 350)',
    'fire-500': 'oklch(0.59 0.23 350)',
    'fire-600': 'oklch(0.52 0.21 350)',
    'fire-700': 'oklch(0.44 0.18 350)',
    ember:      'oklch(0.63 0.24 350)',
    glow:       'oklch(0.50 0.15 350)',
    accent:     'oklch(0.63 0.21 350)',
    ring:       'oklch(0.63 0.21 350)',
  },
}

/** Human-readable label + preview swatch color for each preset */
export const colorOptions = [
  { name: 'orange', label: 'Fire Orange', swatch: '#FF5E00' },
  { name: 'red',    label: 'Ember Red',   swatch: '#EF4444' },
  { name: 'blue',   label: 'Frost Blue',  swatch: '#3B82F6' },
  { name: 'purple', label: 'Amethyst',    swatch: '#A855F7' },
  { name: 'green',  label: 'Emerald',     swatch: '#22C55E' },
  { name: 'rose',   label: 'Rose Gold',   swatch: '#F43F5E' },
]

// ────────────────────────────────────────────
// Store
// ────────────────────────────────────────────

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: true as boolean,
    primaryColor: 'orange' as string,
  }),

  getters: {
    isDark: (state) => state.darkMode,
  },

  actions: {
    /* ── Dark / Light ────────────────────────── */
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      applyDarkMode(this.darkMode)
      this._persist()
    },

    setDarkMode(value: boolean) {
      this.darkMode = value
      applyDarkMode(this.darkMode)
      this._persist()
    },

    /* ── Primary colour ──────────────────────── */
    setPrimaryColor(name: string) {
      if (!colorPresets[name]) return
      this.primaryColor = name
      applyColorPreset(name)
      this._persist()
    },

    /* ── Reset to default ────────────────────── */
    resetTheme() {
      this.darkMode = true
      this.primaryColor = 'orange'
      applyDarkMode(true)
      applyColorPreset('orange')
      this._persist()
    },

    /* ── Load from localStorage ──────────────── */
    loadSavedTheme() {
      if (typeof window === 'undefined') return
      try {
        const raw = localStorage.getItem('calcifer-theme')
        if (raw) {
          const data = JSON.parse(raw)
          this.darkMode = data.darkMode ?? true
          this.primaryColor = data.primaryColor ?? 'orange'
        }
      } catch { /* swallow */ }

      applyDarkMode(this.darkMode)
      applyColorPreset(this.primaryColor)
    },

    /* ── Private: persist ────────────────────── */
    _persist() {
      if (typeof window === 'undefined') return
      localStorage.setItem(
        'calcifer-theme',
        JSON.stringify({ darkMode: this.darkMode, primaryColor: this.primaryColor }),
      )
    },
  },
})

// ────────────────────────────────────────────
// Side-effect helpers (mutate the DOM)
// ────────────────────────────────────────────

function applyDarkMode(dark: boolean) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', dark)

  // Also swap the base background / foreground vars for light mode
  const root = document.documentElement.style
  if (dark) {
    root.setProperty('--color-background', 'oklch(0.09 0.01 260)')
    root.setProperty('--color-foreground', 'oklch(0.96 0 0)')
    root.setProperty('--color-card', 'oklch(0.13 0.01 260)')
    root.setProperty('--color-card-foreground', 'oklch(0.96 0 0)')
    root.setProperty('--color-popover', 'oklch(0.13 0.01 260)')
    root.setProperty('--color-popover-foreground', 'oklch(0.96 0 0)')
    root.setProperty('--color-primary', 'oklch(0.96 0 0)')
    root.setProperty('--color-primary-foreground', 'oklch(0.09 0.01 260)')
    root.setProperty('--color-secondary', 'oklch(0.18 0.01 260)')
    root.setProperty('--color-secondary-foreground', 'oklch(0.96 0 0)')
    root.setProperty('--color-muted', 'oklch(0.18 0.01 260)')
    root.setProperty('--color-muted-foreground', 'oklch(0.58 0.01 260)')
    root.setProperty('--color-destructive-foreground', 'oklch(0.96 0 0)')
    root.setProperty('--color-border', 'oklch(0.2 0.01 260)')
    root.setProperty('--color-input', 'oklch(0.2 0.01 260)')
  } else {
    root.setProperty('--color-background', 'oklch(0.98 0.005 260)')
    root.setProperty('--color-foreground', 'oklch(0.14 0.01 260)')
    root.setProperty('--color-card', 'oklch(1 0 0)')
    root.setProperty('--color-card-foreground', 'oklch(0.14 0.01 260)')
    root.setProperty('--color-popover', 'oklch(1 0 0)')
    root.setProperty('--color-popover-foreground', 'oklch(0.14 0.01 260)')
    root.setProperty('--color-primary', 'oklch(0.14 0.01 260)')
    root.setProperty('--color-primary-foreground', 'oklch(0.98 0 0)')
    root.setProperty('--color-secondary', 'oklch(0.93 0.005 260)')
    root.setProperty('--color-secondary-foreground', 'oklch(0.14 0.01 260)')
    root.setProperty('--color-muted', 'oklch(0.93 0.005 260)')
    root.setProperty('--color-muted-foreground', 'oklch(0.45 0.01 260)')
    root.setProperty('--color-destructive-foreground', 'oklch(0.98 0 0)')
    root.setProperty('--color-border', 'oklch(0.88 0.005 260)')
    root.setProperty('--color-input', 'oklch(0.88 0.005 260)')
  }
}

function applyColorPreset(name: string) {
  if (typeof document === 'undefined') return
  const preset = colorPresets[name]
  if (!preset) return
  const root = document.documentElement.style
  for (const [key, value] of Object.entries(preset)) {
    root.setProperty(`--color-${key}`, value)
  }
}
