"use client"
import React from 'react';
import { 
  ChevronRight, 
  Check, 
  X,
  MessageCircle,
  Target,
  Users,
  Gift,
  BookOpen,
  GraduationCap,
  Briefcase,
  Heart
} from 'lucide-react';

interface CoachingItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

interface CoachingNotItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const coachingIs: CoachingItem[] = [
  {
    id: 1,
    question: "What is coaching?",
    answer: "Coaching is a structured conversation that helps individuals achieve personal and professional growth.",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    id: 2,
    question: "What does coaching focus on?",
    answer: "Coaching focuses on unlocking potential and maximizing performance",
    icon: <Target className="w-5 h-5" />
  },
  {
    id: 3,
    question: "What does coaching involve?",
    answer: "Coaching is facilitated by a trained coach using powerful questions and techniques",
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 4,
    question: "What does coaching provide?",
    answer: "Coaching does not provide any advice, know-how, or expertise",
    icon: <Gift className="w-5 h-5" />
  }
];

const coachingIsNot: CoachingNotItem[] = [
  {
    id: 1,
    title: "NOT Mentorship",
    description: "Coaching is not mentorship - sharing expertise/knowledge of a particular field",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    id: 2,
    title: "NOT Training",
    description: "Coaching is not providing specific know-how, information, or skills to trainees.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    id: 3,
    title: "NOT Consulting",
    description: "Coaching is not providing advice in a particular area of expertise",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    id: 4,
    title: "NOT Therapy",
    description: "Coaching is not a way to get help with mental health issues or difficult life circumstances.",
    icon: <Heart className="w-5 h-5" />
  }
];

const CoachingComparison: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            Understanding 
            <span className="font-normal text-blue-600"> Coaching</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Clarity about what coaching is and what it isn't helps set proper expectations for your coaching journey
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - What Coaching IS */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <ChevronRight className="text-green-600 mr-3" size={24} />
              <h2 className="text-3xl font-light text-gray-900 tracking-wide">
                Introduction to Coaching
              </h2>
            </div>
            <div className="w-24 h-0.5 bg-green-600 mb-8"></div>
            
            <div className="space-y-6">
              {coachingIs.map((item, index) => (
                <div
                  key={item.id}
                  className="group"
                  style={{
                    animation: `slideInLeft 0.6s ease-out ${index * 0.15}s both`
                  }}
                >
                  <div className="bg-green-50/50 border border-green-100 rounded-xl p-6 hover:bg-green-50 hover:border-green-200 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                            <div className="text-green-600">
                              {item.icon}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 flex-grow">
                            {item.question}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed pl-11">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - What Coaching is NOT */}
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <ChevronRight className="text-red-500 mr-3" size={24} />
              <h2 className="text-3xl font-light text-gray-900 tracking-wide">
                What Coaching is NOT?
              </h2>
            </div>
            <div className="w-24 h-0.5 bg-red-500 mb-8"></div>
            
            <div className="space-y-6">
              {coachingIsNot.map((item, index) => (
                <div
                  key={item.id}
                  className="group"
                  style={{
                    animation: `slideInRight 0.6s ease-out ${index * 0.15}s both`
                  }}
                >
                  <div className="bg-red-50/50 border border-red-100 rounded-xl p-6 hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                          <X className="w-5 h-5 text-red-500" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors duration-300">
                            <div className="text-red-500">
                              {item.icon}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 flex-grow">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed pl-11">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Separator */}
        <div className="my-16 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-green-300"></div>
            <span className="text-gray-400 font-light text-sm uppercase tracking-wide">VS</span>
            <div className="w-12 h-0.5 bg-red-300"></div>
          </div>
        </div>

        {/* Summary Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
            <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
              Now You Know What Coaching Is
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto font-light">
              Understanding these distinctions helps you get the most out of your coaching experience. 
              Ready to explore how coaching can unlock your potential?
            </p>
            <button className="bg-blue-600 text-white font-semibold px-12 py-4 tracking-wide hover:bg-blue-700 transition-colors duration-300 text-sm uppercase rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Coaching Benefits
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
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

export default CoachingComparison;