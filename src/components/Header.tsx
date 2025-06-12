import React, { useState } from 'react';
import { Menu, X, Globe, TrendingUp, BarChart3, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Converter', icon: <Globe size={18} />, href: '#converter' },
    { name: 'Markets', icon: <TrendingUp size={18} />, href: '#market-overview' },
    { name: 'Analytics', icon: <BarChart3 size={18} />, href: '#market-overview' },
    { name: 'Tools', icon: <Settings size={18} />, href: '#trading-tools' },
  ];

  return (
    <header className="relative z-20 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Globe className="text-black" size={24} />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-gold-gradient">Royal Exchange</h1>
              <p className="text-xs text-gray-400 font-inter">Professional Trading Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors font-inter text-sm"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/* Removed Get API Access button as per request */}
          {/* <div className="hidden md:flex items-center gap-4">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-lg font-inter font-semibold text-sm hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105">
              Get API Access
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yellow-400 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-yellow-400/20">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors font-inter py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              {/* Removed Get API Access button as per request */}
              {/* <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-inter font-semibold text-sm mt-4">
                Get API Access
              </button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;