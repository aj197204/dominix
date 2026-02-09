
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CaseStudyCard from './CaseStudyCard';

const featuredStudies = [
  {
    id: 1,
    title: "Application Landscape Modernization for a large Telecom",
    category: "Telecom",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Single Pane of Glass with AI Enablement for a large Telecom",
    category: "AI & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "'Talent Marketplace' Rollout",
    category: "HR Tech",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Market & Credit Risk Analytics Rollout",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "OTC Derivatives Pricing Platform",
    category: "Capital Markets",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Simple-Defi Blockchain Data Lineage Platform",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
  }
];

function FeaturedCaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, featuredStudies.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-blue-400">
              <Trophy className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm font-bold">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Transformative Outcomes
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Highlighting our most impactful engagements across industries.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-gray-700 bg-gray-800 text-white hover:bg-gray-700 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-gray-700 bg-gray-800 text-white hover:bg-gray-700 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden -mx-4 px-4 py-4">
          <motion.div
            className="flex gap-6"
            initial={false}
            animate={{ x: `-${currentIndex * (100 / itemsPerPage + (24 / window.innerWidth * 100))}%` }} // Approximate gap calculation or simplify
            // Using a simpler translate approach for responsiveness stability
            style={{ 
              transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerPage} + ${itemsPerPage > 1 ? '1.5rem' : '0rem'})))` 
            }}
          >
            {featuredStudies.map((study) => (
              <motion.div
                key={study.id}
                className="flex-shrink-0"
                style={{ width: `calc((100% - ${(itemsPerPage - 1) * 1.5}rem) / ${itemsPerPage})` }}
              >
                <CaseStudyCard {...study} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCaseStudiesCarousel;
