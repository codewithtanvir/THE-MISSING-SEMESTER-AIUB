import React from 'react';
import { Users, BookOpen, Github } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Peer Learning",
      description: "Connect with fellow students and learn together in a collaborative environment"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Resource Sharing",
      description: "Access curated learning materials, notes, and study guides"
    },
    {
      icon: <Github className="w-8 h-8 text-blue-400" />,
      title: "Project Collaboration",
      description: "Work on real projects and build your portfolio with other students"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Why Join Our Community?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}