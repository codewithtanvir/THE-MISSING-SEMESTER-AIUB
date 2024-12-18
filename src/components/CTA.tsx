import React from 'react';
import { DiscordButton } from './DiscordButton';

export function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-[url('https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/392771544_307502038705587_8517964282342221824_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BZ4SsmTFCYQQ7kNvgGHtvvX&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=A2Eo8Itg0bTrrbz_KBguDrz&oh=00_AYDIgdy0pEiPpjwRk3opWMbU2dBIsp-6GvgOCc3zYrpIJg&oe=67692EDE')] opacity-80" />
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