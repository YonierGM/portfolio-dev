import { Card } from "../Card/Card";
import { skillCategories } from "../../data/data.json"

export function AboutSkills() {
  return (
    <section className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center min-sm:text-start">Habilidades Técnicas</h2>
        <p className="font-normal text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start">
          Tecnologías y herramientas que domino para crear soluciones innovadoras
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            Icon={category.icon}
            title={category.title}
            skills={category.skills}
            color={category.color}
            base={category.base}
          />
        ))}
      </div>
    </section>
  );
}
