import { Download, FolderGit2, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button.jsx';
import ParticleField from '../components/ui/ParticleField.jsx';
import profilePhoto from '../assets/images/santiago-oronel-profile.webp';
import { profile } from '../data/profile.js';
import { useI18n } from '../hooks/useI18n.jsx';

const heroStats = ['hero.highlightOne', 'hero.highlightTwo', 'hero.highlightThree'];

function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 -z-20 bg-ink-50 dark:bg-ink-950" />
      <div className="absolute inset-0 -z-10 bg-subtle-grid bg-[length:34px_34px] opacity-45 dark:opacity-25" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_15%,rgba(167,139,250,0.14),transparent_36%),linear-gradient(180deg,rgba(103,232,249,0.05),transparent_65%)]" />
      <ParticleField />

      <div className="section-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-200"
          >
            <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {t('common.available')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-ink-950 sm:text-6xl sm:leading-[1.02] lg:text-7xl dark:text-white"
          >
            {t('hero.title')}
            <span className="block gradient-text">{t('hero.role')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-2xl text-lg leading-9 text-ink-700 dark:text-ink-100"
          >
            {t('hero.intro')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button as="a" href="#contact">
              <Mail size={18} aria-hidden="true" />
              {t('common.contactMe')}
            </Button>
            <Button as="a" href={profile.cvPath} download variant="secondary">
              <Download size={18} aria-hidden="true" />
              {t('common.downloadCv')}
            </Button>
            <Button as="a" href="#projects" variant="ghost">
              <FolderGit2 size={18} aria-hidden="true" />
              {t('common.viewProjects')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-9 grid gap-3 sm:grid-cols-3"
          >
            {heroStats.map((key) => (
              <div key={key} className="rounded-2xl border border-ink-900/10 bg-white/75 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.085]">
                <p className="text-sm font-semibold text-ink-800 dark:text-white">{t(key)}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-400/[0.14] via-transparent to-cyan-300/[0.10] blur-2xl" aria-hidden="true" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative overflow-hidden rounded-[1.55rem] bg-ink-900">
              <img
                src={profilePhoto}
                alt={t('hero.portraitAlt')}
                className="aspect-[4/5] w-full object-cover object-center"
                width="1080"
                height="1320"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/[0.88] via-ink-950/[0.18] to-transparent p-5">
                <p className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <MapPin size={16} aria-hidden="true" />
                  {t('common.location')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
