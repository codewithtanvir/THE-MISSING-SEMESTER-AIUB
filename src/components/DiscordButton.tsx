import React from 'react';
import { MessageSquare } from 'lucide-react';

interface DiscordButtonProps {
  variant?: 'primary' | 'light';
  size?: 'normal' | 'large';
}

export function DiscordButton({ variant = 'primary', size = 'normal' }: DiscordButtonProps) {
  const baseStyles = "inline-flex items-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    light: "bg-white hover:bg-gray-100 text-blue-900"
  };

  const sizes = {
    normal: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  return (
    <a
      href="https://discord.gg/XdCTkysj"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      <MessageSquare className="w-5 h-5 mr-2" />
      Join our Discord
    </a>
  );
}