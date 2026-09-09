"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { mockArtists } from "@/data/artists";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { Button } from "@/components/ui/Button";
import { Instagram, Facebook, Calendar, Mail } from "lucide-react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      
      {/* HEADER / NAV */}
      <header className="flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto w-full">
        <Image 
          src="/lunar_logo_nobg.png" 
          alt="Lunar Music Logo" 
          width={140} 
          height={50} 
          className="object-contain"
        />
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-secondary-foreground">
          <a href="#artistas" className="hover:text-primary transition-colors">Roster</a>
          <a href="#agenda" className="hover:text-primary transition-colors">Agenda</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </nav>
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="px-6 py-20 md:py-32 md:px-12 max-w-7xl mx-auto w-full text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-primary">
              Elevando el <br />
              <span className="font-bold">Talento Musical.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground max-w-lg font-light leading-relaxed mx-auto md:mx-0">
              Agencia boutique de Booking & Management. Conectamos proyectos excepcionales con los mejores escenarios, promotores y festivales.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contacto">
                <Button size="lg" className="w-full sm:w-auto font-semibold">Contratar Artistas</Button>
              </a>
              <a href="#artistas">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Ver Catálogo</Button>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-[4/3] bg-secondary rounded-3xl relative overflow-hidden">
             {/* Imagen hero placeholder - elegante y abstracta */}
             <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 mix-blend-multiply" />
             <div className="absolute inset-0 flex items-center justify-center text-zinc-300">
                <span className="font-light tracking-widest uppercase text-sm">LUNAR MUSIC AGENCY</span>
             </div>
          </div>
        </section>

        {/* ARTISTS CAROUSEL SECTION */}
        <section id="artistas" className="py-20 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Nuestro Roster</h2>
              <p className="text-secondary-foreground font-light">Talento exclusivo disponible para booking.</p>
            </div>
          </div>
          
          <div className="pl-6 md:pl-12 max-w-[1400px] mx-auto">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                {mockArtists.map((artist) => (
                  <div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0" key={artist.id}>
                    <ArtistCard artist={artist} />
                  </div>
                ))}
                {/* Dummy cards for demonstration of carousel */}
                {[2,3,4].map((i) => (
                  <div className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0" key={i}>
                    <ArtistCard artist={{...mockArtists[0], id: i.toString(), name: `Artista ${i}`}} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AGENDA SECTION */}
        <section id="agenda" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Próximos Shows</h2>
          <div className="max-w-3xl mx-auto divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {/* Ejemplo de un show */}
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-zinc-50 transition-colors px-4 -mx-4 rounded-xl">
              <div className="flex items-center gap-6">
                <div className="text-center w-16">
                  <span className="block text-sm font-bold text-accent-foreground uppercase tracking-widest">OCT</span>
                  <span className="block text-3xl font-light text-primary">14</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Artista Ejemplo</h4>
                  <p className="text-secondary-foreground flex items-center gap-2 text-sm mt-1">
                    Club de Prueba, CDMX
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="hidden md:flex">Ver Detalles</Button>
            </div>
            <div className="py-8 text-center text-secondary-foreground font-light italic">
              Más fechas por anunciarse pronto...
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contacto" className="py-24 bg-primary text-primary-foreground text-center px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">¿Listo para el próximo evento?</h2>
            <p className="text-zinc-400 text-lg font-light">
              Ponte en contacto directo con nosotros para consultar disponibilidad, cotizaciones y fechas abiertas.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="mailto:contacto@lunarmusic.com.mx">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-200 flex items-center gap-2">
                  <Mail size={18} /> Escríbenos un correo
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
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Lunar Music. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
