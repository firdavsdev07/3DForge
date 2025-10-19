"use client";

import React from "react";

// A simple CSS-based 3D cube animation
const Cube = () => (
  <div className="scene w-48 h-48">
    <div className="cube">
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face right"></div>
      <div className="face left"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left min-h-[calc(100vh-4rem)] gap-12 px-4 sm:px-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
          Showcase Your <span className="text-accent">3D</span> Creations
        </h1>
        <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-foreground/80">
          3DForge is a platform where users can upload their 3D models, add titles and descriptions, and share them with the world. A simple and elegant way to display your digital craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/explore"
            className="inline-block bg-accent text-background px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
          >
            Explore Models
          </a>
          <a
            href="/upload"
            className="inline-block bg-secondary text-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors"
          >
            Upload Yours
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Cube />
      </div>
    </section>
  );
};

export default Hero;
