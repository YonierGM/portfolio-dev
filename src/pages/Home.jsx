import { Education } from "../components/Education/Education";
import { Jumbotron } from "../components/Jumbotron";
import { ProjectList } from "./ProjectsList";
import { Footer } from "../components/Footer/Footer";
import { AboutSkills } from "../components/AboutMe/AboutSkills";
import { FormContactMinimal } from "../components/Form/FormContact/FormContactMinimal";

export function Home() {
  return (
    <section className="home px-8 max-sm:px-2 grid-areas grid items-center min-sm:items-start gap-4 min-sm:grid sm:grid-cols-[1fr_1fr] md:grid-cols-[.8fr_1fr] lg:grid-cols-[.5fr_1fr] xl:grid-cols-[.4fr_1fr]">
      
      {/* Sidebar fijo */}
      <div className="sidebar">
        <div className="jumbotron flex flex-col gap-2">
          <Jumbotron />
        </div>
        
        {/* Solo visible en desktop */}
        <div className="formContact hidden sm:block">
          <FormContactMinimal />
        </div>
      </div>

      {/* Contenido scrollable */}
      <div className="projects">
        <ProjectList />
      </div>
      <div className="skills">
        <AboutSkills />
      </div>
      <div className="education">
        <Education />
      </div>

      {/* Mueve FormContact aquí, fuera del sidebar */}
      <div className="formContact block sm:hidden">
        <FormContactMinimal />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}
