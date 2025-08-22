
export function Jumbotron() {
  return (

    <section className="flex flex-col gap-2 items-start">
        <div className="profile-user h-full grid grid-cols-[1fr_auto] items-center gap-3">
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <img className="w-[100%] h-full object-cover" src="/foto.webp" alt="" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <h1 className="text-xl max-md:text-lg font-bold">Yonier Garcia Mosquera</h1>
            <p className="font-normal text-[17px] text-gray-800 max-sm:text-lg transition-all">Software Developer</p>
          </div>
        </div>
        <p className="font-normal text-[18px] leading-7 text-gray-800 max-sm:text-lg transition-all bg-white px-4 py-2 hover:shadow-md duration-300 rounded-2xl">Desarrollador de software full stack con experiencia en la creación de soluciones a medida que integran frontend, backend e inteligencia artificial.</p>
    </section>

  );
}