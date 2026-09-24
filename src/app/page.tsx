import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
