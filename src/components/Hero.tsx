import React from 'react';
import { GraduationCap, MessageSquare } from 'lucide-react';
import { DiscordButton } from './DiscordButton';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/428644924_384173124371811_3041547763176245112_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gwCeOQv4NbkQ7kNvgGqAwo7&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AdqyLhj7cFih8vgg5EjvxD_&oh=00_AYCv9H1u8T7EkqS2rgnrsdO6GFoq8AP2nw31M8Ul_hUzCw&oe=67691136"
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