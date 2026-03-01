'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { COLORS } from '@/lib/constants';

export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: 'What is the life of a rooftop solar system?',
      answer: 'A typical rooftop solar system lasts 25-30 years. Most modern solar panels come with a 25-year warranty and continue to generate electricity beyond that period at slightly reduced efficiency.',
      category: 'General',
    },
    {
      id: 2,
      question: 'Do solar panels require high maintenance cost?',
      answer: 'No, solar panels require minimal maintenance. Regular cleaning (2-3 times a year) and occasional inspections are usually sufficient. Most systems have very low maintenance costs.',
      category: 'General',
    },
    {
      id: 3,
      question: 'Can solar projects damage my roof?',
      answer: 'Professional installation ensures no damage to your roof. Our certified installers follow all safety protocols and use waterproof mounting systems that actually protect your roof.',
      category: 'General',
    },
    {
      id: 4,
      question: 'My roof is not made of concrete. Can I still install a solar project?',
      answer: 'Yes! Solar systems can be installed on almost any roof type including concrete, metal, tiles, and asphalt. Our experts will assess your roof and recommend the best solution.',
      category: 'General',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: COLORS.primary }}>
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Find answers to common questions about solar energy
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <a
            href="/faq"
            className="inline-block font-semibold hover:opacity-80 transition-opacity"
            style={{ color: COLORS.primary }}
          >
            View all FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}
