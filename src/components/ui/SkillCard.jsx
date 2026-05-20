import { Code2, Sparkles, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { revealVariants } from '../../animations/motion.js';
import { useI18n } from '../../hooks/useI18n.jsx';

const iconMap = {
  code: Code2,
  wrench: Wrench,
  sparkles: Sparkles,
};

function SkillCard({ group }) {
  const { t } = useI18n();
  const Icon = iconMap[group.icon] ?? Sparkles;

  return (
    <motion.article variants={revealVariants} className="glass-panel rounded-2xl p-6">
      <div className="mb-5 flex items-start gap-4">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/[0.12] text-violet-700 dark:bg-violet-300/10 dark:text-violet-200">
          <Icon size={20} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-white">{t(group.titleKey)}</h3>
          <p className="mt-2 text-sm leading-6 text-ink-700 dark:text-ink-100">{t(group.descriptionKey)}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span
            key={skill.name ?? skill.nameKey}
            className="rounded-full border border-ink-900/10 bg-ink-950/[0.04] px-3 py-2 text-sm font-medium text-ink-800 dark:border-white/10 dark:bg-white/[0.075] dark:text-white"
          >
            {skill.nameKey ? t(skill.nameKey) : skill.name}
            {skill.levelKey ? (
              <span className="ml-2 text-xs font-semibold text-violet-700 dark:text-violet-300">
                {t(skill.levelKey)}
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default SkillCard;
