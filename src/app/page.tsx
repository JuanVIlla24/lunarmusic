"use client";

import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { artists } from "@/data/artists";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { InstagramEmbed } from "@/components/ui/InstagramEmbed";
import { ContactForm } from "@/components/ui/ContactForm";

const email = "contacto@lunarmusic.com.mx";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <header className="site-header wrap">
        <a href="#" aria-label="Lunar Music, inicio">
          <Image
            src="/lunar_logo_nobg.png"
            alt="Lunar Music"
            width={116}
            height={64}
            priority
            className="brand-logo"
          />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#artistas">Artistas</a>
          <a href="#servicios">Agencia</a>
          <a href="#agenda">Agenda</a>
        </nav>
        <a className="header-contact" href="#contacto">
          Hablemos <ArrowUpRight size={16} />
        </a>
      </header>
      <main id="contenido">
        <section className="hero wrap">
          <div className="eyebrow">
            <span className="status-dot" /> Booking & Management · México
          </div>
          <div className="hero-heading">
            <h1>
              La música nos mueve.
              <br />
              <em>El talento nos conecta.</em>
            </h1>
            <div className="orbit-mark" aria-hidden="true">
              <span />
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              Conectamos artistas con escenarios.
              <br />
              Acompañamos el talento en cada paso.
            </p>
            <a className="text-link" href="#artistas">
              Conoce nuestros artistas <ArrowDown size={18} />
            </a>
          </div>
        </section>

        <section id="nosotros" className="about-section wrap" style={{ paddingBottom: '80px' }}>
          <div className="section-top">
            <div>
              <span className="eyebrow">01 / Nosotros</span>
              <h2>
                Pasión por <em>el sonido.</em>
              </h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '20px' }}>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--foreground)', fontWeight: 500 }}>
              Somos una agencia boutique de booking y management con sede en México. 
              Creemos firmemente en el talento genuino y en el poder de la música para crear momentos inolvidables. 
              Nuestro objetivo es ser el puente que une a los artistas con los escenarios que merecen.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--secondary-foreground)' }}>
              Trabajamos mano a mano con creadores, promotores y festivales para asegurar 
              que cada presentación sea única. En Lunar Music, no solo vendemos fechas; 
              construimos carreras y acompañamos la visión artística en cada paso del camino.
            </p>
          </div>
        </section>

        <section
          id="artistas"
          className="artists-section wrap"
          aria-labelledby="artists-title"
        >
          <div className="section-top">
            <div>
              <span className="eyebrow">02 / Nuestro roster</span>
              <h2 id="artists-title">
                Talento con <em>identidad.</em>
              </h2>
            </div>
            <div className="carousel-controls">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Artistas anteriores"
                aria-controls="artist-carousel"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Siguientes artistas"
                aria-controls="artist-carousel"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div
            className="carousel"
            ref={emblaRef}
            id="artist-carousel"
            role="region"
            aria-label="Carrusel de artistas"
          >
            <div className="carousel-track">
              {artists.length
                ? artists.map((artist) => (
                    <div className="artist-slide" key={artist.id}>
                      <ArtistCard artist={artist} />
                    </div>
                  ))
                : ["01", "02", "03"].map((number, index) => (
                    <div className="artist-slide" key={number}>
                      <article className="artist-card">
                        <div className={`artist-placeholder tone-${index}`}>
                          <span className="placeholder-top">
                            LUNAR MUSIC <span>{number}</span>
                          </span>
                          <div
                            className="placeholder-orbit"
                            aria-hidden="true"
                          />
                          <span className="placeholder-bottom">
                            Nuevas conexiones.
                            <br />
                            <em>Próximamente.</em>
                          </span>
                        </div>
                        <div className="artist-info">
                          <span className="eyebrow">Roster en preparación</span>
                          <h3>Lo que viene suena bien.</h3>
                          <p>Pronto conocerás a nuestros artistas.</p>
                        </div>
                      </article>
                    </div>
                  ))}
            </div>
          </div>
          <div className="roster-note">
            <span>Artistas, proyectos y nuevas posibilidades.</span>
            <a href="#contacto">
              Consulta nuestro roster <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section id="servicios" className="agency-section">
          <div className="wrap agency-grid">
            <div>
              <span className="eyebrow">03 / La agencia</span>
              <h2>
                Detrás de la música,
                <br />
                <em>junto al artista.</em>
              </h2>
              <p className="agency-intro">
                Cada proyecto tiene su propia voz. En Lunar Music creamos
                conexiones para que llegue más lejos.
              </p>
            </div>
            <div className="services">
              <article>
                <span className="service-number">01</span>
                <div>
                  <h3>Booking</h3>
                  <p>
                    Conectamos a promotores, venues y festivales con el talento
                    para su próximo evento. Hablemos de artistas, fechas y
                    disponibilidad.
                  </p>
                  <a className="text-link" href="#contacto">
                    Planeemos tu próximo evento <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
              <article>
                <span className="service-number">02</span>
                <div>
                  <h3>Management</h3>
                  <p>
                    Acompañamos el desarrollo artístico y la representación de
                    nuestros proyectos, construyendo una visión compartida para
                    cada etapa.
                  </p>
                  <a className="text-link" href="#contacto">
                    Conoce la agencia <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="agenda" className="agenda-section wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow">04 / En vivo</span>
              <h2>
                Lo más <em>reciente.</em>
              </h2>
            </div>
            <p>Sigue a Lunar Music en Instagram para enterarte de todo.</p>
          </div>
          
          <div className="instagram-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <InstagramEmbed url="https://www.instagram.com/p/DdDCD2gjsZG/" />
            <InstagramEmbed url="https://www.instagram.com/p/DcPBrJBFQKG/" />
            <InstagramEmbed url="https://www.instagram.com/p/Dc_ghVTDu_E/" />
          </div>

          <div className="agenda-empty" style={{ marginTop: '3rem' }}>
            <span className="agenda-star" aria-hidden="true">
              ✳
            </span>
            <div>
              <h3>Próximas fechas por anunciar.</h3>
              <p>Mantente al pendiente de nuestras redes para conocer nuestros próximos shows.</p>
            </div>
            <a
              className="text-link"
              href="https://www.instagram.com/lunarmusicmx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section id="contacto" className="contact-section wrap">
          <span className="eyebrow">05 / Hagamos que suceda</span>
          <div className="contact-heading">
            <h2>
              Tu próximo evento
              <br />
              <em>empieza aquí.</em>
            </h2>
            <a
              className="contact-arrow"
              href={`mailto:${email}`}
              aria-label="Escribir a Lunar Music"
            >
              <ArrowUpRight strokeWidth={1} />
            </a>
          </div>
          
          <ContactForm />
          
          <div className="contact-bottom" style={{ marginTop: '60px' }}>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
            <p>
              Booking, disponibilidad y nuevos proyectos.
              <br />
              Estamos a un mensaje de distancia.
            </p>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <Image
          src="/lunar_logo_nobg.png"
          alt="Lunar Music"
          width={90}
          height={50}
          className="brand-logo"
        />
        <span>© {new Date().getFullYear()} Lunar Music</span>
        <a
          href="https://www.instagram.com/lunarmusicmx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lunar Music en Instagram"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
          </svg>
        </a>
        <a href="#" className="back-top">
          Volver arriba ↑
        </a>
      </footer>
    </div>
  );
}
