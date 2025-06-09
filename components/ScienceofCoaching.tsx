"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

interface SciencePoint {
  id: string;
  text: string;
}

interface SessionComponent {
  id: string;
  title: string;
  description: string;
}

const sciencePoints: SciencePoint[] = [
  {
    id: "01",
    text: "Coaching shifts mindset from problems to solutions",
  },
  {
    id: "02",
    text: "Coaching encourages self-reflection and personal responsibility",
  },
  {
    id: "03",
    text: "Coaching provides an unbiased perspective and external accountability",
  },
  {
    id: "04",
    text: "Coaching uses structured frameworks to drive sustainable change",
  },
];

const sessionComponents: SessionComponent[] = [
  {
    id: "01",
    title: "Desired Outcome",
    description:
      "Identifying goals and challenges. Defining clear, actionable objectives that align with your vision and create meaningful direction for growth.",
  },
  {
    id: "02",
    title: "Innovative Solutions",
    description:
      "Querying, exploring and seeking solutions through powerful questioning techniques that unlock new perspectives and breakthrough thinking.",
  },
  {
    id: "03",
    title: "S.M.A.R.T Action Steps",
    description:
      "Making actions Specific, Measurable, Attainable, Realistic, and Timebound (SMART) to ensure clarity and successful implementation.",
  },
  {
    id: "04",
    title: "Responsibility and Accountability",
    description:
      "Implementing strategies and tracking progress with clear ownership, commitment, and regular check-ins to maintain momentum.",
  },
];

const CoachingScienceAndSessions: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            Coaching:<br />
            <span className="font-normal text-blue-600"> Science & Session Components</span>
          </h1>
        </div>

        {/* Science Behind Coaching Section */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Science Behind Coaching
            </h2>
            <div className="w-24 h-0.5 bg-gray-900 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed font-light">
              Coaching works by shifting perspectives, fostering ownership, and
              using structured support to create lasting, solution-focused
              change
            </p>
          </div>

          {/* Science Points */}
          <div className="space-y-16">
            {sciencePoints.map((point, index) => (
              <div
                key={point.id}
                className={`flex items-start gap-12 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="flex-shrink-0">
                  <span className="text-8xl md:text-9xl font-extralight text-blue-600 leading-none">
                    {point.id}
                  </span>
                </div>
                <div className="flex-grow pt-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-light max-w-lg">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Components Section */}
        <div>
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <ChevronRight className="text-gray-400 mr-3" size={24} />
              <h2 className="text-4xl font-light text-gray-900 tracking-wide">
                Coaching Session
                <span className="ml-2 font-medium text-blue-600">Components</span>
              </h2>
            </div>
            <div className="w-24 h-0.5 bg-gray-900 mb-8 ml-9"></div>
          </div>

          {/* Session Components */}
          <div className="space-y-20">
            {sessionComponents.map((component, index) => (
              <div
                key={component.id}
                className={`flex items-start gap-12 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
                style={{
                  animation: `slideIn 0.8s ease-out ${index * 0.3}s both`,
                }}
              >
                <div className="flex-shrink-0">
                  <span className="text-8xl md:text-9xl font-extralight text-blue-600 leading-none">
                    {component.id}
                  </span>
                </div>
                <div className="flex-grow pt-6">
                  <h3 className="text-2xl font-normal text-gray-900 mb-4 tracking-wide">
                    {component.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl">
                    {component.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-32 text-center">
            <div className="border border-gray-200 p-12 bg-gray-50/50">
              <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
                Ready to Experience Structured Coaching?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
                Each session is designed to move you forward with clarity,
                actionable steps, and accountability. Let's start your
                transformation journey.
              </p>
              <button className="bg-blue-600 text-white font-light px-12 py-4 tracking-wide hover:bg-gray-800 transition-colors duration-300 text-sm uppercase">
                Book Your First Session
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CoachingScienceAndSessions;
