import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile.js';
import { useI18n } from '../../hooks/useI18n.jsx';

function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-ink-900/10 bg-white/60 py-8 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-ink-950 dark:text-white">{t('footer.note')}</p>
          <p className="mt-1 text-sm text-ink-600 dark:text-ink-200">{t('footer.built')}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition hover:border-violet-400 hover:text-violet-700 dark:border-white/10 dark:text-ink-100 dark:hover:text-violet-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.socials.github}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition hover:border-violet-400 hover:text-violet-700 dark:border-white/10 dark:text-ink-100 dark:hover:text-violet-200"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition hover:border-violet-400 hover:text-violet-700 dark:border-white/10 dark:text-ink-100 dark:hover:text-violet-200"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
