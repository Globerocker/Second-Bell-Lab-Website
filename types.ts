import React from 'react';
import { Type } from "@google/genai";

export enum Page {
  HOME = 'home',
  PARENTS = 'parents',
  INVESTORS = 'investors',
  ASSISTANT = 'assistant',
  PROGRAMS = 'programs',
  ADMISSIONS = 'admissions',
  APPLICATION = 'application', // New Wizard
  ABOUT = 'about',
  LOCATIONS = 'locations',
  EVENTS = 'events',
  CAREERS = 'careers',
  CONTACT = 'contact',
  SECOND_CHANCE = 'second_chance', // New Gov Page
  FLYER = 'flyer', // New Printable Flyer
  // Pillars
  PHYSICAL_DISCIPLINE = 'physical_discipline',
  ACADEMIC_COMPETENCE = 'academic_competence',
  SOCIAL_SKILL = 'social_skill',
  FINANCIAL_LITERACY = 'financial_literacy',
  ENTREPRENEURSHIP = 'entrepreneurship',
  // Blog
  BLOG = 'blog',
  BLOG_POST = 'blog_post'
}

export interface ScheduleItem {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  imageUrl?: string;
  timestamp: number;
  isThinking?: boolean;
  groundingUrls?: Array<{uri: string, title: string}>;
}

export interface ImageGenerationConfig {
  prompt: string;
  aspectRatio: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  imageSize: "1K" | "2K" | "4K";
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode; 
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}