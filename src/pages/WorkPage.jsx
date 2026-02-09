
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Palette, Zap, Users } from 'lucide-react';
import FeaturedCaseStudiesCarousel from '@/components/FeaturedCaseStudiesCarousel';
import CaseStudyCategory from '@/components/CaseStudyCategory';

// Data placeholders - In a real scenario these would come from the provided URLs/API
// Generating representative data based on the counts requested (23, 14, 2)

const brandingStudies = Array(23).fill(null).map((_, i) => ({
  title: `Global Retail Experience Redesign ${i + 1}`,
  category: "Branding & eCommerce",
  image: `https://images.unsplash.com/photo-${1441986300917 + i}-64674bd600d8?auto=format&fit=crop&q=80`, // Randomized unsplash IDs
}));

// Manually curating a few to look nice for the demo
brandingStudies[0] = { title: "Luxury Fashion E-Commerce Platform", category: "eCommerce", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80" };
brandingStudies[1] = { title: "Automotive Brand Identity Refresh", category: "Branding", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80" };
brandingStudies[2] = { title: "FinTech Mobile App Design System", category: "Digital Product", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" };
brandingStudies[3] = { title: "Healthcare Portal UX Strategy", category: "UX Design", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" };

const transformationStudies = Array(14).fill(null).map((_, i) => ({
  title: `Enterprise Digital Transformation Initiative ${i + 1}`,
  category: "Transformation",
  image: `https://images.unsplash.com/photo-${1451187580459 + i}-434cc327f2c0?auto=format&fit=crop&q=80`,
}));

// Specific mentioned studies from prompt
transformationStudies[0] = { title: "Application Landscape Modernization", category: "Telecom", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" };
transformationStudies[1] = { title: "Single Pane of Glass with AI", category: "AI & Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" };
transformationStudies[2] = { title: "Market & Credit Risk Analytics", category: "Finance", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" };
transformationStudies[3] = { title: "OTC Derivatives Pricing Platform", category: "Capital Markets", image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80" };
transformationStudies[4] = { title: "Simple-Defi Blockchain Data Lineage", category: "Blockchain", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80" };


const talentStudies = [
  {
    title: "'Talent Marketplace' Rollout",
    category: "HR Tech",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  },
  {
    title: "Global HR Analytics Dashboard",
    category: "People Analytics",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
  }
];

function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Our Work - Dominix Inc. | Case Studies & Success Stories</title>
        <meta 
          name="description" 
          content="Explore Dominix Inc.'s portfolio of digital transformation, branding, and platform engineering success stories across Telecom, Finance, and Enterprise sectors." 
        />
      </Helmet>

      <div className="min-h-screen bg-white pb-20">
        {/* Header / Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white pt-24 pb-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Work
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Transforming businesses through design-led strategy and execution.
            </motion.p>
          </div>
        </section>

        {/* Featured Carousel - Overlapping Hero */}
        <div className="-mt-20 relative z-10 mb-12">
          <FeaturedCaseStudiesCarousel />
        </div>

        {/* Categories */}
        <div className="space-y-12">
          <CaseStudyCategory 
            title="Branding, Digital Presence & eCommerce"
            subtitle="Creating memorable identities and high-converting digital experiences."
            icon={Palette}
            caseStudies={brandingStudies}
          />
          
          <CaseStudyCategory 
            title="Digital Transformation"
            subtitle="Modernizing legacy systems and enabling data-driven decision making."
            icon={Zap}
            caseStudies={transformationStudies}
          />

          <CaseStudyCategory 
            title="Talent & Platforms"
            subtitle="Empowering workforces with next-generation HR and collaboration tools."
            icon={Users}
            caseStudies={talentStudies}
          />
        </div>
      </div>
    </>
  );
}

export default WorkPage;
