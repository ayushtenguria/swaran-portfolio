"use client"
import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Eye, 
  Brain, 
  Zap, 
  Scale,
  ChevronRight,
  Phone,
  Search,
  Users,
  BarChart3,
  CheckCircle
} from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface EngagementStep {
  id: number;
  title: string;
  description: string;
  details?: string[];
  icon: React.ReactNode;
  color: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Clarity of Goals & Vision",
    icon: <Target className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Personal and Professional Growth",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Enhanced self-awareness",
    icon: <Eye className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Improved decision making",
    icon: <Brain className="w-8 h-8" />
  },
  {
    id: 5,
    title: "Increased productivity and accountability",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 6,
    title: "Better work-life balance",
    icon: <Scale className="w-8 h-8" />
  }
];

const engagementSteps: EngagementStep[] = [
  {
    id: 1,
    title: "Discovery Call",
    description: "Understanding coaching value before commitment",
    details: [
      "Creating a platform for powerful outcomes",
      "Agreeing on process, steps, roles"
    ],
    icon: <Phone className="w-6 h-6" />,
    color: "blue"
  },
  {
    id: 2,
    title: "Identification of Areas of Development (AODs)",
    description: "Identify 3-4 AODs based on 360-degree feedback, stakeholder inputs, assessments, and self-motivation",
    icon: <Search className="w-6 h-6" />,
    color: "green"
  },
  {
    id: 3,
    title: "Coaching Sessions",
    description: "Identify the action steps towards the identified AODs and evaluation",
    icon: <Users className="w-6 h-6" />,
    color: "purple"
  },
  {
    id: 4,
    title: "Engagement Review",
    description: "Check in on the progress of the AODs",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "amber"
  },
  {
    id: 5,
    title: "End of Engagement",
    description: "Assessment of the coaching engagement outcomes and future course",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "emerald"
  }
];

const getStepColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      border: "border-blue-300",
      text: "text-blue-600",
      line: "bg-blue-300"
    },
    green: {
      bg: "bg-green-100", 
      border: "border-green-300",
      text: "text-green-600",
      line: "bg-green-300"
    },
    purple: {
      bg: "bg-purple-100",
      border: "border-purple-300", 
      text: "text-purple-600",
      line: "bg-purple-300"
    },
    amber: {
      bg: "bg-amber-100",
      border: "border-amber-300",
      text: "text-amber-600", 
      line: "bg-amber-300"
    },
    emerald: {
      bg: "bg-emerald-100",
      border: "border-emerald-300",
      text: "text-emerald-600",
      line: "bg-emerald-300"
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

const CoachingBenefitsAndEngagement: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            Coaching: Benefits &<br />
            <span className="font-normal"> Engagement Structure</span>
          </h1>
        </div>

        {/* Benefits Section */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Benefits of Professional Coaching
            </h2>
            <div className="w-24 h-0.5 bg-gray-900 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed font-light">
              Before we begin, here are the benefits of receiving coaching from a trained professional coach
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="group"
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-gray-50 rounded-full mb-6 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                      <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Structure Section */}
        <div>
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <ChevronRight className="text-gray-400 mr-3" size={24} />
              <h2 className="text-4xl font-light text-gray-900 tracking-wide">
                Structure of the Coaching Engagement
              </h2>
            </div>
            <div className="w-24 h-0.5 bg-gray-900 mb-8 ml-9"></div>
          </div>

          {/* Timeline/Stepper */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gray-200 hidden md:block"></div>
            
            {engagementSteps.map((step, index) => {
              const colors = getStepColorClasses(step.color);
              return (
                <div
                  key={step.id}
                  className="relative mb-12 last:mb-0"
                  style={{
                    animation: `slideInTimeline 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Step indicator */}
                  <div className="flex items-start">
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 ${colors.bg} ${colors.border} border-2 rounded-full flex items-center justify-center shadow-sm`}>
                        <div className={colors.text}>
                          {step.icon}
                        </div>
                      </div>
                      {/* Step number */}
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="ml-8 flex-grow pb-8">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        {step.details && (
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start">
                                <div className={`w-1.5 h-1.5 ${colors.line} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                <span className="text-sm text-gray-500">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
                Ready to Start Your Coaching Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
                Begin with a discovery call to understand how coaching can transform your professional and personal growth.
              </p>
              <button className="bg-blue-600 text-white font-semibold px-12 py-4 tracking-wide hover:bg-blue-700 transition-colors duration-300 text-sm uppercase rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Schedule Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideInTimeline {
          from {
            opacity: 0;
            transform: translateX(-50px);
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

export default CoachingBenefitsAndEngagement;