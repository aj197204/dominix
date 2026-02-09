
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import NewsCarousel from '@/components/NewsCarousel';
import CTA from '@/components/CTA';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dominix Inc. - Design-Led Transformation for Businesses Ready to Scale</title>
        <meta 
          name="description" 
          content="Dominix Inc. bridges strategy and execution with design thinking, delivery experience, and business rigor. We create, transform, and scale businesses through strategic design and proven delivery excellence." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Approach />
        <NewsCarousel />
        <CTA />
      </div>
    </>
  );
}

export default HomePage;
