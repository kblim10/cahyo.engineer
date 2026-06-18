import { useCallback, useRef } from 'react';

export const useAudio = () => {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio only once per component
  if (!hoverAudioRef.current) {
    hoverAudioRef.current = new Audio('/f1-radio_QLwLncI.mp3');
    hoverAudioRef.current.volume = 0.5;
  }
  if (!clickAudioRef.current) {
    clickAudioRef.current = new Audio('/f1-box-box-box.mp3');
    clickAudioRef.current.volume = 0.8;
  }

  const playHover = useCallback(() => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(e => console.warn('Audio play blocked:', e));
    }
  }, []);

  const playClick = useCallback(() => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play().catch(e => console.warn('Audio play blocked:', e));
    }
  }, []);

  return { playHover, playClick };
};
