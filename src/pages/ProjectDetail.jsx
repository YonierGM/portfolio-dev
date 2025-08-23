import { useParams } from "react-router-dom";
import { projects } from "../data/data.json"

import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

export function ProjectDetail(){
    const { id } = useParams();
    const proyecto = projects.find((p) => p.id === parseInt(id));

    if (!proyecto) return <p>Proyecto no encontrado</p>;

    return(
        <>
        <section className="max-sm:px-2 min-sm:w-[80%] w-full">
            <div className="card border min-sm:w-1/2 m-auto border-gray-200 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
                <div className={`card-header ${proyecto.color} flex justify-between items-center`}>
                  <img className="object-cover" src={proyecto.image} alt="" />
                </div>
                <div className="card-body p-4">
                  <div className="title-proyect flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold mb-2 line-clamp-3">{proyecto.title}</h2>
                    <div className="demo flex justify-center items-center">
                        <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="p-2 flex justify-center items-center text-gray-950 hover:underline rounded-lg hover:bg-[#f3f5f8]">
                            < FiGithub className="inline-block" />
                        </a>
                        <span className={`mx-2 flex justify-center items-center ${proyecto.demo=="#" ? "hidden":""}`}>|</span>
                        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className={`p-2 flex justify-center items-center text-gray-950 hover:underline rounded-lg hover:bg-[#f3f5f8] ${proyecto.demo=="#" ? "hidden":""}`}>
                            < FiExternalLink className="inline-block" />
                        </a>

                    </div>
                  </div>
                  <div className="descripcion flex flex-col gap-1 mb-4">
                    <p className="font-normal text-[18px] text-gray-800 max-sm:text-lg transition-all">
                      {proyecto.description}
                    </p>
               
                  </div>
                <div className="technologies border-t-1 border-gray-100 py-2">
                    <ul className="flex flex-wrap gap-2 list-none">
                        {proyecto.technologies.map((tech, index) => (
                            <li key={index} className="font-light text-gray-800 text-sm px-2 m-0 leading-4 rounded-4xl bg-gray-100 border border-gray-100">{tech}</li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </section>    
        </>
    )
}