
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Rocket, Target, Compass } from 'lucide-react';

function Approach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Human-centered approaches that put users at the heart of every decision, ensuring solutions are intuitive and impactful.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Delivery Experience',
      description: 'Battle-tested execution frameworks that translate vision into working solutions with speed and precision.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Business Rigor',
      description: 'Data-driven methodologies and financial discipline that ensure every initiative delivers measurable ROI.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Compass,
      title: 'Strategy',
      description: 'Long-term vision and market positioning that keeps organizations ahead of the curve and prepared for change.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="approach" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core pillars that define how we work and deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6 h-full flex flex-col items-center text-center hover:border-transparent hover:shadow-xl transition-all duration-300">
                  {/* Icon with Gradient Background */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {pillar.description}
                  </p>

                  {/* Hover Gradient Border */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Approach;
