"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MessageSquare, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

type Message = {
  id: number;
  sender: 'me' | 'client';
  text: string;
  time: string;
};

type ProjectImage = {
  id: number;
  src: string;
  alt: string;
};

type ProjectLink = {
  type: 'demo' | 'github' | 'other';
  label: string;
  url: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  images: ProjectImage[];
  messages: Message[];
  links: ProjectLink[];
  tags: string[];
};

export function ProjectCard({
  title,
  description,
  images = [],
  messages = [],
  links = [],
  tags = [],
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="border border-primary/10 rounded-lg overflow-hidden">
      {/* Project Header */}
      <div className="p-4 border-b border-primary/10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-muted rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Image Carousel */}
      <div className="relative aspect-video bg-muted/50">
        {images.length > 0 ? (
          <>
            <div className="relative w-full h-full">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover"
              />
            </div>
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No images available
          </div>
        )}
      </div>

      {/* Client Chat */}
      <div className="border-t border-primary/10">
        <div className="p-3 border-b border-primary/10 flex items-center gap-2 text-sm font-medium">
          <MessageSquare className="w-4 h-4" />
          <span>Client Communication</span>
        </div>
        <div className="h-48 overflow-y-auto p-4 space-y-3">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.sender === 'me'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 block mt-0.5">
                    {message.time}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              No messages available
            </p>
          )}
        </div>
      </div>

      {/* Project Links */}
      <div className="p-3 border-t border-primary/10 flex flex-wrap gap-2">
        {links.map((link, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
          >
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              {link.type === 'github' ? (
                <Github className="w-4 h-4" />
              ) : (
                <ExternalLink className="w-4 h-4" />
              )}
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
