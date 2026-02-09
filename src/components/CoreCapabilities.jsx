
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Layers, Rocket } from 'lucide-react';

function CoreCapabilities() {
  const capabilities = [
    {
      icon: Users,
      title: "Human Insight",
      description: "Deep understanding of user needs, behaviors, and motivations to drive meaningful innovation.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Layers,
      title: "Experience Orchestration",
      description: "Seamlessly connecting touchpoints, technologies, and processes into cohesive journeys.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "Execution at Scale",
      description: "Robust delivery frameworks that ensure strategies survive the leap from whiteboard to reality.",
      color: "from-blue-600 to-indigo-800"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Transformation Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bridge the gap between strategy and execution through a unified three-layer approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 -z-10 rounded-full"></div>

          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <cap.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {cap.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreCapabilities;
