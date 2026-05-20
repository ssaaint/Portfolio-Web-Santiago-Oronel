import SectionHeading from '../components/ui/SectionHeading.jsx';
import TimelineCard from '../components/ui/TimelineCard.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { education } from '../data/timeline.js';
import { useI18n } from '../hooks/useI18n.jsx';

function Education() {
  const { t } = useI18n();

  return (
    <section id="education" className="section-band bg-ink-50 dark:bg-ink-900/40">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow={t('education.eyebrow')} title={t('education.title')} />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <TimelineCard key={item.id} item={item} type="education" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
