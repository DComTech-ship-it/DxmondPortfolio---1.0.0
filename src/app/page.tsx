import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"
import Quote from "./components/home/quote"
import Skills from "./components/home/skills"
import ContactForm from "./components/home/contact"
import LiveLocation from "./components/home/live-location"
import TypingBlog from "./components/home/typing-blog"
import ForexSection from "./components/home/forex"

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
      <Experience/>
      <Divider/>
      <Education/>
      <Divider/>
      <ProjectOverview/>
      <Divider/>
      <Quote/>
      <Divider/>
      <Skills/>
      <Divider/>
      <ContactForm/>
      <Divider/>
      <ForexSection/>
      <Divider/>
      <LiveLocation/>
      <Divider/>
    </main>
  )
}

export default page