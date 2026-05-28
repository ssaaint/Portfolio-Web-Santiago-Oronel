import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { projects } from '../data/projects.js';
import { staggerContainer } from '../animations/motion.js';
import { useI18n } from '../hooks/useI18n.jsx';

function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="section-band bg-white dark:bg-ink-950">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow={t('projects.eyebrow')} title={t('projects.title')} intro={t('projects.intro')} align="center" />
        </Reveal>

        <motion.div
          className="mx-auto mt-12 grid max-w-3xl gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
