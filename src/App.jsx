import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import LoadingScreen from './components/ui/LoadingScreen.jsx';
import ScrollProgress from './components/ui/ScrollProgress.jsx';
import HomePage from './pages/HomePage.jsx';
import { useSeo } from './hooks/useSeo.js';
import { pageTransition } from './animations/motion.js';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  useSeo({
    title: 'Santiago Oronel | Desarrollador en formación',
    description:
      'Portfolio bilingue de Santiago Oronel, estudiante de programación que aprende desarrollo web y explora backend.',
  });

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900 antialiased transition-colors duration-500 dark:bg-ink-950 dark:text-ink-50">
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.main {...pageTransition}>
                <HomePage />
              </motion.main>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
