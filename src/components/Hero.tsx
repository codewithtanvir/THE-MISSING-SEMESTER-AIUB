import React from 'react';
import { GraduationCap, MessageSquare } from 'lucide-react';
import { DiscordButton } from './DiscordButton';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="\campus.jpg"
          alt="Campus"
          className="w-full h-full object-cover opacity-20 scale-105 transform hover:scale-110 transition-transform duration-[30s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-bounce">
          <GraduationCap className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
          THE MISSING SEMESTER
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
          Empowering AIUB Students Through Community-Driven Learning
        </p>
        <DiscordButton variant="primary" size="large" />
      </div>
    </header>
  );
}