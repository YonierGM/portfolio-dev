import { FaAward, FaGraduationCap } from "react-icons/fa";
import { achievements } from "../../data/data.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

// Agrupar por año
const achievementsByYear = achievements.reduce((acc, achievement) => {
  if (!acc[achievement.year]) acc[achievement.year] = [];
  acc[achievement.year].push(achievement);
  return acc;
}, {});

export function Education() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl md:text-4xl font-bold min-sm:text-start">Formación</h2>
            <p className="font-normal text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start">
            Formación académica y certificaciones que reflejan mi compromiso continuo con el aprendizaje.
            </p>
      </div>

      <div className="relative pl-5">
        {/* Línea principal */}
        <div className="relative border-l-2 border-blue-400 h-full">
          {Object.keys(achievementsByYear)
            .sort((a, b) => a - b) // orden descendente por año
            .map((year) => (
              <div key={year} className="relative">
                {/* Círculo con el año justo sobre la línea */}
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 font-bold shadow-md text-[12px]">
                  {year}
                </span>

                {/* Logros de ese año */}
                <div className="flex flex-col gap-6 pl-2 pt-14 pb-2">
                  {achievementsByYear[year].map((achievement, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[40px_1fr] bg-white p-4 rounded-lg hover:shadow-md transition-shadow items-center gap-4"
                    >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <FontAwesomeIcon
                        className="w-5 h-5 text-blue-500"
                        icon={[achievement.icon.split(" ")[0], achievement.icon.split(" ")[1].replace("fa-", "")]}
                      />
                    </div>

                      <div>
                        <h4 className="text-base font-semibold text-gray-900">
                          {achievement.title}
                        </h4>
                        <p className="font-normal text-gray-500 text-md">{achievement.by}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
