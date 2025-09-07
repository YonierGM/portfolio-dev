import React, { useEffect, useRef, useState } from "react";

export function useChat(webhookUrl) {
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

  // Hook para guardar mensajes en localStorage y hacer scroll
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  // Función para hacer scroll al final del chat
  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    });
  };

  // Función principal para enviar mensajes al webhook
  const sendMessage = async () => {
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
          chatInput: text,
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
  };

  // Handler para la tecla Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return {
    open,
    setOpen,
    messages,
    input,
    setInput,
    loading,
    messagesRef,
    sendMessage,
    handleKeyDown,
  };
}