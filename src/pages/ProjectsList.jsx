import { Project } from "../components/Project";
import { projects } from "../data/data.json"

export function ProjectList() {
  return (
    <>    
    <section className="projects-list flex flex-col gap-4">
        <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-bold text-center min-sm:text-start">Proyectos</h1>
            {/* <p className="font-light text-gray-500 max-sm:text-lg mx-auto">
            Algunos de los projectos que he desarrollado, aplicando mis conocimientos para dar vida a ideas y transformarlas en realidad.
            </p> */}
        </div>
        <div className="projects grid gap-2 justify-center 
  grid-cols-1        /* por defecto (<=640px) */
  sm:grid-cols-1     /* desde 640px hasta <768px */
  md:grid-cols-1     /* desde 768px en adelante */
  lg:grid-cols-2
  2xl:grid-cols-3
">
        {projects.map((project, projectIndex) => (
        <Project
            key={projectIndex}
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            category={project.category}
            github={project.github}
            demo={project.demo}
            color={project.color}
            image={project.image}   
        />
        ))}
        </div>
    </section>
    </>
  );
}