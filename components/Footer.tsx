import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  BriefcaseBusiness, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';

const CoachFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BriefcaseBusiness size={48} className="text-blue-500" />
              <h3 className="text-2xl font-bold">Elevate</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Accelerate your career growth with personalized coaching, strategic guidance, and proven methodologies. Your professional success is our priority.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin size={16} />
              <span>Business District, Professional Center</span>
            </div>
          </div>

          {/* Column 2: Navigation Menu */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors py-1">
                Career Coaching
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors py-1">
                About Me
              </a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors py-1">
                Success Stories
              </a>
              <a href="#resume" className="block text-gray-300 hover:text-white transition-colors py-1">
                Resume Review
              </a>
              <a href="#interview" className="block text-gray-300 hover:text-white transition-colors py-1">
                Interview Prep
              </a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors py-1">
                Pricing
              </a>
            </nav>
          </div>

          {/* Column 3: Contact & Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-400">Get In Touch</h4>
            
            {/* Contact Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
              <Phone className="mr-2" size={18} />
              Book Career Strategy Session
            </Button>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>coach@Elevate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="space-y-3">
              <h5 className="text-sm font-medium text-gray-400">Connect With Me</h5>
              <div className="flex space-x-4">
                <a 
                  href="#facebook" 
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="#instagram" 
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#twitter" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="#youtube" 
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 CareerCraft Pro. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CoachFooter;