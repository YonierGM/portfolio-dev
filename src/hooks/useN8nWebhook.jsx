import { useState } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function useN8nWebhook(webhookUrl) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendToWebhook = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    Loading.pulse();

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        Loading.remove();
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      setSuccess(true);
      Loading.remove();
      Notify.success('Mensaje enviado con éxito');
      return await response.json();
    } catch (err) {
      setError(err.message);
      Loading.remove();
      Notify.failure('Error al enviar el mensaje');
      throw err;
    } finally {
      setLoading(false);
      Loading.remove();
    }
  };

  return { sendToWebhook, loading, error, success };
}
