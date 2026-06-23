import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MetaTicker } from '../components/layout/MetaTicker';
import { SectionRail } from '../components/layout/SectionRail';

export function RootLayout() {
  const location = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <MetaTicker />
      <Navbar />
      <SectionRail />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
