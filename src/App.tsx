import React from 'react';
import Particles from './components/Particles';
import CurrencyConverter from './components/CurrencyConverter';
import ConversionHistory from './components/ConversionHistory';
import TravelMode from './components/TravelMode';
import Header from './components/Header';
import MarketOverview from './components/MarketOverview';
import CurrencyNews from './components/CurrencyNews';
import TradingTools from './components/TradingTools';
import GlobalStats from './components/GlobalStats';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background Particles */}
      <Particles />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-playfair font-bold text-6xl md:text-8xl text-gold-gradient mb-6 leading-tight">
                Royal Exchange
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
                Professional currency conversion platform trusted by traders, businesses, and financial institutions worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-yellow-400/80">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Real-time rates
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  180+ currencies
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  Enterprise grade
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  99.9% uptime
                </span>
              </div>
            </div>
            
            {/* Global Stats */}
            <GlobalStats />
            
            {/* Currency Converter */}
            <CurrencyConverter />
          </div>
        </section>

        {/* Market Overview */}
        <section id="market-overview" className="py-16 bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <MarketOverview />
          </div>
        </section>

        {/* Trading Tools & Features */}
        <section id="trading-tools" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TradingTools />
                <div className="space-y-8">
                  <ConversionHistory />
                  <TravelMode />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Currency News */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <CurrencyNews />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-yellow-400/20 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-playfair font-bold text-2xl text-gold-gradient mb-4">Royal Exchange</h3>
              <p className="text-gray-400 font-inter text-sm leading-relaxed">
                The world's most trusted currency conversion platform, serving millions of users globally.
              </p>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-yellow-400 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#converter" className="hover:text-yellow-400 transition-colors">Currency Converter</a></li>
                <li><a href="#market-overview" className="hover:text-yellow-400 transition-colors">Markets</a></li>
                <li><a href="#market-overview" className="hover:text-yellow-400 transition-colors">Analytics</a></li>
                <li><a href="#trading-tools" className="hover:text-yellow-400 transition-colors">Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-yellow-400 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Status Page</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-yellow-400 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yellow-400/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-yellow-400 font-playfair text-center md:text-left">
              Designed with <span className="text-red-400">♥</span> by{' '}
              <a 
                href="https://gayathri5678.github.io/portfolio/" 
                className="text-yellow-400 hover:text-yellow-300 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gayathri
              </a>
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0 text-gray-400 text-sm">
              <span>© 2024 Royal Exchange</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;