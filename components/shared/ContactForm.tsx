"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Integração futura com API/email
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ name: "", email: "", service: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">Serviço de interesse</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="">Selecione um serviço</option>
          <option value="landing-pages">Landing Pages</option>
          <option value="sites-institucionais">Sites Institucionais</option>
          <option value="softwares">Softwares</option>
          <option value="ia-automacoes">IA & Automações</option>
          <option value="videos">Produção de Vídeos</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Conte um pouco sobre seu projeto..."
          className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
