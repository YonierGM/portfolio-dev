import { About } from "../components/AboutMe/About";
import { Footer } from "../components/Footer/Footer";
import { Redes } from "../components/Redes/Redes";
import { AboutExperience } from "../components/AboutMe/AboutExperience";
import { AboutContact } from "../components/AboutMe/AboutContact";
import { AboutSkills } from "../components/AboutMe/AboutSkills";

export function AboutMe() {
  return (
    <main className="flex flex-col gap-10 bg-background">
      <div className="px-8 max-sm:px-2">
        <About />
      </div>
      <div className="px-8 max-sm:px-2">
        <AboutSkills />
      </div>
      <div className="px-8 max-sm:px-2">
        <AboutExperience />
      </div>
      <Footer />
    </main>
  );
}