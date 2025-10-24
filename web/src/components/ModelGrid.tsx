"use client";

import ModelCard from "./ModelCard";

// Mock data - keyinchalik API'dan keladi
const mockModels = [
  {
    id: "1",
    title: "Futuristic Robot",
    author: "Alex Chen",
    views: 1250,
  },
  {
    id: "2",
    title: "Medieval Castle",
    author: "Sarah Johnson",
    views: 890,
  },
  {
    id: "3",
    title: "Sports Car",
    author: "Mike Rodriguez",
    views: 2100,
  },
  {
    id: "4",
    title: "Fantasy Sword",
    author: "Emma Wilson",
    views: 670,
  },
  {
    id: "5",
    title: "Modern House",
    author: "David Kim",
    views: 1450,
  },
  {
    id: "6",
    title: "Dragon Sculpture",
    author: "Lisa Zhang",
    views: 980,
  },
];

const ModelGrid = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
          Featured <span className="text-accent">Models</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Discover amazing 3D creations from our community of talented artists
          and designers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockModels.map((model) => (
          <ModelCard
            key={model.id}
            id={model.id}
            title={model.title}
            author={model.author}
            views={model.views}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-secondary text-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors">
          Load More Models
        </button>
      </div>
    </section>
  );
};

export default ModelGrid;
