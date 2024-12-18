import React from 'react';
import { DiscordButton } from './DiscordButton';

export function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80')] opacity-10" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-12 font-light">
          Join our vibrant community and unlock your full potential
        </p>
        <DiscordButton variant="light" size="large" />
      </div>
    </section>
  );
}