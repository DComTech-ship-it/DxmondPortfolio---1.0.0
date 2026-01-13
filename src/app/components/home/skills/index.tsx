'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // Simulate API fetch - replace with actual API call if needed
        const mockSkills = [
          {
            name: 'PHP',
            category: 'Backend',
            proficiency: 85,
            icon: '/images/icon/php-icon.svg'
          },
          {
            name: 'React',
            category: 'Frontend',
            proficiency: 90,
            icon: '/images/icon/react-icon.svg'
          },
          {
            name: 'JavaScript',
            category: 'Language',
            proficiency: 95,
            icon: '/images/icon/javascript-icon.svg'
          },
          {
            name: 'Node.js',
            category: 'Runtime',
            proficiency: 87,
            icon: '/images/icon/nodejs-icon.svg'
          },
          {
            name: 'MongoDB',
            category: 'Database',
            proficiency: 85,
            icon: '/images/icon/mongodb-icon.svg'
          },
          {
            name: 'TypeScript',
            category: 'Language',
            proficiency: 89,
            icon: '/images/icon/typescript-icon.svg'
          }
        ];
        setSkills(mockSkills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Technical Skills</p>
              <Button asChild variant={"outline"} className="h-auto">
                <a href="#" className="py-3 px-5">
                  View All Skills
                </a>
              </Button>
            </div>
          </div>
          
          <div className="border-t border-primary/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4 sm:p-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 group hover:bg-primary/5 transition-colors duration-200 rounded"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-3">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-medium text-center text-gray-900 dark:text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {skill.category}
                  </p>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-500" 
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
