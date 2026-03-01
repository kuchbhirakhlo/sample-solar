'use client';

import { COLORS } from '@/lib/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const faqs = {
    general: [
      {
        id: 1,
        question: 'What is the life of a rooftop solar system?',
        answer: 'A typical rooftop solar system lasts 25-30 years. Most modern solar panels come with a 25-year warranty and continue to generate electricity beyond that period at slightly reduced efficiency (typically 80% of original capacity).',
      },
      {
        id: 2,
        question: 'Do solar panels require high maintenance cost?',
        answer: 'No, solar panels require minimal maintenance. Regular cleaning (2-3 times a year) and occasional inspections are usually sufficient. Most systems have very low maintenance costs - typically less than ₹5,000 per year.',
      },
      {
        id: 3,
        question: 'Can solar projects damage my roof?',
        answer: 'Professional installation ensures no damage to your roof. Our certified installers follow all safety protocols and use waterproof mounting systems that actually protect your roof from weather damage.',
      },
      {
        id: 4,
        question: 'My roof is not made of concrete. Can I still install a solar project?',
        answer: 'Yes! Solar systems can be installed on almost any roof type including concrete, metal, tiles, and asphalt. Our experts will assess your roof and recommend the best solution.',
      },
    ],
    maintenance: [
      {
        id: 5,
        question: 'How often should I clean my solar panels?',
        answer: 'We recommend cleaning your solar panels 2-3 times per year. In dusty areas or areas with high pollution, you might need to clean them more frequently. Use a soft brush and distilled water.',
      },
      {
        id: 6,
        question: 'What happens during monsoon or winter?',
        answer: 'Solar panels still generate electricity in cloudy weather and during monsoons, though at reduced capacity. Winter months typically have good sunlight hours, so generation remains consistent. Our systems are designed to handle all weather conditions.',
      },
      {
        id: 7,
        question: 'Is there any risk of electrocution from solar panels?',
        answer: 'No, solar panels are completely safe. Our certified installers ensure proper grounding and safety measures. The system has built-in safety features that automatically shut down in case of any issues.',
      },
      {
        id: 8,
        question: 'What should I do if there\'s a system malfunction?',
        answer: 'Call our support team immediately at +91 8888 999 999. We provide 24/7 emergency support and can diagnose issues remotely through our monitoring system. Repairs are typically completed within 24-48 hours.',
      },
    ],
    economics: [
      {
        id: 9,
        question: 'How much can I save with solar?',
        answer: 'Savings depend on your current electricity consumption and tariff rates. On average, customers save 60-80% on their electricity bills. A typical residential 5KW system can save ₹10,000-15,000 per year.',
      },
      {
        id: 10,
        question: 'What\'s the payback period for a solar system?',
        answer: 'The average payback period is 4-6 years for residential systems and 2-4 years for commercial systems. After the payback period, you get free electricity for 20+ years.',
      },
      {
        id: 11,
        question: 'Are there tax benefits for solar installation?',
        answer: 'Yes, several tax benefits are available: 80% depreciation in the first year under Income Tax Act, exemption from payment of generator tax, and in some states, exemption from property tax.',
      },
      {
        id: 12,
        question: 'How does net metering work?',
        answer: 'Net metering allows you to feed excess solar electricity back to the grid. You receive credits for this electricity, which you can use when your system doesn\'t generate enough power (at night). This effectively reduces your net electricity bill.',
      },
    ],
  };

  return (
    <div>
      {/* Header */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700">
            Find answers to common questions about solar energy and our services
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="economics">Economics</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                {faqs.general.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="maintenance">
              <Accordion type="single" collapsible className="w-full">
                {faqs.maintenance.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="economics">
              <Accordion type="single" collapsible className="w-full">
                {faqs.economics.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* More Help */}
      <section className="py-20" style={{ backgroundColor: COLORS.lightBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
            Didn't find what you're looking for?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our expert team is here to help. Contact us for personalized assistance.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.primary }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
