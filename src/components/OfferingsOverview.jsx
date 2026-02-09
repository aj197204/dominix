
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

function OfferingsOverview() {
  const highlights = [
    "50+ Man-Years in Telecom & Finance",
    "Deep Expertise in Risk Analytics",
    "Network Optimization Strategies"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Deep Industry Expertise
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Dominix Inc. brings over <span className="font-semibold text-blue-700">50 man-years of combined leadership expertise</span> specializing in the high-stakes environments of <span className="font-semibold text-gray-900">Telecom</span> and <span className="font-semibold text-gray-900">Finance</span>.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-10">
            We don't just advise; we engineer resilience. From complex <strong>Financial & Risk Analytics</strong> that protect your bottom line to large-scale <strong>Network Optimization</strong> and digital transformation initiatives, our team has navigated the most complex challenges in the industry. We understand that in these sectors, precision is not a luxury—it's a requirement.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-800 font-medium text-sm md:text-base border border-blue-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OfferingsOverview;
