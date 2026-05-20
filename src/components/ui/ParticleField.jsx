import { motion } from 'framer-motion';

const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 47) % 86)}%`,
  top: `${12 + ((index * 31) % 72)}%`,
  size: 2 + (index % 4),
  delay: index * 0.18,
}));

function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-violet-300/[0.30] shadow-[0_0_12px_rgba(167,139,250,0.28)] dark:bg-violet-200/[0.25]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default ParticleField;
