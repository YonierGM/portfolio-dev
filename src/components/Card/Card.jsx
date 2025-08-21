import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

export function Card({ title, Icon, color, skills }) {
  return (
    <div className={`bg-white p-4 rounded-xl hover:shadow-md transition-shadow duration-300`}>
      <div className="icon flex flex-col items-center gap-2">
        {/* Icono principal de la categoría */}
        <div className={`w-12 h-12 rounded-md ${color} flex items-center justify-center shadow-md text-white`}>
          {Icon && (
            <FontAwesomeIcon
              className="w-6 h-6"
              icon={[Icon.split(" ")[0], Icon.split(" ")[1].replace("fa-", "")]}
            />
          )}
        </div>

        {/* Título */}
        <h1 className="font-semibold tracking-tight text-lg">{title}</h1>

        {/* Lista de skills */}
        <ul className="space-y-1 mt-2 w-full flex flex-col gap-3">
          {skills.map((skill, index) => (
            <li key={index} className="text-sm flex justify-between items-center font-medium">
              <p className="font-normal text-gray-800 max-sm:text-sm px-2 m-0 leading-4 rounded-4xl bg-gray-100 border border-gray-100">
                {skill.name}
              </p>
              {skill.icon && (
                <FontAwesomeIcon
                  className={`w-[20px!important] h-[20px!important] ${skill.color}`}
                  icon={[skill.icon.split(" ")[0], skill.icon.split(" ")[1].replace("fa-", "")]}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
