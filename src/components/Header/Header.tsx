import React from 'react';
import { Menu, Globe, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-dark-900/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold text-white">LingoPod</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">Features</a>
            <a href="#platforms" className="text-gray-300 hover:text-primary-400 transition-colors">Platforms</a>
            <a href="#testimonials" className="text-gray-300 hover:text-primary-400 transition-colors">Testimonials</a>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5">
              Download Now
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">Features</a>
              <a href="#platforms" className="text-gray-300 hover:text-primary-400 transition-colors">Platforms</a>
              <a href="#testimonials" className="text-gray-300 hover:text-primary-400 transition-colors">Testimonials</a>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5">
                Download Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;