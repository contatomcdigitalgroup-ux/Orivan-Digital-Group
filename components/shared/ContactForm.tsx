"use client";

import { useState } from "react";

const inputClass =
  "px-4 py-2.5 bg-[#161B22] border border-white/[0.08] rounded-lg text-sm text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#4ADE80]/50 focus:ring-1 focus:ring-[#4ADE80]/30 transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ name: "", email: "", service: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-[#D1D5DB]">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-[#D1D5DB]">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className={inputClass}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-[#D1D5DB]">Serviço de interesse</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" className="bg-[#161B22]">Selecione um serviço</option>
          <option value="landing-pages" className="bg-[#161B22]">Landing Pages</option>
          <option value="sites-institucionais" className="bg-[#161B22]">Sites Institucionais</option>
          <option value="softwares" className="bg-[#161B22]">Softwares</option>
          <option value="ia-automacoes" className="bg-[#161B22]">IA & Automações</option>
          <option value="videos" className="bg-[#161B22]">Produção de Vídeos</option>
          <option value="outro" className="bg-[#161B22]">Outro</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[#D1D5DB]">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Conte um pouco sobre seu projeto..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-[#4ADE80] text-[#0B0F14] text-sm font-medium rounded-lg hover:bg-[#66FF99] transition-colors"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
