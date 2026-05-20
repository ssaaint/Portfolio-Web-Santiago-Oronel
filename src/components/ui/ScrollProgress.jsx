import { useScrollProgress } from '../../hooks/useScrollProgress.js';

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-violet-500 via-cyan-300 to-emerald-300 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;

