import React, { useEffect, useState } from 'react';
import { Page, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';

interface BlogPostProps {
  postId: string | null;
  setPage: (page: Page) => void;
  selectPost: (id: string) => void;
}

const BlogPostView: React.FC<BlogPostProps> = ({ postId, setPage, selectPost }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const post = BLOG_POSTS.find(p => p.id === postId);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-100">
        <div 
          className="h-full bg-brand-gold transition-all duration-100 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <span className="inline-block px-3 py-1 bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-wider rounded mb-6 w-fit animate-fade-in">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight animate-fade-up">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white/80 animate-fade-up delay-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white text-sm">{post.author}</p>
                <p className="text-xs text-white/60">{post.authorRole}</p>
              </div>
            </div>
            <span className="h-8 w-px bg-white/20"></span>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">Published</p>
              <p className="text-sm font-medium">{post.date}</p>
            </div>
            <span className="h-8 w-px bg-white/20"></span>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">Read Time</p>
              <p className="text-sm font-medium">{post.readTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Excerpt */}
        <div className="text-xl md:text-2xl font-heading italic text-slate-800 border-l-4 border-brand-gold pl-6 mb-12 leading-relaxed">
          "{post.excerpt}"
        </div>

        {/* Main Body */}
        <div className="prose prose-lg prose-slate max-w-none">
          {post.content}
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 bg-brand-beige rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
           <div className="w-20 h-20 bg-brand-navy rounded-full flex items-center justify-center text-white text-2xl font-heading font-bold flex-shrink-0">
             {post.author.charAt(0)}
           </div>
           <div>
             <h3 className="text-xl font-bold text-brand-navy mb-2">About {post.author}</h3>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               {post.authorRole} at Second Bell Lab™. Passionate about education reform, developmental psychology, and preparing the next generation for a changing economy.
             </p>
             <button onClick={() => setPage(Page.ADMISSIONS)} className="text-brand-navy font-bold text-sm hover:text-brand-gold transition-colors">
               Book a consultation with our team <i className="fa-solid fa-arrow-right ml-1"></i>
             </button>
           </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-slate-50 py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-brand-navy mb-10 text-center">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map(p => (
                <div 
                  key={p.id} 
                  onClick={() => { selectPost(p.id); window.scrollTo(0,0); }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">{p.category}</p>
                    <h4 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-goldhover transition-colors">{p.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostView;