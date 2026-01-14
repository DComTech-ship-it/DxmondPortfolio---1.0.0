'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  project: {
    name: string;
    url: string;
    image: string;
  };
  conversation: Array<{
    speaker: 'me' | 'client';
    message: string;
  }>;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    project: {
      name: 'E-commerce Platform',
      url: '#',
      image: '/images/projects/ecommerce.jpg'
    },
    conversation: [
      { speaker: 'client', message: 'We needed a scalable e-commerce solution...' },
      { speaker: 'me', message: 'I proposed a modern stack with Next.js and Shopify...' },
      { speaker: 'client', message: 'The results exceeded our expectations!' },
    ]
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'DesignHub',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    project: {
      name: 'Design System',
      url: '#',
      image: '/images/projects/design-system.jpg'
    },
    conversation: [
      { speaker: 'client', message: 'Our design system was inconsistent...' },
      { speaker: 'me', message: 'I created a comprehensive design system with documentation...' },
      { speaker: 'client', message: 'Our development speed increased by 40%!' },
    ]
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StartupX',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    project: {
      name: 'Mobile App',
      url: '#',
      image: '/images/projects/mobile-app.jpg'
    },
    conversation: [
      { speaker: 'client', message: 'We needed an MVP for our mobile app...' },
      { speaker: 'me', message: 'I delivered a cross-platform solution with React Native...' },
      { speaker: 'client', message: 'We got our first 10,000 users in a month!' },
    ]
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
            <Quote className="w-4 h-4 mr-2 text-primary" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What My Clients Say
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here's what some of my clients have to say about working with me on their projects.
          </p>
        </div>

        <div className="relative">
          <Carousel 
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={testimonial.project.image}
                          alt={testimonial.project.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <a 
                            href={testimonial.project.url} 
                            className="text-white font-medium hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {testimonial.project.name} →
                          </a>
                        </div>
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {testimonial.conversation.map((item, index) => (
                            <div 
                              key={index} 
                              className={`flex ${item.speaker === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div 
                                className={`max-w-[80%] p-3 rounded-lg ${
                                  item.speaker === 'me' 
                                    ? 'bg-primary/10 dark:bg-primary/20' 
                                    : 'bg-gray-100 dark:bg-gray-800'
                                }`}
                              >
                                <p className="text-sm">{item.message}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative left-0 top-0 -translate-y-0" />
              <CarouselNext className="relative right-0 top-0 -translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
