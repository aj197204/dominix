
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function CaseStudyCard({ title, category, image, url = "#" }) {
  return (
    <motion.a
      href={url}
      className="group block h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100 flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Loading placeholder */}
          <img
            src={image || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-900 backdrop-blur-sm shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
            View Case Study
            <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default CaseStudyCard;
