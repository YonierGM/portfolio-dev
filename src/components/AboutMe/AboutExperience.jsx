const experiences = [
  {
    title: "Software Developer",
    company: "Independiente",
    period: "Febrero, 2025 - Presente",
    description:
      "Automatizaciones, Desarrollo de aplicaciones y soluciones web complejas usando React, Node.js, Python, integrando IA en soluciones a medida.",
    funciones: "• Automatizaciones con n8n\n• Desarrollo de Apis\n• Desarrollo Frontend\n• Administración de bases de datos\n• Desarrollo Frontend",
    technologies: ["n8n", "React", "Node.js", "Python", "PostgreSQL", "LLM", "Git", "GitHub"],
    highlight: true,
  },

  {
    title: "Full Stack & AI Developer",
    company: "Brücke Data Intelligence",
    period: "Jun. 2024 - Ene. 2025",
    description:
      "Desarrollé interfaces de usuario responsivas y accesibles para más de 30 clientes. Especializado en optimización de rendimiento y experiencia de usuario.",
    funciones: "• Implementación de soluciones RAG con LLM\n• Desarrollo de Asistentes virtuales \n• Procesamiento de datos y consultas\n• Desarrollo Frontend\n• Desarrollo Backend",
    technologies: ["Angular", "watsonx assistant", "node.js", "Python", "MongoDB", "PostgreSQL", "Git", "GitHub"],
    highlight: false,
  },
  {
    title: "Practicas Laborales",
    company: "Mi Megáfono",
    period: "Abr. 2024 - May. 2024",
    description:
      "Mantenimiento de codigo Python(Djanjo) añadiendo features bajo solicitud.",
    funciones: "• Revisión de codigo backend\n• Desarrollo de features \n• Desarrollo colaborativo\n• Análisis\n• Desarrollo frontend",
    technologies: ["Python", "Django", "PostgreSQL", "Git", "GitLab"],
    highlight: false,
  },
]

export function AboutExperience() {
  return (
    <section className="">
      <div className="mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-center min-sm:text-start">
            Mi <span className="text-accent">Experiencia</span>
          </h2>
          <p className="font-normal text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start">
            Un recorrido profesional enfocado en crear soluciones innovadoras y liderar equipos hacia el éxito
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-2 mb-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 grid grid-rows-[100px_1fr_100px] gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                exp.highlight ? "border-blue-500 border-2 rounded-2xl bg-white" : "border-white bg-white rounded-2xl"
              }`}
            >
              <div className="">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-extrabold text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start">{exp.title}</div>
                  {exp.highlight && <div className="bg-blue-400 text-white p-1 rounded-md text-accent-foreground text-xs">Actual</div>}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-normal text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start">{exp.description}</p>
                <p className="font-normal text-[16px] text-gray-800 max-sm:text-lg min-sm:text-start whitespace-pre-line">{exp.funciones}</p>
              </div>
                <div className="flex justify-start items-start flex-wrap gap-1">
                  {exp.technologies.map((tech) => (
                    <div key={tech} className="font-normal text-gray-800 max-sm:text-sm px-2 m-0 leading-4 rounded-4xl bg-gray-100 border border-gray-100">
                      {tech}
                    </div>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
