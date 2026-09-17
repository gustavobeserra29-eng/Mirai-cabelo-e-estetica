import React, { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = (servico) => {
    const mensagem = encodeURIComponent(`Olá! Gostaria de agendar um horário para ${servico} no Mirai Cabelo & Estética.`);
    window.open(`https://wa.me/5511996901041?text=${mensagem}`, '_blank');
    setIsModalOpen(false);
  };

  const handleWhatsAppDireto = () => {
    const mensagem = encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais informações sobre os serviços e agendamentos.");
    window.open(`https://wa.me/5511996901041?text=${mensagem}`, '_blank');
  };

  return (
    <div className="bg-[#090706] text-zinc-100 min-h-screen font-sans selection:bg-amber-200/30 selection:text-amber-100 antialiased relative overflow-x-hidden">
      
      {/* BOTÕES FLUTUANTES (WHATSAPP & INSTAGRAM) NO CANTO ESQUERDO */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Botão WhatsApp */}
        <button
          onClick={handleWhatsAppDireto}
          aria-label="Contato WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/30 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </button>

        {/* Botão Instagram */}
        <a
          href="https://instagram.com/miraicabelo_estetica"
          target="_blank"
          rel="noreferrer"
          aria-label="Perfil Instagram"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-700 hover:opacity-90 border border-white/20 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(225,48,108,0.4)] transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>

      {/* LUZES DE AMBIENTAÇÃO SOFISTICADAS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-600/15 via-amber-900/5 to-transparent blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute top-[35%] left-[-10%] w-[600px] h-[600px] bg-rose-950/20 blur-[180px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-amber-950/20 blur-[180px] pointer-events-none z-0"></div>

      {/* MODAL DE ESCOLHA DE AGENDAMENTO (WHATSAPP) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-200/20 p-8 rounded-[32px] max-w-md w-full relative shadow-[0_0_50px_rgba(253,230,138,0.15)] space-y-6">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200 font-semibold">Atendimento Exclusivo</span>
              <h3 className="text-2xl font-light text-zinc-100">Escolha o Serviço</h3>
              <p className="text-xs text-zinc-400">Selecione abaixo para iniciar o agendamento direto pelo WhatsApp.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 pt-2">
              <button 
                onClick={() => handleWhatsApp('Cabelo & Visagismo')}
                className="group p-5 rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-amber-200/50 hover:bg-white/[0.1] text-left transition-all flex items-center justify-between shadow-lg"
              >
                <div>
                  <span className="block text-amber-200 font-medium text-base group-hover:translate-x-1 transition-transform">Cabelo & Visagismo</span>
                  <span className="text-xs text-zinc-400 font-light">Com Marisa Fukuyama & Camila Souza</span>
                </div>
                <span className="text-amber-200 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button 
                onClick={() => handleWhatsApp('Unhas & Nail Design')}
                className="group p-5 rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-amber-200/50 hover:bg-white/[0.1] text-left transition-all flex items-center justify-between shadow-lg"
              >
                <div>
                  <span className="block text-amber-200 font-medium text-base group-hover:translate-x-1 transition-transform">Unhas & Nail Design</span>
                  <span className="text-xs text-zinc-400 font-light">Com Juliana Mendes</span>
                </div>
                <span className="text-amber-200 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. HEADER MODERNO */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4">
        <nav className="max-w-6xl mx-auto bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-full px-5 sm:px-7 py-3.5 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-200 animate-pulse shadow-[0_0_12px_#fde047] flex-shrink-0"></span>
            <span className="text-amber-100 font-light tracking-[0.1em] text-xs sm:text-base uppercase flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 leading-tight">
              Mirai <span className="text-amber-200/90 font-light text-[9px] sm:text-sm tracking-wide lowercase">Cabelo & Estética</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-zinc-300 uppercase">
            <a href="#beneficios" className="hover:text-amber-200 transition-colors">Pilares</a>
            <a href="#sobre" className="hover:text-amber-200 transition-colors">Equipe</a>
            <a href="#galeria" className="hover:text-amber-200 transition-colors">Galeria</a>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="relative overflow-hidden group px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-amber-200/20 via-amber-400/30 to-amber-200/20 border border-amber-200/40 text-[11px] sm:text-xs font-medium tracking-wider uppercase text-amber-100 shadow-[0_0_25px_rgba(253,230,138,0.3)] hover:shadow-[0_0_35px_rgba(253,230,138,0.5)] transition-all duration-300 cursor-pointer flex-shrink-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative z-10">Agendar</span>
          </button>
        </nav>
      </header>

      <main className="relative z-10">
        {/* 2. HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs text-amber-200 bg-amber-200/5 border border-amber-200/20 rounded-full w-fit backdrop-blur-md shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_#fde047]"></span>
                Salão & Visagismo de Alta Precisão
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-zinc-100 leading-[1.15]">
                A arte de revelar a sua melhor versão com <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-400 font-normal">exclusividade</span>.
              </h1>
              
              <p className="text-base lg:text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
                No Mirai Cabelo & Estética, sob o olhar de Marisa Fukuyama, unimos saúde capilar avançada, visagismo e um ambiente acolhedor para transformar a sua relação com o espelho.
              </p>
              
              <div className="pt-2 flex items-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="relative overflow-hidden group inline-flex items-center gap-3 bg-gradient-to-r from-amber-200/30 via-amber-100/20 to-amber-200/30 border border-amber-200/50 backdrop-blur-xl px-8 py-4 rounded-2xl font-medium text-sm text-amber-100 shadow-[0_0_35px_rgba(253,230,138,0.3)] hover:shadow-[0_0_50px_rgba(253,230,138,0.5)] transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    Agendar Minha Experiência
                    <svg className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md p-4 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent backdrop-blur-2xl border border-white/15 rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/30 via-transparent to-amber-500/10 rounded-[36px] blur-2xl opacity-40 group-hover:opacity-85 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80" 
                  alt="Salão Premium" 
                  className="relative w-full h-[480px] object-cover rounded-[28px] grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. PILARES / BENEFÍCIOS */}
        <section id="beneficios" className="py-24 px-6 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-200 font-semibold">Pilares do Mirai</span>
              <h2 className="text-3xl lg:text-4xl font-light text-zinc-100">Excelência em cada detalhe</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mt-4"></div>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible scrollbar-none">
              {[
                { 
                  title: "Visagismo & Design", 
                  desc: "Diagnóstico completo da saúde dos fios e formato do rosto para criar um visual sob medida.",
                  icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.25m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.25m0 0A9.004 9.004 0 013 12c0-1.605.42-3.116 1.157-4.418"
                },
                { 
                  title: "Terapias Avançadas", 
                  desc: "Protocolos capilares de alta performance com insumos de referência mundial.",
                  icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                },
                { 
                  title: "Privacidade & Conforto", 
                  desc: "Atendimento exclusivo em um ambiente planejado para o seu relaxamento total.",
                  icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="snap-center min-w-[280px] sm:min-w-[320px] md:min-w-0 flex-1 relative p-8 rounded-[32px] bg-gradient-to-b from-zinc-900/80 via-zinc-900/40 to-zinc-950/80 backdrop-blur-2xl border border-white/10 hover:border-amber-200/50 transition-all duration-500 group overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-200/20 via-amber-400/10 to-transparent border border-amber-200/30 flex items-center justify-center mb-6 text-amber-200 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-medium text-zinc-100 mb-3 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOBRE O ESPAÇO & CONCEITO MIRAI (Com os Quadrados de Estatísticas Dentro) */}
        <section id="sobre" className="py-24 px-6 lg:px-16 relative">
          <div className="max-w-5xl mx-auto space-y-16">
            
            <div className="relative p-10 lg:p-14 rounded-[36px] bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-amber-950/20 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none"></div>
              
              <div className="text-center space-y-4 max-w-2xl mx-auto relative z-10 mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-amber-200 font-semibold">Excelência & Propósito</span>
                <h2 className="text-3xl lg:text-4xl font-light text-zinc-100">O Conceito Mirai</h2>
                <p className="text-zinc-300 text-base font-light leading-relaxed">
                  O nome <strong className="text-amber-200 font-normal">Mirai</strong> significa futuro. Nossa proposta vai além da estética tradicional: unimos sensibilidade artística, rigor técnico e foco absoluto na saúde capilar e bem-estar para elevar a sua autoconfiança de dentro para fora.
                </p>
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto pt-2"></div>
              </div>

              {/* Quadrados de Estatísticas Integrados */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <div className="p-5 rounded-[24px] bg-zinc-900/80 backdrop-blur-xl border border-amber-200/20 text-center shadow-lg group hover:border-amber-200/50 transition-all">
                  <span className="block text-2xl lg:text-3xl font-light text-amber-200 mb-1 group-hover:scale-105 transition-transform">+1.500</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Clientes Satisfeitas</span>
                </div>

                <div className="p-5 rounded-[24px] bg-zinc-900/80 backdrop-blur-xl border border-amber-200/20 text-center shadow-lg group hover:border-amber-200/50 transition-all">
                  <span className="block text-2xl lg:text-3xl font-light text-amber-200 mb-1 group-hover:scale-105 transition-transform">15+</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Anos de Experiência</span>
                </div>

                <div className="p-5 rounded-[24px] bg-zinc-900/80 backdrop-blur-xl border border-amber-200/20 text-center shadow-lg group hover:border-amber-200/50 transition-all">
                  <span className="block text-2xl lg:text-3xl font-light text-amber-200 mb-1 group-hover:scale-105 transition-transform">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Saúde Capilar</span>
                </div>

                <div className="p-5 rounded-[24px] bg-zinc-900/80 backdrop-blur-xl border border-amber-200/20 text-center shadow-lg group hover:border-amber-200/50 transition-all">
                  <span className="block text-2xl lg:text-3xl font-light text-amber-200 mb-1 group-hover:scale-105 transition-transform">5.0 ★</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Avaliação Média</span>
                </div>
              </div>
            </div>

            {/* Equipe de Especialistas */}
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-amber-200 font-semibold">Talentos Exclusivos</span>
                <h3 className="text-3xl font-light text-zinc-100">Nossa Equipe de Especialistas</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Marisa Fukuyama */}
                <div className="p-8 rounded-[32px] bg-gradient-to-b from-zinc-900/80 via-zinc-900/40 to-zinc-950/80 backdrop-blur-2xl border border-white/10 hover:border-amber-200/50 transition-all flex flex-col items-center text-center group shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-amber-200/20 via-zinc-800 to-zinc-900 overflow-hidden mb-6 border border-amber-200/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80" 
                      alt="Marisa Fukuyama" 
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-amber-200 bg-amber-200/10 border border-amber-200/20 font-medium">
                      Fundadora & Master Stylist
                    </span>
                    <h4 className="text-xl font-medium text-zinc-100">Marisa Fukuyama</h4>
                    <p className="text-zinc-300 text-xs leading-relaxed font-light">
                      Idealizadora do salão, é cabeleireira renomada com diversos cursos avançados e especializações em técnicas sofisticadas de corte e visagismo.
                    </p>
                  </div>
                </div>

                {/* Camila Souza */}
                <div className="p-8 rounded-[32px] bg-gradient-to-b from-zinc-900/80 via-zinc-900/40 to-zinc-950/80 backdrop-blur-2xl border border-white/10 hover:border-amber-200/50 transition-all flex flex-col items-center text-center group shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-amber-200/20 via-zinc-800 to-zinc-900 overflow-hidden mb-6 border border-amber-200/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80" 
                      alt="Camila Souza" 
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-amber-200 bg-amber-200/10 border border-amber-200/20 font-medium">
                      Estilista & Colorista
                    </span>
                    <h4 className="text-xl font-medium text-zinc-100">Camila Souza</h4>
                    <p className="text-zinc-300 text-xs leading-relaxed font-light">
                      Especialista em mechas, loiras iluminadas, colorimetria avançada e tratamentos de reconstrução profunda dos fios para preservar o brilho e a saúde capilar.
                    </p>
                  </div>
                </div>

                {/* Juliana Mendes */}
                <div className="p-8 rounded-[32px] bg-gradient-to-b from-zinc-900/80 via-zinc-900/40 to-zinc-950/80 backdrop-blur-2xl border border-white/10 hover:border-amber-200/50 transition-all flex flex-col items-center text-center group shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-amber-200/20 via-zinc-800 to-zinc-900 overflow-hidden mb-6 border border-amber-200/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80" 
                      alt="Juliana Mendes" 
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-amber-200 bg-amber-200/10 border border-amber-200/20 font-medium">
                      Nail Designer & Cuidados
                    </span>
                    <h4 className="text-xl font-medium text-zinc-100">Juliana Mendes</h4>
                    <p className="text-zinc-300 text-xs leading-relaxed font-light">
                      Dedicada à excelência na estética e saúde das unhas, oferecendo esmaltação em gel de alta durabilidade, blindagem, spa dos pés e nail arts exclusivas.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 5. GALERIA */}
        <section id="galeria" className="py-24 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-200 font-semibold">Portfólio</span>
              <h2 className="text-3xl lg:text-4xl font-light text-zinc-100">Conheça Nossos Trabalhos</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Visagismo", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" },
                { title: "Tratamentos", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80" },
                { title: "Ambiente", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80" },
                { title: "Nails & Estética", img: "https://images.unsplash.com/photo-1632345031435-8727f6c97d34?auto=format&fit=crop&w=600&q=80" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative h-80 rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
                >
                  <img 
                    src5={item.img} 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[15%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-90 flex items-end p-6">
                    <span className="text-xs uppercase tracking-widest font-semibold text-amber-100">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <footer id="agendar" className="bg-zinc-950 border-t border-white/10 py-16 px-8 text-center text-zinc-500 text-xs relative z-10">
        <div className="max-w-7xl mx-auto space-y-5">
          <div className="text-amber-200/90 font-light tracking-[0.3em] text-sm uppercase">
            Mirai Cabelo & Estética
          </div>
          
          <p className="text-zinc-400 font-light text-sm">
            Atendimento exclusivo sob agendamento. | WhatsApp: (11) 99690-1041
          </p>

          <div className="text-zinc-400">
            <a href="https://instagram.com/miraicabelo_estetica" target="_blank" rel="noreferrer" className="hover:text-amber-200 transition-colors">
              Instagram: @miraicabelo_estetica
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 text-[11px] text-zinc-600">
            © 2026 Mirai Cabelo e Estética. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  );
}