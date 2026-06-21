import { useState, useRef, useEffect } from 'react';
import { HSRButton } from './components/HSRButton';
import { Data } from './components/Data';
import { Skills } from './components/Skills';
import { Quests } from './components/Quests';
import { Databank } from './components/Databank';
import { Hero } from './components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code2, ShieldAlert, Database, Volume2, VolumeX } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('TRAILBLAZER');
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const renderContent = () => {
    switch (activeTab) {
      case 'TRAILBLAZER': return <Data />;
      case 'TRACES': return <Skills />;
      case 'MISSIONS': return <Quests />;
      case 'DATABANK': return <Databank />;
      default: return <div className="glass-panel glow-accent">PROCESSING...</div>;
    }
  };

  const tabs = [
    { id: 'TRAILBLAZER', icon: <User size={20} /> },
    { id: 'TRACES', icon: <Code2 size={20} /> },
    { id: 'MISSIONS', icon: <ShieldAlert size={20} /> },
    { id: 'DATABANK', icon: <Database size={20} /> },
  ];

  return (
    <>
      {/* BGM Player */}
      <audio ref={audioRef} src="/soundtrack.mp3" loop />
      <button 
        onClick={toggleMute}
        style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 100, background: 'rgba(13,17,23,0.6)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)', color: 'var(--accent)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Hero Landing Scene */}
      <Hero />

      {/* Main App Content (Revealed on Scroll) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="app-container"
      >
        
        {/* Left Sidebar Menu */}
        <div className="sidebar">
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', textAlign: 'center' }}>
            <h1 className="glow-text" style={{ fontSize: '2.5rem', margin: 0, lineHeight: 1, color: 'var(--text-primary)' }}>YoRHa OS</h1>
            <div style={{ fontSize: '0.9rem', color: 'var(--accent)', letterSpacing: '3px', marginTop: '0.5rem' }}>ASTRAL.EXPRESS</div>
          </div>
          
          <nav className="mobile-nav">
            {tabs.map((tab) => (
              <HSRButton 
                key={tab.id} 
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
              >
                {tab.id}
              </HSRButton>
            ))}
          </nav>
          
          {/* Decorative Ornament */}
          <div className="sidebar-ornament">
            <div className="ornament-spin" style={{ width: '50px', height: '50px', border: '2px solid var(--border-color)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ornament-spin" style={{ width: '30px', height: '30px', border: '2px dashed var(--border-color)', animationDirection: 'reverse', animationDuration: '6s' }} />
              <div className="ornament-pulse" style={{ position: 'absolute', width: '10px', height: '10px', backgroundColor: 'var(--border-color)' }} />
            </div>
            <div className="ornament-pulse" style={{ fontSize: '0.65rem', letterSpacing: '2px', textAlign: 'center', fontWeight: 600 }}>
              SYNCING_DATA...<br/>
              [ OK ]
            </div>
          </div>

          <div className="sidebar-status glow-text" style={{ color: 'var(--accent)' }}>
            STATUS: CONNECTED<br/>
            PING: 14ms<br/>
            WARP: READY
          </div>
        </div>

        {/* Right Content Area */}
        <div style={{ flex: 1, position: 'relative', height: '100%' }}>
          {/* Subtle decorations removed for cleaner glass look */}
          
          <div className="no-scrollbar" style={{ padding: '1rem', height: '100%', overflowY: 'auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ paddingBottom: '2rem' }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </motion.div>
    </>
  );
}

export default App;
