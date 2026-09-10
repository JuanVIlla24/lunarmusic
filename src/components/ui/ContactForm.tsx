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

  const inputStyle = {
    width: "100%",
    padding: "15px",
    border: "2px solid var(--primary)",
    background: "var(--background)",
    outline: "none",
    fontSize: "16px",
    fontWeight: "600",
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "900",
    textTransform: "uppercase" as const,
    letterSpacing: "-0.02em",
  };

  if (status === "success") {
    return (
      <div className="contact-success" style={{ padding: "40px", border: "4px solid var(--primary)", background: "var(--accent)" }}>
        <h3 style={{ marginBottom: "10px", color: "var(--primary)" }}>¡Mensaje enviado!</h3>
        <p style={{ fontWeight: "700", color: "var(--primary)" }}>Nos pondremos en contacto contigo lo más pronto posible.</p>
        <button 
          onClick={() => setStatus("idle")}
          style={{ 
            marginTop: "20px", 
            padding: "12px 24px", 
            border: "2px solid var(--primary)", 
            background: "var(--primary)", 
            color: "var(--primary-foreground)",
            cursor: "pointer", 
            fontWeight: "900", 
            textTransform: "uppercase", 
            fontSize: "14px" 
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="name" style={labelStyle}>Nombre</label>
          <input required type="text" id="name" name="name" style={inputStyle} placeholder="Tu nombre" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="email" style={labelStyle}>Correo</label>
          <input required type="email" id="email" name="email" style={inputStyle} placeholder="correo@ejemplo.com" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
        <label htmlFor="subject" style={labelStyle}>Asunto</label>
        <input required type="text" id="subject" name="subject" style={inputStyle} placeholder="Booking, Management..." />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
        <label htmlFor="message" style={labelStyle}>Mensaje</label>
        <textarea required id="message" name="message" rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder="Cuéntanos sobre tu evento..."></textarea>
      </div>
      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="header-contact"
        style={{ 
          alignSelf: "flex-start",
          border: "2px solid var(--primary)",
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
          marginTop: "10px"
        }}
      >
        {status === "submitting" ? "Enviando..." : "Enviar"} <ArrowUpRight size={18} strokeWidth={3} />
      </button>
    </form>
  );
}
