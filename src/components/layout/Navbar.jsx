import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navItems, profile } from '../../data/profile.js';
import { useI18n } from '../../hooks/useI18n.jsx';
import Button from '../ui/Button.jsx';
import LanguageSwitcher from '../ui/LanguageSwitcher.jsx';
import MusicToggle from '../ui/MusicToggle.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-ink-900/10 bg-white/80 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-ink-950/80' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between gap-4" aria-label="Primary navigation">
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="group flex items-center gap-3"
          aria-label="Santiago Oronel home"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-ink-950 text-sm font-extrabold text-white shadow-sm transition group-hover:scale-105 dark:bg-white dark:text-ink-950">
            SO
          </span>
          <span className="hidden text-left sm:block">
            <span className="block whitespace-nowrap font-display text-sm font-bold text-ink-950 dark:text-white">Santiago Oronel</span>
            <span className="block text-xs font-medium text-ink-600 dark:text-ink-200">{t('hero.role')}</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className="rounded-full px-3 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-900/5 hover:text-ink-950 dark:text-ink-100 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <MusicToggle />
          <Button as="a" href={profile.cvPath} download variant="secondary" className="whitespace-nowrap px-4">
            <Download size={16} aria-hidden="true" />
            {t('common.downloadCv')}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-ink-900/10 bg-white/75 text-ink-800 shadow-sm lg:hidden dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
          aria-expanded={open}
          aria-label={open ? t('nav.close') : t('nav.menu')}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-ink-900/10 bg-white/95 px-4 py-4 shadow-soft backdrop-blur-2xl lg:hidden dark:border-white/10 dark:bg-ink-950/95">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-ink-700 transition hover:bg-ink-900/5 dark:text-ink-200 dark:hover:bg-white/10"
              >
                {t(item.labelKey)}
              </button>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <MusicToggle />
              <Button as="a" href={profile.cvPath} download variant="secondary" className="whitespace-nowrap">
                <Download size={16} aria-hidden="true" />
                {t('common.downloadCv')}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
