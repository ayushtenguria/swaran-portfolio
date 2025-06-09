import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "What is executive and leadership coaching?",
    answer: "Executive and leadership coaching is a thought-provoking and collaborative process that helps professionals unlock their potential, navigate complex decisions, and grow as leaders."
  },
  {
    id: "item-2",
    question: "Who is coaching for?",
    answer: "Coaching is for mid-career professionals, founders, and leaders navigating growth, transition, or uncertainty. If you're feeling stuck, seeking clarity, or want to lead more effectively—coaching is for you."
  },
  {
    id: "item-3",
    question: "How do I know if coaching is right for me?",
    answer: "If you're curious about growth, feeling at a crossroads, or want to lead with more confidence—coaching can help. The best way to know is to book a discovery call and see how it feels."
  },
  {
    id: "item-4",
    question: "Why do we need multiple sessions?",
    answer: "Coaching is not a one-session miracle—it's a process. Each session builds on the last, helping you gain clarity, shift patterns, and create lasting change. One conversation can spark insight, but consistent sessions help turn insight into impact."
  },
  {
    id: "item-5",
    question: "Is everything we discuss confidential?",
    answer: "Absolutely. Our coaching conversations are completely confidential, creating a safe space for exploration, reflection, and honesty."
  },
  {
    id: "item-6",
    question: "How often do we meet and for how long?",
    answer: "Most clients meet me 1–2 times per month for 45–60 minute sessions. We can tailor the cadence depending on your goals and availability."
  },
  {
    id: "item-7",
    question: "What's your coaching style like?",
    answer: "I combine deep listening with strategic challenge—always with your growth in mind. I bring my global experience and love for clarity into every session."
  },
  {
    id: "item-8",
    question: "What can I expect from working with you?",
    answer: "You can expect a structured, yet flexible experience centered around your goals. I'll challenge your thinking, support your growth, and create a space where insights turn into action. My approach blends strategy, reflection, and accountability."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column - Header Content */}
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <ChevronRight className="text-blue-600 mr-2" size={24} />
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                FAQS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Frequently Asked
              <span className="text-blue-600"> Questions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about executive coaching and how we can work together. 
              These are the most common questions I receive from potential clients.
            </p>
            <div className="pt-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Ready to get started?
                </h3>
                <p className="text-blue-700 text-sm">
                  Don't see your question here? I'm always happy to discuss your specific situation 
                  and how coaching might help you achieve your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={item.id} 
                  value={item.id}
                  className={`border-b border-gray-100 ${index === faqData.length - 1 ? 'border-b-0' : ''}`}
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 group">
                    <span className="text-base font-semibold text-gray-900 pr-4  transition-colors duration-200">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <div className="text-gray-600 leading-relaxed text-sm animate-in slide-in-from-top-2 duration-300">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Separate Call to Action Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'd love to help clarify anything about the coaching process. Book a free discovery call 
            to discuss your goals and see if we're a good fit.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;