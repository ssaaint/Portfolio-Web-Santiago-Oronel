import { CalendarDays, MapPin } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { useI18n } from '../../hooks/useI18n.jsx';

function TimelineCard({ item, type = 'experience' }) {
  const { t } = useI18n();
  const points = item.pointsKeys?.map((key) => t(key));

  return (
    <Reveal as="article" className="glass-panel rounded-2xl p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
            {type === 'education' ? t('nav.education') : t('nav.experience')}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink-950 dark:text-white">{t(item.titleKey)}</h3>
          <p className="mt-3 flex items-center gap-2 text-sm text-ink-700 dark:text-ink-100">
            <MapPin size={16} aria-hidden="true" />
            {t(item.placeKey)}
          </p>
        </div>
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-900/10 bg-white/80 px-3 py-2 text-sm font-semibold text-ink-700 dark:border-white/10 dark:bg-white/[0.075] dark:text-ink-100">
          <CalendarDays size={16} aria-hidden="true" />
          {t(item.periodKey)}
        </p>
      </div>

      {points ? (
        <ul className="mt-5 space-y-3 text-sm leading-7 text-ink-700 dark:text-ink-100">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 text-sm leading-7 text-ink-700 dark:text-ink-100">{t(item.descriptionKey)}</p>
      )}
    </Reveal>
  );
}

export default TimelineCard;
