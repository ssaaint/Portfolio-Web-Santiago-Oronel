/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#e7eaf0',
          300: '#a8afbd',
          500: '#6c7280',
          700: '#2a2d35',
          800: '#181a20',
          900: '#0c0d12',
          950: '#050509',
        },
        accent: {
          purple: '#a78bfa',
          cyan: '#67e8f9',
          mint: '#86efac',
        },
      },
      boxShadow: {
        glow: '0 0 22px rgba(167, 139, 250, 0.16)',
        soft: '0 18px 52px rgba(0, 0, 0, 0.16)',
      },
      backgroundImage: {
        'subtle-grid':
          'linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.07) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
