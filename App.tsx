import React, { useState } from 'react';
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

import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Helper to scroll top on page change
  const setPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const selectPost = (id: string) => {
    setSelectedPostId(id);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Landing setPage={setPage} />;
      case Page.PARENTS:
        return <Parents setPage={setPage} />;
      case Page.INVESTORS:
        return <Investors setPage={setPage} />;
      case Page.ASSISTANT:
        return <AiAssistant />;
      case Page.PROGRAMS:
        return <Programs />;
      case Page.ADMISSIONS:
        return <Admissions />;
      case Page.APPLICATION:
        return <ApplicationWizard />;
      case Page.ABOUT:
        return <About />;
      case Page.LOCATIONS:
        return <Locations />;
      case Page.EVENTS:
        return <Events />;
      case Page.CAREERS:
        return <Careers />;
      case Page.CONTACT:
        return <Contact />;
      case Page.SECOND_CHANCE:
        return <SecondChance setPage={setPage} />;
      case Page.FLYER:
        return <Flyer />;
      // Pillars
      case Page.PHYSICAL_DISCIPLINE:
        return <PhysicalDiscipline setPage={setPage} />;
      case Page.ACADEMIC_COMPETENCE:
        return <AcademicCompetence setPage={setPage} />;
      case Page.SOCIAL_SKILL:
        return <SocialSkill setPage={setPage} />;
      case Page.FINANCIAL_LITERACY:
        return <FinancialLiteracy setPage={setPage} />;
      case Page.ENTREPRENEURSHIP:
        return <Entrepreneurship setPage={setPage} />;
      // Blog
      case Page.BLOG:
        return <Blog setPage={setPage} selectPost={selectPost} />;
      case Page.BLOG_POST:
        return <BlogPostView postId={selectedPostId} setPage={setPage} selectPost={selectPost} />;
      default:
        return <Landing setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 relative selection:bg-brand-gold selection:text-brand-navy">
      {/* Navbar not shown on Application Wizard or Flyer to keep focus */}
      {currentPage !== Page.APPLICATION && currentPage !== Page.FLYER && <Navbar currentPage={currentPage} setPage={setPage} />}
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      {currentPage !== Page.ASSISTANT && currentPage !== Page.APPLICATION && currentPage !== Page.FLYER && <Footer setPage={setPage} />}
    </div>
  );
};

export default App;