import { useState } from 'react';
import { NierButton } from './components/NierButton';
import { Data } from './components/Data';
import { Skills } from './components/Skills';
import { Quests } from './components/Quests';
import { Intel } from './components/Intel';
import { motion, AnimatePresence } from 'framer-motion';
import { techMarquee } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('DATA');

  const renderContent = () => {
    switch (activeTab) {
      case 'DATA': return <Data />;
      case 'SKILLS': return <Skills />;
      case 'QUESTS': return <Quests />;
      case 'INTEL': return <Intel />;
      default: return <div className="nier-box">PROCESSING...</div>;
    }
  };

  const tabs = ['DATA', 'SKILLS', 'QUESTS', 'INTEL'];

  return (
    <>
      <div className="scanlines"></div>
      
      {/* Global Marquee at bottom */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', overflow: 'hidden', borderTop: '2px solid var(--border-color)', padding: '0.5rem 0', backgroundColor: 'var(--hover-bg)', color: 'var(--hover-text)', zIndex: 50 }}>
        <div style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'marquee 20s linear infinite', fontWeight: 600, letterSpacing: '2px' }}>
          {techMarquee.join(' ++ ')} ++ {techMarquee.join(' ++ ')}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="app-container">
        
        {/* Left Sidebar Menu */}
        <div className="sidebar">
          <div style={{ borderBottom: '4px solid var(--border-color)', paddingBottom: '1rem' }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0, lineHeight: 1 }}>YoRHa OS</h1>
            <div style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '2px' }}>v1.04_kblim</div>
          </div>
          
          <nav className="mobile-nav">
            {tabs.map((tab) => (
              <NierButton 
                key={tab} 
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem 1rem' }}
              >
                [ {tab} ]
              </NierButton>
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

          <div className="sidebar-status">
            STATUS: ONLINE<br/>
            MEMORY: OK<br/>
            SYSTEM: ALL GREEN
          </div>
        </div>

        {/* Right Content Area */}
        <div style={{ flex: 1, position: 'relative', height: '100%' }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', left: '-20px', 
            width: '40px', height: '40px', 
            borderTop: '4px solid var(--border-color)', 
            borderLeft: '4px solid var(--border-color)',
            pointerEvents: 'none'
          }} />
          <div style={{ 
            position: 'absolute', 
            bottom: '-20px', right: '-20px', 
            width: '40px', height: '40px', 
            borderBottom: '4px solid var(--border-color)', 
            borderRight: '4px solid var(--border-color)',
            pointerEvents: 'none'
          }} />
          
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

      </div>
    </>
  );
}

export default App;
