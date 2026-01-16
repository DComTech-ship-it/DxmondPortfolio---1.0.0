'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type Message = {
  id: number;
  sender: 'client' | 'me';
  text: string;
  time: string;
  type?: 'text' | 'image' | 'link';
  content?: string;
};

type Testimonial = {
  id: number;
  clientName: string;
  projectName: string;
  clientImage: string;
  projectLink: string;
  messages: Message[];
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    projectName: "E-commerce Platform",
    clientImage: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff",
    projectLink: "#",
    messages: [
      {
        id: 1,
        sender: 'client',
        text: "Hi! I just wanted to say how thrilled we are with the e-commerce platform you built for us.",
        time: "10:30 AM",
        type: 'text'
      },
      {
        id: 2,
        type: 'image',
        sender: 'client',
        content: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        text: 'Screenshot of the new homepage',
        time: '10:31 AM'
      },
      {
        id: 3,
        sender: 'me',
        text: "Thank you, Sarah! I'm so glad to hear that. The new homepage looks fantastic with your products!",
        time: "10:32 AM",
        type: 'text'
      },
      {
        id: 4,
        type: 'link',
        sender: 'client',
        content: 'https://example-ecommerce.com',
        text: 'Check out our live store',
        time: '10:33 AM'
      },
      {
        id: 5,
        sender: 'client',
        text: "The performance optimizations are incredible! Our page load times have improved by 60%, and the checkout process is so smooth now.",
        time: "10:34 AM",
        type: 'text'
      },
      {
        id: 6,
        sender: 'client',
        text: "Our conversion rate has already increased by 25% since the launch last month.",
        time: "10:35 AM",
        type: 'text'
      }
    ]
  },
  {
    id: 2,
    clientName: "Michael Chen",
    projectName: "Portfolio Website",
    clientImage: "https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff",
    projectLink: "#",
    messages: [
      {
        id: 1,
        sender: 'client',
        text: "The portfolio website you created has been getting so many compliments!",
        time: "2:15 PM",
        type: 'text'
      },
      {
        id: 2,
        type: 'image',
        sender: 'client',
        content: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        text: 'Portfolio homepage',
        time: '2:16 PM'
      },
      {
        id: 3,
        sender: 'me',
        text: "That's wonderful to hear, Michael! The dark theme really makes your photography pop.",
        time: "2:17 PM",
        type: 'text'
      },
      {
        id: 4,
        type: 'link',
        sender: 'client',
        content: 'https://michaelchen-photography.com',
        text: 'View my portfolio',
        time: '2:18 PM'
      },
      {
        id: 5,
        sender: 'client',
        text: "The clean design and smooth animations really make our work stand out. We've already had three new client inquiries this week!",
        time: "2:19 PM",
        type: 'text'
      }
    ]
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Client Conversations</p>
              <Button asChild variant="outline" className="h-auto">
                <Link href="/testimonials" className="py-3 px-5">
                  View All
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="border-t border-primary/10">
            <Carousel 
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-6">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2">
                    <div className="h-full px-3.5 sm:px-6">
                      <div className="h-full flex flex-col p-3.5 sm:p-6 border border-primary/10">
                        <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-primary/10">
                          <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/20">
                            <Image 
                              src={testimonial.clientImage} 
                              alt={testimonial.clientName}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-base font-medium">{testimonial.clientName}</h3>
                            <p className="text-xs text-primary/70">{testimonial.projectName}</p>
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-4 overflow-y-auto max-h-64 pr-2 -mr-2">
                          {testimonial.messages.map((message) => (
                            <div 
                              key={message.id} 
                              className={`flex ${message.sender === 'client' ? 'justify-start' : 'justify-end'}`}
                            >
                              <div 
                                className={`max-w-[80%] rounded-lg overflow-hidden ${
                                  message.sender === 'client' 
                                    ? 'bg-primary/5 text-primary' 
                                    : 'bg-primary text-white'
                                }`}
                              >
                                {message.type === 'image' ? (
                                  <div className="p-0">
                                    <div className="relative w-full h-40 bg-gray-100">
                                      <Image
                                        src={message.content || ''}
                                        alt={message.text}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    <div className="p-3">
                                      <p className="text-sm">{message.text}</p>
                                      <p className={`text-xs mt-1 text-right ${
                                        message.sender === 'client' ? 'text-primary/60' : 'text-white/80'
                                      }`}>
                                        {message.time}
                                      </p>
                                    </div>
                                  </div>
                                ) : message.type === 'link' ? (
                                  <a 
                                    href={message.content} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`block p-3 hover:opacity-90 transition-opacity ${
                                      message.sender === 'client' 
                                        ? 'text-blue-600' 
                                        : 'text-blue-200'
                                    }`}
                                  >
                                    <div className="flex items-center">
                                      <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-4 w-4 mr-2 flex-shrink-0" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                      <p className="truncate">{message.text}</p>
                                    </div>
                                    <p className={`text-xs mt-1 text-right ${
                                      message.sender === 'client' ? 'text-primary/60' : 'text-white/80'
                                    }`}>
                                      {message.time}
                                    </p>
                                  </a>
                                ) : (
                                  <div className="p-3">
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 text-right ${
                                      message.sender === 'client' ? 'text-primary/60' : 'text-white/80'
                                    }`}>
                                      {message.time}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-primary/10">
                          <Link 
                            href={testimonial.projectLink} 
                            className="group inline-flex items-center text-sm font-medium text-primary"
                          >
                            View {testimonial.projectName} Project
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="ml-1 w-4 h-4" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="px-6 pb-6 flex justify-between">
                <CarouselPrevious className="static translate-x-0 translate-y-0 left-0 border-primary/20" />
                <CarouselNext className="static translate-x-0 translate-y-0 right-0 border-primary/20" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
