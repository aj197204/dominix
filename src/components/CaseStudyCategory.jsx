
import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';

function CaseStudyCategory({ title, subtitle, icon: Icon, caseStudies }) {
  return (
    <section className="py-16 border-b border-gray-100 last:border-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
          <div className="p-3 bg-blue-50 rounded-lg">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600 mt-1">{subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudyCategory;
