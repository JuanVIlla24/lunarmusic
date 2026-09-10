"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="contact-success" style={{ padding: "40px 0", borderTop: "1px solid var(--line)", marginTop: "30px" }}>
        <h3>¡Mensaje enviado!</h3>
        <p style={{ marginTop: "10px" }}>Nos pondremos en contacto contigo lo más pronto posible.</p>
        <button 
          onClick={() => setStatus("idle")}
          style={{ marginTop: "20px", padding: "10px 20px", border: "1px solid var(--foreground)", borderRadius: "999px", background: "transparent", cursor: "pointer", fontWeight: "600", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.05em" }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", maxWidth: "600px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="name" style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Nombre</label>
          <input required type="text" id="name" name="name" style={{ padding: "12px", border: "1px solid var(--line)", background: "transparent", outline: "none", fontSize: "14px" }} placeholder="Tu nombre" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="email" style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Correo electrónico</label>
          <input required type="email" id="email" name="email" style={{ padding: "12px", border: "1px solid var(--line)", background: "transparent", outline: "none", fontSize: "14px" }} placeholder="tucorreo@ejemplo.com" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="subject" style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Asunto</label>
        <input required type="text" id="subject" name="subject" style={{ padding: "12px", border: "1px solid var(--line)", background: "transparent", outline: "none", fontSize: "14px" }} placeholder="Booking, Management, Duda..." />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="message" style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Mensaje</label>
        <textarea required id="message" name="message" rows={4} style={{ padding: "12px", border: "1px solid var(--line)", background: "transparent", outline: "none", fontSize: "14px", resize: "vertical" }} placeholder="Cuéntanos sobre tu evento o proyecto..."></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === "submitting"}
        style={{ 
          justifySelf: "start",
          display: "flex", 
          alignItems: "center", 
          gap: "12px", 
          background: "var(--foreground)", 
          color: "var(--background)",
          padding: "12px 28px",
          borderRadius: "999px",
          border: "none",
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontSize: "12px",
          marginTop: "10px",
          opacity: status === "submitting" ? 0.7 : 1
        }}
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"} <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
