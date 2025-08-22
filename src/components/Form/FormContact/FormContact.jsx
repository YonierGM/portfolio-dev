import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formContactSchema } from "../../../schemas/contact";

export function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formContactSchema),
  });
    const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    reset();
  };

  return (
    <>
    <div className="">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contáctame</h2>
      <p className="mb-4 lg:mb-6 text-center font-normal text-[18px] text-gray-800 sm:text-xl">¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar contigo.</p>
      
    </div>
    
    <section className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
  <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
            <input type="text" {...register("name")} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Juan David Dominguez" required />
        {errors.name && (
<p className="text-red-500 text-sm">{errors.name.message}</p>
)}
        </div>

        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo</label>
            <input type="email" {...register("email")} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="juand@email.com" required />
        {errors.email && (
<p className="text-red-500 text-sm">{errors.email.message}</p>
)}
        </div>

        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
        <div>
            <input type="text" {...register("subject")} id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="asunto" required />
        {errors.email && (
<p className="text-red-500 text-sm">{errors.subject.message}</p>
)}
        </div>

          <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Celular</label>
              <input type="text" {...register("phone")} id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="3153548963" required />
          {errors.phone && (
<p className="text-red-500 text-sm">{errors.phone.message}</p>
)}
          </div>

          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensaje</label>
              <textarea {...register("message")} id="message" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu mensaje aquí"></textarea>
                    {errors.message && (
<p className="text-red-500 text-sm">{errors.message.message}</p>
)}
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 w-full hover:bg-blue-700 transition-colors duration-300 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 cursor-pointer">Enviar</button>
      </form>
  </div>
</section>
    </>
  )
}