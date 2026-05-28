import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-ink-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="grid size-16 place-items-center rounded-2xl border border-white/10 bg-white text-lg font-extrabold text-ink-950 shadow-sm"
          animate={{ y: [0, -8, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          SO
        </motion.div>
        <div className="h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-200"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
