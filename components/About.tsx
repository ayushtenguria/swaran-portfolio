"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  Globe, 
  Building, 
  Users, 
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

interface WhyHirePoint {
  id: number;
  text: string;
  icon: React.ReactNode;
}

const whyHirePoints: WhyHirePoint[] = [
  {
    id: 1,
    text: "If you're looking for an executive and leadership coach who brings both breadth and depth, I'm your person",
    icon: <Award className="w-5 h-5" />
  },
  {
    id: 2,
    text: "With over a decade of experience spanning global finance, social impact, startups, and policy, I understand the complex choices mid-career professionals face.",
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 3,
    text: "I've sat in the boardroom, built ventures, and led global teams—and now, I help ambitious individuals like you unlock clarity, confidence, and direction.",
    icon: <Building className="w-5 h-5" />
  },
  {
    id: 4,
    text: "My coaching style blends strategic insight with a deep commitment to personal growth, so you can lead with authenticity, purpose, and impact.",
    icon: <Heart className="w-5 h-5" />
  }
];

const AboutCoachSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Welcome Header
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
            Welcome
          </h1>
        </div> */}

        {/* About Section - Image + Bio */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
            
            {/* Left Column - Coach Image */}
            <div className="space-y-6">
              <Card 
                className="relative bg-gradient-to-br from-blue-100 to-blue-200 border-0 overflow-hidden aspect-[4/5] shadow-xl group hover:shadow-2xl transition-all duration-500"
                style={{
                  animation: `fadeInScale 0.8s ease-out both`
                }}
              >
                <CardContent className="p-0 h-full">
                  {/* Placeholder for coach image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <Users className="w-20 h-20 md:w-24 md:h-24 text-blue-600 mx-auto mb-4" />
                      <p className="text-blue-600 font-semibold text-lg">Coach Swaran</p>
                      <Badge variant="secondary" className="mt-2 bg-blue-200 text-blue-700">
                        Professional Photo
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full animate-pulse delay-300"></div>
                </CardContent>
              </Card>
              
              {/* Global Experience Card */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <Globe className="text-blue-600" size={24} />
                    <span>Global Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lived and worked across 6 countries: Bangalore, Copenhagen, Madrid, New Delhi, Shenzhen, and Singapore
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - About Content */}
            <div 
              className="space-y-6"
              style={{
                animation: `slideInRight 0.8s ease-out 0.2s both`
              }}
            >
              <div className="flex items-center mb-6">
                <ChevronRight className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">
                  About Coach Swaran
                </h2>
              </div>
              <div className="w-24 h-0.5 bg-blue-600 mb-8"></div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  My background is like a Rorschach inkblot. Since 2011, I've worked across diverse sectors that have shaped my unique perspective on leadership and growth.
                </p>
                
                <div className="space-y-4">
                  <Card className="hover:shadow-md transition-all duration-300 hover:border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base font-semibold text-gray-900">
                        Corporate Excellence
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        <strong>Consulting:</strong> Publicis Sapient<br />
                        <strong>Asset Management:</strong> BlackRock, Axon Partners Group, Saison Capital
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-all duration-300 hover:border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base font-semibold text-gray-900">
                        Social Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        <strong>Non-profits:</strong> UNLEASH, Initiative: Eau, Innoscale Foundation, StartingBloc, Trade Plus Impact<br />
                        <strong>Government & Multi-laterals:</strong> CGIAR
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-all duration-300 hover:border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base font-semibold text-gray-900">
                        Entrepreneurship
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600">
                        <strong>Tech Startups:</strong> Recur Club<br />
                        <strong>Board Positions:</strong> Ampere Vehicles, iYogi, Captronic Systems, NxtGen<br />
                        <strong>Investment:</strong> Founded Lykke Capital (10 portfolio companies)
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  I consider myself a global citizen—having traveled extensively throughout Asia, India, Europe, and North America. This international exposure has given me a unique lens on leadership challenges and opportunities across cultures and markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Hire Me Section */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="text-blue-600 mr-3" size={32} />
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">
                Why hire me as your Coach?
              </h2>
            </div>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Why Hire Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {whyHirePoints.map((point, index) => (
              <Card
                key={point.id}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-gray-200 hover:border-blue-200"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                        <div className="text-blue-600">
                          {point.icon}
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="mb-3">
                        <Badge variant="secondary" className="text-xs font-semibold bg-blue-100 text-blue-600">
                          {point.id.toString().padStart(2, '0')}
                        </Badge>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white shadow-2xl">
              <CardContent className="p-8 md:p-12 text-center">
                <TrendingUp className="mx-auto mb-6 text-blue-200 animate-bounce" size={48} />
                <h3 className="text-2xl md:text-3xl font-light mb-6 tracking-wide">
                  Ready to Unlock Your Leadership Potential?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto font-light text-base md:text-lg">
                  Let's explore how my diverse background and coaching expertise can help you navigate your unique challenges and achieve breakthrough results.
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm uppercase tracking-wide px-8 md:px-12"
                >
                  Start Your Coaching Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default AboutCoachSection;