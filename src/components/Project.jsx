import { useState, useEffect, useRef } from "react";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Project({ id, title, description, technologies, category, github, demo, color, image}) {
  return (
    <>
        <section className="w-full">
            <div className="card border h-full border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
                <div className={`card-header ${color} flex justify-between items-center`}>
                  <img src={image} alt="" />
                </div>
                <div className="card-body p-4">
                  <div className="title-proyect flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold mb-2 line-clamp-1">{title}</h2>
                    <div className="demo flex justify-center items-center">
                        <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 flex justify-center items-center text-gray-950 hover:underline rounded-lg hover:bg-[#f3f5f8]">
                            < FiGithub className="inline-block" />
                        </a>
                        <span className={`mx-2 flex justify-center items-center ${demo=="#" ? "hidden":""}`}>|</span>
                        <a href={demo} target="_blank" rel="noopener noreferrer" className={`p-2 flex justify-center items-center text-gray-950 hover:underline rounded-lg hover:bg-[#f3f5f8] ${demo=="#" ? "hidden":""}`}>
                            < FiExternalLink className="inline-block" />
                        </a>

                    </div>
                  </div>
                  <div className="descripcion flex flex-col gap-1 mb-4 h-16">
                    <p className="font-normal text-[18px] text-gray-800 max-sm:text-lg transition-all line-clamp-2">
                      {description}
                    </p>

                  </div>
                <div className="technologies border-t-1 border-gray-100 py-2">
                    <Link to={`/proyectos/${id}`}
                      className="font-normal text-[16px] text-gray-800 max-sm:text-lg transition-all underline hover:text-gray-900"
                    >
                      Ver más
                    </Link>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}