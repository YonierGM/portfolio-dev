import { Link } from "react-router-dom";

export function About() {
  return (
    <section className="relative flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-600/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-lg animate-bounce" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[.5fr_1fr] gap-12 items-center">
        {/* Left side - Image and visual elements */}

          <div className="w-full flex justify-start max-sm:justify-center">
            <div className="relative h-100 w-90 max-sm:h-60 max-sm:w-60">
              <img
                src="/foto.webp"
                alt="Retrato profesional"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-serif font-bold text-sm shadow-lg">
                ¡Hola! 👋
              </div>
            </div>
          </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-4xl font-bold text-center min-sm:text-start lg:text-6xl">
              Sobre <span className="text-blue-500">Mí</span>
            </h1>
            <div className="w-24 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="leading-relaxed font-normal text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start flex flex-col gap-3">
            <p>
              Hola, soy <span className="text-blue-500 font-semibold">Yonier García Mosquera</span>, Ingeniero de
              Sistemas y Desarrollador de Software Full Stack. Me considero curioso, creativo y apasionado por aprender siempre algo nuevo.
            </p>
            <p>
              Fuera de la tecnología, disfruto de <span className="text-gray-900 font-semibold">mundo audiovisual</span>:
              la fotografía y el video son mi forma de contar historias y capturar momentos.
            </p>
            <p>
              También me apasiona el <span className="text-gray-900 font-semibold">fútbol</span>; aunque no seguí el camino profesional, vivo cada partido con la misma emoción de siempre.
            </p>
            <p>
              Busco{" "}
              <span className="text-gray-900 font-semibold">crecer constantemente</span>, disfrutar de
              los pequeños momentos y encontrar un equilibrio entre lo personal y lo profesional.
            </p>
          </div>

          <div className="max-sm:w-full w-1/2 grid grid-cols-2 gap-4">
            
              <a href="/cv/Yonier_Garcia_Mosquera_cv.pdf" download="Yonier_Garcia_Mosquera_cv.pdf" className="text-white text-center bg-black hover:opacity-85 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 w-full">
              CV
              </a>
       
            <Link className="cursor-pointer text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full" to="/contacto">
              Contactar
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-blue-500">∞</div>
              <div className="text-sm text-gray-500">Curiosidad</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-blue-500">📸</div>
              <div className="text-sm text-gray-500">Creatividad</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-blue-500">⚽</div>
              <div className="text-sm text-gray-500">Pasión</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
