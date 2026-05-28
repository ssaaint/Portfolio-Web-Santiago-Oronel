import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import SkillCard from '../components/ui/SkillCard.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { skillGroups } from '../data/skills.js';
import { staggerContainer } from '../animations/motion.js';
import { useI18n } from '../hooks/useI18n.jsx';

function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="section-band bg-ink-50 dark:bg-ink-900/40">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow={t('skills.eyebrow')} title={t('skills.title')} intro={t('skills.intro')} align="center" />
        </Reveal>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
