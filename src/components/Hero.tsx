import React from 'react';
import { ChevronDown, Code2, Database, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Tech Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="p-3 bg-blue-500/20 rounded-lg backdrop-blur-sm">
              <Code2 size={32} className="text-blue-400" />
            </div>
            <div className="p-3 bg-green-500/20 rounded-lg backdrop-blur-sm">
              <Server size={32} className="text-green-400" />
            </div>
            <div className="p-3 bg-purple-500/20 rounded-lg backdrop-blur-sm">
              <Database size={32} className="text-purple-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Fullstack</span>
            <span className="block text-blue-400">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting seamless digital experiences with modern technologies. 
            Specialized in React, Next.js, Node.js, and Laravel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown size={32} className="text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;