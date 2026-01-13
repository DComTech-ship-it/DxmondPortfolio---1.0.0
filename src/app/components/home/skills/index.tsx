'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector('#skills');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedSkills([...Array(skills.length).keys()]);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const skills = [
    {
      name: 'PHP',
      category: 'Backend',
      proficiency: 85,
      icon: 'https://api.iconify.design/logos:php-alt.svg?width=34',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      name: 'React',
      category: 'Frontend',
      proficiency: 90,
      icon: 'https://api.iconify.design/logos:react.svg?width=34',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      name: 'JavaScript',
      category: 'Language',
      proficiency: 95,
      icon: 'https://api.iconify.design/logos:javascript.svg?width=34',
      color: 'from-yellow-400 to-amber-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      proficiency: 90,
      icon: 'https://api.iconify.design/logos:tailwindcss-icon.svg?width=34',
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-teal-500/10'
    },
    {
      name: 'Node.js',
      category: 'Runtime',
      proficiency: 87,
      icon: 'https://api.iconify.design/logos:nodejs-icon.svg?width=34',
      color: 'from-green-500 to-lime-500',
      bgColor: 'bg-green-500/10'
    },
    {
      name: 'TypeScript',
      category: 'Language',
      proficiency: 89,
      icon: 'https://api.iconify.design/logos:typescript-icon.svg?width=34',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      name: 'Next.js',
      category: 'Framework',
      proficiency: 88,
      icon: 'https://api.iconify.design/logos:nextjs-icon.svg?width=34',
      color: 'from-gray-800 to-gray-600 dark:from-white dark:to-gray-300',
      bgColor: 'bg-gray-800/10 dark:bg-white/10'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      proficiency: 85,
      icon: 'https://api.iconify.design/logos:mongodb-icon.svg?width=34',
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-600/10'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-teal-500">My Expertise</span>
          <h2 className="mt-2 text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-400 sm:text-5xl">
            Technical Skills
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Technologies I've been working with recently
          </p>
        </motion.div>

        <motion.div 
          className="grid place-items-center my-8 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="w-full h-full"
            >
              <div 
                className={`relative h-full p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2.5 rounded-lg ${skill.bgColor} mr-4 transition-transform duration-300 group-hover:scale-110`}>
                    <img 
                      alt={skill.name} 
                      width={32} 
                      height={32}
                      className="w-8 h-8" 
                      src={skill.icon} 
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Proficiency</span>
                    <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-400">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.2 + (index * 0.1),
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur transition duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
