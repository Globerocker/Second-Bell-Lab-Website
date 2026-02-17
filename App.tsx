import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import WaitlistBanner from './components/WaitlistBanner';
import Analytics from './components/Analytics';

// Lazy Loaded Pages
const Landing = lazy(() => import('./pages/Landing'));
const Parents = lazy(() => import('./pages/Parents'));
const Investors = lazy(() => import('./pages/Investors'));
const AiAssistant = lazy(() => import('./pages/AiAssistant'));
const Programs = lazy(() => import('./pages/Programs'));
const Admissions = lazy(() => import('./pages/Admissions'));
const About = lazy(() => import('./pages/About'));
const Locations = lazy(() => import('./pages/Locations'));
const Events = lazy(() => import('./pages/Events'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const ApplicationWizard = lazy(() => import('./pages/ApplicationWizard'));
const SecondChance = lazy(() => import('./pages/SecondChance'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostView = lazy(() => import('./pages/BlogPost'));

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isNoLayoutPage = location.pathname === '/apply';
  const isAssistantPage = location.pathname === '/chat';

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 relative selection:bg-brand-gold selection:text-brand-navy">
      <Analytics />
      {!isNoLayoutPage && !isAssistantPage && <WaitlistBanner />}
      {!isNoLayoutPage && !isAssistantPage && <Navbar />}

      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/chat" element={<AiAssistant />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/apply" element={<ApplicationWizard />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reintegration" element={<SecondChance />} />


            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPostView />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {!isAssistantPage && !isNoLayoutPage && <Footer />}
    </div>
  );
};

export default App;