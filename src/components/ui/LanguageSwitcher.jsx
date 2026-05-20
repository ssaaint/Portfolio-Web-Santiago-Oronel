import { languages } from '../../translations/index.js';
import { useI18n } from '../../hooks/useI18n.jsx';

function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div
      className="flex rounded-full border border-ink-900/10 bg-white/70 p-1 text-xs font-bold shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
      aria-label="Language switcher"
    >
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={`rounded-full px-3 py-2 transition ${
            language === item.code
              ? 'bg-ink-950 text-white dark:bg-white dark:text-ink-950'
              : 'text-ink-700 hover:text-ink-950 dark:text-ink-100 dark:hover:text-white'
          }`}
          aria-pressed={language === item.code}
          title={item.name}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
