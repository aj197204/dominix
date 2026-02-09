import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We bridge the gap between <span className="font-semibold text-blue-600">strategy and execution</span>, 
              helping organizations transform their vision into reality. Our approach combines deep industry 
              expertise with cutting-edge design methodologies to deliver sustainable, scalable solutions.
            </p>
            
            <p>
              Founded by a team of strategists, designers, and operators who've built and scaled products 
              at leading companies, Dominix Inc. was born from a simple belief: <span className="font-semibold text-gray-900">
              transformation shouldn't be theoretical—it should be tangible</span>.
            </p>
            
            <p>
              We bring together <span className="font-semibold text-blue-600">design thinking</span>, 
              <span className="font-semibold text-blue-600"> delivery experience</span>, and 
              <span className="font-semibold text-blue-600"> business rigor</span> to create solutions 
              that don't just look good on paper—they work in practice, at scale, and stand the test of time.
            </p>
          </div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={isInView ? {
          opacity: 1,
          scale: 1
        } : {
          opacity: 0,
          scale: 0.95
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <p className="text-xl font-semibold text-gray-900 italic">
              "We don't just consult—we co-create. We don't just recommend—we deliver."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
export default About;