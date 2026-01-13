'use client';

import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

const Quote = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium mb-4">Inspiration</p>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-6">
                <p>"The only way to do great work is to love what you do."</p>
              </blockquote>
              <div className="h-px w-20 bg-primary/20 my-6"></div>
              <div className="mt-6">
                <Badge variant="outline" className="py-1.5 px-3 rounded-lg">
                  <p className="text-xs sm:text-sm font-medium text-primary">Inspiration</p>
                </Badge>
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mt-4">
                  <p>"The only way to do great work is to love what you do."</p>
                </blockquote>
                <footer className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    SJ
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">Steve Jobs</p>
                    <p className="text-xs text-gray-500">Co-founder of Apple Inc.</p>
                  </div>
                </footer>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
