"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { artists } from "@/data/artists";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { InstagramEmbed } from "@/components/ui/InstagramEmbed";
import { ContactForm } from "@/components/ui/ContactForm";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { PressCarousel } from "@/components/ui/PressCarousel";

const email = "lunarmusicagencia@gmail.com";
const phone = "5544775254";
const contactName = "Fernando Luna";

const pressImages = [
  { src: "IMG_8706.JPG.jpeg", caption: "Los Vaguens en sesión de fotos" },
  { src: "IMG_0208.JPG.jpeg", caption: "Entrevista exclusiva en Reactor 105.7 FM" },
  { src: "IMG_8341.jpg", caption: "Los Vaguens visitan el foro de Telehit" },
  { src: "IMG_8761.jpg", caption: "Entrevista para Telehit Música" },
  { src: "IMG_9057.jpg", caption: "Grabando sesión en el podcast" },
];

const flyerImages = [
  "IMG_0224.JPG.jpeg",
  "IMG_0223.PNG",
  "IMG_0867.PNG",
  "IMG_0210.JPG.jpeg",
  "IMG_5436.PNG",
  "5F1B76C1-E410-4F7F-8242-30EA81B69223.PNG",
  "IMG_8058.JPG.jpeg",
  "IMG_2079.JPG.jpeg",
  "IMG_8106.JPG.jpeg",
  "IMG_8528.PNG",
  "IMG_9164.JPG.jpeg",
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  return (
    <div className="site-shell">
      <header className="site-header wrap">
        <a href="#" aria-label="Lunar Music, inicio">
          <Image
            src="/lunar_logo_nobg.png"
            alt="Lunar Music"
            width={140}
            height={60}
            priority
            className="brand-logo"
          />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#noticias">Noticias</a>
          <a href="#artistas">Artistas</a>
          <a href="#conciertos">Conciertos</a>
          <a href="#reciente">Reciente</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-contact" href="#contacto">
          Hablemos <ArrowUpRight size={18} strokeWidth={3} />
        </a>
      </header>

      <main id="contenido">
        
        {/* 1. NOTICIAS (CARRUSEL INICIO) */}
        <section id="noticias" className="wrap brutalist-section">
          <div className="section-top">
            <span className="eyebrow">01 / Noticias</span>
            <h1>Lo más <em>nuevo.</em></h1>
            <p>Desliza para ver la cobertura de prensa y noticias destacadas.</p>
          </div>
          <PressCarousel images={pressImages} />
        </section>

        {/* 2. ARTISTAS */}
        <section id="artistas" className="wrap brutalist-section">
          <div className="section-top" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">02 / Artistas</span>
              <h2>Nuestro <em>talento.</em></h2>
            </div>
            <div className="carousel-controls">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Anterior artista"
                style={{ width: 44, height: 44, border: "2px solid var(--primary)", background: "var(--background)", fontWeight: "900" }}
              >
                ←
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Siguiente artista"
                style={{ width: 44, height: 44, border: "2px solid var(--primary)", background: "var(--background)", fontWeight: "900" }}
              >
                →
              </button>
            </div>
          </div>
          <div className="embla" ref={emblaRef} style={{ background: "transparent", border: "none" }}>
            <div className="embla__container" style={{ gap: "24px" }}>
              {artists.map((artist) => (
                <div key={artist.id} className="embla__slide" style={{ flex: "0 0 320px", aspectRatio: "auto" }}>
                  <ArtistCard artist={artist} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CONCIERTOS (FLYERS) */}
        <section id="conciertos" className="wrap brutalist-section">
          <div className="section-top">
            <span className="eyebrow">03 / Conciertos</span>
            <h2>Shows <em>oficiales.</em></h2>
            <p>Flyers y carteles de presentaciones recientes (Siddhartha, Pal Norte, Reyno, La Barranca, Vaguens, etc).</p>
          </div>
          <ImageGallery images={flyerImages} />
        </section>

        {/* 4. RECIENTE (IG) */}
        <section id="reciente" className="wrap brutalist-section">
          <div className="section-top">
            <span className="eyebrow">04 / Reciente</span>
            <h2>En <em>tendencia.</em></h2>
            <p>Publicación destacada con más visibilidad.</p>
          </div>
          <div style={{ maxWidth: "500px", margin: "0 auto", border: "4px solid var(--primary)", background: "var(--background)" }}>
            <InstagramEmbed url="https://www.instagram.com/p/DdDCD2gjsZG/" />
          </div>
        </section>

        {/* 5. PRESENTACIONES Y FECHAS */}
        <section id="fechas" className="wrap brutalist-section">
          <div className="section-top">
            <span className="eyebrow">05 / Agenda</span>
            <h2>Fechas <em>próximas.</em></h2>
          </div>
          <div style={{ border: "2px solid var(--primary)", padding: "40px", textAlign: "center", background: "var(--accent)" }}>
            <h3 style={{ color: "var(--primary)" }}>Nuevas fechas por anunciar</h3>
            <p style={{ marginTop: "20px", color: "var(--primary)" }}>Mantente al pendiente de nuestras redes para conocer nuestros próximos shows.</p>
            <a
              href="https://www.instagram.com/lunarmusicmx"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "30px", padding: "15px 30px", background: "var(--primary)", color: "var(--primary-foreground)", fontWeight: "900", textTransform: "uppercase" }}
            >
              Ver Instagram <ArrowUpRight size={20} strokeWidth={3} />
            </a>
          </div>
        </section>

        {/* 6. CONTACTO & 7. NOSOTROS */}
        <section id="contacto" className="wrap brutalist-section">
          <span className="eyebrow">06 / Contacto</span>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <h2>
                Hagamos <em>ruido.</em>
              </h2>
              
              {/* NOSOTROS (Descripción) */}
              <div style={{ padding: "30px", border: "2px solid var(--primary)", background: "var(--secondary)" }}>
                <p style={{ fontSize: "16px", fontWeight: "700" }}>
                  Lunar Music es una agencia de representación artística, Booking & Management nacional e internacional.
                  Conectamos artistas con escenarios y acompañamos el talento en cada paso.
                </p>
              </div>

              {/* CONTACT INFO */}
              <div>
                <p style={{ marginBottom: '10px', textTransform: "uppercase", fontWeight: "900" }}>Información Directa</p>
                <div style={{ borderLeft: "4px solid var(--accent)", paddingLeft: "20px" }}>
                  <p style={{ fontSize: "24px", fontWeight: "900", marginBottom: "5px" }}>{contactName}</p>
                  <p style={{ fontSize: "18px", marginBottom: "5px" }}>{phone}</p>
                  <a href={`mailto:${email}`} style={{ fontSize: "18px", textDecoration: "underline", fontWeight: "700" }}>
                    {email}
                  </a>
                </div>
              </div>
            </div>
            
            <div style={{ width: '100%', padding: "30px", border: "4px solid var(--primary)", background: "var(--background)" }}>
              <h3 style={{ marginBottom: "20px" }}>Escríbenos</h3>
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer wrap">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', textAlign: 'center' }}>
          <Image
            src="/lunar_logo_nobg.png"
            alt="Lunar Music"
            width={140}
            height={60}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/lunarmusicmx" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Instagram <ArrowUpRight size={18} strokeWidth={3} />
            </a>
            <a href="#contacto">Contacto</a>
            <a href="#" style={{ color: "var(--accent)" }}>Volver arriba ↑</a>
          </div>

          <p style={{ fontSize: "14px", opacity: 0.7, textTransform: "uppercase" }}>
            © {new Date().getFullYear()} Lunar Music. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
