
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Newspaper, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const articles = [
  {
    id: 1,
    title: "Digital Transformation 2026: What's In, What's Out",
    source: "CIO.com",
    url: "https://www.cio.com/article/4117078/digital-transformation-2026-whats-in-whats-out.html",
    image: "https://images.unsplash.com/photo-1679978880855-fb35585ce343",
    category: "Strategy"
  },
  {
    id: 2,
    title: "Overcoming the Organizational Barriers to AI Adoption",
    source: "Harvard Business Review",
    url: "https://hbr.org/2025/11/overcoming-the-organizational-barriers-to-ai-adoption",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "AI & Leadership"
  },
  {
    id: 3,
    title: "Why Digital Transformation Fails Without an Upskilled Workforce",
    source: "CIO.com",
    url: "https://www.cio.com/article/4125163/why-digital-transformation-fails-without-an-upskilled-workforce.html",
    image: "https://images.unsplash.com/photo-1679834708892-284659d758d8",
    category: "Talent"
  },
  {
    id: 4,
    title: "What is Digital Transformation",
    source: "Enterprisers Project",
    url: "https://enterprisersproject.com/what-is-digital-transformation",
    image: "https://images.unsplash.com/photo-1691109972364-0f3b7ce93527",
    category: "Basics"
  },
  {
    id: 5,
    title: "Gen AI's Next Inflection Point: From Employee Experimentation to Organizational Transformation",
    source: "McKinsey",
    url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/gen-ais-next-inflection-point-from-employee-experimentation-to-organizational-transformation",
    image: "https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b",
    category: "Innovation"
  },
  {
    id: 6,
    title: "Goodbye Digital Transformation, Hello AI-First Business Transformation",
    source: "CIO.com",
    url: "https://www.cio.com/article/3816862/goodbye-digital-transformation-hello-ai-first-business-transformation.html",
    image: "https://images.unsplash.com/photo-1620886434979-5cc4ddc31858",
    category: "Trends"
  },
  {
    id: 7,
    title: "The Athlete's Mindset for Digital and AI Transformation",
    source: "McKinsey",
    url: "https://www.mckinsey.com/capabilities/implementation/our-insights/the-athletes-mindset-for-digital-and-ai-transformation",
    image: "https://images.unsplash.com/photo-1684127003993-035c5d7d329b",
    category: "Leadership"
  }
];

function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [imageErrors, setImageErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle responsive items per page
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

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    setIsLoaded(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clamp current index when itemsPerPage changes
  useEffect(() => {
    const maxIndex = Math.max(0, articles.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, articles.length]);

  const maxIndex = Math.max(0, articles.length - itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              Industry Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay ahead with the latest thinking on digital transformation, AI, and organizational change.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`rounded-full border-2 w-12 h-12 ${
                currentIndex === 0 
                  ? 'border-gray-200 text-gray-300' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              } transition-all duration-300`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`rounded-full border-2 w-12 h-12 ${
                currentIndex >= maxIndex 
                  ? 'border-gray-200 text-gray-300' 
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              } transition-all duration-300`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Carousel Track Container */}
        <div className="relative overflow-visible -mx-4 px-4 py-4 min-h-[450px]">
          {isLoaded && (
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                x: `calc(-${currentIndex} * (100% / ${itemsPerPage}) - ${currentIndex} * 1.5rem)`
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                y: { duration: 0.5 },
                x: { type: "spring", stiffness: 300, damping: 30 }
              }}
              style={{ gap: '1.5rem' }}
            >
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="flex-shrink-0 relative group"
                  style={{ 
                    width: `calc((100% - ${(itemsPerPage - 1) * 1.5}rem) / ${itemsPerPage})` 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a 
                    href={article.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-[420px] w-full"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-all duration-500 hover:shadow-2xl">
                      {/* Image Layer */}
                      {!imageErrors[article.id] ? (
                        <motion.img 
                          src={article.image} 
                          alt={article.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                          onError={() => handleImageError(article.id)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-indigo-900">
                          <Newspaper className="h-20 w-20 text-indigo-400/30" />
                        </div>
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                      
                      {/* Content Layer */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                        <div className="mt-auto transform transition-transform duration-300 group-hover:-translate-y-2">
                          {/* Metadata */}
                          <div className="mb-3 flex items-center gap-3">
                            <span className="rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                              {article.category}
                            </span>
                            <span className="text-xs font-medium text-gray-300 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                              {article.source}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="mb-4 text-xl md:text-2xl font-bold leading-tight text-white line-clamp-3 group-hover:text-blue-100 transition-colors">
                            {article.title}
                          </h3>
                          
                          {/* Action */}
                          <div className="flex items-center text-sm font-bold text-blue-400 group-hover:text-white transition-colors">
                            Read Article 
                            <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsCarousel;
