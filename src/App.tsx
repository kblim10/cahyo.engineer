import { useRef } from 'react';
import { Hero } from './components/Hero';
import { Data } from './components/Data';
import { Skills } from './components/Skills';
import { Quests } from './components/Quests';
import { Databank } from './components/Databank';
import { Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* BGM Player */}
      <audio ref={audioRef} src="/soundtrack.mp3" loop />
      <button 
        onClick={toggleMute}
        style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 100, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Unified Scrolling Page */}
      <main>
        <Hero />
        <Data />
        <Skills />
        <Quests />
        <Databank />
      </main>
    </>
  );
}

export default App;
