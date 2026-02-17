-- =============================================
-- Opus Vidya — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- =============================================

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products catalog
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('study-materials', 'mock-tests')),
  exam_type TEXT,
  description TEXT,
  badge TEXT CHECK (badge IN ('Bestseller', 'Popular', 'New', 'Premium')),
  icon TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  price DECIMAL(10, 2),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Content samples (free PDFs)
CREATE TABLE IF NOT EXISTS content_samples (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  file_url TEXT,
  description TEXT,
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_samples ENABLE ROW LEVEL SECURITY;

-- Public can INSERT contact messages
CREATE POLICY "Anyone can submit contact form"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- Public can READ active products
CREATE POLICY "Anyone can view active products"
  ON products FOR SELECT
  USING (is_active = TRUE);

-- Public can READ published blog posts
CREATE POLICY "Anyone can view published posts"
  ON blog_posts FOR SELECT
  USING (is_published = TRUE);

-- Public can READ content samples
CREATE POLICY "Anyone can view content samples"
  ON content_samples FOR SELECT
  USING (true);

-- =============================================
-- Seed Data — Products
-- =============================================

INSERT INTO products (title, slug, category, exam_type, description, badge, icon, features, price) VALUES
('Banking Study Material', 'ibps-po-study-material', 'study-materials', 'IBPS, SBI, RBI', 'Complete study materials for all banking exams with PYQs and practice papers', 'Bestseller', '🏦', '["Quantitative Aptitude Shortcuts", "Logical Reasoning Modules", "English Language & Grammar", "Banking Awareness Notes", "150+ Mock Tests", "Previous Year Papers"]', 2999),
('SSC Study Material', 'ssc-cgl-study-material', 'study-materials', 'CGL, CHSL, MTS', 'Comprehensive SSC exam preparation materials with detailed solutions', 'Popular', '🏛️', '["General Intelligence & Reasoning", "Quantitative Aptitude", "English Comprehension", "General Awareness", "100+ Practice Sets", "Solved Papers"]', 2499),
('CBSE Class 6-12', 'cbse-class-6-12-study-material', 'study-materials', 'All Subjects', 'NCERT-aligned study materials for Classes 6-12 covering all subjects', 'New', '📚', '["Mathematics", "Science", "Social Studies", "English", "Hindi", "Chapter-wise Notes", "Worksheets"]', 1999),
('IIT-JEE Study Material', 'jee-main-study-material', 'study-materials', 'Main & Advanced', 'Complete JEE preparation with Physics, Chemistry, and Mathematics', 'Premium', '⚙️', '["Physics - Mechanics to Modern", "Chemistry - Organic & Inorganic", "Mathematics - Calculus to Algebra", "Previous Year Solutions", "Mock Test Series"]', 3999),
('Banking Mock Tests', 'banking-mock-tests', 'mock-tests', 'IBPS, SBI, RBI', 'Full-length mock tests for all banking exams with detailed solutions', 'Bestseller', '🏦', '["150+ Full Length Tests", "Sectional Tests", "PYQ-based Tests", "Detailed Solutions", "Performance Analytics"]', 1499),
('SSC Mock Tests', 'ssc-mock-tests', 'mock-tests', 'CGL, CHSL, MTS', 'Comprehensive mock test series for SSC exams', 'Popular', '🏛️', '["100+ Full Length Tests", "Topic-wise Tests", "Previous Year Pattern", "Bilingual Support", "Score Analysis"]', 1299);

-- =============================================
-- Seed Data — Content Samples
-- =============================================

INSERT INTO content_samples (title, category, description) VALUES
('Banking Exam Samples', 'banking', 'IBPS PO, SBI Clerk & RBI Grade B practice sets with solutions'),
('SSC Exam Samples', 'ssc', 'SSC CGL, CHSL & MTS previous year questions topic-wise'),
('CBSE Content Samples', 'cbse', 'Class 6-12 Maths & Science chapter notes and worksheets');
