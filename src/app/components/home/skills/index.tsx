'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [softSkills, setSoftSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // Technical Skills
        const technicalSkills = [
          {
            name: 'PHP',
            category: 'Backend',
            proficiency: 85,
            icon: 'https://api.iconify.design/logos:php-alt.svg?width=34'
          },
          {
            name: 'React',
            category: 'Frontend',
            proficiency: 90,
            icon: 'https://api.iconify.design/logos:react.svg?width=34'
          },
          {
            name: 'JavaScript',
            category: 'Language',
            proficiency: 95,
            icon: 'https://api.iconify.design/logos:javascript.svg?width=34'
          },
          {
            name: 'Node.js',
            category: 'Runtime',
            proficiency: 87,
            icon: 'https://api.iconify.design/logos:nodejs-icon.svg?width=34'
          },
          {
            name: 'MongoDB',
            category: 'Database',
            proficiency: 85,
            icon: 'https://api.iconify.design/logos:mongodb-icon.svg?width=34'
          },
          {
            name: 'TypeScript',
            category: 'Language',
            proficiency: 89,
            icon: 'https://api.iconify.design/logos:typescript-icon.svg?width=34'
          }
        ];

        // Soft Skills
        const softSkillsData = [
          { name: 'Communication', level: 90 },
          { name: 'Teamwork', level: 92 },
          { name: 'Problem Solving', level: 94 },
          { name: 'Time Management', level: 88 },
          { name: 'Adaptability', level: 91 },
          { name: 'Leadership', level: 87 }
        ];

        setSkills(technicalSkills);
        setSoftSkills(softSkillsData);
      } catch (error) {
        console.error('Error loading skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const SkillItem = ({ name, category, proficiency, icon }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center p-4 group hover:bg-primary/5 transition-colors duration-200 rounded"
    >
      <div className="w-12 h-12 flex items-center justify-center mb-3">
        <img 
          src={icon} 
          alt={name}
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="text-base font-medium text-center text-gray-900 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        {category}
      </p>
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
        <div 
          className="bg-primary h-full rounded-full transition-all duration-500" 
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </motion.div>
  );

  const SoftSkillItem = ({ name, level }: { name: string; level: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full p-4 group hover:bg-primary/5 transition-colors duration-200 rounded"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-900 dark:text-white">{name}</span>
        <span className="text-xs text-primary font-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
        <div 
          className="bg-teal-500 h-full rounded-full transition-all duration-500" 
          style={{ width: `${level}%` }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills">
      <div className="container">
        {/* Technical Skills */}
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
                <SkillItem key={`tech-${index}`} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="border-x border-t border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Soft Skills</p>
            </div>
          </div>
          
          <div className="border-t border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6">
              {softSkills.map((skill, index) => (
                <SoftSkillItem key={`soft-${index}`} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
