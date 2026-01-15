"use client";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ExternalLink, Github } from "lucide-react";

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

type ProjectShowcaseProps = {
  title: string;
  description: string;
  images: ProjectImage[];
  messages: Message[];
  links: ProjectLink[];
  tags: string[];
};

export function ProjectShowcase({
  title,
  description,
  images,
  messages,
  links,
  tags,
}: ProjectShowcaseProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex flex-col space-y-1.5">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Image Carousel */}
        <div className="relative w-full aspect-video bg-muted/50">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="relative w-full aspect-video">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Chat Section */}
        <div className="border-t">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              <span>Client Communication</span>
            </div>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[80%] flex-col space-y-1 ${
                    message.sender === 'me' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.sender === 'me'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 p-4 border-t">
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <Button key={index} variant="outline" size="sm" asChild>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.type === 'github' ? (
                  <Github className="w-4 h-4 mr-2" />
                ) : (
                  <ExternalLink className="w-4 h-4 mr-2" />
                )}
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
