
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, RefreshCw, TrendingUp } from 'lucide-react';

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Lightbulb,
      title: 'Create',
      description: 'Define new products, brands, and experiences grounded in user needs and business goals.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: RefreshCw,
      title: 'Transform',
      description: 'Reimagine journeys, processes, and platforms to remove friction and unlock efficiency.',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      description: 'Enable teams, systems, and operations to grow sustainably with clarity and confidence.',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core pillars that drive transformation and sustainable growth
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Gradient Bar */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
