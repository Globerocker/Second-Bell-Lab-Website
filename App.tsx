import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Parents from './pages/Parents';
import Investors from './pages/Investors';
import AiAssistant from './pages/AiAssistant';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Locations from './pages/Locations';
import Events from './pages/Events';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
// New Pages
import ApplicationWizard from './pages/ApplicationWizard';
import SecondChance from './pages/SecondChance';
import Flyer from './pages/Flyer';
// Pillars
import PhysicalDiscipline from './pages/PhysicalDiscipline';
import AcademicCompetence from './pages/AcademicCompetence';
import SocialSkill from './pages/SocialSkill';
import FinancialLiteracy from './pages/FinancialLiteracy';
import Entrepreneurship from './pages/Entrepreneurship';
// Blog
import Blog from './pages/Blog';
import BlogPostView from './pages/BlogPost';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isNoLayoutPage = location.pathname === '/apply' || location.pathname === '/flyer';
  const isAssistantPage = location.pathname === '/chat';

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 relative selection:bg-brand-gold selection:text-brand-navy">
      {!isNoLayoutPage && <Navbar />}

      <main className="flex-grow">
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
          <Route path="/flyer" element={<Flyer />} />

          {/* Pillars */}
          <Route path="/discipline" element={<PhysicalDiscipline />} />
          <Route path="/academic" element={<AcademicCompetence />} />
          <Route path="/social" element={<SocialSkill />} />
          <Route path="/financial" element={<FinancialLiteracy />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPostView />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isAssistantPage && !isNoLayoutPage && <Footer />}
    </div>
  );
};

export default App;