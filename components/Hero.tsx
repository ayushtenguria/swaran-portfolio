"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp,
  Users,
  Target,
  Globe,
  Calendar,
  Quote
} from 'lucide-react';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: "10+",
    label: "Years Experience",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    id: 2,
    value: "6",
    label: "Countries Worked",
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 3,
    value: "100+",
    label: "Leaders Coached",
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 4,
    value: "95%",
    label: "Success Rate",
    icon: <Target className="w-5 h-5" />
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Swaran helped me transition from IC to leadership with confidence and clarity.",
    author: "Sarah Chen",
    role: "VP Engineering"
  },
  {
    id: 2,
    text: "The coaching sessions unlocked my potential and transformed my leadership style.",
    author: "Michael Rodriguez",
    role: "Director of Product"
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-16 md:pb-20">
        
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start min-h-[calc(100vh-200px)]">
          
          {/* Left Column - Main Content */}
          <div className="space-y-6 lg:space-y-8 lg:pt-8">
            
            {/* Badge */}
            <div 
              className="inline-flex"
              style={{ animation: 'fadeInUp 0.6s ease-out both' }}
            >
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium border-blue-200">
                <Star className="w-4 h-4 mr-2" />
                Executive & Leadership Coach
              </Badge>
            </div>
            
            {/* Main Headline */}
            <div 
              className="space-y-4 lg:space-y-6"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                Unlock Your
                <span className="block font-normal text-blue-600">
                  Leadership Potential
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-xl">
                Transform your career with personalized coaching that blends strategy, 
                growth, and authentic leadership development.
              </p>
            </div>
            
            {/* Value Props */}
            <div 
              className="space-y-3"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              {[
                "Personalized 1-on-1 coaching sessions",
                "Global experience across 6 countries", 
                "Proven track record with 100+ leaders"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-medium border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Column - Stats & Testimonials */}
          <div className="space-y-6 lg:space-y-8 lg:pt-8">
            
            {/* Stats Grid */}
            <div 
              className="grid grid-cols-2 gap-4"
              style={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}
            >
              {stats.map((stat, index) => (
                <Card 
                  key={stat.id}
                  className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${0.5 + index * 0.1}s both` 
                  }}
                >
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="flex justify-center mb-2 lg:mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <div className="text-blue-600">
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Testimonials */}
            {/* <div 
              className="space-y-4"
              style={{ animation: 'fadeInRight 0.8s ease-out 0.7s both' }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className="bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm lg:text-base text-gray-700 italic mb-2 lg:mb-3 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <div className="text-sm lg:text-base font-semibold text-gray-900">
                            {testimonial.author}
                          </div>
                          <div className="text-xs lg:text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
            
            {/* Trust Indicators */}
            {/* <Card 
              className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white"
              style={{ animation: 'fadeInRight 0.8s ease-out 0.9s both' }}
            >
              <CardContent className="p-4 lg:p-6 text-center">
                <div className="flex items-center justify-center space-x-1 lg:space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 text-xs lg:text-sm">
                  "Trusted by executives at Fortune 500 companies"
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ animation: 'fadeIn 1s ease-out 1.2s both' }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
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
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;