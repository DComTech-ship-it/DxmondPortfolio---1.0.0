'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
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
  rating: number;
  project: {
    name: string;
    url: string;
    image: string;
    description: string;
  };
  conversation: Array<{
    speaker: 'me' | 'client';
    message: string;
    time: string;
  }>;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    project: {
      name: 'E-commerce Platform',
      url: '#',
      image: '/images/projects/ecommerce.jpg',
      description: 'A modern e-commerce platform built with Next.js and Shopify'
    },
    conversation: [
      { speaker: 'client', message: 'We needed a scalable e-commerce solution that could handle 10,000+ products and high traffic.', time: '10:30 AM' },
      { speaker: 'me', message: 'I proposed a modern stack with Next.js for the frontend, Shopify for the backend, and Vercel for hosting. This will give you great performance and scalability.', time: '10:32 AM' },
      { speaker: 'client', message: 'The results exceeded our expectations! Our site loads 3x faster and we\'ve seen a 40% increase in conversions.', time: '2 weeks later' },
    ]
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'DesignHub',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    project: {
      name: 'Design System',
      url: '#',
      image: '/images/projects/design-system.jpg',
      description: 'Comprehensive design system with React components and documentation'
    },
    conversation: [
      { speaker: 'client', message: 'Our design system was inconsistent across platforms and lacked proper documentation.', time: '3:15 PM' },
      { speaker: 'me', message: 'I\'ll create a comprehensive design system with React components, Storybook documentation, and design tokens for consistency.', time: '3:20 PM' },
      { speaker: 'client', message: 'The new design system is amazing! Our development speed increased by 40% and our UI is now consistent across all products.', time: '1 month later' },
    ]
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StartupX',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    project: {
      name: 'Mobile App',
      url: '#',
      image: '/images/projects/mobile-app.jpg',
      description: 'Cross-platform mobile app for iOS and Android'
    },
    conversation: [
      { speaker: 'client', message: 'We need an MVP for our mobile app in 3 months. It needs to work on both iOS and Android.', time: '9:00 AM' },
      { speaker: 'me', message: 'I recommend using React Native for cross-platform development. We can deliver both platforms with a single codebase and native performance.', time: '9:05 AM' },
      { speaker: 'client', message: 'We just hit 10,000 users in the first month! The app is smooth and users love the UI/UX.', time: '2 months later' },
    ]
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <MessageSquare className="w-4 h-4 mr-2 text-primary" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me on their projects.
          </p>
        </div>

        <div className="relative">
          <Carousel 
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="h-full flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden group">
                        <img
                          src={testimonial.project.image}
                          alt={testimonial.project.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex justify-between items-end">
                            <div>
                              <h3 className="text-white font-semibold text-lg">{testimonial.project.name}</h3>
                              <p className="text-gray-300 text-sm line-clamp-1">{testimonial.project.description}</p>
                            </div>
                            <a 
                              href={testimonial.project.url} 
                              className="text-white hover:text-primary transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${testimonial.project.name} project`}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                      

                      <CardContent className="flex-1 p-6 flex flex-col">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="relative">
                            <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-800 shadow">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback className="bg-gradient-to-r from-primary to-blue-600 text-white">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-900 p-1 rounded-full border-2 border-white dark:border-gray-800">
                              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {testimonial.role}, {testimonial.company}
                                </p>
                              </div>
                              <div className="flex items-center bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded">
                                <span className="text-sm font-medium text-primary">{testimonial.rating}.0</span>
                                <svg className="w-4 h-4 ml-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg flex-1 flex flex-col">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                            <span>Project Conversation</span>
                          </div>
                          

                          <div className="space-y-3 flex-1 overflow-y-auto max-h-48 pr-2 -mr-2">
                            {testimonial.conversation.map((item, index) => (
                              <div 
                                key={index} 
                                className={`flex ${item.speaker === 'me' ? 'justify-end' : 'justify-start'}`}
                              >
                                <div 
                                  className={`max-w-[90%] p-3 rounded-lg text-sm relative ${
                                    item.speaker === 'me' 
                                      ? 'bg-primary/10 dark:bg-primary/20 rounded-tr-none' 
                                      : 'bg-white dark:bg-gray-700 rounded-tl-none shadow-sm'
                                  }`}
                                >
                                  <div className="flex items-center mb-1">
                                    <span className={`text-xs font-medium ${
                                      item.speaker === 'me' ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                                    }`}>
                                      {item.speaker === 'me' ? 'Me' : testimonial.name.split(' ')[0]}
                                    </span>
                                    <span className="mx-2 text-gray-400">•</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                      {item.time}
                                    </span>
                                  </div>
                                  <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <a 
                            href={testimonial.project.url}
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project Details
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative left-0 top-0 -translate-y-0 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 h-10 w-10" />
              <CarouselNext className="relative right-0 top-0 -translate-y-0 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
