import { useChat } from "../../hooks/useChatN8n";
import DOMPurify from 'https://www.unpkg.com/dompurify@2.4.0/dist/purify.es.js';
const webhookUrlChat = import.meta.env.VITE_CHAT_WEBHOOK_URL;
export default function ChatWidget({ webhookUrl = webhookUrlChat }) {
  const { open, setOpen, messages, input, setInput, loading, messagesRef, sendMessage, handleKeyDown } = useChat(webhookUrl);

  // Función para convertir texto con formato a HTML seguro
  const formatMessageText = (text) => {
    // Reemplazar "**texto**" con "<strong>texto</strong>"
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Reemplazar los elementos de lista de Markdown (* texto) con <li>texto</li>
    // Esto se hace antes de manejar los saltos de línea para que se procese correctamente.
    formattedText = formattedText.replace(/(^|\n)\* (.*?)(?=\n|$)/g, '$1<li>$2</li>');
    
    // Reemplazar uno o más saltos de línea consecutivos con un solo <br>
    formattedText = formattedText.replace(/\n+/g, '<br>');

    // Sanitizar el HTML para evitar ataques XSS
    return DOMPurify.sanitize(formattedText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
          className="flex items-center space-x-3 px-4 py-2 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg hover:scale-105 transform transition"
        >
          <span className="text-2xl">👋</span>
          <div className="text-left">
            <div className="text-sm font-semibold leading-none">¡Hola! Soy Yonier</div>
            <div className="text-xs opacity-90">hablemos de tech</div>
          </div>
        </button>
      )}

      {open && (
        <div className="w-80 md:w-96 h-112 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">YG</div>
              <div>
                <div className="font-semibold">Yonier García Mosquera</div>
                <div className="text-xs text-gray-500">Desarrollador Full Stack & IA</div>
              </div>
            </div>
            <button
              aria-label="Cerrar chat"
              onClick={() => setOpen(false)}
              className="p-1 rounded hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          <div ref={messagesRef} className="flex-1 overflow-auto p-4 space-y-3 bg-gradient-to-b from-white to-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`${m.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"} max-w-xs md:max-w-md px-4 py-2 rounded-2xl`}
                  dangerouslySetInnerHTML={{ __html: formatMessageText(m.text) }}
                ></div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-2xl">Escribiendo...</div>
              </div>
            )}
          </div>

          <div className="px-3 py-3 border-t bg-white">
            <div className="flex items-center space-x-2">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escríbeme..."
                className="flex-1 resize-none px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 disabled:opacity-60"
              >
                Enviar
              </button>
            </div>
            <div className="text-xs text-gray-400 mt-2 text-center">Disponible: 24/7 · Respuestas al instante</div>
          </div>
        </div>
      )}
    </div>
  );
}



