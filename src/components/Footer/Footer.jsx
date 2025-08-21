import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { contact } from "../../data/data.json";
import { Link } from "react-router-dom";
library.add(fab, fas);

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Información de contacto */}
        <div>
          <h1 className="text-xl font-bold mb-4">Información de Contacto</h1>
          <div className="space-y-5">
            {contact.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="w-5 h-5 text-blue-500"
                    icon={[
                      item.icon.split(" ")[0],
                      item.icon.split(" ")[1].replace("fa-", ""),
                    ]}
                  />
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h1 className="text-xl font-bold mb-4">Enlaces</h1>
          <ul className="space-y-2 text-gray-600">
            <Link to="/inicio">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Home</li>
            </Link>
            
            <Link to="/about-me">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">About Me</li>
            </Link>
            
            <Link to="">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Blog</li>
            </Link>

            <Link to="/contacto">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h1 className="text-xl font-bold mb-4">Sígueme</h1>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/yoniergm/" target="blank" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
              <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-blue-500 text-lg" />
            </a>
            <a href="https://github.com/YonierGM" target="blank" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
              <FontAwesomeIcon icon={['fab', 'github']} className="text-gray-800 text-lg" />
            </a>
            <a href="https://www.youtube.com/@JhonnierGM" target="blank" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
              <FontAwesomeIcon icon={['fab', 'youtube']} className="text-red-500 text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        &copy; 2025 Yonier Garcia Mosquera. Todos los derechos reservados.
      </div>
    </footer>
  );
}
