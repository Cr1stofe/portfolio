import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-ocean-600 selection:text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
