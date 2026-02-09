
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PenTool, Layout, Cpu, Workflow, BarChart2 } from 'lucide-react';
import OfferingsOverview from '@/components/OfferingsOverview';
import CoreCapabilities from '@/components/CoreCapabilities';
import OfferingCard from '@/components/OfferingCard';

// Data for Offerings
const offeringsData = [
  {
    id: 1,
    title: "Design Thinking–Led Experience Strategy",
    icon: <PenTool className="w-6 h-6" />,
    foundation: "We decode user needs to build products that matter.",
    activities: [
      "In-depth user research and persona development",
      "Customer journey mapping and service blueprinting",
      "Design sprints for rapid prototyping",
      "Stakeholder alignment workshops",
      "Value proposition design"
    ],
    differentiator: "We don't just design screens; we design business outcomes rooted in deep human empathy.",
    kpis: [
      "Increased NPS",
      "Faster Time-to-Market",
      "Reduced Rework Costs",
      "Higher User Adoption",
      "Brand Sentiment"
    ]
  },
  {
    id: 2,
    title: "Omni-Channel Experience Architecture",
    icon: <Layout className="w-6 h-6" />,
    foundation: "Unified experiences across digital and physical worlds.",
    activities: [
      "Cross-channel consistency auditing",
      "Headless CMS and DXP architecture",
      "Mobile-first responsive design systems",
      "Seamless offline-to-online handoffs",
      "Touchpoint orchestration"
    ],
    differentiator: "Breaking down silos to ensure your customer feels known and valued at every interaction point.",
    kpis: [
      "Cross-Sell Rate",
      "Customer Retention",
      "Channel Hopping ease",
      "Session Duration",
      "Conversion Rate"
    ]
  },
  {
    id: 3,
    title: "Intelligent Automation & AI Enablement",
    icon: <Cpu className="w-6 h-6" />,
    foundation: "Streamlining operations with smart technology.",
    activities: [
      "RPA (Robotic Process Automation) implementation",
      "Generative AI integration for workflows",
      "Chatbot and conversational AI design",
      "Process mining and bottleneck analysis",
      "Automated compliance checking"
    ],
    differentiator: "Balancing the efficiency of machines with the nuance of human oversight for risk-aware automation.",
    kpis: [
      "Cost Savings",
      "Process Cycle Time",
      "Error Reduction",
      "FTE Capacity Release",
      "Response Time"
    ]
  },
  {
    id: 4,
    title: "Digital Service Design & Delivery",
    icon: <Workflow className="w-6 h-6" />,
    foundation: "Agile build and delivery of resilient digital platforms.",
    activities: [
      "Agile product management and PO support",
      "DevOps and CI/CD pipeline optimization",
      "Cloud-native application development",
      "Legacy system modernization",
      "Quality Engineering and automated testing"
    ],
    differentiator: "Proven delivery rigor born from decades in high-stakes telecom and finance environments.",
    kpis: [
      "Deployment Frequency",
      "Change Failure Rate",
      "MTTR (Recovery Time)",
      "System Uptime",
      "Feature Usage"
    ]
  },
  {
    id: 5,
    title: "Experience Analytics & Continuous Optimization",
    icon: <BarChart2 className="w-6 h-6" />,
    foundation: "Data-driven decisions to refine and perfect.",
    activities: [
      "Real-time dashboarding and visualization",
      "A/B and multivariate testing",
      "Funnel analysis and drop-off prevention",
      "Predictive behavioral modeling",
      "Voice of Customer (VoC) integration"
    ],
    differentiator: "Moving beyond vanity metrics to track the leading indicators that actually drive revenue.",
    kpis: [
      "ROI on Features",
      "Churn Reduction",
      "CLV (Lifetime Value)",
      "Cart Abandonment Rate",
      "Optimization Velocity"
    ]
  }
];

function OfferingsPage() {
  return (
    <>
      <Helmet>
        <title>Offerings - Dominix Inc. | Strategy, Experience, Execution</title>
        <meta 
          name="description" 
          content="Explore Dominix Inc.'s comprehensive offerings in Design Thinking, Omni-Channel Architecture, AI Enablement, and Digital Delivery for Telecom and Finance sectors." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header / Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Offerings
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light"
            >
              Design-Led Transformation Across Strategy, Experience, and Execution
            </motion.p>
          </div>
        </section>

        {/* Overview Section */}
        <OfferingsOverview />

        {/* Framework / Capabilities */}
        <CoreCapabilities />

        {/* Detailed Offerings Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Solutions</h2>
            <div className="hidden md:block h-px flex-1 bg-gray-200 ml-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {offeringsData.map((offering) => (
              <OfferingCard key={offering.id} offering={offering} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default OfferingsPage;
