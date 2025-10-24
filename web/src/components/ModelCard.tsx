"use client";

import Image from "next/image";
import { User } from "lucide-react";

interface ModelCardProps {
  id: string;
  title: string;
  author: string;
  imageUrl?: string;
  views?: number;
}

const ModelCard = ({ title, author, imageUrl, views }: ModelCardProps) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden hover:bg-secondary/80 transition-colors cursor-pointer group">
      {/* Model Image */}
      <div className="aspect-video bg-background/50 relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">3D</span>
            </div>
          </div>
        )}
        {views && (
          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-foreground/80">
            {views} views
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-3 line-clamp-1">
          {title}
        </h3>

        {/* Author */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
            <User className="w-3 h-3 text-accent" />
          </div>
          <span className="text-sm text-foreground/80">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
