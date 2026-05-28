import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.jsx';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/70 text-ink-700 shadow-sm transition hover:-translate-y-0.5 hover:text-violet-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-ink-200 dark:hover:text-violet-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;

