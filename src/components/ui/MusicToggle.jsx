import { Volume2, VolumeX } from 'lucide-react';
import { useAmbientMusic } from '../../hooks/useAmbientMusic.js';

function MusicToggle() {
  const { enabled, toggle } = useAmbientMusic();
  const Icon = enabled ? Volume2 : VolumeX;

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-full border border-ink-900/10 bg-white/70 text-ink-700 shadow-sm transition hover:-translate-y-0.5 hover:text-violet-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-ink-200 dark:hover:text-violet-200"
      aria-label={enabled ? 'Disable ambient music' : 'Enable ambient music'}
      title={enabled ? 'Music on' : 'Music off'}
      aria-pressed={enabled}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}

export default MusicToggle;

