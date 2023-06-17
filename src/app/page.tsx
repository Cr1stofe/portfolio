import { AboutMe } from "@/components/pages/Home/AboutMe";
import { Contact } from "@/components/pages/Home/Contact";
import { LandingPage } from "@/components/pages/Home/LandingPage";
import { Projects } from "@/components/pages/Home/Projects";


export default function Home() {
  return (
    <div>
      <LandingPage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}
