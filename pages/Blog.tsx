import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Page, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';

interface BlogProps {
}

const Blog: React.FC<BlogProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Magazine Header */}
      <div className="bg-white border-b border-slate-200 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block animate-fade-in">The Second Bell Blog</span>
          <h1 className="text-5xl md:text-8xl font-heading font-bold text-brand-navy mb-6 animate-fade-up tracking-tight">Insights for the <br />Modern Parent.</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up delay-100">
            Deep dives into child development, the future economy, and the science of raising resilient leaders in a digital age.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat
                  ? 'bg-brand-navy text-white shadow-lg transform scale-105'
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link
            to={`/blog/${featuredPost.id}`}
            className="group cursor-pointer mb-20 animate-fade-up block"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors z-10"></div>
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:pl-8">
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold font-bold uppercase tracking-wider rounded text-xs">{featuredPost.category}</span>
                  <span className="text-slate-500 font-medium">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6 group-hover:text-brand-goldhover transition-colors leading-[1.1]">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-brand-navy text-sm overflow-hidden border-2 border-white shadow-sm">
                    {featuredPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-brand-navy">{featuredPost.author}</p>
                    <p className="text-slate-500">{featuredPost.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {remainingPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group cursor-pointer flex flex-col h-full border-b border-slate-100 pb-8 hover:border-brand-gold transition-colors block"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/2] mb-6">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-brand-navy uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-goldhover transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-xs text-slate-500 mt-auto font-medium">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-24 bg-brand-navy rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full opacity-10 filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Don't Miss an Update</h2>
            <p className="text-slate-300 mb-8">Join 2,500+ parents receiving weekly insights on development, education, and parenting strategy.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-brand-gold" />
              <button className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;