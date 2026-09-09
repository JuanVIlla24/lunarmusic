"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { mockArtists } from "@/data/artists";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { Button } from "@/components/ui/Button";
import { Calendar, Mail } from "lucide-react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      
      {/* HEADER / NAV */}
      <header className="flex items-center justify-between px-8 py-10 md:px-16 max-w-[1600px] mx-auto w-full">
        <Image 
          src="/lunar_logo_nobg.png" 
          alt="Lunar Music Logo" 
          width={160} 
          height={60} 
          className="object-contain"
        />
        <nav className="hidden md:flex gap-12 text-xs font-semibold tracking-[0.2em] uppercase text-secondary-foreground">
          <a href="#artistas" className="hover:text-primary transition-colors">Roster</a>
          <a href="#agenda" className="hover:text-primary transition-colors">Agenda</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </nav>
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="px-8 py-24 md:py-40 md:px-16 max-w-[1600px] mx-auto w-full text-center md:text-left flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 space-y-10">
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-primary leading-[1.1]">
              Elevando el <br />
              <span className="font-bold">Talento Musical.</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground max-w-xl font-light leading-relaxed mx-auto md:mx-0">
              Agencia boutique de Booking & Management. Conectamos proyectos excepcionales con los mejores escenarios, promotores y festivales.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a href="#contacto">
                <Button size="lg" className="w-full sm:w-auto font-semibold uppercase tracking-widest text-xs px-10 h-14">Contratar Artistas</Button>
              </a>
              <a href="#artistas">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold uppercase tracking-widest text-xs px-10 h-14">Ver Catálogo</Button>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-[4/5] bg-secondary rounded-[2rem] relative overflow-hidden group">
             {/* Imagen hero placeholder - elegante y abstracta */}
             <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-50 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                <span className="font-light tracking-[0.3em] uppercase text-xs">LUNAR MUSIC AGENCY</span>
             </div>
          </div>
        </section>

        {/* ARTISTS CAROUSEL SECTION */}
        <section id="artistas" className="py-32 bg-white border-t border-zinc-100 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">Nuestro <span className="font-bold">Roster</span></h2>
              <p className="text-secondary-foreground font-light text-xl">Talento exclusivo disponible para booking.</p>
            </div>
          </div>
          
          <div className="pl-8 md:pl-16 max-w-[1800px] mx-auto">
            <div className="embla cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="embla__container flex gap-8">
                {mockArtists.map((artist) => (
                  <div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0" key={artist.id}>
                    <ArtistCard artist={artist} />
                  </div>
                ))}
                {/* Dummy cards for demonstration of carousel */}
                {[2,3,4].map((i) => (
                  <div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0" key={i}>
                    <ArtistCard artist={{...mockArtists[0], id: i.toString(), name: `Artista ${i}`}} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AGENDA SECTION */}
        <section id="agenda" className="py-32 px-8 md:px-16 max-w-[1200px] mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-16 text-center">Próximos <span className="font-bold">Shows</span></h2>
          <div className="max-w-4xl mx-auto divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {/* Ejemplo de un show */}
            <div className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:bg-zinc-50 transition-colors px-6 -mx-6 rounded-2xl">
              <div className="flex items-center gap-10">
                <div className="text-center w-20">
                  <span className="block text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">OCT</span>
                  <span className="block text-4xl font-light text-primary mt-1">14</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold tracking-tight">Artista Ejemplo</h4>
                  <p className="text-secondary-foreground font-light flex items-center gap-2 text-base mt-2">
                    Club de Prueba, CDMX
                  </p>
                </div>
              </div>
              <Button variant="outline" size="lg" className="hidden md:flex uppercase tracking-widest text-xs font-semibold px-8">Ver Detalles</Button>
            </div>
            <div className="py-16 text-center text-zinc-400 font-light tracking-wider uppercase text-sm">
              Más fechas por anunciarse pronto...
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contacto" className="py-32 bg-primary text-primary-foreground text-center px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter">¿Listo para el próximo <span className="font-bold">evento?</span></h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              Ponte en contacto directo con nosotros para consultar disponibilidad, cotizaciones y fechas abiertas.
            </p>
            <div className="flex justify-center gap-6 pt-8">
              <a href="mailto:contacto@lunarmusic.com.mx">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-200 flex items-center gap-3 h-16 px-10 uppercase tracking-widest text-xs font-bold">
                  <Mail size={20} /> Escríbenos un correo
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary text-zinc-500 py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Image 
            src="/lunar_logo_nobg.png" 
            alt="Lunar Music Logo" 
            width={100} 
            height={35} 
            className="opacity-50 invert brightness-0"
          />
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Lunar Music. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
