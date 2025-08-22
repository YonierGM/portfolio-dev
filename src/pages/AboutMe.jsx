import { About } from "../components/AboutMe/About";
import { Footer } from "../components/Footer/Footer";
import { AboutExperience } from "../components/AboutMe/AboutExperience";
import { AboutSkills } from "../components/AboutMe/AboutSkills";

export function AboutMe() {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="px-8 max-sm:px-2 min-sm:w-[80%]">
        <About />
      </div>
      <div className="px-8 max-sm:px-2 min-sm:w-[80%]">
        <AboutSkills />
      </div>
      <div className="px-8 max-sm:px-2 min-sm:w-[80%]">
        <AboutExperience />
      </div>
      <Footer />
    </div>
  );
}