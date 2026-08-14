/* ==========================================================================
   TAZ — Preset para Tailwind 3
   Tailwind 4 usa el bloque `@theme` de taz.theme.css. Tailwind 3 no lo entiende,
   así que la paleta entra por acá.

     // tailwind.config.js
     module.exports = {
       presets: [require('@tazcorp/brand/tailwind3')],
       content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
     }

   Los roles (primary, surface, body…) apuntan a las variables CSS, así que
   siguen al tema claro/oscuro solos. Ojo: en Tailwind 3 un color definido con
   var() no admite el modificador de opacidad (`bg-primary/50`). Para eso usa
   la escala con hexadecimal: `bg-brand-blue-500/50`.
   ========================================================================== */

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          50: '#f1f5fb', 100: '#dee9f5', 200: '#bfd2ea', 300: '#97b4da', 400: '#6c94c8',
          500: '#4477b7', 600: '#35619b', 700: '#2a4d7c', 800: '#21395b', 900: '#17273d',
        },
        'brand-gold': {
          50: '#fdf8e9', 100: '#faefc7', 200: '#f5df8e', 300: '#efcd57', 400: '#e8bb2f',
          500: '#d3a61c', 600: '#b08615', 700: '#8a660d', 800: '#664a0a', 900: '#443106',
        },
        'taz-slate': {
          50: '#f7f8fa', 100: '#edeff3', 200: '#dde1e8', 300: '#c3c9d3', 400: '#94a0af',
          500: '#6c7788', 600: '#525c6b', 700: '#3d4551', 800: '#2a313a', 900: '#1a1f26',
        },
        ink: '#131820',

        success: '#2e9e6b',
        warning: '#d9622b',
        danger: '#c93a38',
        info: '#2c8ba8',

        // Roles: siguen el tema porque leen las variables de tokens.css.
        primary: 'var(--taz-primary)',
        accent: 'var(--taz-accent)',
        surface: 'var(--taz-surface)',
        'surface-sunk': 'var(--taz-surface-sunk)',
        'bg-subtle': 'var(--taz-bg-subtle)',
        'border-ui': 'var(--taz-border)',
        body: 'var(--taz-text)',
        muted: 'var(--taz-text-muted)',
      },

      borderRadius: {
        taz: '4px',
        'taz-lg': '8px',
      },

      fontFamily: {
        display: ['Segoe UI Variable Display', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Segoe UI Variable Text', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'Cascadia Code', 'Cascadia Mono', 'Consolas', 'SF Mono', 'monospace'],
      },

      boxShadow: {
        'taz-focus': '0 0 0 3px rgb(68 119 183 / 0.40)',
      },
    },
  },
};
