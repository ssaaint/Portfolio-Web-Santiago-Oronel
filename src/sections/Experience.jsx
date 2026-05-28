import SectionHeading from '../components/ui/SectionHeading.jsx';
import TimelineCard from '../components/ui/TimelineCard.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { experience } from '../data/timeline.js';
import { useI18n } from '../hooks/useI18n.jsx';

function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="section-band bg-white dark:bg-ink-950">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading eyebrow={t('experience.eyebrow')} title={t('experience.title')} intro={t('experience.intro')} />
        </Reveal>
        <div className="grid gap-5">
          {experience.map((item) => (
            <TimelineCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

