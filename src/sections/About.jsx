import { CheckCircle2 } from 'lucide-react';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { useI18n } from '../hooks/useI18n.jsx';

function About() {
  const { t } = useI18n();
  const values = t('about.values.items');

  return (
    <section id="about" className="section-band bg-white dark:bg-ink-950">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} />
        </Reveal>

        <div className="grid gap-6">
          <Reveal className="glass-panel rounded-2xl p-6">
            <p className="text-base leading-8 text-ink-700 dark:text-ink-100">{t('about.body')}</p>
            <p className="mt-5 text-base leading-8 text-ink-700 dark:text-ink-100">{t('about.bodyTwo')}</p>
          </Reveal>

          <Reveal className="rounded-2xl border border-ink-900/10 bg-ink-950 p-6 text-white shadow-soft dark:border-white/10 dark:bg-white/[0.085]">
            <h3 className="font-display text-xl font-semibold">{t('about.values.title')}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {values.map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm leading-6 text-ink-100">
                  <CheckCircle2 size={18} className="text-accent-mint" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
