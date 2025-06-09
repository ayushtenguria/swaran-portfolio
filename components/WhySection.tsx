"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  ChevronRight, 
  Target, 
  Shield, 
  MessageCircle, 
  Eye, 
  Users, 
  Calendar, 
  Award, 
  BarChart3, 
  Zap, 
  CheckCircle,
  TrendingUp,
  UserCheck,
  Network,
  RotateCcw,
  ChevronLeft,
  ChevronRightIcon
} from 'lucide-react';

interface WhyCoachingWorksItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CoachingArea {
  id: string;
  title: string;
  icon: React.ReactNode;
  challenges: string[];
}

const whyCoachingWorks: WhyCoachingWorksItem[] = [
  { 
    id: 1, 
    title: "24/7 Personalized Approach", 
    description: "Tailored coaching strategies designed specifically for your unique goals, challenges, and leadership style.",
    icon: <Target className="w-6 h-6" /> 
  },
  { 
    id: 2, 
    title: "Safe & Confidential Space", 
    description: "A judgment-free environment where you can explore challenges, vulnerabilities, and growth opportunities openly.",
    icon: <Shield className="w-6 h-6" /> 
  },
  { 
    id: 3, 
    title: "Powerful Questioning", 
    description: "Strategic inquiry that unlocks insights, challenges assumptions, and drives breakthrough thinking.",
    icon: <MessageCircle className="w-6 h-6" /> 
  },
  { 
    id: 4, 
    title: "Objective Perspective", 
    description: "Unbiased external viewpoint that helps you see blind spots and opportunities you might miss.",
    icon: <Eye className="w-6 h-6" /> 
  },
  { 
    id: 5, 
    title: "Challenge & Stretch Partner", 
    description: "A supportive ally who pushes you beyond your comfort zone to achieve extraordinary results.",
    icon: <TrendingUp className="w-6 h-6" /> 
  },
  { 
    id: 6, 
    title: "Structured Sessions", 
    description: "Pre-defined frameworks and methodologies that ensure consistent progress and measurable outcomes.",
    icon: <Calendar className="w-6 h-6" /> 
  },
  { 
    id: 7, 
    title: "Ownership & Empowerment", 
    description: "You drive the agenda and decisions, building confidence and leadership capabilities through self-directed growth.",
    icon: <Award className="w-6 h-6" /> 
  },
  { 
    id: 8, 
    title: "Measurable Goal-Setting", 
    description: "Clear, quantifiable objectives with tracking mechanisms to ensure accountability and progress visibility.",
    icon: <BarChart3 className="w-6 h-6" /> 
  },
  { 
    id: 9, 
    title: "Action-Oriented Framework", 
    description: "Focus on practical implementation and real-world application of insights and strategies.",
    icon: <Zap className="w-6 h-6" /> 
  },
  { 
    id: 10, 
    title: "Accountability & Motivation", 
    description: "Consistent follow-up and support to maintain momentum and overcome obstacles on your journey.",
    icon: <CheckCircle className="w-6 h-6" /> 
  }
];

const coachingAreas: CoachingArea[] = [
  {
    id: "area-1",
    title: "Transitioning from Individual Contributor to People Leader",
    icon: <UserCheck className="w-5 h-5" />,
    challenges: [
      "Struggling to delegate effectively without micromanaging",
      "Difficulty shifting from \"doing\" to \"leading\"",
      "Unclear leadership style or approach"
    ]
  },
  {
    id: "area-2",
    title: "Building and Leading High-Performance Teams",
    icon: <Users className="w-5 h-5" />,
    challenges: [
      "Managing diverse personalities and working styles",
      "Motivating disengaged team members",
      "Difficulty building trust and psychological safety"
    ]
  },
  {
    id: "area-3",
    title: "Managing Up, Across, and Through Influence",
    icon: <Network className="w-5 h-5" />,
    challenges: [
      "Navigating stakeholder expectations without authority",
      "Lack of visibility or recognition for team achievements",
      "Struggling to influence cross-functional teams"
    ]
  },
  {
    id: "area-4",
    title: "Leading Through Change and Uncertainty",
    icon: <RotateCcw className="w-5 h-5" />,
    challenges: [
      "Managing morale during layoffs, restructuring, or pivots",
      "Getting buy-in for transformation or new initiatives",
      "Handling resistance to change"
    ]
  }
];

const CoachingWhyItWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const totalSlides = Math.ceil(whyCoachingWorks.length / cardsPerView);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentCards = () => {
    const startIndex = currentIndex * cardsPerView;
    return whyCoachingWorks.slice(startIndex, startIndex + cardsPerView);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-5 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Coaching 
            <span className="text-blue-600"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Coaching works because it blends personalization, structure, and challenge within a safe space—driving clarity, action, and accountability toward meaningful goals.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mb-20">
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {getCurrentCards().map((item, index) => (
                <div
                  key={item.id}
                  className="group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <Card className="bg-white/90 border-gray-200 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 h-full group">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-blue-100 rounded-full border border-blue-200 group-hover:bg-blue-200 transition-colors duration-300">
                          <div className="text-blue-600">
                            {item.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 shadow-sm"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Coaching Areas Section */}
        <div>
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <ChevronRight className="text-blue-600 mr-2" size={24} />
              <h3 className="text-3xl font-bold text-gray-900 text-center">
                Coaching Areas 
                <span className="text-lg font-normal text-gray-600 ml-2">(non-exhaustive list)</span>
              </h3>
            </div>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {coachingAreas.map((area, index) => (
                  <AccordionItem 
                    key={area.id} 
                    value={area.id}
                    className={`border-b border-gray-200 ${index === coachingAreas.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 group">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                          <div className="text-blue-600">
                            {area.icon}
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {area.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 pt-0">
                      <div className="ml-14 space-y-3 animate-in slide-in-from-top-2 duration-300">
                        {area.challenges.map((challenge, challengeIndex) => (
                          <div 
                            key={challengeIndex} 
                            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">
                              {challenge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CoachingWhyItWorks;