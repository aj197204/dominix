
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, Target, Award, BarChart3 } from 'lucide-react';

function OfferingCard({ offering }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden ${isOpen ? 'ring-2 ring-blue-500/20' : ''}`}
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 cursor-pointer flex justify-between items-start gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg bg-blue-50 text-blue-600`}>
              {offering.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{offering.title}</h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base pl-[52px]">
            {offering.foundation}
          </p>
        </div>
        
        <button 
          className={`mt-2 p-2 rounded-full transition-colors duration-200 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          aria-label={isOpen ? "Collapse offering details" : "Expand offering details"}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-50/50"
          >
            <div className="p-6 pt-2 border-t border-gray-100 space-y-6">
              
              {/* What We Do */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  <Target className="w-4 h-4 text-blue-600" />
                  What Dominix Actually Does
                </h4>
                <ul className="space-y-2">
                  {offering.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Differentiator */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h4 className="flex items-center gap-2 text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  Our Differentiator
                </h4>
                <p className="text-blue-800 text-sm italic">
                  "{offering.differentiator}"
                </p>
              </div>

              {/* KPIs */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  Impact & KPIs
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {offering.kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-2 rounded border border-gray-100 text-center shadow-sm">
                      <span className="text-sm font-medium text-gray-700">{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default OfferingCard;
