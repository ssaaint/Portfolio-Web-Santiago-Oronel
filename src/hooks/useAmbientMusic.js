import { useCallback, useEffect, useRef, useState } from 'react';

const notes = [220, 261.63, 329.63, 392, 440, 523.25];

export function useAmbientMusic() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (audioRef.current) {
      audioRef.current.master.gain.linearRampToValueAtTime(0, audioRef.current.context.currentTime + 0.3);
      setTimeout(() => audioRef.current?.context.close(), 360);
      audioRef.current = null;
    }
  }, []);

  const playNote = useCallback((context, master, frequency, delay = 0) => {
    const now = context.currentTime + delay;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.035, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + 3);
  }, []);

  const start = useCallback(async () => {
    if (audioRef.current) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const context = new AudioContext();
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, context.currentTime);
    master.gain.linearRampToValueAtTime(0.18, context.currentTime + 0.7);
    master.connect(context.destination);
    audioRef.current = { context, master };

    const schedulePhrase = () => {
      const root = notes[Math.floor(Math.random() * notes.length)];
      playNote(context, master, root, 0);
      playNote(context, master, root * 1.5, 0.45);
      playNote(context, master, root * 2, 1.1);
    };

    schedulePhrase();
    intervalRef.current = setInterval(schedulePhrase, 4200);
  }, [playNote]);

  useEffect(() => {
    if (enabled) {
      start();
    } else {
      stop();
    }

    return stop;
  }, [enabled, start, stop]);

  return {
    enabled,
    toggle: () => setEnabled((current) => !current),
  };
}

