"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  TrendingUp, 
  Calendar,
  ChevronDown
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Why Coaching', href: '#why-coaching' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Elevate
              </h1>
              <p className="text-xs md:text-sm text-gray-600 -mt-1">
                with Coach Swaran
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <a href="#executive-coaching" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      <div className="font-medium">Executive Coaching</div>
                      <div className="text-sm text-gray-500">1-on-1 leadership development</div>
                    </a>
                    <a href="#team-coaching" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      <div className="font-medium">Team Coaching</div>
                      <div className="text-sm text-gray-500">Group leadership sessions</div>
                    </a>
                    <a href="#career-transition" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      <div className="font-medium">Career Transition</div>
                      <div className="text-sm text-gray-500">Navigate career changes</div>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            
            {/* CTA Button */}
            <Button 
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Call
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md animate-in slide-in-from-top duration-300">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </a>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a href="#executive-coaching" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        Executive Coaching
                      </a>
                      <a href="#team-coaching" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        Team Coaching
                      </a>
                      <a href="#career-transition" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        Career Transition
                      </a>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Discovery Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;