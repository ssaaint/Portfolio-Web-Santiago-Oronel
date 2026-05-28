import { motion } from 'framer-motion';
import { revealVariants } from '../../animations/motion.js';

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;

