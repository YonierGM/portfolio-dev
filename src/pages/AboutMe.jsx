import { About } from "../components/AboutMe/About";
import { Footer } from "../components/Footer/Footer";
import { Redes } from "../components/Redes/Redes";
import { AboutExperience } from "../components/AboutMe/AboutExperience";
import { AboutContact } from "../components/AboutMe/AboutContact";
import { AboutSkills } from "../components/AboutMe/AboutSkills";

export function AboutMe() {
  return (
    <main className="flex flex-col gap-10 bg-background">
      <div className="px-8 max-sm:px-2">
        <About />
      </div>
      <div className="px-8 max-sm:px-2">
        <AboutSkills />
      </div>
      <div className="px-8 max-sm:px-2">
        <AboutExperience />
      </div>
      <Footer />
    </main>

    // {/* <section className="about-me px-8 max-sm:px-2 grid max-sm:grid-cols-1 grid-cols-2 gap-2 w-ful">
    //   <div className="perfil w-full flex flex-col justify-center gap-4 items-center bg-white rounded-2xl">
    //     <div className="foto max-sm:w-[150px] max-sm:h-[150px] w-[300px] h-[300px] flex justify-center rounded-full overflow-hidden">
    //       <img className="w-full h-full object-cover" src="/foto.webp" alt="" />
    //     </div>
    //     <div className="nombre flex flex-col gap-1">
    //       <h1 className="text-2xl max-md:text-lg font-bold text-center uppercase">Yonier Garcia Mosquera</h1>
    //       <h2 className="text-xl max-md:text-lg font-semibold text-center">Software Developer</h2>
    //     </div>
    //     <div className="hablame w-1/2">
    //       <Link className="w-full" to="/contacto">
    //       <button className="bg-black text-white w-full py-3 hover:bg-gray-900 transition-colors duration-300 cursor-pointer font-normal text-[18px] max-sm:text-lg">
    //          Contacto
    //       </button>
    //       </Link>
    //     </div>
    //     <div className="redes flex justify-center bg-white py-1 w-1/2 max-sm:h-10">
    //       <Redes />
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-10 bg-[#F0F2F5]">
    //     <div className="title flex flex-col gap-4">
    //       <h1 className="text-7xl text-start tracking-tight font-extrabold text-gray-900">Sobre <span className="text-indigo-500">mí</span></h1>
    //       <div className="hr bg-indigo-500 h-[4px] rounded-2xl w-[20%]"></div>
    //     </div>
    //     <div className="description flex flex-col gap-3 font-normal text-[18px] text-gray-800 max-sm:text-lg min-sm:text-start">
    //       <p>
    //         Hola, soy <span className="text-indigo-500 font-semibold">Yonier García Mosquera</span>, Ingeniero de Sistemas y Desarrollador de Software Full Stack.
    //         Me considero curioso, creativo y apasionado por aprender siempre algo nuevo.
    //       </p>

    //       <p>
    //         Fuera de la tecnología, disfruto del mundo audiovisual: la fotografía y el video son mi forma de contar historias y capturar momentos. 
    //       </p>

    //       <p>
    //         También me apasiona el fútbol; aunque no seguí el camino profesional, vivo cada partido con la misma emoción de siempre.
    //       </p>

    //       <p>
    //         Busco crecer constantemente, disfrutar de los pequeños momentos y mantener un equilibrio entre lo personal y lo profesional.
    //       </p>
    //     </div>

    //     <div className="actions w-1/2 grid grid-cols-[1fr_1fr] gap-2">
    //       <button type="button" class="w-full text-white bg-black hover:opacity-85 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
    //         <a href="/cv/Yonier_Garcia_Mosquera_cv.pdf" download="Yonier_Garcia_Mosquera_cv.pdf"
    //           className="w-full text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
    //         >
    //           CV
    //         </a>
    //       </button>
    //       <Link className="w-full" to="/contacto">
    //         <button className="w-full text-indigo-500 hover:text-white border border-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
    //           Contacto
    //         </button>
    //       </Link>
    //     </div>

    //   </div>
    // </section> */}
 
  );
}