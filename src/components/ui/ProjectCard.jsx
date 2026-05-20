import { ExternalLink, Github, GitPullRequest, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { revealVariants } from '../../animations/motion.js';
import { useI18n } from '../../hooks/useI18n.jsx';

function ProjectCard({ project }) {
  const { t } = useI18n();
  const statusLabel = project.status === 'active' ? t('common.currently') : t('common.planned');

  return (
    <motion.article
      variants={revealVariants}
      whileHover={{ y: -6 }}
      className="glass-panel flex h-full flex-col rounded-2xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/[0.12] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:bg-violet-300/10 dark:text-violet-200">
            <Rocket size={14} aria-hidden="true" />
            {statusLabel}
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink-950 dark:text-white">
            {t(project.titleKey)}
          </h3>
        </div>
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-white dark:bg-white dark:text-ink-950">
          <GitPullRequest size={19} aria-hidden="true" />
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-ink-700 dark:text-ink-100">{t(project.descriptionKey)}</p>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-ink-700 dark:text-ink-100">
        {project.detailsKeys.map((key) => (
          <li key={key} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>{t(key)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-ink-900/10 px-3 py-1.5 text-xs font-semibold text-ink-700 dark:border-white/10 dark:text-ink-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <a
          className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-violet-400 hover:text-violet-700 dark:border-white/10 dark:text-ink-200 dark:hover:text-violet-200"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={16} />
          GitHub
        </a>
        {project.demo ? (
          <a
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:text-ink-200 dark:hover:text-cyan-200"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} />
            Live
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
