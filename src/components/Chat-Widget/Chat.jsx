import React, { useEffect, useRef, useState } from "react";

export default function ChatWidget({ webhookUrl = "https://n8n-to6s.onrender.com/webhook/f07a3696-b524-4320-b59a-de970a97328e" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const cached = localStorage.getItem("chat_messages");
      return cached ? JSON.parse(cached) : [{ sender: "bot", text: "¡Hola! 👋 Soy Yonier García Mosquera. ¿En qué puedo ayudarte hoy?" }];
    } catch (e) {
      return [{ sender: "bot", text: "¡Hola! 👋 Soy Yonier García Mosquera. ¿En qué puedo ayudarte hoy?" }];
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    });
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const userMsg = { sender: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: localStorage.getItem("chat_session") || crypto.randomUUID(),
          action: "sendMessage",
          chatInput: text
        }),
      });

      const data = await res.json();
      let botText = "Lo siento, no pude obtener respuesta.";
      if (data) {
        if (typeof data.response === "string") botText = data.response;
        else if (Array.isArray(data.response) && data.response.length) botText = data.response.join(" ");
        else if (data.responses && data.responses.length) botText = data.responses.join(" ");
        else if (data.text) botText = data.text;
      }

      setMessages((m) => [...m, { sender: "bot", text: botText }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, { sender: "bot", text: "Error al conectar con el servidor. Intenta más tarde." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
          className="flex items-center space-x-3 px-4 py-2 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-400 text-white shadow-lg hover:scale-105 transform transition"
        >
          <span className="text-2xl">👋</span>
          <div className="text-left">
            <div className="text-sm font-semibold leading-none">¡Hola! Soy Yonier</div>
            <div className="text-xs opacity-90">¿En qué puedo ayudarte?</div>
          </div>
        </button>
      )}

      {open && (
        <div className="w-80 md:w-96 h-112 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">YG</div>
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
                <div className={`${m.sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"} max-w-xs md:max-w-md px-4 py-2 rounded-2xl`}>{m.text}</div>
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
                className="flex-1 resize-none px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 disabled:opacity-60"
              >
                Enviar
              </button>
            </div>
            <div className="text-xs text-gray-400 mt-2 text-center">Disponible: 24/7 · Respuesta estimada en minutos</div>
          </div>
        </div>
      )}
    </div>
  );
}
