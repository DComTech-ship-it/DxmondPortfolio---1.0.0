import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"
import ProjectsShowcase from "./components/home/projects-showcase"
import Quote from "./components/home/quote"
import Skills from "./components/home/skills"
import ContactForm from "./components/home/contact"
import LiveLocation from "./components/home/live-location"
import TypingBlog from "./components/home/typing-blog"
import { ProjectShowcase } from "@/components/project-showcase"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <TypingBlog />
      <Divider/>
      <AboutMe/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <ProjectsShowcase />
      <Divider/>
      <Experience/>
      <Divider/>
      <Education/>
      <Divider/>
      <div className="container py-12">
        <ProjectShowcase 
          title="E-commerce Platform"
          description="A modern e-commerce platform with real-time inventory management and payment processing"
          images={[
            {
              id: 1,
              src: "/images/projects/ecommerce-1.jpg",
              alt: "E-commerce homepage"
            },
            {
              id: 2,
              src: "/images/projects/ecommerce-2.jpg",
              alt: "Product detail page"
            },
            {
              id: 3,
              src: "/images/projects/ecommerce-3.jpg",
              alt: "Shopping cart"
            }
          ]}
          messages={[
            {
              id: 1,
              sender: 'client',
              text: 'I really like the design mockups! How soon can we have a working prototype?',
              time: '10:30 AM'
            },
            {
              id: 2,
              sender: 'me',
              text: 'Thanks! I can have a basic prototype ready in about 2 weeks. What features would you like to prioritize?',
              time: '10:35 AM'
            },
            {
              id: 3,
              sender: 'client',
              text: 'The product catalog and search functionality are most important for our initial launch.',
              time: '10:40 AM'
            }
          ]}
          links={[
            {
              type: 'demo',
              label: 'Live Demo',
              url: 'https://ecommerce-demo.example.com'
            },
            {
              type: 'github',
              label: 'View Code',
              url: 'https://github.com/yourusername/ecommerce-platform'
            }
          ]}
          tags={['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe']}
        />
      </div>
      <Divider/>
      <ProjectOverview/>
      <Divider/>
      <Quote/>
      <Divider/>
      <Skills/>
      <Divider/>
      <ContactForm/>
      <Divider/>
      <LiveLocation/>
      <Divider/>
    </main>
  )
}

export default page