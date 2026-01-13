"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const TYPING_SPEED = 50; // milliseconds per character
const ERASING_SPEED = 30; // milliseconds per character when erasing
const PAUSE_BETWEEN_WORDS = 2000; // milliseconds to pause between words

const blogTitles = [
  "the latest trends and innovations in modern web development and how they're shaping the future of digital experiences",
  "mastering React Hooks in 2025 with advanced patterns and best practices for building scalable applications",
  "the transformative impact of AI and machine learning on software engineering workflows and development processes",
  "building high-performance, SEO-friendly applications using Next.js 14 and the latest features of the App Router",
  "essential UI/UX design principles and best practices that every developer should know in 2025"
];

const TypingBlog = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = blogTitles[currentWordIndex];

    if (isTyping) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_BETWEEN_WORDS);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, ERASING_SPEED);
      } else {
        setCurrentWordIndex((currentWordIndex + 1) % blogTitles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentWordIndex, isTyping]);

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Latest Articles</p>
              <Button asChild variant={"outline"} className="h-auto">
                <Link href={"/blog"} className="py-3 px-5">
                  View All Articles
                </Link>
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-lg leading-relaxed text-gray-600 min-h-[120px] flex items-center justify-center">
                <span>
                  I'm currently writing about <span className="text-violet-700 font-medium">{displayText}</span>
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypingBlog;
