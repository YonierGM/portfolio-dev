import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formContactSchema } from "../../../schemas/contact";
import { Redes } from "../../Redes/Redes";

import { useN8nWebhook } from "../../../hooks/useN8nWebhook";
export function FormContactMinimal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formContactSchema),
  });

  const { sendToWebhook, loading, error, success } = useN8nWebhook(
    "https://n8n-to6s.onrender.com/webhook/3b91754d-326b-4a8f-a40c-6486656b1341"
  );

  const onSubmit = async (data) => {
    try {
      await sendToWebhook(data);
      reset();
    } catch {
      // El error ya está manejado en el hook
    }
  };


  return (
    <section className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
  <div className="py-2 lg:py-4 px-4 mx-auto max-w-screen-md">
    <div className="titleForm flex justify-between items-center">

      <h2 className="mb-2 max-sm:text-3xl text-4xl tracking-tight font-extrabold text-center text-gray-900">Hablemos</h2>
      <Redes />
    </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

        <div>
            <input type="text" {...register("name")} id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Juan David Dominguez" required />
        {errors.name && (
<p className="text-red-500 text-sm">{errors.name.message}</p>
)}
        </div>

        <div>
            <input type="email" {...register("email")} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="juand@email.com" required />
        {errors.email && (
<p className="text-red-500 text-sm">{errors.email.message}</p>
)}
        </div>
        <div>
            <input type="text" {...register("subject")} id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="asunto" required />
        {errors.subject && (
<p className="text-red-500 text-sm">{errors.subject.message}</p>
)}
        </div>

        <div>
              <input type="text" {...register("phone")} id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="3153548963" required />
          {errors.phone && (
<p className="text-red-500 text-sm">{errors.phone.message}</p>
)}
          </div>

          <div className="sm:col-span-2">
              <textarea {...register("message")} id="message" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu mensaje aquí"></textarea>
                    {errors.message && (
<p className="text-red-500 text-sm">{errors.message.message}</p>
)}
          </div>
          <button type="submit" className="py-3 w-full px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 cursor-pointer">
            {loading ? "Enviando..." : "Enviar"}
          </button>
            
            {/* {success && <p className="text-green-500 text-sm mt-2">✅ Mensaje enviado con éxito</p>}
            {error && <p className="text-red-500 text-sm mt-2">❌ Error: {error}</p>} */}
      </form>
  </div>
</section>
  )
}